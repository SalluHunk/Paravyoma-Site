"use client";

import { cn } from "@/lib/utils";
import type { ArticleCategory } from "@/lib/insights";

interface CategoryFilterProps {
  categories: ArticleCategory[];
  selected: ArticleCategory | null;
  onChange: (cat: ArticleCategory | null) => void;
  counts: Record<string, number>;
}

export function CategoryFilter({
  categories,
  selected,
  onChange,
  counts,
}: CategoryFilterProps) {
  const total = Object.values(counts).reduce((s, n) => s + n, 0);

  return (
    <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange(null)}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-150",
          selected === null
            ? "border-brand bg-brand/10 text-brand"
            : "border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground"
        )}
      >
        All
        <span
          className={cn(
            "rounded-full px-1.5 py-0.5 text-[10px] font-semibold",
            selected === null
              ? "bg-brand/20 text-brand"
              : "bg-muted text-muted-foreground"
          )}
        >
          {total}
        </span>
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(selected === cat ? null : cat)}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-150",
            selected === cat
              ? "border-brand bg-brand/10 text-brand"
              : "border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground"
          )}
        >
          {cat}
          <span
            className={cn(
              "rounded-full px-1.5 py-0.5 text-[10px] font-semibold",
              selected === cat
                ? "bg-brand/20 text-brand"
                : "bg-muted text-muted-foreground"
            )}
          >
            {counts[cat] ?? 0}
          </span>
        </button>
      ))}
    </div>
  );
}
