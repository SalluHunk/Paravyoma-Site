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
    { label: "Home", href: "/" },
    {
      label: "Solutions",
      href: "/solutions",
      children: [
        { label: "AI Automation", href: "/ai-automation" },
        { label: "Digital Transformation", href: "/digital-transformation" },
        { label: "CRM & Workflow Systems", href: "/crm-workflow-systems" },
        { label: "Temple Suite", href: "/temple-suite" },
        { label: "Custom Applications", href: "/custom-applications" },
      ],
    },
    { label: "Industries", href: "/#industries" },
    { label: "Why Paravyoma", href: "/#why" },
    { label: "About", href: "/about" },
    {
      label: "Resources",
      href: "/resources",
      children: [
        { label: "Case Studies", href: "/case-studies" },
        { label: "Insights Blog", href: "/insights" },
        { label: "Guides", href: "/resources/guides" },
        { label: "Downloads", href: "/resources/downloads" },
        { label: "FAQ", href: "/resources/faq" },
      ],
    },
    {
      label: "Products",
      href: "/products",
      children: [
        { label: "Temple Suite", href: "/temple-suite" },
        { label: "Products Lab", href: "/products" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ],
  footerNav: {
    solutions: [
      { label: "AI Automation", href: "/ai-automation" },
      { label: "Digital Transformation", href: "/digital-transformation" },
      { label: "CRM & Workflow Systems", href: "/crm-workflow-systems" },
      { label: "Temple Suite", href: "/temple-suite" },
      { label: "Temple Solutions", href: "/temple-solutions" },
      { label: "Custom Applications", href: "/custom-applications" },
    ],
    resources: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Insights Blog", href: "/insights" },
      { label: "Guides", href: "/resources/guides" },
      { label: "Downloads", href: "/resources/downloads" },
      { label: "FAQ", href: "/resources/faq" },
    ],
    company: [
      { label: "Why Paravyoma", href: "/#why" },
      { label: "Industries", href: "/#industries" },
      { label: "Products", href: "/products" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
