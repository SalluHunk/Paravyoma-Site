import * as React from "react";
import Link from "next/link";
import { TriangleAlert, Lightbulb, Boxes, TrendingUp, Check } from "lucide-react";

import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import type { Industry } from "@/lib/industries";

/** A labelled aspect block (challenges, helps, solutions, outcomes). */
function Aspect({
  icon: Icon,
  label,
  children,
  className,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft lg:p-7",
        className
      )}
    >
      <div className="flex items-center gap-2.5">
        <span className="inline-flex size-8 items-center justify-center rounded-lg border border-border bg-surface text-brand">
          <Icon className="size-4" aria-hidden="true" />
        </span>
        <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          {label}
        </h3>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function IndustryDetail({
  industry,
  index,
}: {
  industry: Industry;
  index: number;
}) {
  const Icon = industry.icon;
  const surface = index % 2 === 1;

  return (
    <Section id={industry.id} surface={surface} className="scroll-mt-24">
      {/* Identity header */}
      <Reveal>
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-6">
          <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
            <Icon className="size-6" aria-hidden="true" />
          </span>
          <div className="max-w-2xl">
            <span className="eyebrow">Industry {industry.number}</span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
              {industry.name}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              {industry.lead}
            </p>
          </div>
        </div>
      </Reveal>

      {/* Four-part structure */}
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <Aspect icon={TriangleAlert} label="Common challenges">
            <ul className="space-y-3">
              {industry.challenges.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-border"
                  />
                  <span className="text-[0.95rem] leading-relaxed text-foreground/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Aspect>
        </Reveal>

        <Reveal delay={80}>
          <Aspect icon={Lightbulb} label="How Paravyoma helps">
            <p className="text-[0.95rem] leading-relaxed text-muted-foreground text-pretty">
              {industry.helps}
            </p>
          </Aspect>
        </Reveal>

        <Reveal delay={120}>
          <Aspect icon={Boxes} label="Recommended solutions">
            <ul className="flex flex-wrap gap-2">
              {industry.solutions.map((solution) => (
                <li key={solution}>
                  <Link
                    href="/#solutions"
                    className="inline-flex items-center rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-brand/30 hover:bg-brand/10 hover:text-brand"
                  >
                    {solution}
                  </Link>
                </li>
              ))}
            </ul>
          </Aspect>
        </Reveal>

        <Reveal delay={160}>
          <Aspect icon={TrendingUp} label="Measurable outcomes">
            <ul className="space-y-3">
              {industry.outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-[0.95rem] leading-relaxed text-foreground/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Aspect>
        </Reveal>
      </div>
    </Section>
  );
}
