import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Paravyoma wordmark + glyph. The glyph is a layered aperture — suggesting
 * "vyoma" (sky / space) and the layered orchestration of human + AI work.
 */
export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-soft">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 1.5 17.5 6v8L10 18.5 2.5 14V6L10 1.5Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
            className="opacity-40"
          />
          <path
            d="M10 5.5 14 8v4l-4 2.5L6 12V8l4-2.5Z"
            fill="hsl(var(--brand))"
          />
        </svg>
      </span>
      {showWordmark ? (
        <span className="font-display text-[1.05rem] font-semibold tracking-tight text-foreground">
          Paravyoma
        </span>
      ) : null}
    </span>
  );
}
