import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  compressHTML: true,
  image: {
    domains: ['cdn.jsdelivr.net'],
  },
});