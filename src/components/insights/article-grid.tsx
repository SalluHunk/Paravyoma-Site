"use client";

import { useState, useMemo } from "react";
import { ArticleCard } from "./article-card";
import { CategoryFilter } from "./category-filter";
import { Reveal } from "@/components/shared/reveal";
import type { Article, ArticleCategory } from "@/lib/insights";

interface ArticleGridProps {
  articles: Article[];
  categories: ArticleCategory[];
}

export function ArticleGrid({ articles, categories }: ArticleGridProps) {
  const [selected, setSelected] = useState<ArticleCategory | null>(null);

  const counts = useMemo(
    () =>
      Object.fromEntries(
        categories.map((c) => [c, articles.filter((a) => a.category === c).length])
      ) as Record<string, number>,
    [articles, categories]
  );

  const filtered = selected
    ? articles.filter((a) => a.category === selected)
    : articles;

  return (
    <div>
      <CategoryFilter
        categories={categories}
        selected={selected}
        onChange={setSelected}
        counts={counts}
      />

      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article, i) => (
            <Reveal key={article.slug} delay={(i % 3) * 70}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-2 text-center">
          <p className="text-base font-medium text-foreground">
            No articles in this category yet.
          </p>
          <button
            onClick={() => setSelected(null)}
            className="mt-1 text-sm font-semibold text-brand hover:underline"
          >
            Show all
          </button>
        </div>
      )}

      <p className="mt-6 text-xs text-muted-foreground">
        {filtered.length} article{filtered.length !== 1 ? "s" : ""}
        {selected ? ` in ${selected}` : ""}
      </p>
    </div>
  );
}
