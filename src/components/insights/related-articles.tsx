import { ArticleCard } from "./article-card";
import { Reveal } from "@/components/shared/reveal";
import type { Article } from "@/lib/insights";

interface RelatedArticlesProps {
  articles: Article[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <div>
      <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        Keep reading
      </h2>
      <p className="mt-1.5 text-sm text-muted-foreground">
        More articles you might find useful.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, i) => (
          <Reveal key={article.slug} delay={(i % 3) * 70}>
            <ArticleCard article={article} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
