import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // TODO: ganti dengan domain asli setelah deploy ke Vercel.
  // Dipakai untuk canonical URL, sitemap, dan OG image absolut.
  site: 'https://ogi-bastian.vercel.app',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  // Semua halaman tetap HTML statis. Hanya src/pages/api/contact.ts
  // yang opted out dari prerender lewat `export const prerender = false`.
  adapter: vercel(),
});