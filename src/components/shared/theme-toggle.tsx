"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Briefcase, Cpu } from "lucide-react";

import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to Business Mode" : "Switch to Tech Mode"}
      title={isDark ? "Switch to Business Mode" : "Switch to Tech Mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex flex-col items-center gap-0.5 rounded-lg border border-border bg-background px-2 py-1.5 text-foreground transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <span className="relative flex size-[1.15rem] items-center justify-center">
        <Briefcase
          className="size-[1.15rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0"
          aria-hidden="true"
        />
        <Cpu
          className="absolute size-[1.15rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100"
          aria-hidden="true"
        />
      </span>
      <span className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground">
        <span className="dark:hidden">Business</span>
        <span className="hidden dark:inline">Tech</span>
      </span>
    </button>
  );
}
