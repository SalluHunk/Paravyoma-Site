import { BookOpen, LayoutTemplate, ListChecks, FileDown, FileText } from "lucide-react";
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

export function ResourceCard({ resource }: Props) {
  const cfg = TYPE_CONFIG[resource.type];
  const TypeIcon = cfg.icon;

  return (
    <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift">
      {/* Header: type badge + free tag */}
      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold",
            cfg.styles
          )}
        >
          <TypeIcon className="size-3" aria-hidden="true" />
          {cfg.label}
        </span>

        {!resource.gated && (
          <span className="rounded-full bg-brand/10 px-2 py-0.5 text-xs font-semibold text-brand">
            Free
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-4 font-display text-base font-semibold leading-snug tracking-tight text-foreground text-pretty">
        {resource.title}
      </h3>

      {/* Excerpt */}
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty line-clamp-3">
        {resource.excerpt}
      </p>

      {/* Meta */}
      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <span className="rounded-md bg-surface px-2 py-1 font-medium text-foreground/70">
          {resource.category}
        </span>
        {resource.pageCount && (
          <span className="inline-flex items-center gap-1">
            <FileText className="size-3" aria-hidden="true" />
            {resource.pageCount} pages
          </span>
        )}
      </div>

      {/* Action */}
      <div className="mt-5">
        <DownloadGate resource={resource} />
      </div>
    </div>
  );
}
