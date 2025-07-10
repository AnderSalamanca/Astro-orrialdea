import { defineCollection, z } from 'astro:content';
import { Image } from 'astro:assets';

const projectCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
    coverImage: image(),
    coverAlt: z.string(),
  }),
});

export const collections = {
  'proyectos': projectCollection,
};