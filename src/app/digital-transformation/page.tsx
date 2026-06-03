import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardList,
  Workflow,
  BarChart3,
  Zap,
  Search,
  Pencil,
  Settings,
  Users,
  TrendingUp,
  Clock,
  Lightbulb,
  Eye,
  HeartHandshake,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  CalendarCheck,
  Sparkles,
  HelpCircle,
} from "lucide-react";

import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CONSULT_HREF = "/contact?type=Transformation+Consultation";

export const metadata: Metadata = {
  title: "Digital Transformation",
  description:
    "A pragmatic, staged path to a modern operating model — from scattered processes to connected systems, real-time visibility, and automated workflows that scale with your business.",
  alternates: { canonical: `${siteConfig.url}/digital-transformation` },
  openGraph: {
    title: `Digital Transformation — ${siteConfig.name}`,
    description:
      "Modernize operations without disrupting growth. A structured, executive-led transformation framework built for mid-market and growing organizations.",
    url: `${siteConfig.url}/digital-transformation`,
  },
};

// ── 2 — Assessment Areas ──────────────────────────────────────────────────────
const assessmentAreas = [
  {
    icon: ClipboardList,
    title: "Systems Audit",
    description:
      "An inventory of every tool, platform and data source your business currently runs on — what is working, what is duplicated, and what is quietly holding you back.",
    points: [
      "Full stack of current software and integrations",
      "Overlap, redundancy and gap identification",
      "Cost and complexity mapped per function",
    ],
  },
  {
    icon: Workflow,
    title: "Process Mapping",
    description:
      "A visual map of how work actually flows through your organisation — not how it was designed to flow. The gap between the two is where transformation begins.",
    points: [
      "End-to-end process documentation for key functions",
      "Handoff failures and manual workarounds identified",
      "Bottleneck ranking by time and business impact",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Visibility",
    description:
      "Where your data lives, who can access it, how current it is, and whether leadership can see the metrics that actually matter. Most businesses are flying partially blind.",
    points: [
      "Data ownership and access mapped across teams",
      "Reporting gaps and manual aggregation points",
      "Single-source-of-truth feasibility assessed",
    ],
  },
  {
    icon: Zap,
    title: "Automation Opportunities",
    description:
      "A prioritised list of manual, repetitive tasks consuming team time — ranked by effort, impact and ROI. The quick wins you can act on immediately appear here first.",
    points: [
      "Manual steps catalogued across each department",
      "Automation feasibility and tooling options evaluated",
      "Prioritised roadmap ranked by hours saved per week",
    ],
  },
];

// ── 3 — Transformation Framework ─────────────────────────────────────────────
const frameworkStages = [
  {
    icon: Search,
    stage: "Stage 01",
    title: "Assess",
    description:
      "Map current systems, processes, data flows and gaps. Establish a baseline every future decision is grounded in.",
    color: "muted" as const,
  },
  {
    icon: Pencil,
    stage: "Stage 02",
    title: "Design",
    description:
      "Blueprint the future state — systems selected, integrations mapped, workflows designed, sequence prioritised.",
    color: "primary" as const,
  },
  {
    icon: Settings,
    stage: "Stage 03",
    title: "Implement",
    description:
      "Build, configure and test each component. Staged rollouts with checkpoints — no big-bang go-lives.",
    color: "primary" as const,
  },
  {
    icon: Users,
    stage: "Stage 04",
    title: "Adopt",
    description:
      "Training, documentation and hands-on support until your team works fluently in the new way. Adoption is the delivery.",
    color: "primary" as const,
  },
  {
    icon: TrendingUp,
    stage: "Stage 05",
    title: "Optimize",
    description:
      "Measure outcomes against baseline. Identify the next improvement cycle. Transformation is an operating mode, not a project.",
    color: "brand" as const,
  },
];

// ── 4 — Business Outcomes ─────────────────────────────────────────────────────
const outcomes = [
  {
    icon: Clock,
    title: "Reduced Manual Work",
    description:
      "Teams stop spending hours on data entry, report generation and status chasing. Time recovered becomes capacity for growth — not more overtime.",
    metric: "Avg. 12–18 hours recovered per team each week",
  },
  {
    icon: Lightbulb,
    title: "Faster Decisions",
    description:
      "When data is connected and visible, leadership acts in hours — not after days of chasing spreadsheets from three departments and hoping they agree.",
    metric: "Weekly reporting down from days to under an hour",
  },
  {
    icon: Eye,
    title: "Better Visibility",
    description:
      "One live view. Every stakeholder sees the numbers they need — pipeline health, operational load, financial position — without asking anyone for an update.",
    metric: "Single source of truth across all functions",
  },
  {
    icon: HeartHandshake,
    title: "Improved Customer Experience",
    description:
      "Connected back-office systems mean faster responses, fewer errors and clients who consistently deal with a professional, responsive organisation.",
    metric: "Fewer dropped handoffs and faster response cycles",
  },
];

// ── 5 — Executive FAQ ─────────────────────────────────────────────────────────
const faqs = [
  {
    question: "How long does a digital transformation typically take?",
    answer:
      "Scope varies by organisation size, but most engagements begin showing measurable results within 60–90 days. We operate in focused sprints, not multi-year programmes. You do not wait 18 months to see value — early phases are designed to deliver quick wins alongside longer structural improvements.",
  },
  {
    question: "Will this disrupt our current operations?",
    answer:
      "Our staged approach is designed to minimise disruption. We never replace everything at once. Each phase is tested, stable and adopted before the next begins. Most teams report significantly less disruption than they anticipated — because nothing is switched off until the replacement is already working.",
  },
  {
    question: "Do we need to replace all our existing tools?",
    answer:
      "Rarely. Most transformations start by connecting and configuring what you already have — before adding or replacing anything. The goal is integration and visibility first. New tooling is only introduced when it clearly closes a gap that existing systems cannot fill.",
  },
  {
    question: "How is success defined and measured?",
    answer:
      "We define measurable outcomes during the assessment phase — hours saved, error rate reduction, reporting time, lead response time, pipeline visibility. Every engagement has a documented baseline and a clear definition of done. Progress is reviewed at each stage checkpoint.",
  },
  {
    question: "How much time will this ask of our leadership team?",
    answer:
      "We design for minimal leadership involvement — typically one working session per phase, plus a brief checkpoint review. The heavy lifting is ours. You stay informed and in control without running the project day-to-day.",
  },
  {
    question: "What happens if priorities shift mid-engagement?",
    answer:
      "Our framework is built for that. Each stage produces a stable, usable outcome — not a half-finished state. If priorities shift or circumstances change, you can pause between stages without losing what has been built. We plan for this from the start.",
  },
];

export default function DigitalTransformationPage() {
  return (
    <>
      {/* 1 — Hero */}
      <PageHeader
        eyebrow="Digital Transformation"
        title="Modernize operations without disrupting growth."
        description="We help organisations move from manual, disconnected processes to connected systems and real-time visibility — one steady, measured step at a time. No big-bang overhauls. No months of downtime. Just clear progress."
      >
        <Button asChild variant="brand" size="lg">
          <Link href={CONSULT_HREF}>
            <CalendarCheck className="size-4" />
            Schedule a Transformation Consultation
          </Link>
        </Button>
      </PageHeader>

      {/* 2 — Assessment */}
      <Section id="assessment" surface>
        <SectionHeading
          eyebrow="Our assessment approach"
          title="Clarity before commitment."
          description="Before any technology is selected or changed, we map where you are today. A structured assessment gives leadership a clear picture — and a foundation to build the right transformation on."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {assessmentAreas.map((area, i) => (
            <Reveal key={area.title} delay={(i % 2) * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft transition-shadow duration-300 hover:shadow-lift lg:p-10">
                <div className="flex items-center gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10">
                    <area.icon className="size-6 text-brand" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-sm font-semibold tracking-widest text-brand/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {area.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {area.description}
                </p>

                <ul className="mt-6 space-y-3 border-t border-border pt-6">
                  {area.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-brand"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-relaxed text-foreground">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3 — Transformation Framework */}
      <Section id="framework">
        <SectionHeading
          eyebrow="Transformation framework"
          title="Five stages. One steady, sustainable path forward."
          description="Digital transformation fails when it moves too fast or asks too much at once. Our five-stage framework builds momentum without disruption — each phase complete and stable before the next begins."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14">
          <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] lg:gap-2">
            {frameworkStages.map((stage, i) => (
              <React.Fragment key={stage.title}>
                <Reveal delay={i * 90}>
                  <div
                    className={cn(
                      "flex h-full flex-col rounded-2xl border p-6 text-left shadow-soft",
                      stage.color === "muted" && "border-border bg-card",
                      stage.color === "primary" && "border-border bg-card",
                      stage.color === "brand" &&
                        "border-brand/20 bg-primary text-primary-foreground"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={cn(
                          "inline-flex size-10 items-center justify-center rounded-xl shadow-soft",
                          stage.color === "muted" &&
                            "bg-surface text-muted-foreground",
                          stage.color === "primary" &&
                            "bg-primary text-primary-foreground",
                          stage.color === "brand" &&
                            "bg-brand text-brand-foreground"
                        )}
                      >
                        <stage.icon className="size-5" aria-hidden="true" />
                      </span>
                      <span
                        className={cn(
                          "text-[10px] font-semibold uppercase tracking-[0.14em]",
                          stage.color === "brand"
                            ? "text-brand"
                            : "text-muted-foreground"
                        )}
                      >
                        {stage.stage}
                      </span>
                    </div>
                    <h3
                      className={cn(
                        "mt-4 font-display text-sm font-semibold tracking-tight",
                        stage.color === "brand"
                          ? "text-primary-foreground"
                          : "text-foreground"
                      )}
                    >
                      {stage.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-2 text-xs leading-relaxed text-pretty",
                        stage.color === "brand"
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      )}
                    >
                      {stage.description}
                    </p>
                  </div>
                </Reveal>

                {i < frameworkStages.length - 1 ? (
                  <div
                    className="flex items-center justify-center text-brand/50"
                    aria-hidden="true"
                  >
                    <ArrowRight className="hidden size-5 lg:block" />
                    <ArrowDown className="size-5 lg:hidden" />
                  </div>
                ) : null}
              </React.Fragment>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-brand/20 bg-brand/5 p-6">
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Sparkles className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Each stage delivers a usable outcome — not a work-in-progress.
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  If business priorities shift mid-engagement, you can pause
                  between stages without losing what has been built. The framework
                  is designed to be durable under real-world conditions — not just
                  ideal ones.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 4 — Business Outcomes */}
      <Section id="outcomes" surface>
        <SectionHeading
          eyebrow="Business outcomes"
          title="What successful transformation looks like in practice."
          description="These are the measurable changes executives report after a structured transformation. Not technology goals — business goals measured against a real baseline."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-card sm:grid-cols-2">
          {outcomes.map((outcome, i) => (
            <Reveal key={outcome.title} delay={(i % 2) * 80}>
              <div className="flex h-full flex-col bg-card p-8 lg:p-10">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                  <outcome.icon className="size-6" aria-hidden="true" />
                </span>

                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {outcome.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {outcome.description}
                </p>

                <div className="mt-6 flex items-center gap-3 rounded-xl border border-brand/20 bg-brand/5 px-4 py-3">
                  <CheckCircle2
                    className="size-4 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-semibold text-brand">
                    {outcome.metric}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5 — Executive FAQ */}
      <Section id="faq">
        <SectionHeading
          eyebrow="Executive FAQ"
          title="Questions leadership asks before committing."
          description="Straight answers to the questions that matter at the decision-making level — before the first conversation, not after it."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={(i % 2) * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft lg:p-9">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <HelpCircle className="size-4" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-base font-semibold leading-snug tracking-tight text-foreground">
                    {faq.question}
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {faq.answer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 6 — CTA */}
      <Section id="dt-cta" bleed className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center shadow-lift sm:px-12 lg:px-16 lg:py-20">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand/20 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
              >
                <div className="absolute inset-0 bg-grid-slate bg-[size:40px_40px] invert" />
              </div>

              <div className="relative mx-auto max-w-2xl">
                <span className="eyebrow justify-center text-brand">
                  Start with a conversation
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-primary-foreground text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                  Ready to see what your organisation could look like at the
                  other end?
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/70 text-pretty">
                  A Transformation Consultation maps where you are today, where
                  the highest-leverage opportunities are, and what a staged path
                  forward looks like — with clear timelines and measurable
                  outcomes. No pressure. Just clarity.
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button
                    asChild
                    variant="brand"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <Link href={CONSULT_HREF}>
                      <CalendarCheck className="size-4" />
                      Schedule a Transformation Consultation
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="w-full border border-white/15 bg-white/10 text-primary-foreground shadow-soft hover:bg-white/15 sm:w-auto"
                  >
                    <Link href="/solutions">
                      Explore all solutions
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
