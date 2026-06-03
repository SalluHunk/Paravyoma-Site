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
  email: "info@paravyomatech.com",
  nav: [
    { label: "Solutions", href: "/solutions" },
    { label: "Why Paravyoma", href: "/#why" },
    { label: "Process", href: "/#process" },
    { label: "Industries", href: "/#industries" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  footerNav: {
    company: [
      { label: "Why Paravyoma", href: "/#why" },
      { label: "Process", href: "/#process" },
      { label: "Industries", href: "/#industries" },
      { label: "Contact", href: "/#contact" },
    ],
    services: [
      { label: "Operational Efficiency", href: "/solutions#operational-efficiency" },
      { label: "Workflow Automation", href: "/solutions#workflow-automation" },
      { label: "Customer Engagement", href: "/solutions#customer-engagement" },
      { label: "Digital Transformation", href: "/solutions#digital-transformation" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
