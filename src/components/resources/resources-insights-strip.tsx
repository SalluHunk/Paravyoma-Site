import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { Article } from "@/lib/insights";
import { Reveal } from "@/components/shared/reveal";

interface Props {
  articles: Article[];
}

export function ResourcesInsightsStrip({ articles }: Props) {
  if (articles.length === 0) return null;

  return (
    <div>
      {/* Header */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">From our insights</p>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Related reading
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Go deeper on the topics covered in our resources — practical articles
            written for teams that want outcomes, not theory.
          </p>
        </div>
        <Link
          href="/insights"
          className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-brand hover:underline sm:inline-flex"
        >
          All insights
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      {/* Article cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, i) => (
          <Reveal key={article.slug} delay={i * 80}>
            <Link
              href={`/insights/${article.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift"
            >
              <span className="inline-flex w-fit rounded-full bg-surface px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                {article.category}
              </span>

              <h3 className="mt-3 font-display text-sm font-semibold leading-snug tracking-tight text-foreground text-pretty transition-colors group-hover:text-brand">
                {article.title}
              </h3>

              <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground text-pretty line-clamp-2">
                {article.excerpt}
              </p>

              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Clock className="size-3" aria-hidden="true" />
                  {article.readingTime} min read
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-brand">
                  Read
                  <ArrowRight
                    className="size-3 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* Mobile: view all */}
      <div className="mt-6 sm:hidden">
        <Link
          href="/insights"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
        >
          View all insights
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
