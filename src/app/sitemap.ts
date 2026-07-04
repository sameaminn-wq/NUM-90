import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/portfolioData';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/projects', '/experience', '/contact', '/certifications', '/achievements', '/statement', '/gallery'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return routes;
}
