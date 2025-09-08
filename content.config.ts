import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'data',
      source: 'research/articles/**/*.md',
      schema: z.object({
        title: z.string(),
        funding: z.string(),
        period: z.string(),
        amount: z.string(),
        description: z.string(),
        link: z.string().optional()
      })
    }),
    publicationsPlus: defineCollection({
      type: 'data',
      source: 'research/publications-plus/**/*.md',
      schema: z.object({
        title: z.string(),
        authors: z.string(),
        venue: z.string(),
        year: z.string(),
        type: z.string(),
        citations: z.number(),
        doi: z.string().optional(),
        url: z.string().optional()
      })
    }),
    publications: defineCollection({
      type: 'data',
      source: 'research/publications/**/*.md',
      schema: z.object({
        title: z.string(),
        authors: z.string(),
        venue: z.string(),
        year: z.string(),
        type: z.string()
      })
    }),
    courses: defineCollection({
      type: 'data',
      source: 'courses/**/*.md',
      schema: z.object({
        code: z.string(),
        title: z.string(),
        semester: z.string(),
        description: z.string(),
        level: z.string(),
        link: z.string()
      })
    })
  }
})

