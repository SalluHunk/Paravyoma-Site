import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllCaseStudies } from "@/lib/case-studies";
import { getAllArticles } from "@/lib/insights";

const staticLastModified = new Date("2026-06-17");

export default function sitemap(): MetadataRoute.Sitemap {
  const insightSlugs = getAllArticles().map((article) => ({
    url: `${siteConfig.url}/insights/${article.slug}`,
    lastModified: new Date(article.updatedAt ?? article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseStudySlugs = getAllCaseStudies().map((caseStudy) => ({
    url: `${siteConfig.url}/case-studies/${caseStudy.slug}`,
    lastModified: new Date(caseStudy.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/solutions`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/temple-suite`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${siteConfig.url}/temple-solutions`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/ai-automation`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/digital-transformation`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/crm-workflow-systems`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/products`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/resources`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/case-studies`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...caseStudySlugs,
    {
      url: `${siteConfig.url}/insights`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...insightSlugs,
    {
      url: `${siteConfig.url}/industries`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
