import * as React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, CalendarCheck, Clock3 } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

interface PlaceholderPageProps {
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
  /** Bullet list previewing what this page/asset will offer. */
  highlights: string[];
  /** Heading above the highlights list. */
  highlightsTitle?: string;
  /** Primary CTA. Defaults to booking a consultation. */
  ctaLabel?: string;
  ctaHref?: string;
  /** Optional secondary link back to a hub. */
  backLabel?: string;
  backHref?: string;
  children?: React.ReactNode;
}

/**
 * Polished "coming soon" page for routes that are part of the site
 * architecture but whose full content is still being produced. Keeps every
 * navigable destination on-brand and conversion-ready — never a dead link.
 */
export function PlaceholderPage({
  eyebrow,
  title,
  description,
  highlights,
  highlightsTitle = "What's coming",
  ctaLabel = "Book a Consultation",
  ctaHref = "/contact?type=Schedule+Consultation",
  backLabel,
  backHref,
  children,
}: PlaceholderPageProps) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} description={description}>
        <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-sm font-semibold text-brand">
          <Clock3 className="size-4" aria-hidden="true" />
          In active development
        </span>
      </PageHeader>

      {children}

      <Section surface>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">
                {highlightsTitle}
              </p>
              <ul className="mt-6 space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 size-5 shrink-0 text-brand"
                      aria-hidden="true"
                    />
                    <span className="text-base leading-relaxed text-foreground text-pretty">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center">
                <Button asChild variant="brand" size="lg">
                  <Link href={ctaHref}>
                    <CalendarCheck className="size-4" />
                    {ctaLabel}
                  </Link>
                </Button>
                {backLabel && backHref ? (
                  <Button asChild variant="secondary" size="lg">
                    <Link href={backHref}>
                      {backLabel}
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                ) : null}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Want this sooner, or have a specific question?{" "}
              <Link
                href="/contact"
                className="font-medium text-brand underline-offset-4 hover:underline"
              >
                Talk to us
                <ArrowRight className="ml-1 inline size-3.5 align-[-1px]" />
              </Link>
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
