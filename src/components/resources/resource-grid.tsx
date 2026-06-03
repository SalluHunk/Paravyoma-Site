"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import type { Resource, ResourceType, ResourceCategory } from "@/lib/resources";
import { ResourceCard } from "./resource-card";
import { cn } from "@/lib/utils";

// ── Constants ─────────────────────────────────────────────────────────────────

const ALL_TYPES: ResourceType[] = ["Guide", "Template", "Checklist", "Download"];

// ── Component ─────────────────────────────────────────────────────────────────

interface Props {
  resources: Resource[];
}

export function ResourceGrid({ resources }: Props) {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState<ResourceType | "All">("All");
  const [activeCategory, setActiveCategory] = useState<
    ResourceCategory | "All"
  >("All");

  // Derive available categories from passed resources — stays correct after CMS migration
  const categories = useMemo<ResourceCategory[]>(
    () => [...new Set(resources.map((r) => r.category))],
    [resources]
  );

  // Only show type buttons that have at least one resource
  const types = useMemo(
    () => ALL_TYPES.filter((t) => resources.some((r) => r.type === t)),
    [resources]
  );

  // Filtered result
  const filtered = useMemo(() => {
    let items = resources;

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      items = items.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.excerpt.toLowerCase().includes(q) ||
          r.tags.some((t) => t.toLowerCase().includes(q)) ||
          r.category.toLowerCase().includes(q) ||
          r.type.toLowerCase().includes(q)
      );
    }

    if (activeType !== "All") {
      items = items.filter((r) => r.type === activeType);
    }

    if (activeCategory !== "All") {
      items = items.filter((r) => r.category === activeCategory);
    }

    return items;
  }, [resources, search, activeType, activeCategory]);

  const hasFilters =
    search.trim() !== "" || activeType !== "All" || activeCategory !== "All";

  function clearFilters() {
    setSearch("");
    setActiveType("All");
    setActiveCategory("All");
  }

  return (
    <div>
      {/* ── Controls ── */}
      <div className="space-y-4">
        {/* Search */}
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search guides, templates, checklists…"
            className="h-12 w-full rounded-xl border border-border bg-card pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand/60 focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </div>

        {/* Type tabs */}
        <div className="flex flex-wrap gap-2">
          {(["All", ...types] as const).map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type as ResourceType | "All")}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
                activeType === type
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-surface text-muted-foreground hover:bg-card hover:text-foreground"
              )}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap gap-2">
          {(["All", ...categories] as const).map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setActiveCategory(cat as ResourceCategory | "All")
              }
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
                activeCategory === cat
                  ? "border-brand/40 bg-brand/10 text-brand"
                  : "border-border bg-transparent text-muted-foreground hover:border-border hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Results bar ── */}
      <div className="mt-8 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {filtered.length === resources.length
            ? `${resources.length} resource${resources.length !== 1 ? "s" : ""}`
            : `${filtered.length} of ${resources.length} resources`}
        </p>
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
          >
            <X className="size-3" aria-hidden="true" />
            Clear filters
          </button>
        )}
      </div>

      {/* ── Grid ── */}
      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-3 text-center">
          <span className="inline-flex size-14 items-center justify-center rounded-xl bg-surface text-muted-foreground">
            <SlidersHorizontal className="size-6" aria-hidden="true" />
          </span>
          <p className="font-display text-base font-semibold text-foreground">
            No resources match your filters
          </p>
          <p className="text-sm text-muted-foreground">
            Try a different search term or clear the active filters.
          </p>
          <button
            onClick={clearFilters}
            className="mt-2 text-sm font-semibold text-brand hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
