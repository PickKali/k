import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      startDate: z.date(),
      pubDate: z.date(),
      description: z.string(),
      tags: z.array(z.string()).optional(),
      size: z.string(),
      src: image(),
      alt: z.string(),
    }),
});

export const collections = {
  projects: projectsCollection,
};
