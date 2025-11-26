import { MetadataRoute } from 'next';

const SITE_URL = 'https://www.solbase.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/launch`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${SITE_URL}/tokens`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.85 },
    { url: `${SITE_URL}/swap`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE_URL}/faq`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.75 },
    { url: `${SITE_URL}/docs`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.70 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.80 },
    { url: `${SITE_URL}/blog/why-we-built-solbase`, lastModified: new Date('2024-11-25'), changeFrequency: 'monthly', priority: 0.80 },
    { url: `${SITE_URL}/blog/how-to-create-token-solana-base`, lastModified: new Date('2024-11-25'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE_URL}/blog/solana-vs-base-token-launch`, lastModified: new Date('2024-11-25'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE_URL}/privacy`, lastModified: new Date('2024-11-25'), changeFrequency: 'yearly', priority: 0.30 },
    { url: `${SITE_URL}/terms`, lastModified: new Date('2024-11-25'), changeFrequency: 'yearly', priority: 0.30 },
  ];
}
