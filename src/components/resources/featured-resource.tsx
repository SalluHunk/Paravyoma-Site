import { BookOpen, LayoutTemplate, ListChecks, FileDown, Star } from "lucide-react";
import type { Resource, ResourceType } from "@/lib/resources";
import { DownloadGate } from "./download-gate";
import { cn } from "@/lib/utils";

// ── Type badge config ─────────────────────────────────────────────────────────

const TYPE_CONFIG: Record<
  ResourceType,
  { label: string; icon: React.ElementType; styles: string }
> = {
  Guide: {
    label: "Guide",
    icon: BookOpen,
    styles: "text-brand bg-brand/10 border-brand/20",
  },
  Template: {
    label: "Template",
    icon: LayoutTemplate,
    styles:
      "text-violet-600 bg-violet-50 border-violet-200 dark:text-violet-400 dark:bg-violet-950/40 dark:border-violet-800/40",
  },
  Checklist: {
    label: "Checklist",
    icon: ListChecks,
    styles:
      "text-emerald-600 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-950/40 dark:border-emerald-800/40",
  },
  Download: {
    label: "Download",
    icon: FileDown,
    styles:
      "text-amber-600 bg-amber-50 border-amber-200 dark:text-amber-400 dark:bg-amber-950/40 dark:border-amber-800/40",
  },
};

// ── Component ─────────────────────────────────────────────────────────────────

interface Props {
  resource: Resource;
}

export function FeaturedResource({ resource }: Props) {
  const cfg = TYPE_CONFIG[resource.type];
  const TypeIcon = cfg.icon;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lift">
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative grid gap-8 p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:p-12">
        {/* ── Left: content ── */}
        <div>
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold",
                cfg.styles
              )}
            >
              <TypeIcon className="size-3.5" aria-hidden="true" />
              {cfg.label}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              <Star className="size-3" aria-hidden="true" />
              Featured Resource
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-foreground text-balance sm:text-3xl lg:text-4xl">
            {resource.title}
          </h2>

          {/* Excerpt */}
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
            {resource.excerpt}
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {resource.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Meta row */}
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <span>{resource.category}</span>
            {resource.pageCount && <span>{resource.pageCount} pages</span>}
            <span className="font-semibold text-brand">Free to download</span>
          </div>
        </div>

        {/* ── Right: CTA ── */}
        <div className="flex flex-col items-start gap-3 lg:min-w-[220px]">
          <DownloadGate
            resource={resource}
            triggerClassName="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-soft transition-opacity hover:opacity-90 whitespace-nowrap lg:w-auto"
          />
          <p className="text-xs text-muted-foreground">
            No payment. Just your email.
          </p>
        </div>
      </div>
    </div>
  );
}
