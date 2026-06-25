import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Phase 6 — Temple Mode: a warm visual layer for temple-related pages only.
 *
 * Wrapping a page's content here applies the `.temple-mode` class (defined
 * in globals.css), which shifts --brand / --surface / --ring — and, in
 * dark mode, --background / --card — to a warmer palette via CSS custom
 * property cascade. Every existing bg-brand / text-brand / bg-radial-fade
 * usage picks it up automatically; no component changes required.
 *
 * No deity, guru or religious artwork — the warmth is color and texture
 * only, kept subtle enough that typography and layout stay unmistakably
 * "enterprise software," just with a noticeably warmer register.
 */
export function TempleMode({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("temple-mode relative", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-temple-weave opacity-40"
      />
      {children}
    </div>
  );
}

/**
 * A soft, looping glow ring behind an icon badge — quiet devotional light,
 * not a literal flame, deity or symbol. Use sparingly: one per page is
 * plenty; it's an accent, not a default treatment for every icon.
 */
export function TempleIconGlow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("relative inline-flex", className)}>
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 animate-temple-glow rounded-[inherit] bg-brand/30 blur-md"
      />
      {children}
    </span>
  );
}
