"use client";

import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseStudySearchProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function CaseStudySearch({
  value,
  onChange,
  className,
}: CaseStudySearchProps) {
  return (
    <div className={cn("relative", className)}>
      <Search
        className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden="true"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search case studies…"
        className={cn(
          "h-10 w-full rounded-xl border border-border bg-card pl-10 pr-10 text-sm text-foreground",
          "placeholder:text-muted-foreground",
          "focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand/60",
          "transition-colors duration-150"
        )}
      />
      {value ? (
        <button
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
      ) : null}
    </div>
  );
}
