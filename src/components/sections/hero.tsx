import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Atmosphere: soft radial brand glow + faint grid, fading out */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-radial-fade"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]"
      >
        <div className="absolute inset-0 bg-grid-slate bg-[size:44px_44px] opacity-60" />
      </div>

      <Container className="relative pb-20 pt-16 sm:pt-20 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-sm text-muted-foreground shadow-soft backdrop-blur">
            <Sparkles className="size-3.5 text-brand" aria-hidden="true" />
            <span className="font-medium text-foreground">
              Solutions &amp; Technology Partner
            </span>
          </div>

          <h1 className="animate-fade-up mt-7 font-display text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl lg:leading-[1.05]">
            Technology that moves your{" "}
            <span className="text-gradient">business forward.</span>
          </h1>

          <p
            className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl"
            style={{ animationDelay: "80ms" }}
          >
            Helping organizations streamline operations, automate workflows,
            strengthen engagement, and scale through modern technology and
            AI-assisted execution.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "160ms" }}
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/#contact">
                Book a Consultation
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link href="/#solutions">Explore Solutions</Link>
            </Button>
          </div>

          <p
            className="animate-fade-up mt-6 text-sm text-muted-foreground"
            style={{ animationDelay: "220ms" }}
          >
            Trusted by businesses, nonprofits, temples and educational
            institutions.
          </p>
        </div>
      </Container>
    </section>
  );
}
