import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  UserPlus,
  Headset,
  Settings2,
  BarChart3,
  Library,
  FileText,
  Workflow,
  Sparkles,
  Cpu,
  HeartHandshake,
  CheckCircle2,
  Search,
  PencilRuler,
  Zap,
  LineChart,
  RefreshCw,
  ArrowRight,
  CalendarCheck,
} from "lucide-react";

import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { OperationsSystemPreview } from "@/components/proof/operations-system-preview";
import { cn } from "@/lib/utils";

const STRATEGY_HREF = "/contact?type=AI+Strategy+Session";

export const metadata: Metadata = {
  title: "AI Automation Services",
  description:
    "Practical AI, human-led implementation. We find the automation opportunities that actually move your numbers — lead management, support, operations, reporting and more — without the hype.",
  alternates: { canonical: `${siteConfig.url}/ai-automation` },
  openGraph: {
    title: `AI Automation Services — ${siteConfig.name}`,
    description:
      "Practical AI. Human-led implementation. Automation grounded in business outcomes, not hype.",
    url: `${siteConfig.url}/ai-automation`,
  },
};

const aiProofPreview = {
  modules: [
    "Automation Map",
    "Lead Triage",
    "Support Queue",
    "Documents",
    "Reports",
  ],
  metrics: [
    { label: "Manual steps removed", value: "18", change: "Phase 1" },
    { label: "Avg. response time", value: "< 2h", change: "Target" },
    { label: "Human reviews", value: "14%", change: "Exceptions" },
    { label: "Weekly hours saved", value: "32", change: "Projected" },
  ],
  records: [
    {
      name: "Website enquiry: operations audit",
      meta: "Classified as high-intent and routed to strategy",
      status: "Auto-routed",
    },
    {
      name: "Support request: invoice copy",
      meta: "Draft response prepared, awaiting review",
      status: "Review",
    },
    {
      name: "Vendor document upload",
      meta: "Fields extracted and matched to existing record",
      status: "Processed",
    },
  ],
  workflow: [
    {
      label: "Input captured",
      detail: "Forms, email, documents and WhatsApp messages enter one queue.",
      tone: "done" as const,
    },
    {
      label: "AI classifies",
      detail: "Intent, urgency and required action are identified automatically.",
      tone: "active" as const,
    },
    {
      label: "Human approves",
      detail: "Sensitive or high-value cases stay with the responsible person.",
    },
    {
      label: "System updates",
      detail: "CRM status, follow-up task and reporting dashboard update together.",
    },
  ],
  integrations: ["Website forms", "Email inbox", "WhatsApp", "CRM", "Reports"],
} as const;

// ── AI Opportunity Assessment — what's included ───────────────────────────────
const assessmentItems = [
  "A clear map of your highest-value automation opportunities",
  "Honest ROI estimates — what's worth doing, and what isn't yet",
  "Where AI fits, and just as importantly, where it shouldn't",
  "A prioritised, phased roadmap you can act on immediately",
];

// ── Automation Categories ─────────────────────────────────────────────────────
const categories = [
  {
    icon: UserPlus,
    title: "Lead Management",
    description:
      "Capture, qualify and route leads automatically — so no opportunity slips through and your team focuses on the conversations that matter.",
  },
  {
    icon: Headset,
    title: "Customer Support",
    description:
      "Instant triage, drafted replies and smart routing — faster response times without losing the human touch on the hard cases.",
  },
  {
    icon: Settings2,
    title: "Internal Operations",
    description:
      "Automate the repetitive hand-offs and approvals that quietly slow every team down, freeing capacity for higher-value work.",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    description:
      "Pull data from scattered sources into clear, scheduled reports — accurate numbers ready before anyone has to ask.",
  },
  {
    icon: Library,
    title: "Knowledge Management",
    description:
      "Make your organisation's knowledge instantly searchable, so the right answer is one question away instead of buried in a folder.",
  },
  {
    icon: FileText,
    title: "Document Processing",
    description:
      "Extract, classify and structure information from invoices, forms and contracts — accurately, at a scale people can't match by hand.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Connect the tools you already use into end-to-end workflows that run themselves — with humans in the loop where it counts.",
  },
];

// ── Where AI Helps / Where Humans Lead ────────────────────────────────────────
const aiHelps = [
  "High-volume, repetitive and rules-based tasks",
  "Finding patterns and anomalies across large datasets",
  "24/7 triage, drafting and first-pass responses",
  "Extracting and structuring data from documents",
  "Summarising, classifying and routing information",
];

const humansLead = [
  "Judgment calls, nuance and genuine edge cases",
  "Relationships, trust and sensitive conversations",
  "Strategy, priorities and ethical decisions",
  "Accountability for every outcome that ships",
  "Knowing when not to automate at all",
];

