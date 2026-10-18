import { defineConfig } from 'astro/config';

export default defineConfig({
  // TODO: ganti dengan domain asli setelah deploy ke Vercel.
  // Dipakai untuk canonical URL, sitemap, dan OG image absolut.
  site: 'https://ogi-bastian.vercel.app',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});