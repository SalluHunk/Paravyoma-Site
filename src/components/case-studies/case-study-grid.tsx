"use client";

import { useState, useMemo } from "react";
import { CaseStudyCard } from "./case-study-card";
import { IndustryFilter } from "./industry-filter";
import { CaseStudySearch } from "./case-study-search";
import { Reveal } from "@/components/shared/reveal";
import type { CaseStudy, Industry } from "@/lib/case-studies";

interface CaseStudyGridProps {
  caseStudies: CaseStudy[];
  industries: Industry[];
}

export function CaseStudyGrid({ caseStudies, industries }: CaseStudyGridProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
  const [query, setQuery] = useState("");

  const counts = useMemo(
    () =>
      Object.fromEntries(
        industries.map((ind) => [
          ind,
          caseStudies.filter((cs) => cs.industry === ind).length,
        ])
      ) as Record<string, number>,
    [caseStudies, industries]
  );

  const filtered = useMemo(() => {
    let result = caseStudies;
    if (selectedIndustry) {
      result = result.filter((cs) => cs.industry === selectedIndustry);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (cs) =>
          cs.title.toLowerCase().includes(q) ||
          cs.tagline.toLowerCase().includes(q) ||
          cs.industry.toLowerCase().includes(q) ||
          cs.services.some((s) => s.toLowerCase().includes(q)) ||
          cs.client.toLowerCase().includes(q)
      );
    }
    return result;
  }, [caseStudies, selectedIndustry, query]);

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <IndustryFilter
          industries={industries}
          selected={selectedIndustry}
          onChange={setSelectedIndustry}
          counts={counts}
        />
        <CaseStudySearch
          value={query}
          onChange={setQuery}
          className="w-full sm:w-72 shrink-0"
        />
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cs, i) => (
            <Reveal key={cs.slug} delay={(i % 3) * 70}>
              <CaseStudyCard caseStudy={cs} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-base font-medium text-foreground">
            No case studies found
          </p>
          <p className="text-sm text-muted-foreground">
            Try a different industry or clear the search.
          </p>
          <button
            onClick={() => {
              setSelectedIndustry(null);
              setQuery("");
            }}
            className="mt-2 text-sm font-semibold text-brand hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {filtered.length > 0 && (
        <p className="mt-6 text-xs text-muted-foreground">
          Showing {filtered.length} of {caseStudies.length} case{" "}
          {caseStudies.length === 1 ? "study" : "studies"}
        </p>
      )}
    </div>
  );
}
