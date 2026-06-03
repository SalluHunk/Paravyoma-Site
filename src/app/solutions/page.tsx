import type { Metadata } from "next";
import {
  CheckCircle2,
  ArrowRight,
  Cpu,
  Workflow,
  Network,
  Landmark,
  Blocks,
} from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { solutions } from "@/lib/solutions";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { ContactCta } from "@/components/sections/contact-cta";

// ── Solution areas (Level 2 hub) ──────────────────────────────────────────────
const solutionAreas = [
  {
    icon: Cpu,
    name: "AI Automation",
    description:
      "Practical, human-led automation that removes repetitive work and frees your team for higher-value tasks.",
    href: "/ai-automation",
  },
  {
    icon: Workflow,
    name: "Digital Transformation",
    description:
      "Move from manual, disconnected processes to connected systems and a single source of truth.",
    href: "/digital-transformation",
  },
  {
    icon: Network,
    name: "CRM & Workflow Systems",
    description:
      "Customer and operational workflows that capture every lead, track every step and scale with you.",
    href: "/crm-workflow-systems",
  },
  {
    icon: Landmark,
    name: "Temple Solutions",
    description:
      "Purpose-built technology for temples and spiritual organizations — designed around how you serve.",
    href: "/temple-solutions",
  },
  {
    icon: Blocks,
    name: "Custom Applications",
    description:
      "Bespoke software built around your exact process when off-the-shelf tools fall short.",
    href: "/custom-applications",
  },
];

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Business outcomes, not deliverables. Explore how Paravyoma helps organisations achieve operational efficiency, workflow automation, customer engagement, and more.",
  alternates: { canonical: `${siteConfig.url}/solutions` },
  openGraph: {
    title: `Solutions — ${siteConfig.name}`,
    description:
      "Organised by business outcome. Each solution addresses a real challenge, delivers a clear result, and is built to last.",
    url: `${siteConfig.url}/solutions`,
  },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="Outcomes, not deliverables"
        description="Every engagement starts with a business problem — not a technology choice. Here is how we help organisations move from where they are to where they need to be."
      />

      {/* Solution areas — Level 2 hub */}
      <Section id="solution-areas" surface>
        <Container>
          <SectionHeading
            eyebrow="Explore by capability"
            title="Five ways we help you grow."
            description="Each area is a focused practice with its own approach and outcomes. Start where the need is sharpest — they connect cleanly as you scale."
            align="center"
            className="mx-auto"
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-card sm:grid-cols-2 lg:grid-cols-3">
            {solutionAreas.map((area, i) => (
              <Reveal key={area.name} delay={(i % 3) * 80}>
                <Link
                  href={area.href}
                  className="group flex h-full flex-col bg-card p-7 transition-colors hover:bg-brand/[0.03] lg:p-8"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                    <area.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-foreground">
                    {area.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {area.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Explore
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Solution cards — one per outcome */}
      <Section id="solutions-list">
        <Container>
          <div className="space-y-6">
            {solutions.map((solution, i) => {
              const Icon = solution.icon;
              const isEven = i % 2 === 0;

              return (
                <Reveal key={solution.id} delay={i * 60}>
                  <div
                    id={solution.id}
                    className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
                  >
                    <div
                      className={`grid lg:grid-cols-2 ${isEven ? "" : "lg:[direction:rtl]"}`}
                    >
                      {/* Accent panel */}
                      <div
                        className={`flex flex-col justify-between gap-8 bg-brand/5 p-8 lg:p-10 ${isEven ? "" : "lg:[direction:ltr]"}`}
                      >
                        <div>
                          <div className="mb-5 flex items-center gap-4">
                            <span className="inline-flex size-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10">
                              <Icon className="size-6 text-brand" aria-hidden="true" />
                            </span>
                            <span className="font-mono text-sm font-semibold tracking-widest text-brand/60">
                              {solution.number}
                            </span>
                          </div>
                          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                            {solution.name}
                          </h2>
                        </div>

                        <div>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand">
                            The Challenge
                          </p>
                          <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                            {solution.challenge}
                          </p>
                        </div>
                      </div>

                      {/* Detail panel */}
                      <div
                        className={`flex flex-col justify-between gap-8 p-8 lg:p-10 ${isEven ? "" : "lg:[direction:ltr]"}`}
                      >
                        <div>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                            Our Approach
                          </p>
                          <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                            {solution.solution}
                          </p>
                        </div>

                        <div>
                          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                            What You Gain
                          </p>
                          <ul className="space-y-2.5">
                            {solution.benefits.map((benefit) => (
                              <li key={benefit} className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                                <span className="text-sm leading-relaxed text-foreground">
                                  {benefit}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <Link
                            href={solution.cta.href}
                            className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
                          >
                            {solution.cta.label}
                            <ArrowRight className="size-4" aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Quick-jump index */}
      <Section id="solutions-index" surface>
        <Container>
          <Reveal>
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <span className="eyebrow justify-center">All Solutions</span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Find the right starting point
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Not sure where to begin? Jump directly to the outcome most
                relevant to your organisation right now.
              </p>
            </div>
          </Reveal>
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, i) => {
              const Icon = solution.icon;
              return (
                <Reveal key={solution.id} delay={i * 60}>
                  <Link
                    href={`#${solution.id}`}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 shadow-soft transition-colors hover:border-brand/40 hover:bg-brand/5"
                  >
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface transition-colors group-hover:border-brand/30 group-hover:bg-brand/10">
                      <Icon
                        className="size-4 text-muted-foreground transition-colors group-hover:text-brand"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="text-sm font-semibold text-foreground transition-colors group-hover:text-brand">
                      {solution.name}
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <ContactCta />
    </>
  );
}
