import * as React from "react";
import { Quote } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";

interface TestimonialSpotlightProps {
  quote: string;
  role: string;
  organization: string;
  outcome: string;
}

export function TestimonialSpotlight({
  quote,
  role,
  organization,
  outcome,
}: TestimonialSpotlightProps) {
  return (
    <Reveal>
      <figure className="rounded-2xl border border-brand/20 bg-card p-7 shadow-card lg:p-9">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <Quote className="size-5 text-brand" aria-hidden="true" />
            <blockquote className="mt-5 font-display text-xl font-semibold leading-snug tracking-tight text-foreground text-balance sm:text-2xl">
              &ldquo;{quote}&rdquo;
            </blockquote>
          </div>
          <div className="w-full rounded-xl border border-border bg-surface p-4 lg:w-64">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              Outcome
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">
              {outcome}
            </p>
          </div>
        </div>
        <figcaption className="mt-7 border-t border-border pt-5">
          <p className="font-semibold text-foreground">{role}</p>
          <p className="mt-1 text-sm text-muted-foreground">{organization}</p>
        </figcaption>
      </figure>
    </Reveal>
  );
}
