import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary: dark navy background, white text
        primary:
          "bg-primary text-primary-foreground shadow-soft hover:bg-secondary hover:shadow-lift active:translate-y-px",
        // Secondary: white background, dark border
        secondary:
          "border border-border bg-background text-foreground shadow-soft hover:border-foreground/25 hover:bg-surface active:translate-y-px",
        // Accent blue
        brand:
          "bg-brand text-brand-foreground shadow-soft hover:bg-brand/90 hover:shadow-lift active:translate-y-px",
        ghost: "text-foreground hover:bg-surface",
        link: "text-brand underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        default: "h-11 px-6",
        lg: "h-12 px-7 text-[0.95rem]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
