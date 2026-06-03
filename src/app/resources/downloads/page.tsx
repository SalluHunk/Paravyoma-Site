import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Templates, checklists and practical tools you can use immediately — built from real client work at Paravyoma.",
  alternates: { canonical: `${siteConfig.url}/resources/downloads` },
  openGraph: {
    title: `Downloads — ${siteConfig.name}`,
    description: "Free templates and tools built from the work we do with clients every day.",
    url: `${siteConfig.url}/resources/downloads`,
  },
};

export default function DownloadsPage() {
  return (
    <PlaceholderPage
      eyebrow="Downloads"
      title="Tools and templates you can use today."
      description="Practical, free-to-use resources built from the real work we do — not generic templates repackaged for content marketing."
      highlightsTitle="Downloads in development"
      highlights={[
        "Automation readiness self-assessment (PDF)",
        "CRM implementation checklist",
        "Temple operations setup template",
        "Digital transformation project brief template",
        "Technology vendor evaluation scorecard",
      ]}
      ctaLabel="Request a Specific Template"
      ctaHref="/contact?type=Download+Request"
      backLabel="All Resources"
      backHref="/resources"
    />
  );
}
