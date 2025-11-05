import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://branmo.app'
  const currentDate = new Date()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          es: baseUrl,
          pt: baseUrl,
          en: baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/about`,
          pt: `${baseUrl}/about`,
          en: `${baseUrl}/about`,
        },
      },
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          es: `${baseUrl}/contact`,
          pt: `${baseUrl}/contact`,
          en: `${baseUrl}/contact`,
        },
      },
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
      alternates: {
        languages: {
          es: `${baseUrl}/privacy`,
          pt: `${baseUrl}/privacy`,
          en: `${baseUrl}/privacy`,
        },
      },
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
      alternates: {
        languages: {
          es: `${baseUrl}/terms`,
          pt: `${baseUrl}/terms`,
          en: `${baseUrl}/terms`,
        },
      },
    },
    {
      url: `${baseUrl}/sitemap`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
      alternates: {
        languages: {
          es: `${baseUrl}/sitemap`,
          pt: `${baseUrl}/sitemap`,
          en: `${baseUrl}/sitemap`,
        },
      },
    },
  ]
}