import * as React from "react";
import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { Logo } from "@/components/shared/logo";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground text-pretty">
              A solutions and technology partner helping organizations turn
              operations, systems and digital presence into sustainable,
              measurable growth.
            </p>
            <p className="mt-6 text-sm font-medium text-foreground">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              {siteConfig.footerNav.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Capabilities
            </h3>
            <ul className="mt-4 space-y-3">
              {siteConfig.footerNav.services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/#contact"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
