import * as React from "react";
import {
  Target,
  UserCheck,
  Eye,
  Repeat2,
  BrainCircuit,
} from "lucide-react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

// ── Update these as Paravyoma grows ─────────────────────────────────────────
// Each entry: value (the displayed number/text) + label shown below it.
const stats: ReadonlyArray<{ value: string; label: string }> = [];
// ────────────────────────────────────────────────────────────────────────────

const pillars = [
  {
    icon: Target,
    title: "Outcome-first approach",
    description:
      "Every engagement starts with the business result, not the technology. We only recommend what demonstrably moves your numbers.",
  },
  {
    icon: UserCheck,
    title: "Senior-level involvement",
    description:
      "Experienced practitioners make the decisions — not junior staff executing scripts. Senior minds stay on your work from start to finish.",
  },
  {
    icon: Eye,
    title: "Transparent delivery",
    description:
      "Clear ownership, visible progress and honest timelines. No black boxes, no surprises — direct communication at every stage.",
  },
  {
    icon: Repeat2,
    title: "Long-term partnership",
    description:
      "We measure success six months after launch, not the day we hand it over. We're built for the long game — not one-and-done engagements.",
  },
  {
    icon: BrainCircuit,
    title: "AI-assisted, human-accountable",
    description:
      "Modern tooling amplifies what our team delivers. But every decision and every outcome is owned by people — never handed off to automation.",
  },
] as const;

export function Credibility() {
  return (
    <Section id="credibility" surface>
      <SectionHeading
        eyebrow="Why clients trust Paravyoma"
        title={
          <>
            We measure ourselves by outcomes,
            <br className="hidden sm:block" />
            not outputs.
          </>
        }
        description="Not just a vendor relationship — a long-term partner invested in what actually happens after go-live."
        align="center"
        className="mx-auto"
      />

      {/* ── Stats band ────────────────────────────────────────────────── */}
      {stats.length > 0 ? (
        <Reveal>
          <div className="mt-14 overflow-hidden rounded-2xl bg-primary shadow-lift">
            <dl className="grid grid-cols-2 divide-x divide-y divide-primary-foreground/10 lg:grid-cols-4 lg:divide-y-0">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center px-6 py-10 text-center"
                >
                  <dt className="order-2 mt-2 text-sm font-medium text-primary-foreground/60">
                    {stat.label}
                  </dt>
                  <dd className="order-1 font-display text-4xl font-bold tracking-tight text-brand sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      ) : null}

      {/* ── Trust pillars ──────────────────────────────────────────────── */}
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar, i) => (
          <Reveal
            key={pillar.title}
            delay={(i % 3) * 80}
            className={cn(
              // On tablet (sm), the 5th card spans both columns so it
              // never orphans. On desktop (lg) it returns to 1-col width.
              i === pillars.length - 1 && "sm:col-span-2 lg:col-span-1"
            )}
          >
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 lg:p-8">
              {/* Icon */}
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                <pillar.icon className="size-5" aria-hidden="true" />
              </span>

              {/* Copy */}
              <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                {pillar.description}
              </p>

              {/* Accent underline — signals brand without being loud */}
              <div
                className="mt-6 h-0.5 w-8 rounded-full bg-brand/30"
                aria-hidden="true"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
