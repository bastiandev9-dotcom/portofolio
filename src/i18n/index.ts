import { en } from './en.ts';
import { id } from './id.ts';

export const LOCALES = ['en', 'id'] as const;
export type Locale = (typeof LOCALES)[number];

export const defaultLocale: Locale = 'en';

/** Every page that exists. Each one is its own static HTML file. */
export const ROUTES = ['home', 'work', 'about', 'contact'] as const;
export type Route = (typeof ROUTES)[number];

/** Nav label key per route. 'home' is the logo link, it has no nav entry. */
export const ROUTE_LABEL = {
  home: null,
  work: 'nav.work',
  about: 'nav.about',
  contact: 'nav.contact',
} as const;

const dicts = { en, id };

export function t(lang: Locale) {
  return dicts[lang];
}

export function otherLang(lang: Locale): Locale {
  return lang === 'en' ? 'id' : 'en';
}

/** Builds the path for a locale + route, e.g. ('id', 'work') -> '/id/work/' */
export function hrefFor(lang: Locale, route: Route) {
  const base = lang === defaultLocale ? '' : `/${lang}`;
  return route === 'home' ? `${base}/` : `${base}/${route}/`;
}

export type { Dict } from './en.ts';