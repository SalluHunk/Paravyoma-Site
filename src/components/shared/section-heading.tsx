import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h2" | "h1" | "h3";
}

/**
 * Standardised heading block: eyebrow label, title and supporting copy.
 * Used by every section so headings share weight, tracking and measure.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <Heading
        className={cn(
          "font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
          align === "center" && "max-w-3xl"
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
