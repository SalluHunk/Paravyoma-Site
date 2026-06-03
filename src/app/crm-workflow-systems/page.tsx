import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "CRM & Workflow Systems",
  description:
    "Customer and operational workflows that capture every lead, track every step and scale with you. Built on platforms your team will actually use.",
  alternates: { canonical: `${siteConfig.url}/crm-workflow-systems` },
  openGraph: {
    title: `CRM & Workflow Systems — ${siteConfig.name}`,
    description:
      "End-to-end customer and operational workflows — no lead lost, no step missed.",
    url: `${siteConfig.url}/crm-workflow-systems`,
  },
};

export default function CrmWorkflowSystemsPage() {
  return (
    <PlaceholderPage
      eyebrow="CRM & Workflow Systems"
      title="Every lead tracked. Every step accounted for."
      description="We design and implement CRM and workflow systems built around how your business actually operates — not a generic template dropped into your team."
      highlightsTitle="What this practice will cover"
      highlights={[
        "CRM selection, configuration and migration tailored to your sales cycle",
        "End-to-end workflow design from first contact to closed deal",
        "Automation for follow-ups, handoffs and routine operational tasks",
        "Integrations connecting your CRM to the tools your team already uses",
        "Dashboards and reporting so leadership always has the full picture",
      ]}
      ctaLabel="Book a Workflow Consultation"
      ctaHref="/contact?type=CRM+Workflow+Consultation"
      backLabel="Back to Solutions"
      backHref="/solutions"
    />
  );
}
