import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";

import type { KnowledgeCenterConfig } from "@/lib/knowledge";
import type { Resource } from "@/lib/resources";
import type { Article } from "@/lib/insights";
import type { CaseStudy } from "@/lib/case-studies";

import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { FeaturedResource } from "@/components/resources/featured-resource";
import { ResourceCard } from "@/components/resources/resource-card";
import { ArticleCard } from "@/components/insights/article-card";
import { CaseStudyCard } from "@/components/case-studies/case-study-card";
import { Assessment } from "./assessment";

/**
 * Reusable Authority Engine pillar-page template (Phase 5).
 * One instance per knowledge center — the route gathers data from the
 * existing resources/insights/case-studies data layers and this component
 * arranges it: problem framing -> flagship guide -> assessment -> spokes -> proof -> CTA.
 */

interface Props {
  config: KnowledgeCenterConfig;
  flagshipGuide: Resource | undefined;
  spokeResources: Resource[];
  articles: Article[];
  caseStudies: CaseStudy[];
}

export function KnowledgeCenterLayout({
  config,
  flagshipGuide,
  spokeResources,
  articles,
  caseStudies,
}: Props) {
  return (
    <>
      {/* 1 — Hero */}
      <PageHeader
        eyebrow={config.eyebrow}
        title={config.title}
        description={config.description}
      />

      {/* 2 — Problem framing */}
      <Section id="problem" surface>
        <SectionHeading
          eyebrow="Why this matters"
          title={config.problem.heading}
          description={config.problem.body}
          align="center"
          className="mx-auto"
        />
        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {config.problem.painPoints.map((point) => (
            <div
              key={point}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-soft"
            >
              <span
                className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand"
                aria-hidden="true"
              />
              <span className="text-sm leading-relaxed text-foreground">
                {point}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* 3 — Flagship guide */}
      {flagshipGuide && (
        <Section id="flagship-guide">
          <SectionHeading
            eyebrow="Start here"
            title="The flagship guide."
            description="Our most complete resource on this topic — free, no sales call required."
            align="center"
            className="mx-auto"
          />
          <div className="mt-10">
            <Reveal>
              <FeaturedResource resource={flagshipGuide} />
            </Reveal>
          </div>
        </Section>
      )}

      {/* 4 — Assessment */}
      <Section id="assessment" surface>
        <SectionHeading
          eyebrow="Where do you stand?"
          title="Get your score."
          description="A two-minute self-assessment, scored instantly."
          align="center"
          className="mx-auto"
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <Assessment config={config.assessment} />
        </div>
      </Section>

      {/* 5 — Insights spokes */}
      {articles.length > 0 && (
        <Section id="insights">
          <SectionHeading
            eyebrow="Insights"
            title="Further reading."
            description="Articles that go deeper on specific parts of this topic."
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <Reveal key={article.slug} delay={(i % 3) * 80}>
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* 6 — Resource spokes */}
      {spokeResources.length > 0 && (
        <Section id="resources-spokes" surface>
          <SectionHeading
            eyebrow="Templates & checklists"
            title="Tools you can use today."
            description="Practical downloads built from the same engagements as the guide above."
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {spokeResources.map((resource, i) => (
              <Reveal key={resource.id} delay={(i % 3) * 80}>
                <ResourceCard resource={resource} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* 7 — Case study proof */}
      {caseStudies.length > 0 && (
        <Section id="proof">
          <SectionHeading
            eyebrow="Proof"
            title="Documented outcomes."
            description="Real engagements where this exact thinking was applied."
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((caseStudy, i) => (
              <Reveal key={caseStudy.slug} delay={(i % 3) * 80}>
                <CaseStudyCard caseStudy={caseStudy} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* 8 — CTA */}
      <Section id="knowledge-cta" bleed className="py-20 lg:py-28">
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
                  Turn this into a plan built for your organisation.
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/70 text-pretty">
                  Everything above is free to use on your own. A consultation
                  goes further — a plan shaped around your team, your data
                  and your constraints.
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
                    <Link href="/resources">
                      Browse all resources
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
