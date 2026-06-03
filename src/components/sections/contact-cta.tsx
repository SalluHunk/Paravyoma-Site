import * as React from "react";
import Link from "next/link";
import { ArrowRight, Mail, CalendarCheck } from "lucide-react";

import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function ContactCta() {
  return (
    <Section id="contact" bleed className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center shadow-lift sm:px-12 lg:px-16 lg:py-20">
            {/* subtle decorative glow + grid */}
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
                Let&apos;s talk
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-primary-foreground text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                Let&apos;s solve your next business challenge.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/70 text-pretty">
                Book a no-pressure consultation. We will listen, ask the right
                questions and show you what an outcome-led engagement could look
                like for your organization.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild variant="brand" size="lg" className="w-full sm:w-auto">
                  <Link href="/contact?type=Schedule+Consultation">
                    <CalendarCheck className="size-4" />
                    Book a Consultation
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="w-full border border-white/15 bg-white/10 text-primary-foreground shadow-soft hover:bg-white/15 sm:w-auto"
                >
                  <a href={`mailto:${siteConfig.email}`}>
                    <Mail className="size-4" />
                    {siteConfig.email}
                  </a>
                </Button>
              </div>

              <p className="mt-6 text-sm text-primary-foreground/60">
                Prefer to explore first?{" "}
                <Link
                  href="/solutions"
                  className="font-medium text-primary-foreground underline-offset-4 hover:underline"
                >
                  See our solutions
                  <ArrowRight className="ml-1 inline size-3.5 align-[-1px]" />
                </Link>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
