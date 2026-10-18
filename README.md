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
  i18n/         en.ts + id.ts dictionaries, index.ts holds Locale + Route
  data/         profile.ts — name, links, facts, stack groups, archive list
  content/      projects/<locale>/*.md and about/<locale>.md
  layouts/      Page.astro — head, Nav, Footer, and every section
  pages/        4 routes x 2 locales, each a thin <Page lang path />
  components/   Nav, Hero, Work, Footer, ThemeToggle
  styles/       tokens.css (colour + scale), global.css (reset + primitives)
```

Eight static files, one page per section per locale:

| | EN | ID |
|---|---|---|
| home | `/` | `/id/` |
| work | `/work/` | `/id/work/` |
| about | `/about/` | `/id/about/` |
| contact | `/contact/` | `/id/contact/` |

Every page renders `Page.astro` with a `lang` and a `path`; the markup is
written once and the section list is decided there. The language toggle keeps
you on the same page — `/id/work/` links to `/work/`.

`Work.astro` takes a `variant`: `compact` on the home page (titles, stack,
links, no prose), `full` on the work page (prose plus the archive bar). Both
read the same Markdown, so a project is never written twice.

`/contact/` is self-contained — no Nav, no Footer, its own wordmark and page
links, like a landing page.

## Contact form

`src/pages/api/contact.ts` is the only server-rendered route
(`export const prerender = false`). The other eight pages ship as plain HTML.
It posts to the Resend REST API with `fetch` — no `resend` package.

Set these in `.env` locally and in the Vercel project settings:

```
RESEND_API_KEY=re_...
CONTACT_FROM=Portfolio <noreply@yourdomain.com>
CONTACT_TO=someone@example.com      # optional, defaults to profile.email
```

`CONTACT_FROM` must be a sender Resend has verified. Until they are set the
endpoint returns 500 and logs which one is missing.

Note the trailing slash: the deployed route is `/api/contact/`, and
`/api/contact` 404s.

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