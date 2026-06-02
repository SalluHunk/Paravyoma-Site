import * as React from "react";
import {
  LayoutGrid,
  Workflow,
  Code2,
  Cpu,
  MessagesSquare,
  Landmark,
} from "lucide-react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

const solutions = [
  {
    icon: LayoutGrid,
    title: "Business Systems",
    description:
      "Unify your tools and data into one reliable system — so information flows and decisions get easier.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Replace repetitive manual work with dependable automation that frees your team for higher-value work.",
  },
  {
    icon: Code2,
    title: "Custom Applications",
    description:
      "Purpose-built software shaped around how your organization actually works — not off-the-shelf compromises.",
  },
  {
    icon: Cpu,
    title: "AI-assisted Operations",
    description:
      "Apply AI where it earns its place: faster execution, sharper insight and less day-to-day operational drag.",
  },
  {
    icon: MessagesSquare,
    title: "Customer Engagement",
    description:
      "Responsive, personal touchpoints that turn first-time visitors into lasting, loyal relationships.",
  },
  {
    icon: Landmark,
    title: "Temple & Community Solutions",
    description:
      "A dignified digital presence and streamlined administration for temples and community institutions.",
  },
];

export function Services() {
  return (
    <Section id="solutions">
      <SectionHeading
        eyebrow="Solutions"
        title="One partner for the systems your organization runs on"
        description="From core business systems to AI-assisted operations, every solution is built around a measurable outcome — not just a deliverable."
        align="center"
        className="mx-auto"
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-card sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution, i) => (
          <Reveal key={solution.title} delay={(i % 3) * 80}>
            <article
              className={cn(
                "group flex h-full flex-col bg-card p-7 transition-colors duration-300 hover:bg-surface lg:p-8"
              )}
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-surface text-primary transition-colors duration-300 group-hover:border-brand/30 group-hover:bg-brand/10 group-hover:text-brand">
                <solution.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-foreground">
                {solution.title}
              </h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted-foreground text-pretty">
                {solution.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
