import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://branmo.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          es: 'https://branmo.app',
          pt: 'https://branmo.app',
          en: 'https://branmo.app',
        },
      },
    },
  ]
}