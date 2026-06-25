import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";
import { getKnowledgeCenter } from "@/lib/knowledge";
import { getResourceById, getResourcesByCategory } from "@/lib/resources";
import { getAllArticles } from "@/lib/insights";
import { getAllCaseStudies } from "@/lib/case-studies";
import { KnowledgeCenterLayout } from "@/components/knowledge/knowledge-center-layout";

const config = getKnowledgeCenter("ai-automation");

export const metadata: Metadata = {
  title: "AI & Automation Knowledge Center",
  description: config.description,
  alternates: {
    canonical: `${siteConfig.url}/knowledge/ai-automation`,
  },
  openGraph: {
    title: `AI & Automation Knowledge Center — ${siteConfig.name}`,
    description: config.description,
    url: `${siteConfig.url}/knowledge/ai-automation`,
  },
};

export default function AiAutomationKnowledgeCenterPage() {
  const flagshipGuide = getResourceById(config.flagshipGuideId);
  const spokeResources = getResourcesByCategory(config.resourceCategory).filter(
    (resource) => resource.id !== config.flagshipGuideId
  );
  const articles = getAllArticles().filter(
    (article) => article.category === config.articleCategory
  );
  const caseStudies = getAllCaseStudies().filter((caseStudy) =>
    caseStudy.services.includes(config.caseStudyService)
  );

  return (
    <KnowledgeCenterLayout
      config={config}
      flagshipGuide={flagshipGuide}
      spokeResources={spokeResources}
      articles={articles}
      caseStudies={caseStudies}
    />
  );
}
