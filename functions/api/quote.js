/**
 * Cloudflare Pages Function — POST /api/quote
 *
 * Decides who the quote should be CC'd to and returns that decision to the
 * browser. The browser then submits the form to Web3Forms directly.
 *
 * Why not forward to Web3Forms from here? Web3Forms' API runs on Cloudflare
 * Workers, and Cloudflare blocks a Pages Function from making a server-side
 * subrequest to another Cloudflare Worker (HTTP 403, "error code: 1106"). So
 * this function owns ONLY the routing decision; the actual mail submission is
 * a normal browser → Web3Forms request, which Cloudflare allows.
 *
 * Routing:
 *   - Service / Watercare & accessories  → CC kattia@
 *   - Everything else (sales lead)        → CC michelle@ / ally@ in STRICT
 *                                            alternation via a KV counter
 *
 * KV binding required: QUOTE_KV  (set in Pages project → Settings → Functions →
 * KV namespace bindings). If the binding is missing, it gracefully falls back to
 * a random 50/50 split so alternation still happens.
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  // Parse the submission. The site's JS sends JSON; tolerate form-encoded too.
  let data = {};
  try {
    data = await request.json();
  } catch (e) {
    try {
      const fd = await request.formData();
      data = Object.fromEntries(fd.entries());
    } catch (e2) {
      // No body / unreadable — fall through with empty data (treated as sales).
      data = {};
    }
  }

  const interest = (data.interest || '').toString();
  const isService =
    interest === 'Service or repair' || interest === 'Watercare & accessories';

  let ccemail;
  let routedTo;

  if (isService) {
    ccemail = 'kattia@hottubuniverse.ca';
    routedTo = 'Service — Kattia';
  } else {
    // Sales lead — strict round-robin between Michelle and Ally.
    let count = 0;
    if (env && env.QUOTE_KV) {
      try {
        const stored = await env.QUOTE_KV.get('sales_counter');
        count = stored ? (parseInt(stored, 10) || 0) : 0;
        await env.QUOTE_KV.put('sales_counter', String(count + 1));
      } catch (e) {
        count = Math.random() < 0.5 ? 0 : 1; // KV hiccup — don't lose the lead
      }
    } else {
      count = Math.random() < 0.5 ? 0 : 1; // KV not bound yet — graceful fallback
    }

    if (count % 2 === 0) {
      ccemail = 'michelle@hottubuniverse.ca';
      routedTo = 'Sales — Michelle';
    } else {
      ccemail = 'ally@hottubuniverse.ca';
      routedTo = 'Sales — Ally';
    }
  }

  // Return the routing decision. The browser injects this ccemail and submits
  // the full form to Web3Forms itself.
  return json({ success: true, ccemail: ccemail, routed_to: routedTo });
}

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status: status || 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
