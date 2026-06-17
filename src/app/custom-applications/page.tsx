import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { PlaceholderPage } from "@/components/shared/placeholder-page";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { OperationsSystemPreview } from "@/components/proof/operations-system-preview";

export const metadata: Metadata = {
  title: "Custom Applications",
  description:
    "Bespoke software built around your exact process when off-the-shelf tools fall short. Built to last, built to scale.",
  robots: { index: false, follow: true },
  alternates: { canonical: `${siteConfig.url}/custom-applications` },
  openGraph: {
    title: `Custom Applications — ${siteConfig.name}`,
    description:
      "When standard software isn't enough — purpose-built applications designed around your exact process.",
    url: `${siteConfig.url}/custom-applications`,
  },
};

const customApplicationPreview = {
  modules: [
    "User Roles",
    "Core Workflows",
    "Data Model",
    "Integrations",
    "Admin Console",
  ],
  metrics: [
    { label: "User roles", value: "5", change: "Scoped" },
    { label: "Workflow paths", value: "12", change: "Mapped" },
    { label: "Integrations", value: "4", change: "Planned" },
    { label: "Release phases", value: "3", change: "Roadmap" },
  ],
  records: [
    {
      name: "Operations portal",
      meta: "Role-based task queue, approvals and reporting",
      status: "Blueprint",
    },
    {
      name: "Customer portal",
      meta: "Secure client access, documents and status tracking",
      status: "Prototype",
    },
    {
      name: "Admin console",
      meta: "User management, audit history and configuration",
      status: "Planned",
    },
  ],
  workflow: [
    {
      label: "Process blueprint",
      detail: "Real workflows are documented before interface design begins.",
      tone: "done" as const,
    },
    {
      label: "Prototype tested",
      detail: "Screens are validated with users before full build.",
      tone: "active" as const,
    },
    {
      label: "Architecture defined",
      detail: "Data, permissions, integrations and reporting are designed together.",
    },
    {
      label: "Phased release",
      detail: "The first release solves the sharpest workflow without overbuilding.",
    },
  ],
  integrations: ["CRM", "Payments", "Email", "Reports", "Internal tools"],
} as const;

export default function CustomApplicationsPage() {
  return (
    <PlaceholderPage
      eyebrow="Custom Applications"
      title="Built exactly for the way you work."
      description="When off-the-shelf tools create more compromise than value, we build software that fits your process precisely — scalable, maintainable and owned by you."
      highlightsTitle="What this practice will cover"
      highlights={[
        "Requirements discovery that turns your process into a clear technical brief",
        "Architecture designed for longevity — not the fastest shortcut to launch",
        "Full-stack web and mobile applications built with modern, proven technology",
        "Integration with your existing systems, data and workflows",
        "Handover, documentation and ongoing support so you stay in control",
      ]}
      ctaLabel="Discuss Your Project"
      ctaHref="/contact?type=Custom+Application+Discussion"
      backLabel="Back to Solutions"
      backHref="/solutions"
    >
      <Section id="custom-application-preview" surface>
        <Reveal>
          <OperationsSystemPreview
            eyebrow="Visual proof"
            title="A custom application starts as an operating blueprint."
            description="Before software is built, the workflow, roles, permissions, data model and integrations are made visible. That is how custom software stays disciplined instead of becoming a risky blank canvas."
            highlight="Build custom only when the workflow is unique enough that generic software creates operational drag."
            {...customApplicationPreview}
          />
        </Reveal>
      </Section>
    </PlaceholderPage>
  );
}
