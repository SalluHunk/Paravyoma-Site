import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import {
  getCaseStudyBySlug,
  getRelatedCaseStudies,
  getAllSlugs,
} from "@/lib/case-studies";
import { CaseStudyLayout } from "@/components/case-studies/case-study-layout";

interface Props {
  params: Promise<{ slug: string }>;
}

// Pre-render all known slugs at build time.
// When using a CMS, replace getAllSlugs() with an API call.
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: caseStudy.title,
    description: caseStudy.tagline,
    alternates: { canonical: `${siteConfig.url}/case-studies/${slug}` },
    openGraph: {
      title: `${caseStudy.title} — ${siteConfig.name}`,
      description: caseStudy.tagline,
      url: `${siteConfig.url}/case-studies/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const related = getRelatedCaseStudies(slug);

  return <CaseStudyLayout caseStudy={caseStudy} related={related} />;
}
