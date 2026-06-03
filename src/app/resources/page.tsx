import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, ArrowRight, CalendarCheck } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { getAllResources, getFeaturedResource } from "@/lib/resources";
import { getAllArticles } from "@/lib/insights";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { FeaturedResource } from "@/components/resources/featured-resource";
import { ResourceGrid } from "@/components/resources/resource-grid";
import { ResourcesInsightsStrip } from "@/components/resources/resources-insights-strip";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, templates, checklists and tools built from the work we do with growing organisations every day — free to access, no sales call required.",
  alternates: { canonical: `${siteConfig.url}/resources` },
  openGraph: {
    title: `Resources — ${siteConfig.name}`,
    description:
      "Practical knowledge for organisations serious about growth. Guides, templates, checklists and insights — all in one place.",
    url: `${siteConfig.url}/resources`,
  },
};

// ── Inline FAQ ────────────────────────────────────────────────────────────────

const hubFaqs = [
  {
    q: "Are these resources actually free?",
    a: "Yes — every guide, template and checklist is free. Gated resources ask for your email so we can send the download link and occasionally share relevant updates. No payment, ever.",
  },
  {
    q: "Why do some resources ask for more details?",
    a: "More detailed resources — multi-page guides and comparison sheets — ask for a name and company alongside your email. It helps us send the right follow-up and understand which topics matter most.",
  },
  {
    q: "Can I share these with my team?",
    a: "Absolutely. All resources are for internal business use and can be shared across your team. We only ask that you don't republish or resell them.",
  },
  {
    q: "How often are new resources added?",
    a: "We publish new guides and templates roughly monthly — typically alongside an Insights article covering the same topic in depth.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ResourcesPage() {
  const featuredResource = getFeaturedResource();
  const allResources = getAllResources();
  // Three most-recent articles for the Insights integration strip
  const recentArticles = getAllArticles().slice(0, 3);

  return (
    <>
      {/* 1 — Hero */}
      <PageHeader
        eyebrow="Resources"
        title="Practical knowledge, ready to use."
        description="Guides, templates, checklists and downloads built from the work we do with growing organisations every day. Free to access — no sales call required."
      />

      {/* 2 — Featured Resource */}
      {featuredResource && (
        <Section id="featured" surface>
          <SectionHeading
            eyebrow="Featured resource"
            title="Start here."
            description="Our most comprehensive resource — built for executives and operations leads beginning a transformation or technology programme."
            className="mx-auto"
          />
          <div className="mt-10">
            <Reveal>
              <FeaturedResource resource={featuredResource} />
            </Reveal>
          </div>
        </Section>
      )}

      {/* 3 — Resource Library */}
      <Section id="library">
        <SectionHeading
          eyebrow="Resource library"
          title="Guides, templates and checklists."
          description="Filter by type or category — or search for the specific topic you need. Every resource is free to download."
          className="mx-auto"
        />
        <div className="mt-10">
          <ResourceGrid resources={allResources} />
        </div>
      </Section>

      {/* 4 — Insights Integration */}
      <Section id="insights-integration" surface>
        <ResourcesInsightsStrip articles={recentArticles} />
      </Section>

      {/* 5 — FAQ */}
      <Section id="resources-faq">
        <SectionHeading
          eyebrow="Common questions"
          title="Quick answers."
          description="The questions we get most often about these resources."
          className="mx-auto"
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {hubFaqs.map((faq, i) => (
            <Reveal key={faq.q} delay={(i % 2) * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <HelpCircle className="size-3.5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-sm font-semibold leading-snug tracking-tight text-foreground">
                    {faq.q}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {faq.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-8 text-center">
            <Link
              href="/resources/faq"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
            >
              See all frequently asked questions
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* 6 — CTA */}
      <Section id="resources-cta" bleed className="py-20 lg:py-28">
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
                  Ready to go further?
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-primary-foreground text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                  Get answers specific to your situation.
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/70 text-pretty">
                  Resources give you frameworks. A consultation gives you a plan
                  built around your organisation, your team and your constraints.
                  No pressure — just a clear conversation.
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button
                    asChild
                    variant="brand"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <Link href="/contact">
                      <CalendarCheck className="size-4" />
                      Book a free consultation
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="w-full border border-white/15 bg-white/10 text-primary-foreground shadow-soft hover:bg-white/15 sm:w-auto"
                  >
                    <Link href="/insights">
                      Browse insights
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
