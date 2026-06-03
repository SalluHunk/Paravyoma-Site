import * as React from "react";
import Link from "next/link";
import {
  AlertTriangle,
  Search,
  Lightbulb,
  Wrench,
  TrendingUp,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Minus,
  Clock,
  Calendar,
  ArrowLeft,
  CalendarCheck,
} from "lucide-react";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { CaseStudyCard } from "./case-study-card";
import type { CaseStudy } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

// TrendingUp imported but referenced via cn for future use — suppress lint
void cn;
void TrendingUp;

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

export function CaseStudyLayout({ caseStudy, related }: CaseStudyLayoutProps) {
  const publishedDate = new Date(caseStudy.publishedAt).toLocaleDateString(
    "en-IN",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 py-3 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All Case Studies
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-card">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-radial-fade"
        />
        <div className="mx-auto max-w-[1200px] px-6 py-14 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl">
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
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
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
        </div>
      </section>

      {/* Results metrics band */}
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

      {/* 01 Challenge */}
      <Section id="challenge" surface>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionLabel icon={AlertTriangle} label="01 — Challenge" />
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {caseStudy.challenge.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              {caseStudy.challenge.body}
            </p>
            <ul className="mt-8 space-y-3">
              {caseStudy.challenge.painPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 size-2 shrink-0 rounded-full bg-brand/60"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-foreground">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* 02 Discovery */}
      <Section id="discovery">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionLabel icon={Search} label="02 — Discovery" />
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {caseStudy.discovery.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              {caseStudy.discovery.body}
            </p>
          </Reveal>
          <div className="mt-8 rounded-2xl border border-border bg-card p-6 lg:p-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Key findings
            </p>
            <ul className="space-y-4">
              {caseStudy.discovery.findings.map((finding, i) => (
                <Reveal key={i} delay={i * 60}>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 font-mono text-[11px] font-bold text-brand/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">
                      {finding}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 03 Strategy */}
      <Section id="strategy" surface>
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <SectionLabel icon={Lightbulb} label="03 — Strategy" />
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {caseStudy.strategy.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              {caseStudy.strategy.body}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {caseStudy.strategy.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={(i % 2) * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-8 items-center justify-center rounded-lg border border-brand/20 bg-brand/10">
                      <span className="font-mono text-[10px] font-bold text-brand">
                        {String(i + 1).padStart(2, "0")}
                      </span>
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
      </Section>

      {/* 04 Implementation */}
      <Section id="implementation">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionLabel icon={Wrench} label="04 — Implementation" />
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {caseStudy.implementation.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              {caseStudy.implementation.body}
            </p>
          </Reveal>
          <div className="mt-10 space-y-0">
            {caseStudy.implementation.phases.map((phase, i) => (
              <Reveal key={phase.title} delay={i * 70}>
                <div className="relative flex gap-5 pb-8 last:pb-0">
                  {i < caseStudy.implementation.phases.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute left-4 top-10 bottom-0 w-px bg-border"
                    />
                  )}
                  <div className="relative mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-brand bg-card">
                    <span className="font-mono text-[10px] font-bold text-brand">
                      {i + 1}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {phase.phase}
                      </span>
                      <span className="inline-flex items-center rounded-full border border-border bg-surface px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        {phase.duration}
                      </span>
                    </div>
                    <h3 className="mt-1 font-display text-base font-semibold tracking-tight text-foreground">
                      {phase.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* 05 Results */}
      <Section id="results" surface>
        <SectionHeading
          eyebrow="05 — Results"
          title={caseStudy.results.heading}
          description={caseStudy.results.narrative}
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudy.results.metrics.map((metric, i) => (
            <Reveal key={i} delay={(i % 3) * 60}>
              <div className="flex flex-col rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
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

      {/* 06 Lessons Learned */}
      <Section id="lessons">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionLabel icon={BookOpen} label="06 — Lessons Learned" />
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              What this engagement taught us.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Principles we carried into every project that followed.
            </p>
          </Reveal>
          <div className="mt-10 space-y-5">
            {caseStudy.lessonsLearned.map((lesson, i) => (
              <Reveal key={lesson.title} delay={i * 80}>
                <div className="flex gap-4 rounded-2xl border border-border bg-card p-6">
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

      {/* 07 Related Case Studies */}
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

      {/* CTA */}
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
