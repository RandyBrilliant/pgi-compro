import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { projects } from "@/lib/data/projects";
import { businessUnits } from "@/lib/data/business-units";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Generate URLs for all locales
  const generateLocalizedUrls = (path: string = '', priority: number, changeFrequency: 'yearly' | 'monthly' | 'weekly' | 'daily' = 'monthly') => {
    return routing.locales.map(locale => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map(l => [l, `${baseUrl}/${l}${path}`])
        ),
      },
    }));
  };

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    ...generateLocalizedUrls('', 1),                    // Homepage
    ...generateLocalizedUrls('/about', 0.8),           // About
    ...generateLocalizedUrls('/services', 0.8),        // Services
    ...generateLocalizedUrls('/projects', 0.8, 'weekly'), // Projects
    ...generateLocalizedUrls('/contact', 0.7),         // Contact
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = businessUnits.flatMap((unit) =>
    generateLocalizedUrls(`/services/${unit.id}`, 0.7)
  );

  // Project pages
  const projectPages: MetadataRoute.Sitemap = projects.flatMap((project) =>
    generateLocalizedUrls(`/projects/${project.slug}`, 0.6)
  );

  return [...staticPages, ...servicePages, ...projectPages];
}
