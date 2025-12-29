import { defineCollection, z } from 'astro:content';

const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    slug: z.string().optional(),
  }),
});

export const collections = {
  'case-studies': caseStudiesCollection,
};
