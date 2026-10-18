# Ogi Bastian — Portfolio

Static bilingual portfolio. Astro 5, no client framework, no dark-art backend.
Dark theme is plain light-mode over CSS custom properties, so there is nothing
to keep in sync.

## Commands

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # -> dist/
npm run preview   # serve the built output
npm run check     # astro check (types)
npm test          # en/id dictionary parity
npm run og        # regenerate public/og.png
```

## Layout

```
src/
  i18n/         en.ts + id.ts dictionaries, index.ts holds the Locale type
  data/         profile.ts — name, links, facts, stack groups, archive list
  content/      projects/<locale>/*.md and about/<locale>.md
  layouts/      Page.astro — the whole single page, plus head and both scripts
  components/   Nav, Hero, Work, Footer, ThemeToggle
  styles/       tokens.css (colour + scale), global.css (reset + primitives)
```

Two routes: `/` (en) and `/id/`. Both render `Page.astro` with a different
`lang` prop — the markup is written once.

## Adding a project

Create `src/content/projects/en/<slug>.md` and `.../id/<slug>.md`. The
frontmatter is validated by `src/content.config.ts`, so a missing field fails
the build instead of rendering a blank.

```yaml
locale: en
order: 5
title: Project Name
year: 2026
stack: ['Next.js', 'TypeScript']
repo: https://github.com/...
live: https://...        # optional — omit if there is no demo
team: false
```

## Screenshots

There are none, on purpose. The page carries no imagery — the work is set in
type and separated by hairlines. If that ever changes, images live in
`src/assets/projects/<slug>/` and Astro converts them to WebP with a
responsive `srcset` at build time.

## Notes

- `site` in `astro.config.mjs` is a placeholder. Change it to the real domain
  before deploying, or canonical and OG URLs will point at the wrong host.
- Vercel needs no config: it detects Astro and serves `dist/`.
- The theme script in `<head>` is inline on purpose — an external file would
  let the page paint light before the stored theme is read.