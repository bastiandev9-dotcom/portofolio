export const en = {
  'meta.title': 'Ogi Bastian — Full-Stack Development Learner',
  'meta.description':
    'Full-stack development learner from Pekalongan, Indonesia. Learning fast and shipping anyway.',

  'a11y.skip': 'Skip to content',
  'a11y.theme': 'Toggle colour theme',
  'a11y.lang': 'Ganti ke Bahasa Indonesia',
  'a11y.openMenu': 'Open navigation',

  'nav.work': 'Work',
  'nav.about': 'About',
  'nav.contact': 'Contact',

  'hero.role': 'Full-Stack Development Learner',
  'hero.location': 'Pekalongan, Indonesia',
  'hero.tagline': 'Learning fast and shipping anyway.',
  'hero.primary': 'View work',
  'hero.secondary': 'Email me',

  'work.label': 'Selected work',
  'work.all': 'All work',
  'work.archive': 'Archive',
  'work.live': 'Live',
  'work.repo': 'Repo',
  'work.team': 'Team project',
  'work.more': 'More practice work',

  'about.label': 'About',
  'about.facts': 'Details',

  'stack.label': 'Stack',
  'stack.note': 'Tools I actually reach for. Full list lives on GitHub.',

  'contact.label': 'Contact',
  'contact.heading': "If something looks like your kind of problem, let's talk.",

  'footer.rights': 'All rights reserved.',
  'footer.top': 'Back to top',
  'footer.built': 'Built with Astro',
};

// No `as const` — the value type must stay `string` so id.ts can translate.
export type Dict = typeof en;