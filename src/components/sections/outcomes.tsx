import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

const points = [
  "We measure success by your results — not deliverables shipped",
  "Technology choices follow the business case, never the hype",
  "Systems are built to be owned, maintained and grown by your team",
];

export function Outcomes() {
  return (
    <Section bleed>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 shadow-lift sm:px-12 lg:px-16 lg:py-20">
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

            <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
              <div>
                <span className="eyebrow text-brand">The difference</span>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-primary-foreground text-balance sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
                  We don&apos;t sell websites or apps. We sell business outcomes
                  through technology.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/70 text-pretty">
                  A website is a tool. An app is a tool. What you actually need
                  is lower cost, less manual effort, happier customers and a
                  business that scales. That&apos;s what we design every
                  engagement to deliver.
                </p>
                <Button asChild variant="brand" size="lg" className="mt-8">
                  <Link href="/#contact">
                    Start with your outcome
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>

              <ul className="space-y-4">
                {points.map((point, i) => (
                  <Reveal as="li" key={point} delay={i * 90}>
                    <div className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground">
                        <Check className="size-3.5" aria-hidden="true" />
                      </span>
                      <span className="text-[0.95rem] leading-relaxed text-primary-foreground/90">
                        {point}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
