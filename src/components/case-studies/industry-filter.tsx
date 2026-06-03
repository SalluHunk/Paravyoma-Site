"use client";

import { cn } from "@/lib/utils";
import type { Industry } from "@/lib/case-studies";

interface IndustryFilterProps {
  industries: Industry[];
  selected: Industry | null;
  onChange: (industry: Industry | null) => void;
  counts: Record<string, number>;
}

export function IndustryFilter({
  industries,
  selected,
  onChange,
  counts,
}: IndustryFilterProps) {
  const total = Object.values(counts).reduce((sum, n) => sum + n, 0);

  return (
    <div
      role="group"
      aria-label="Filter by industry"
      className="flex flex-wrap gap-2"
    >
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

      {industries.map((industry) => (
        <button
          key={industry}
          onClick={() =>
            onChange(selected === industry ? null : industry)
          }
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-150",
            selected === industry
              ? "border-brand bg-brand/10 text-brand"
              : "border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground"
          )}
        >
          {industry}
          <span
            className={cn(
              "rounded-full px-1.5 py-0.5 text-[10px] font-semibold",
              selected === industry
                ? "bg-brand/20 text-brand"
                : "bg-muted text-muted-foreground"
            )}
          >
            {counts[industry] ?? 0}
          </span>
        </button>
      ))}
    </div>
  );
}
