import * as React from "react";
import { Users, GitBranch, Server, Zap, BarChart3, TrendingUp } from "lucide-react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

/**
 * Visual chain: the six layers that connect people to growth.
 * Nodes 01–03 (inputs) use the dark primary palette.
 * Nodes 04–06 (outputs) use the brand accent palette to signal
 * the transformation Paravyoma drives.
 */
const nodes = [
  {
    step: "01",
    icon: Users,
    label: "People",
    description:
      "Your team, customers and stakeholders — the human layer every system must serve.",
    variant: "primary" as const,
  },
  {
    step: "02",
    icon: GitBranch,
    label: "Processes",
    description:
      "Workflows, rules and operating procedures that define how work actually gets done.",
    variant: "primary" as const,
  },
  {
    step: "03",
    icon: Server,
    label: "Systems",
    description:
      "The software, integrations and data infrastructure that support and connect your work.",
    variant: "primary" as const,
  },
  {
    step: "04",
    icon: Zap,
    label: "Automation",
    description:
      "Intelligent triggers that eliminate manual steps, reduce error and compress cycle time.",
    variant: "brand" as const,
  },
  {
    step: "05",
    icon: BarChart3,
    label: "Insights",
    description:
      "Real-time visibility across every layer — so the right people see the right signals.",
    variant: "brand" as const,
  },
  {
    step: "06",
    icon: TrendingUp,
    label: "Growth",
    description:
      "Compounding operational efficiency that lets the business scale without friction.",
    variant: "brand" as const,
  },
];

export function SystemsFlow() {
  return (
    <Section id="systems" surface>
      <SectionHeading
        eyebrow="The business systems chain"
        title={
          <>
            Every outcome starts with
            <br />
            the same six layers.
          </>
        }
        description="Technology only creates lasting value when it's aligned to people, embedded in processes and wired into your systems. We work across all six — from the ground up."
        align="center"
        className="mx-auto"
      />

      {/* Input / Output divider */}
      <div className="mt-14 flex items-center gap-4">
        <span className="h-px flex-1 bg-border" aria-hidden="true" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Foundation
        </span>
        <span className="h-px w-8 bg-border" aria-hidden="true" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
          Outcomes
        </span>
        <span className="h-px flex-1 bg-border" aria-hidden="true" />
      </div>

      {/* Node grid — matches Services card pattern */}
      <div className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-card sm:grid-cols-2 lg:grid-cols-3">
        {nodes.map((node, i) => (
          <Reveal key={node.step} delay={(i % 3) * 80}>
            <div className="flex h-full flex-col bg-card p-7 lg:p-8">
              {/* Icon + step badge */}
              <div className="flex items-start justify-between">
                <span
                  className={cn(
                    "inline-flex size-11 items-center justify-center rounded-xl shadow-soft",
                    node.variant === "primary"
                      ? "bg-primary text-primary-foreground"
                      : "bg-brand text-brand-foreground"
                  )}
                >
                  <node.icon className="size-5" aria-hidden="true" />
                </span>
                <span
                  className={cn(
                    "font-display text-sm font-semibold",
                    node.variant === "primary"
                      ? "text-muted-foreground"
                      : "text-brand"
                  )}
                >
                  {node.step}
                </span>
              </div>

              <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-foreground">
                {node.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                {node.description}
              </p>

              {/* Accent underline */}
              <div className="mt-auto pt-6" aria-hidden="true">
                <div
                  className={cn(
                    "h-0.5 w-8 rounded-full",
                    node.variant === "primary" ? "bg-border" : "bg-brand/40"
                  )}
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
