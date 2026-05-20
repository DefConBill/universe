/**
 * Cloudflare Pages Function — POST /api/quote
 *
 * Receives the Request-a-Quote form submission, applies routing, then forwards
 * to Web3Forms. Theresa is always the primary recipient (set on the Web3Forms
 * access key). This function only decides the CC:
 *
 *   - Service / Watercare & accessories  → CC kattia@
 *   - Everything else (sales lead)        → CC michelle@ / ally@ in STRICT
 *                                            alternation via a KV counter
 *
 * KV binding required: QUOTE_KV  (set in Pages project → Settings → Functions →
 * KV namespace bindings). If the binding is missing, it gracefully falls back to
 * a random 50/50 split so a lead is never lost.
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  // Parse the submission. The site's JS sends JSON; tolerate form-encoded too.
  let data;
  try {
    data = await request.json();
  } catch (e) {
    try {
      const fd = await request.formData();
      data = Object.fromEntries(fd.entries());
    } catch (e2) {
      return json({ success: false, message: 'Could not read submission.' }, 400);
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

  // Forward everything to Web3Forms, overriding the CC with our routed value.
  const payload = Object.assign({}, data, { ccemail: ccemail, routed_to: routedTo });
  delete payload.redirect; // not needed on the JSON path; avoids any redirect-style response

  try {
    const w3res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'User-Agent': 'HotTubUniverse-PagesFunction/1.0',
      },
      body: JSON.stringify(payload),
    });

    // Read as text first so a non-JSON response (e.g. an HTML page) doesn't throw.
    const text = await w3res.text();
    try {
      const w3json = JSON.parse(text);
      return json(w3json, w3res.status);
    } catch (parseErr) {
      return json(
        {
          success: false,
          message: 'Mail service returned an unexpected response.',
          debug: text.slice(0, 400),
          upstreamStatus: w3res.status,
        },
        502
      );
    }
  } catch (e) {
    return json(
      {
        success: false,
        message: 'Could not reach the mail service. Please try again or call 902-576-5115.',
        debug: String((e && e.message) || e),
      },
      502
    );
  }
}

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status: status || 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
