import * as React from "react";
import { cn } from "@/lib/utils";

const sizeMap = {
  sm: { glyph: "size-7", text: "text-sm", sub: "text-[10px]" },
  md: { glyph: "size-9", text: "text-[1.05rem]", sub: "text-[11px]" },
  lg: { glyph: "size-12", text: "text-2xl", sub: "text-sm" },
} as const;

/**
 * Network glyph — a node graph radiating from a central hub, rendered with
 * the brand's signature yellow-to-orange-to-red gradient. Full colour, so it
 * reads identically in both light and dark mode without theme-aware fills.
 */
function NetworkGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 68 58"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* connecting lines */}
      <g stroke="#FB923C" strokeOpacity={0.55} strokeWidth={1.6}>
        <line x1={28} y1={28} x2={20} y2={16} />
        <line x1={20} y1={16} x2={11} y2={9} />
        <line x1={20} y1={16} x2={28} y2={8} />
        <line x1={28} y1={28} x2={9} y2={40} />
        <line x1={28} y1={28} x2={46} y2={22} />
        <line x1={46} y1={22} x2={57} y2={12} />
        <line x1={57} y1={12} x2={63} y2={6} />
        <line x1={28} y1={28} x2={44} y2={42} />
        <line x1={44} y1={42} x2={54} y2={52} />
      </g>
      {/* nodes — yellow (tips) through orange (mid) to red-orange (far tips) */}
      <circle cx={28} cy={28} r={7} fill="#F97316" />
      <circle cx={20} cy={16} r={4.5} fill="#FB923C" />
      <circle cx={11} cy={9} r={2.8} fill="#FACC15" />
      <circle cx={28} cy={8} r={2.6} fill="#FBBF24" />
      <circle cx={9} cy={40} r={2.8} fill="#FACC15" />
      <circle cx={46} cy={22} r={5.5} fill="#FB923C" />
      <circle cx={57} cy={12} r={3} fill="#FB923C" />
      <circle cx={63} cy={6} r={2.2} fill="#EA580C" />
      <circle cx={44} cy={42} r={5} fill="#F97316" />
      <circle cx={54} cy={52} r={2.8} fill="#EA580C" />
    </svg>
  );
}

/**
 * Paravyoma wordmark + glyph. The glyph is a node graph — suggesting the
 * orchestration of connected systems. "Paravyoma" uses `text-foreground`
 * so it flips automatically between light and dark mode; "Technologies"
 * stays a fixed brand orange, which reads correctly against either theme.
 */
export function Logo({
  className,
  showWordmark = true,
  size = "md",
}: {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const s = sizeMap[size];

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <NetworkGlyph className={cn(s.glyph, "shrink-0")} />
      {showWordmark ? (
        <span className="flex flex-col leading-[1.1]">
          <span
            className={cn(
              "font-display font-bold tracking-tight text-foreground",
              s.text
            )}
          >
            Paravyoma
          </span>
          <span
            className={cn(
              "-mt-0.5 font-medium tracking-tight text-[#F97316]",
              s.sub
            )}
          >
            Technologies
          </span>
        </span>
      ) : null}
    </span>
  );
}
