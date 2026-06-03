"use client";

import * as React from "react";
import { Search, PenLine, Code2, Rocket, TrendingUp } from "lucide-react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

const steps = [
  {
    step: "01",
    title: "Discover",
    icon: Search,
    summary:
      "We learn your business, map the current state and pinpoint where technology will move the needle most.",
    detail:
      "In-depth stakeholder interviews, process mapping and a technology landscape review. You receive a written findings summary with prioritised opportunities before any solution is proposed.",
  },
  {
    step: "02",
    title: "Design",
    icon: PenLine,
    summary:
      "We shape the solution and roadmap — prioritised by impact, feasibility and your real-world constraints.",
    detail:
      "Architecture decisions, integration design, UX wireframes and a phased delivery plan. You review and approve every decision before a single line of code is written.",
  },
  {
    step: "03",
    title: "Build",
    icon: Code2,
    summary:
      "A focused team delivers with AI-assisted speed and rigorous quality, keeping you in the loop throughout.",
    detail:
      "Iterative sprints with weekly demos. Code review, automated testing and staged deployments are standard — not optional extras. You always know where things stand.",
  },
  {
    step: "04",
    title: "Deploy",
    icon: Rocket,
    summary:
      "Controlled rollout with monitoring, documentation and hands-on knowledge transfer to your team.",
    detail:
      "Zero-downtime deployments, runbooks and dedicated support during go-live. Your team is trained and confident before we step back — no black-box handoffs.",
  },
  {
    step: "05",
    title: "Optimize",
    icon: TrendingUp,
    summary:
      "We measure, refine and harden the system so it keeps delivering as your organization grows.",
    detail:
      "Ongoing performance reviews, usage analytics and a continuous improvement backlog. The system gets better over time — it doesn't stagnate after launch.",
  },
];

export function Process() {
  const [active, setActive] = React.useState(0);
  const activeStep = steps[active];

  return (
    <Section id="process">
      <SectionHeading
        eyebrow="Process"
        title="A clear path from intent to measurable outcome"
        description="A disciplined process that keeps strategy and execution aligned at every step — so nothing gets lost between the plan and the result."
        align="center"
        className="mx-auto"
      />

      {/* Step navigation tabs */}
      <Reveal>
        <div className="mt-14 flex flex-col gap-2 sm:flex-row sm:gap-0 sm:overflow-hidden sm:rounded-2xl sm:border sm:border-border sm:shadow-card">
          {steps.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                key={item.step}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "group flex flex-1 flex-col gap-1.5 rounded-xl border border-border p-5 text-left transition-colors duration-200",
                  "sm:rounded-none sm:border-0 sm:border-r sm:last:border-r-0 sm:p-6",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-surface"
                )}
                aria-pressed={isActive}
                aria-label={`Step ${item.step}: ${item.title}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "inline-flex size-8 items-center justify-center rounded-lg transition-colors duration-200",
                      isActive
                        ? "bg-brand/20 text-brand"
                        : "bg-surface text-muted-foreground group-hover:bg-border group-hover:text-foreground"
                    )}
                  >
                    <item.icon className="size-4" aria-hidden="true" />
                  </span>
                  <span
                    className={cn(
                      "text-[11px] font-semibold uppercase tracking-widest transition-colors duration-200",
                      isActive ? "text-brand" : "text-muted-foreground"
                    )}
                  >
                    {item.step}
                  </span>
                </div>
                <p
                  className={cn(
                    "font-display text-sm font-semibold tracking-tight",
                    isActive ? "text-primary-foreground" : "text-foreground"
                  )}
                >
                  {item.title}
                </p>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Active step detail panel — key forces Reveal to re-run on step change */}
      <Reveal key={active} delay={60}>
        <div className="mt-4 rounded-2xl border border-border bg-surface p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
            {/* Summary */}
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                  <activeStep.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-display text-sm font-semibold text-brand">
                  {activeStep.step}
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-foreground">
                {activeStep.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty">
                {activeStep.summary}
              </p>
            </div>

            {/* Detail card */}
            <div className="flex items-start">
              <div className="w-full rounded-xl border border-border bg-card p-6">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  What this looks like
                </p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground text-pretty">
                  {activeStep.detail}
                </p>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div
            className="mt-8 flex items-center gap-1.5"
            role="progressbar"
            aria-valuenow={active + 1}
            aria-valuemin={1}
            aria-valuemax={steps.length}
            aria-label={`Step ${active + 1} of ${steps.length}`}
          >
            {steps.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-1 flex-1 rounded-full transition-colors duration-300",
                  i <= active ? "bg-brand" : "bg-border"
                )}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
