import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Article } from "@/lib/insights";

const CATEGORY_COLORS: Record<string, string> = {
  AI: "bg-violet-500/10 text-violet-600 border-violet-500/20 dark:text-violet-400",
  Operations: "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400",
  "Digital Transformation":
    "bg-cyan-500/10 text-cyan-600 border-cyan-500/20 dark:text-cyan-400",
  "Temple Technology":
    "bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-400",
  "Business Systems": "bg-brand/10 text-brand border-brand/20",
  Leadership:
    "bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:text-emerald-400",
};

interface ArticleCardProps {
  article: Article;
  className?: string;
}

export function ArticleCard({ article, className }: ArticleCardProps) {
  const colorClass =
    CATEGORY_COLORS[article.category] ??
    "bg-muted text-muted-foreground border-border";

  const publishedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-IN",
    { year: "numeric", month: "short", day: "numeric" }
  );

  return (
    <Link
      href={`/insights/${article.slug}`}
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-border bg-card shadow-soft",
        "transition-all duration-300 hover:shadow-lift hover:-translate-y-0.5",
        className
      )}
    >
      {/* Cover placeholder */}
      <div className="relative h-44 overflow-hidden rounded-t-2xl bg-gradient-to-br from-primary/70 to-primary">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"
        >
          <div className="absolute inset-0 bg-grid-slate bg-[size:28px_28px]" />
        </div>
        <div className="absolute inset-0 flex items-end p-5">
          <span
            className={cn(
              "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold backdrop-blur-sm",
              colorClass
            )}
          >
            {article.category}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] text-muted-foreground">{publishedDate}</p>
        <h3 className="mt-2 font-display text-base font-semibold leading-snug tracking-tight text-foreground group-hover:text-brand transition-colors duration-200 text-pretty">
          {article.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty line-clamp-2">
          {article.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="size-3.5" aria-hidden="true" />
            {article.readingTime} min read
          </div>
          <span className="flex items-center gap-1 text-xs font-semibold text-brand opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Read
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
