"use client";

import * as React from "react";
import { TrendingUp, Zap, BarChart3, Bot } from "lucide-react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

// ── CMS-ready data ────────────────────────────────────────────────────────────
// Replace this array with a fetch from your CMS / API when ready.
// The displayed value renders as: prefix + animatedNumber + suffix
const metrics: MetricDef[] = [
  {
    id: "efficiency",
    numeric: 60,
    prefix: "+",
    suffix: "%",
    label: "Operational Efficiency",
    description:
      "Teams spend less time on repetitive tasks and more on decisions that move the business forward.",
    icon: TrendingUp,
  },
  {
    id: "response-time",
    numeric: 70,
    prefix: "-",
    suffix: "%",
    label: "Response Time",
    description:
      "Automated workflows compress the gap between request and resolution — across every department.",
    icon: Zap,
  },
  {
    id: "visibility",
    numeric: 100,
    prefix: "",
    suffix: "%",
    label: "Process Visibility",
    description:
      "Every workflow auditable and measurable. Full transparency into operations — no black boxes.",
    icon: BarChart3,
  },
  {
    id: "manual-reduction",
    numeric: 80,
    prefix: "-",
    suffix: "%",
    label: "Manual Work Reduction",
    description:
      "Routine data entry and hand-offs replaced by intelligent automation that never misses a step.",
    icon: Bot,
  },
];
// ─────────────────────────────────────────────────────────────────────────────

interface MetricDef {
  id: string;
  numeric: number;
  prefix: string;
  suffix: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: "true" }>;
}

function MetricCard({ metric, delay }: { metric: MetricDef; delay: number }) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (prefersReduced) {
          setCount(metric.numeric);
          return;
        }

        const duration = 1500;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          // ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * metric.numeric));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [metric.numeric]);

  return (
    <Reveal delay={delay}>
      <div
        ref={cardRef}
        className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-lift"
      >
        {/* Icon */}
        <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
          <metric.icon className="size-5" aria-hidden="true" />
        </span>

        {/* Animated counter */}
        <p
          className="mt-6 font-display text-5xl font-bold tracking-tight text-brand sm:text-6xl"
          aria-label={`${metric.prefix}${metric.numeric}${metric.suffix}`}
        >
          <span aria-hidden="true">
            {metric.prefix}
            {count}
            {metric.suffix}
          </span>
        </p>

        {/* Label */}
        <h3 className="mt-3 font-display text-base font-semibold tracking-tight text-foreground">
          {metric.label}
        </h3>

        {/* Description */}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
          {metric.description}
        </p>

        {/* Brand accent underline — expands on hover */}
        <div
          className="mt-6 h-0.5 w-8 rounded-full bg-brand/30 transition-all duration-300 group-hover:w-14 group-hover:bg-brand/60"
          aria-hidden="true"
        />
      </div>
    </Reveal>
  );
}

export function MetricsOutcomes() {
  return (
    <Section id="metrics" surface>
      <SectionHeading
        eyebrow="Measurable impact"
        title="Technology should create measurable improvement."
        description="Every system we build is designed to produce outcomes you can track — not just output you can demonstrate."
        align="center"
        className="mx-auto"
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, i) => (
          <MetricCard key={metric.id} metric={metric} delay={i * 80} />
        ))}
      </div>
    </Section>
  );
}
