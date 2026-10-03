// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://scruffypixels.github.io",
  fonts: [{
    cssVariable: "--font-inter",
    name: "Inter",
    provider: fontProviders.google(),
    weights: [700,800],
  },
  {
    cssVariable: "--font-source-serif",
    name: "Source Serif 4",
    provider: fontProviders.google(),
    weights: [400]
  }],
});
