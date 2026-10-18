import { en } from './en.ts';
import { id } from './id.ts';

export const LOCALES = ['en', 'id'] as const;
export type Locale = (typeof LOCALES)[number];

export const defaultLocale: Locale = 'en';

const dicts = { en, id };

export function t(lang: Locale) {
  return dicts[lang];
}

export function otherLang(lang: Locale): Locale {
  return lang === 'en' ? 'id' : 'en';
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function hrefFor(lang: Locale) {
  return lang === defaultLocale ? '/' : `/${lang}/`;
}

export type { Dict } from './en.ts';