import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

interface PageHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Optional content rendered below the copy (e.g. jump-nav, CTAs). */
  children?: React.ReactNode;
  className?: string;
}

/**
 * Standard hero for inner pages. Shares the homepage hero's atmosphere
 * (soft radial brand glow + faint fading grid) so every page in the design
 * system opens with the same visual signature.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  className,
}: PageHeaderProps) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-radial-fade"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]"
      >
        <div className="absolute inset-0 bg-grid-slate bg-[size:44px_44px] opacity-50" />
      </div>

      <Container className="relative pb-14 pt-14 sm:pt-16 lg:pb-16 lg:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? (
            <span className="eyebrow animate-fade-in justify-center">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="animate-fade-up mt-4 font-display text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
            {title}
          </h1>
          {description ? (
            <p
              className="animate-fade-up mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty"
              style={{ animationDelay: "80ms" }}
            >
              {description}
            </p>
          ) : null}
          {children ? (
            <div
              className="animate-fade-up mt-8"
              style={{ animationDelay: "160ms" }}
            >
              {children}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
