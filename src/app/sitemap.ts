import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://lustomotive.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // We can add other routes here when they are created
  ];
}
