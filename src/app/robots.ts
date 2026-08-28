import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Example of blocking private routes if they exist
    },
    sitemap: 'https://lustomotive.com/sitemap.xml',
  };
}