// ── Process ───────────────────────────────────────────────────────────────────
const steps = [
  {
    icon: Search,
    step: "01",
    title: "Assess",
    description:
      "We find where automation creates real value — grounded in your numbers, not the hype cycle.",
  },
  {
    icon: PencilRuler,
    step: "02",
    title: "Design",
    description:
      "We map the workflow, define guardrails and decide exactly where humans stay in the loop.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Automate",
    description:
      "We build and integrate in small, safe increments — shipping value early, never big-bang.",
  },
  {
    icon: LineChart,
    step: "04",
    title: "Measure",
    description:
      "We track outcomes against a real baseline, so impact is proven — not just promised.",
  },
  {
    icon: RefreshCw,
    step: "05",
    title: "Improve",
    description:
      "We refine what works, retire what doesn't, and expand automation as confidence grows.",
  },
];

export default function AiAutomationPage() {
  return (
    <>
      {/* Hero */}
      <PageHeader
        eyebrow="AI Automation Services"
        title="Practical AI. Human-led implementation."
        description="No hype, no black boxes. We find the automation that genuinely moves your numbers — and we keep people accountable for every outcome."
      >
        <Button asChild variant="brand" size="lg">
          <Link href={STRATEGY_HREF}>
            <CalendarCheck className="size-4" />
            Book an AI Strategy Session
          </Link>
        </Button>
      </PageHeader>

      <Section id="automation-preview" surface>
        <Reveal>
          <OperationsSystemPreview
            eyebrow="Visual proof"
            title="An automation system you can inspect, measure and control."
            description="AI is only useful when it sits inside a real workflow. This preview shows how routine work is captured, classified, reviewed and measured without removing human accountability."
            highlight="The highest-value automations are usually practical: routing, drafting, extraction, reminders and reporting."
            {...aiProofPreview}
          />
        </Reveal>
      </Section>

      {/* AI Opportunity Assessment */}
      <Section id="assessment">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <span className="eyebrow">Start here</span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl lg:leading-[1.1]">
                The AI Opportunity Assessment
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
                Most AI projects fail because they start with the technology, not
                the problem. We start the other way around. Before a single line
                is automated, we map where AI will actually pay off for your
                organisation — and where it won&apos;t.
              </p>
              <div className="mt-8">
                <Button asChild variant="brand" size="lg">
                  <Link href={STRATEGY_HREF}>
                    Book an AI Strategy Session
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft lg:p-10">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                  <Sparkles className="size-5" aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand">
                  What you walk away with
                </p>
              </div>
              <ul className="mt-7 space-y-4">
                {assessmentItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 size-5 shrink-0 text-brand"
                      aria-hidden="true"
                    />
                    <span className="text-base leading-relaxed text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Automation Categories */}
      <Section id="categories">
        <SectionHeading
          eyebrow="Automation categories"
          title="Where automation pays for itself."
          description="These are the areas where, again and again, well-designed automation returns real, measurable time and money. We help you pick the right place to start."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-card sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={(i % 3) * 80}>
              <div className="flex h-full flex-col bg-card p-7 lg:p-8">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                  <cat.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-foreground">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {cat.description}
                </p>
                <div
                  className="mt-auto pt-6 h-0.5 w-8 rounded-full bg-brand/30"
                  aria-hidden="true"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Where AI Helps / Where Humans Lead */}
      <Section id="ai-vs-humans" surface>
        <SectionHeading
          eyebrow="Our philosophy"
          title="AI handles the work. People stay in charge."
          description="The dividing line matters more than the technology. We're deliberate about what we hand to machines — and what stays firmly with your team."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-2 lg:gap-0">
          {/* Where AI Helps */}
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl rounded-b-none border border-border bg-surface p-8 lg:rounded-l-2xl lg:rounded-r-none lg:p-10">
              <div className="mb-7 flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Cpu className="size-5" aria-hidden="true" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Where AI helps
                </span>
              </div>
              <ul className="space-y-4">
                {aiHelps.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-brand"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Where Humans Lead */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col rounded-2xl rounded-t-none border border-primary/20 bg-primary p-8 text-primary-foreground lg:rounded-r-2xl lg:rounded-l-none lg:p-10">
              <div className="mb-7 flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand/15 text-brand">
                  <HeartHandshake className="size-5" aria-hidden="true" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-brand">
                  Where humans lead
                </span>
              </div>
              <ul className="space-y-4">
                {humansLead.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-brand"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed text-primary-foreground/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Process */}
      <Section id="ai-process">
        <SectionHeading
          eyebrow="How we work"
          title="A disciplined path from idea to impact."
          description="Five steps that keep every automation grounded in outcomes — measurable, reversible and owned by people at each stage."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 80}>
              <div className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                    <s.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-sm font-semibold text-brand">
                    {s.step}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section id="ai-cta" bleed className="py-20 lg:py-28">
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
                  Let&apos;s be practical
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-primary-foreground text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                  Find out where AI actually pays off for you.
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/70 text-pretty">
                  In one focused session, we&apos;ll look at how your organisation
                  works today and identify the automation opportunities worth
                  pursuing — no jargon, no pressure, just a clear next step.
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button
                    asChild
                    variant="brand"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <Link href={STRATEGY_HREF}>
                      <CalendarCheck className="size-4" />
                      Book an AI Strategy Session
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
