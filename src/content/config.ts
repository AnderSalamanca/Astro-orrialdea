import { defineCollection, z } from 'astro:content';
import { Image } from 'astro:assets';
import { glob, file } from 'astro/loaders';

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

const recetasCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    servings: z.number(),
    image: image(),
    imageAlt: z.string(),
    pubDate: z.date().optional(), // Para ordenar por fecha
    description: z.string(), // Para resúmenes y SEO
    
    // Tiempo de cocción en minutos (más fácil de ordenar/filtrar)
    cookingTime: z.number().describe('Tiempo de cocción en minutos'),
    
    // Ingredientes con más estructura (opcional, pero potente)
    ingredients: z.array(z.object({
        amount: z.string(), // ej: "200g", "1 taza", "al gusto"
        name: z.string(),   // ej: "Harina de trigo"
    })),
    
    // Etiquetas para filtrar
    tags: z.array(z.string()).optional(),
    
    // Dificultad con valores predefinidos
    difficulty: z.enum(['Fácil', 'Intermedia', 'Difícil']),
  }),
});

export const collections = {
  'proyectos': projectCollection,
  'restaurantes': restaurantCollection,
  'recetas': recetasCollection,
};