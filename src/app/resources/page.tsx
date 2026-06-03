import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  BookMarked,
  Lightbulb,
  Map,
  Download,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Case studies, insights, guides, downloads and answers — everything you need to understand how Paravyoma can help your organisation grow.",
  alternates: { canonical: `${siteConfig.url}/resources` },
  openGraph: {
    title: `Resources — ${siteConfig.name}`,
    description:
      "Practical knowledge for organisations serious about growth — case studies, guides, insights and more.",
    url: `${siteConfig.url}/resources`,
  },
};

const resourceAreas = [
  {
    icon: BookMarked,
    name: "Case Studies",
    description:
      "Real outcomes from real engagements. How we helped organisations solve hard problems and measure the results.",
    href: "/resources/case-studies",
    status: "In development",
  },
  {
    icon: Lightbulb,
    name: "Insights Blog",
    description:
      "Practical thinking on operations, automation, digital transformation and the decisions that actually matter.",
    href: "/resources/insights",
    status: "In development",
  },
  {
    icon: Map,
    name: "Guides",
    description:
      "Step-by-step frameworks and decision guides for the challenges every growing organisation faces.",
    href: "/resources/guides",
    status: "In development",
  },
  {
    icon: Download,
    name: "Downloads",
    description:
      "Templates, checklists and tools you can use right now — built from the work we do with clients every day.",
    href: "/resources/downloads",
    status: "In development",
  },
  {
    icon: HelpCircle,
    name: "FAQ",
    description:
      "The questions teams ask us most — answered honestly and without jargon.",
    href: "/resources/faq",
    status: "Live",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Knowledge that helps you make better decisions."
        description="Case studies, guides, insights and answers — built from the work we do with growing organisations every day."
      />

      <Section surface>
        <SectionHeading
          eyebrow="Explore resources"
          title="Everything in one place."
          description="Each section is built to give you practical value — not content marketing. Use it to evaluate whether we're the right fit, or simply to think more clearly about your challenges."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-card sm:grid-cols-2 lg:grid-cols-3">
          {resourceAreas.map((area, i) => (
            <Reveal key={area.name} delay={(i % 3) * 80}>
              <Link
                href={area.href}
                className="group flex h-full flex-col bg-card p-7 transition-colors hover:bg-brand/[0.03] lg:p-8"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                    <area.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span
                    className={
                      area.status === "Live"
                        ? "rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-semibold text-brand"
                        : "rounded-full bg-surface px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                    }
                  >
                    {area.status}
                  </span>
                </div>
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
      </Section>
    </>
  );
}
