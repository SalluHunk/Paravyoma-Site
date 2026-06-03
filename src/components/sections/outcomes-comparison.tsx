import * as React from "react";
import { XCircle, CheckCircle2 } from "lucide-react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const beforeItems = [
  "Manual, repetitive work drains team capacity",
  "Fragmented systems create information silos",
  "Limited visibility into operations and performance",
  "Reactive decisions made without reliable data",
  "Scaling requires proportional headcount and cost",
];

const afterItems = [
  "Unified workflows free your team for higher-value work",
  "Connected systems with a single source of truth",
  "Clear reporting and dashboards across every layer",
  "Proactive, data-driven decisions at every level",
  "Operations scale without proportional cost increase",
];

export function OutcomesComparison() {
  return (
    <Section id="outcomes">
      <SectionHeading
        eyebrow="The difference"
        title="What changes when technology is done right"
        description="The gap between where most businesses are and where they could be isn't a people problem — it's a systems problem. Here's what closing that gap looks like."
        align="center"
        className="mx-auto"
      />

      <div className="mt-14 grid gap-4 lg:grid-cols-2 lg:gap-0">
        {/* Before */}
        <Reveal>
          <div className="flex h-full flex-col rounded-2xl rounded-b-none border border-border bg-surface p-8 lg:rounded-l-2xl lg:rounded-r-none lg:rounded-bl-2xl lg:rounded-br-none">
            <div className="mb-7 inline-flex items-center gap-2">
              <span className="rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                Before Paravyoma
              </span>
            </div>

            <ul className="space-y-4">
              {beforeItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle
                    className="mt-0.5 size-4 shrink-0 text-muted-foreground/40"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* After */}
        <Reveal delay={120}>
          <div className="flex h-full flex-col rounded-2xl rounded-t-none border border-primary/20 bg-primary p-8 text-primary-foreground lg:rounded-r-2xl lg:rounded-l-none lg:rounded-tl-none lg:rounded-bl-none">
            <div className="mb-7 inline-flex items-center gap-2">
              <span className="rounded-md border border-brand/30 bg-brand/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-brand">
                With Paravyoma
              </span>
            </div>

            <ul className="space-y-4">
              {afterItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-primary-foreground/75">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
