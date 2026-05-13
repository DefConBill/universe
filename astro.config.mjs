import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://hottubuniverse.ca',
  // Static output — Cloudflare Pages serves the built /dist folder directly.
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
