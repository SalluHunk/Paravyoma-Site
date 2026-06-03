/**
 * Central site configuration. A single source of truth so every page and
 * component (nav, footer, metadata, structured data) stays consistent.
 */
export const siteConfig = {
  name: "Paravyoma Technologies",
  shortName: "Paravyoma",
  url: "https://www.paravyoma.com",
  tagline: "AI-assisted execution. Human-led strategy.",
  description:
    "Paravyoma Technologies is a solutions and technology partner that helps organizations streamline operations, automate workflows, and build scalable systems for sustainable growth. We sell business outcomes — not websites or apps.",
  email: "paravyomatech@gmail.com",
  nav: [
    { label: "Solutions", href: "/#solutions" },
    { label: "Why Paravyoma", href: "/#why" },
    { label: "Process", href: "/#process" },
    { label: "Industries", href: "/#industries" },
  ],
  footerNav: {
    company: [
      { label: "Why Paravyoma", href: "/#why" },
      { label: "Process", href: "/#process" },
      { label: "Industries", href: "/#industries" },
      { label: "Contact", href: "/#contact" },
    ],
    services: [
      { label: "Business Systems", href: "/#solutions" },
      { label: "Workflow Automation", href: "/#solutions" },
      { label: "Custom Applications", href: "/#solutions" },
      { label: "AI-assisted Operations", href: "/#solutions" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
