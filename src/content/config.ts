import { z, defineCollection } from 'astro:content';

const categoriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    schedule: z.string(),
    instructor: z.string(),
    level: z.string()
  })

});

export const collections = {
  'categories': categoriesCollection,
};