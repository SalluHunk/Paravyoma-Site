import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import {
  getArticleBySlug,
  getRelatedArticles,
  getAllArticleSlugs,
} from "@/lib/insights";
import { ArticleLayout } from "@/components/insights/article-layout";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: article.title,
    description: article.metaDescription,
    alternates: { canonical: `${siteConfig.url}/insights/${slug}` },
    openGraph: {
      title: `${article.title} — ${siteConfig.name}`,
      description: article.metaDescription,
      url: `${siteConfig.url}/insights/${slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
    },
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug);
  return <ArticleLayout article={article} related={related} />;
}
