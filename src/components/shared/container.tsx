import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Max-width content wrapper. Keeps horizontal rhythm identical across every
 * section and page in the design system.
 */
export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1200px] px-6 lg:px-8", className)}
      {...props}
    />
  );
}
