import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import {
  getAllCaseStudies,
  getAllIndustries,
  getFeaturedCaseStudy,
} from "@/lib/case-studies";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { FeaturedCaseStudy } from "@/components/case-studies/featured-case-study";
import { CaseStudyGrid } from "@/components/case-studies/case-study-grid";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real outcomes for real organisations — CRM implementations, workflow automation, digital transformation and custom applications across professional services, education, nonprofits and temples.",
  alternates: { canonical: `${siteConfig.url}/case-studies` },
  openGraph: {
    title: `Case Studies — ${siteConfig.name}`,
    description:
      "Real outcomes across CRM, automation, digital transformation and more. Filter by industry and explore how we work.",
    url: `${siteConfig.url}/case-studies`,
  },
};

export default function CaseStudiesPage() {
  const featured = getFeaturedCaseStudy();
  const allCaseStudies = getAllCaseStudies();
  const industries = getAllIndustries();

  // Exclude featured from grid so it doesn't appear twice
  const gridCaseStudies = featured
    ? allCaseStudies.filter((cs) => cs.slug !== featured.slug)
    : allCaseStudies;

  return (
    <>
      {/* Hero */}
      <PageHeader
        eyebrow="Case Studies"
        title="Work that speaks for itself."
        description="Real outcomes for real organisations — every engagement documented from challenge through implementation to measurable results."
      />

      {/* Featured */}
      {featured && (
        <Section id="featured">
          <FeaturedCaseStudy caseStudy={featured} />
        </Section>
      )}

      {/* Grid with filter + search */}
      <Section id="all-studies" surface>
        <div className="mb-8">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            All case studies
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Filter by industry or search by keyword.
          </p>
        </div>
        <CaseStudyGrid caseStudies={gridCaseStudies} industries={industries} />
      </Section>
    </>
  );
}
