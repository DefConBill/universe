# Hot Tub Universe — Astro site

Marketing site for [Hot Tub Universe](https://hottubuniverse.ca), Halifax's locally owned hot tub and swim spa dealer. Built with [Astro 5](https://astro.build) and deployed on [Cloudflare Pages](https://pages.cloudflare.com).

## Status

- Homepage scaffolded and building (`npm run build` succeeds; output at `dist/`).
- Other pages (hot tub series detail, swim spa detail, service, about, contact, areas-we-serve city pages) are routed in nav/footer but not yet built — they 404 until added.

## Tech

- **Framework:** Astro 5, static output (no SSR)
- **Styles:** Vanilla CSS with CSS custom properties (see `src/styles/global.css`)
- **Typography:** Manrope (display) + Inter (body), loaded from Google Fonts
- **Hosting:** Cloudflare Pages, free tier
- **DNS:** Cloudflare DNS (recommended) or A-record from Canadian Web Hosting

## Local development

Requires Node.js 18+ and npm.

```bash
cd site
npm install        # one-time, installs Astro and dependencies
npm run dev        # starts dev server at http://localhost:4321
npm run build      # builds production output to ./dist
npm run preview    # serves the production build locally
```

## Project structure

```
site/
├── public/
│   └── images/                # All photos and the logo — copied to /images/ at build
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro   # HTML shell, fonts, meta tags, LocalBusiness JSON-LD
│   ├── components/
│   │   ├── Header.astro       # Top contact bar + sticky main nav
│   │   ├── Footer.astro       # Footer with NAP, links, social
│   │   ├── ProductCard.astro  # Hot tub / swim spa series card (takes props)
│   │   ├── AreaCard.astro     # City card in Areas We Serve section
│   │   └── TestimonialCard.astro
│   ├── pages/
│   │   └── index.astro        # Homepage
│   └── styles/
│       └── global.css         # All site styles + brand tokens
├── astro.config.mjs
├── tsconfig.json
├── package.json
└── .gitignore
```

## Adding a new page

Astro uses file-based routing. To add `/hot-tubs/legend-series/`, create `src/pages/hot-tubs/legend-series.astro` (or `src/pages/hot-tubs/legend-series/index.astro`). Wrap content in `<BaseLayout>` and include `<Header />` + `<Footer />`.

Example minimal page:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Header from '../../components/Header.astro';
import Footer from '../../components/Footer.astro';
---
<BaseLayout title="Legend Series Hot Tubs | Hot Tub Universe — Bedford NS">
  <Header />
  <main>
    <!-- page content -->
  </main>
  <Footer />
</BaseLayout>
```

## Deployment to Cloudflare Pages

### 1. Push to GitHub

```bash
cd site
git init
git add .
git commit -m "Initial homepage scaffold"
git branch -M main
# Create a new repo on GitHub named universe (private OK)
git remote add origin git@github.com:<your-username>/universe.git
git push -u origin main
```

### 2. Connect to Cloudflare Pages

Sign into the **Theresa-owned** Cloudflare account (the one separate from Bill's existing paid account).

1. Cloudflare dashboard → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Authorize GitHub and select the `universe` repo.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `site` (if the Astro project isn't at the repo root)
   - Node version: `20` (set in Environment Variables: `NODE_VERSION=20`)
4. Click **Save and Deploy**. First build takes ~2 minutes.

After the build, Cloudflare assigns a preview URL like `universe.pages.dev`. Every push to `main` triggers a production deploy. Every push to any other branch creates a preview deploy at a unique URL.

### 3. Custom domain (do this when ready to go live)

1. In the Pages project → **Custom domains** → **Set up a custom domain** → enter `hottubuniverse.ca`.
2. Cloudflare will show DNS records to add.
3. In **Canadian Web Hosting** DNS panel, replace the existing A record (currently `67.231.25.140`) with the Cloudflare records shown. Alternatively, change the nameservers at CWH to Cloudflare's nameservers for full Cloudflare DNS management — this is the recommended path because it enables Cloudflare's CDN, caching, security features, and analytics across the whole domain.
4. DNS propagation takes minutes to a few hours. Cloudflare will issue an HTTPS certificate automatically once verified.
5. Don't forget the `www.hottubuniverse.ca` subdomain — add it as a second custom domain with a redirect to the apex.

### 4. Block the legacy staging subdomain

The current site has `www.wp.hottubuniverse.ca` publicly indexed, creating a duplicate-content SEO problem. After launch, either remove the DNS record at CWH or add a noindex rule. Submit a removal request in Google Search Console.

## Local SEO checklist (post-launch)

- [ ] Mark Moncton Google Business Profile as **permanently closed**
- [ ] Update Bedford GBP description to remove "Moncton" references
- [ ] Submit new sitemap to Google Search Console
- [ ] Submit new sitemap to Bing Webmaster Tools
- [ ] Update Yellow Pages, BBB, Chamber of Commerce, The Coast listings to remove Moncton and align with new NAP
- [ ] Verify schema.org LocalBusiness data with Google Rich Results Test
- [ ] Verify the `wp.hottubuniverse.ca` subdomain is no longer accessible

## Contacts

- **Business owner:** Theresa Shea (theresa@hottubuniverse.ca)
- **Technical lead:** Bill Shea (bill.shea@me.com)

## License

© Hot Tub Universe. All rights reserved.
