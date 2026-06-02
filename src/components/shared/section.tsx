import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Optional id used for in-page anchor navigation. */
  id?: string;
  /** Tints the section with the subtle surface colour. */
  surface?: boolean;
  /** Removes the inner Container (for full-bleed compositions). */
  bleed?: boolean;
  containerClassName?: string;
}

/**
 * Vertical section primitive providing consistent spacing rhythm
 * (py-20 / lg:py-28) and an optional surface background.
 */
export function Section({
  id,
  surface = false,
  bleed = false,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-20 lg:py-28",
        surface && "bg-surface",
        className
      )}
      {...props}
    >
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}
