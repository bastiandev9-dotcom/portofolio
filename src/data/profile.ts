import type { Locale } from '../i18n/index.ts';

export const profile = {
  name: 'Ogi Bastian',
  monogram: 'OB',
  handle: 'bastiandev9-dotcom',
  role: {
    en: 'Full-Stack Development Learner',
    id: 'Pelajar Full-Stack Development',
  },
  location: {
    en: 'Pekalongan, Indonesia',
    id: 'Pekalongan, Indonesia',
  },
  status: {
    en: 'Open to internship / junior role',
    id: 'Terbuka untuk magang / posisi junior',
  },
  email: 'bastiandev9@gmail.com',
  links: {
    github: 'https://github.com/bastiandev9-dotcom',
    linkedin: 'https://www.linkedin.com/in/ogi-bastian-171092319',
    instagram: 'https://www.instagram.com/ogibst',
  },
} as const;

export const facts: Record<Locale, { label: string; value: string }[]> = {
  en: [
    { label: 'Role', value: profile.role.en },
    { label: 'Based', value: profile.location.en },
    { label: 'Status', value: profile.status.en },
    { label: 'Focus', value: 'Next.js · PostgreSQL · MongoDB' },
    { label: 'Languages', value: 'JavaScript · TypeScript · Python · PHP' },
  ],
  id: [
    { label: 'Peran', value: profile.role.id },
    { label: 'Lokasi', value: profile.location.id },
    { label: 'Status', value: profile.status.id },
    { label: 'Fokus', value: 'Next.js · PostgreSQL · MongoDB' },
    { label: 'Bahasa', value: 'JavaScript · TypeScript · Python · PHP' },
  ],
};

export const stackGroups: { label: string; items: string[] }[] = [
  {
    label: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'PHP'],
  },
  {
    label: 'Frontend',
    items: ['Next.js', 'React', 'Vue', 'Tailwind CSS', 'Vite'],
  },
  {
    label: 'Backend',
    items: ['Bun · Elysia', 'Drizzle ORM', 'Streamlit'],
  },
  {
    label: 'Data',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub Actions', 'Docker CLI', 'Linux · WSL'],
  },
];

export const archiveRepos = [
  'Numeric-calc',
  'Inventory',
  'Eventbot',
  'Belajar-python',
  'LearnTech',
  'Calculator',
  'website-laundry',
  'Belajar-javascript',
  'learn-flutter',
  'latihan-bootstrap',
];