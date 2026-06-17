import * as React from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  BookOpen,
  BriefcaseBusiness,
  Calendar,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Clock,
  FileText,
  LayoutDashboard,
  Map,
  Minus,
  MonitorSmartphone,
  Quote,
  Route,
  Target,
  Wrench,
} from "lucide-react";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { CaseStudyCard } from "./case-study-card";
import {
  getCaseStudySalesAsset,
  type CaseStudy,
  type CaseStudySalesAsset,
  type CaseStudyVisual,
} from "@/lib/case-studies";

interface CaseStudyLayoutProps {
  caseStudy: CaseStudy;
  related: CaseStudy[];
}

function SectionLabel({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-soft">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function MetricArrow({ direction }: { direction: "up" | "down" | "neutral" }) {
  if (direction === "up")
    return <ArrowUp className="size-4 text-green-500" aria-hidden="true" />;
  if (direction === "down")
    return <ArrowDown className="size-4 text-red-400" aria-hidden="true" />;
  return <Minus className="size-4 text-muted-foreground" aria-hidden="true" />;
}

function buildFallbackSalesAsset(caseStudy: CaseStudy): CaseStudySalesAsset {
  return {
    executiveSummary: [
      { label: "Client situation", value: caseStudy.summary },
      { label: "Mandate", value: caseStudy.challenge.heading },
      { label: "Intervention", value: caseStudy.strategy.heading },
      { label: "Impact", value: caseStudy.results.heading },
    ],
    existingProcess: {
      heading: "The operating model before Paravyoma",
      body: caseStudy.discovery.body,
      steps: caseStudy.discovery.findings,
    },
    visuals: [
      {
        title: "Operating dashboard",
        description:
          "A representative view of the system layer created for this engagement.",
        points: caseStudy.strategy.pillars.slice(0, 3).map((pillar) => pillar.title),
      },
    ],
    testimonial: {
      quote:
        "The engagement gave our team a clearer operating model and better visibility into daily work.",
      name: caseStudy.client,
      role: caseStudy.industry,
    },
    futureRoadmap: caseStudy.implementation.phases.slice(-2),
  };
}

function SummaryGrid({ asset }: { asset: CaseStudySalesAsset }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {asset.executiveSummary.map((item, i) => (
        <Reveal key={item.label} delay={(i % 4) * 60}>
          <div className="flex h-full flex-col border border-border bg-card p-5 shadow-soft">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
              {item.label}
            </span>
            <p className="mt-3 text-sm leading-relaxed text-foreground text-pretty">
              {item.value}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function ProcessTimeline({ asset }: { asset: CaseStudySalesAsset }) {
  return (
    <div className="mt-10 grid gap-4 lg:grid-cols-5">
      {asset.existingProcess.steps.map((step, i) => (
        <Reveal key={step} delay={(i % 5) * 55}>
          <div className="relative flex h-full flex-col border border-border bg-card p-5">
            <span className="font-mono text-[11px] font-bold text-brand/70">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-4 text-sm leading-relaxed text-foreground text-pretty">
              {step}
            </p>
            {i < asset.existingProcess.steps.length - 1 && (
              <ArrowRight
                className="absolute -right-3 top-8 hidden size-5 text-border lg:block"
                aria-hidden="true"
              />
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function VisualProofCard({
  visual,
  index,
}: {
  visual: CaseStudyVisual;
  index: number;
}) {
  const activePoint = visual.points[0] ?? "Primary workflow";

  return (
    <Reveal delay={(index % 2) * 80}>
      <div className="grid h-full overflow-hidden border border-border bg-card shadow-soft lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col justify-between border-b border-border bg-surface p-6 lg:border-b-0 lg:border-r">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex size-9 items-center justify-center rounded-lg border border-brand/25 bg-brand/10 text-brand">
                <MonitorSmartphone className="size-4" aria-hidden="true" />
              </span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Product view {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-foreground">
              {visual.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
              {visual.description}
            </p>
          </div>

          <ul className="mt-8 space-y-3">
            {visual.points.map((point) => (
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

        <div className="bg-primary p-4 sm:p-6">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-red-300" />
                <span className="size-2 rounded-full bg-amber-300" />
                <span className="size-2 rounded-full bg-green-300" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
                Live operations
              </span>
            </div>
            <div className="grid min-h-[300px] gap-0 md:grid-cols-[140px_1fr]">
              <aside className="border-b border-white/10 bg-black/10 p-4 md:border-b-0 md:border-r">
                <div className="mb-4 h-2 w-16 rounded-full bg-white/25" />
                {["Intake", "Queue", "Reports", "Owners"].map((item, itemIndex) => (
                  <div
                    key={item}
                    className={`mb-2 rounded-md px-3 py-2 text-xs ${
                      itemIndex === 0
                        ? "bg-brand text-primary"
                        : "bg-white/[0.06] text-white/55"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </aside>
              <div className="p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="h-2 w-24 rounded-full bg-white/25" />
                    <div className="mt-2 h-2 w-40 rounded-full bg-white/10" />
                  </div>
                  <div className="rounded-md border border-brand/30 bg-brand/15 px-3 py-2 text-xs font-semibold text-brand">
                    {activePoint}
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {["Captured", "Assigned", "Resolved"].map((label, metricIndex) => (
                    <div
                      key={label}
                      className="rounded-lg border border-white/10 bg-white/[0.05] p-3"
                    >
                      <div className="font-display text-xl font-semibold text-white">
                        {metricIndex === 0 ? "100%" : metricIndex === 1 ? "< 2h" : "0"}
                      </div>
                      <div className="mt-1 text-[11px] text-white/45">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 space-y-3">
                  {visual.points.map((point, pointIndex) => (
                    <div
                      key={point}
                      className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3"
                    >
                      <div>
                        <div className="text-xs font-medium text-white/80">
                          {point}
                        </div>
                        <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
                          <div
                            className="h-1.5 rounded-full bg-brand"
                            style={{
                              width: `${82 - pointIndex * 12}%`,
                            }}
                          />
                        </div>
                      </div>
                      <span className="rounded-full bg-white/10 px-2 py-1 font-mono text-[10px] text-white/55">
                        Live
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function CaseStudyLayout({ caseStudy, related }: CaseStudyLayoutProps) {
  const salesAsset =
    getCaseStudySalesAsset(caseStudy.slug) ?? buildFallbackSalesAsset(caseStudy);
  const publishedDate = new Date(caseStudy.publishedAt).toLocaleDateString(
    "en-IN",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 py-3 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All Case Studies
          </Link>
        </div>
      </div>

      <section className="relative overflow-hidden border-b border-border bg-card">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-radial-fade"
        />
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                {caseStudy.industry}
              </span>
              {caseStudy.services.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>

            <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight text-foreground text-pretty sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {caseStudy.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground text-pretty">
              {caseStudy.summary}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="size-4" aria-hidden="true" />
                {caseStudy.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="size-4" aria-hidden="true" />
                Published {publishedDate}
              </span>
              <span>{caseStudy.client}</span>
            </div>
          </div>

          <aside className="border border-border bg-surface p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="size-5 text-brand" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Engagement profile
              </span>
            </div>
            <dl className="mt-6 space-y-5">
              {[
                ["Client", caseStudy.client],
                ["Duration", caseStudy.duration],
                ["Year", String(caseStudy.year)],
                ["Services", caseStudy.services.join(", ")],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <div className="border-b border-border bg-primary">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:grid-cols-6">
            {caseStudy.results.metrics.map((metric, i) => (
              <div key={i} className="flex flex-col px-0 py-6 sm:px-8">
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl font-bold tracking-tight text-brand">
                    {metric.value}
                  </span>
                  <MetricArrow direction={metric.direction} />
                </div>
                <span className="mt-1 text-xs leading-snug text-primary-foreground/60 text-pretty">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Section id="executive-summary" surface>
        <Reveal>
          <SectionLabel icon={FileText} label="01 - Executive summary" />
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              A board-level view of the mandate, intervention and outcome.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              Each success story is structured as a decision asset: what was
              broken, what changed, and what measurable business value followed.
            </p>
          </div>
        </Reveal>
        <div className="mt-10">
          <SummaryGrid asset={salesAsset} />
        </div>
      </Section>

      <Section id="client-challenge">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionLabel icon={AlertTriangle} label="02 - Client challenge" />
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {caseStudy.challenge.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              {caseStudy.challenge.body}
            </p>
          </Reveal>
        </div>
      </Section>

      <Section id="existing-process" surface>
        <Reveal>
          <SectionLabel icon={Route} label="03 - Existing process" />
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {salesAsset.existingProcess.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              {salesAsset.existingProcess.body}
            </p>
          </div>
        </Reveal>
        <ProcessTimeline asset={salesAsset} />
      </Section>

      <Section id="operational-bottlenecks">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <SectionLabel icon={ClipboardList} label="04 - Operational bottlenecks" />
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Where the old process created risk, delay and lost visibility.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {caseStudy.challenge.painPoints.map((point, i) => (
              <Reveal key={point} delay={(i % 2) * 70}>
                <div className="flex h-full gap-4 border border-border bg-card p-5">
                  <span className="mt-1 inline-flex size-7 shrink-0 items-center justify-center rounded-md bg-brand/10 font-mono text-[10px] font-bold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground text-pretty">
                    {point}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="solution-implemented" surface>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionLabel icon={Wrench} label="05 - Solution implemented" />
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {caseStudy.strategy.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              {caseStudy.strategy.body}
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {caseStudy.strategy.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={(i % 2) * 70}>
                <div className="flex h-full flex-col border border-border bg-card p-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-8 items-center justify-center rounded-md border border-brand/20 bg-brand/10">
                      <Target className="size-4 text-brand" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-sm font-semibold tracking-tight text-foreground">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 border border-border bg-card p-6 lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Implementation roadmap
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-foreground">
                {caseStudy.implementation.heading}
              </h3>
            </div>
            <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
              {caseStudy.duration}
            </span>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground text-pretty">
            {caseStudy.implementation.body}
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {caseStudy.implementation.phases.map((phase, i) => (
              <Reveal key={phase.title} delay={(i % 4) * 60}>
                <div className="h-full border border-border bg-surface p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {phase.phase}
                  </span>
                  <h4 className="mt-2 font-display text-base font-semibold tracking-tight text-foreground">
                    {phase.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {phase.description}
                  </p>
                  <span className="mt-5 inline-flex rounded-full border border-border bg-card px-2 py-1 text-[10px] font-medium text-muted-foreground">
                    {phase.duration}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="screenshots-and-visuals">
        <Reveal>
          <SectionLabel icon={LayoutDashboard} label="06 - Screenshots and visuals" />
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Representative operating screens from the implemented system.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              These product-style previews show the decision views, work queues
              and reporting layers buyers expect to inspect during evaluation.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6">
          {salesAsset.visuals.map((visual, i) => (
            <VisualProofCard key={visual.title} visual={visual} index={i} />
          ))}
        </div>
      </Section>

      <Section id="outcomes-achieved" surface>
        <SectionHeading
          eyebrow="07 - Outcomes achieved"
          title={caseStudy.results.heading}
          description={caseStudy.results.narrative}
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudy.results.metrics.map((metric, i) => (
            <Reveal key={i} delay={(i % 3) * 60}>
              <div className="flex h-full flex-col border border-border bg-card p-6 text-center shadow-soft">
                <div className="flex items-center justify-center gap-2">
                  <span className="font-display text-3xl font-bold tracking-tight text-foreground">
                    {metric.value}
                  </span>
                  <MetricArrow direction={metric.direction} />
                </div>
                <p className="mt-2 text-xs leading-snug text-muted-foreground text-pretty">
                  {metric.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="lessons-learned">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionLabel icon={BookOpen} label="08 - Lessons learned" />
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Principles carried into future engagements.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              What the project taught us about change management, adoption and
              durable system design.
            </p>
          </Reveal>
          <div className="mt-10 space-y-5">
            {caseStudy.lessonsLearned.map((lesson, i) => (
              <Reveal key={lesson.title} delay={i * 80}>
                <div className="flex gap-4 border border-border bg-card p-6">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                      {lesson.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {lesson.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="client-testimonial" surface>
        <Reveal>
          <div className="mx-auto max-w-4xl border border-border bg-card p-8 shadow-soft lg:p-10">
            <SectionLabel icon={Quote} label="09 - Client testimonial" />
            <blockquote className="font-display text-2xl font-semibold leading-snug tracking-tight text-foreground text-pretty sm:text-3xl">
              &quot;{salesAsset.testimonial.quote}&quot;
            </blockquote>
            <div className="mt-8 border-t border-border pt-5">
              <p className="text-sm font-semibold text-foreground">
                {salesAsset.testimonial.name}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {salesAsset.testimonial.role}
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section id="future-roadmap">
        <Reveal>
          <SectionLabel icon={Map} label="10 - Future roadmap" />
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              The next value horizon after the initial transformation.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              The engagement was designed as a foundation, not a one-time
              implementation. These are the logical next moves for compounding
              operational value.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {salesAsset.futureRoadmap.map((phase, i) => (
            <Reveal key={phase.title} delay={(i % 2) * 80}>
              <div className="h-full border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                    {phase.phase}
                  </span>
                  <span className="rounded-full border border-border bg-surface px-2 py-1 text-[10px] font-medium text-muted-foreground">
                    {phase.duration}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-foreground">
                  {phase.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {phase.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {related.length > 0 && (
        <Section id="related" surface>
          <SectionHeading
            eyebrow="Related case studies"
            title="More work like this."
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((cs, i) => (
              <Reveal key={cs.slug} delay={(i % 3) * 70}>
                <CaseStudyCard caseStudy={cs} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <Section id="cs-cta" bleed className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center shadow-lift sm:px-12 lg:px-16 lg:py-20">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand/20 blur-3xl"
              />
              <div className="relative mx-auto max-w-xl">
                <span className="eyebrow justify-center text-brand">
                  Ready to get started?
                </span>
                <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-primary-foreground text-balance sm:text-3xl">
                  Let&apos;s build something like this for your organisation.
                </h2>
                <p className="mx-auto mt-4 text-base leading-relaxed text-primary-foreground/70 text-pretty">
                  Tell us what you&apos;re working with today. We&apos;ll show
                  you a clear path forward.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button
                    asChild
                    variant="brand"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <Link href="/contact">
                      <CalendarCheck className="size-4" />
                      Book a discovery call
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="w-full border border-white/15 bg-white/10 text-primary-foreground hover:bg-white/15 sm:w-auto"
                  >
                    <Link href="/case-studies">
                      View all case studies
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
