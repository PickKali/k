import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    size: z.string(),
    src: z.string(),
    alt: z.string()
  }),
});

export const collections = {
  projects: projectsCollection,
};