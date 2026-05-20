import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hottubuniverse.ca',
  // Static output — Cloudflare Pages serves the built /dist folder directly.
  output: 'static',
  integrations: [
    // Auto-generates /sitemap-index.xml (+ sitemap-0.xml) from all built pages.
    sitemap(),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
