import Link from "next/link";
import { ArrowRight, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Article } from "@/lib/insights";

interface FeaturedArticleProps {
  article: Article;
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  const publishedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-IN",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="relative overflow-hidden rounded-3xl border border-brand/20 bg-primary shadow-lift">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-brand/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
      >
        <div className="absolute inset-0 bg-grid-slate bg-[size:40px_40px] invert" />
      </div>

      <div className="relative p-8 sm:p-10 lg:p-12">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/20 px-3 py-1 text-xs font-semibold text-brand">
            <Star className="size-3 fill-current" aria-hidden="true" />
            Featured
          </span>
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-primary-foreground/70">
            {article.category}
          </span>
        </div>

        <div className="mt-5 max-w-2xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-primary-foreground text-pretty sm:text-3xl lg:text-[2rem] lg:leading-[1.2]">
            {article.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-primary-foreground/70 text-pretty">
            {article.excerpt}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-primary-foreground/50">
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden="true" />
            {article.readingTime} min read
          </span>
          <span>·</span>
          <span>{publishedDate}</span>
          <span>·</span>
          <span>{article.author.name}</span>
        </div>

        <div className="mt-7">
          <Button asChild variant="brand" size="lg">
            <Link href={`/insights/${article.slug}`}>
              Read article
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
