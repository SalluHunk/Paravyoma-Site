import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";
import { getKnowledgeCenter } from "@/lib/knowledge";
import { getResourceById, getResourcesByCategory } from "@/lib/resources";
import { getAllArticles } from "@/lib/insights";
import { getAllCaseStudies } from "@/lib/case-studies";
import { KnowledgeCenterLayout } from "@/components/knowledge/knowledge-center-layout";

const config = getKnowledgeCenter("digital-transformation");

export const metadata: Metadata = {
  title: "Digital Transformation Knowledge Center",
  description: config.description,
  alternates: {
    canonical: `${siteConfig.url}/knowledge/digital-transformation`,
  },
  openGraph: {
    title: `Digital Transformation Knowledge Center — ${siteConfig.name}`,
    description: config.description,
    url: `${siteConfig.url}/knowledge/digital-transformation`,
  },
};

export default function DigitalTransformationKnowledgeCenterPage() {
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
