import { defineCollection, z } from 'astro:content';

const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({}),
});

export const collections = {
  'case-studies': caseStudiesCollection,
};
