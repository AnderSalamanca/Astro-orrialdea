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

const restaurantCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    name: z.string(),
    location: z.string(),
    coordinates: z.object({
      latitude: z.number(),
      longitude: z.number(),
    }).optional(),
    cuisine: z.array(z.enum(['Italiana', 'Mexicana', 'Japonesa', 'Vasca', 'Española', 'Mediterránea'])).nonempty(),
    rating: z.number().min(0).max(5),
    priceRange: z.enum(['€', '€€', '€€€', '€€€€']).optional(),
    image: image(),
    imageAlt: z.string(),
    description: z.string(),
    gallery: z.array(z.object({
      src: image(),
      alt: z.string(),
    })).optional(),
  }),
});

export const collections = {
  'proyectos': projectCollection,
  'restaurantes': restaurantCollection,
};