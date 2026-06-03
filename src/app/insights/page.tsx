import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import {
  getAllArticles,
  getAllCategories,
  getFeaturedArticle,
} from "@/lib/insights";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { FeaturedArticle } from "@/components/insights/featured-article";
import { ArticleGrid } from "@/components/insights/article-grid";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical thinking on operations, AI, digital transformation and the decisions that matter for growing organisations. No hype — just what actually works.",
  alternates: { canonical: `${siteConfig.url}/insights` },
  openGraph: {
    title: `Insights — ${siteConfig.name}`,
    description:
      "Practical articles on operations, AI, digital transformation and business systems. Written by practitioners.",
    url: `${siteConfig.url}/insights`,
  },
};

export default function InsightsPage() {
  const featured = getFeaturedArticle();
  const all = getAllArticles();
  const categories = getAllCategories();
  const grid = featured ? all.filter((a) => a.slug !== featured.slug) : all;

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Practical thinking on what actually works."
        description="No hype, no filler — articles written by practitioners on operations, AI and the real decisions behind digital transformation."
      />

      {featured && (
        <Section id="featured">
          <FeaturedArticle article={featured} />
        </Section>
      )}

      <Section id="all-articles" surface>
        <div className="mb-8">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            All articles
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Filter by category to find what matters most to you.
          </p>
        </div>
        <ArticleGrid articles={grid} categories={categories} />
      </Section>
    </>
  );
}
