import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const locale = z.enum(['en', 'id']);

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    locale,
    order: z.number(),
    title: z.string(),
    year: z.number(),
    stack: z.array(z.string()),
    live: z.string().url().optional(),
    repo: z.string().url(),
    team: z.boolean().default(false),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
  schema: z.object({ locale }),
});

export const collections = { projects, about };