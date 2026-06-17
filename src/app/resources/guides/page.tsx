import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Step-by-step frameworks and decision guides for the operational and technology challenges every growing organisation faces.",
  robots: { index: false, follow: true },
  alternates: { canonical: `${siteConfig.url}/resources/guides` },
  openGraph: {
    title: `Guides — ${siteConfig.name}`,
    description: "Practical frameworks for making better operational and technology decisions.",
    url: `${siteConfig.url}/resources/guides`,
  },
};

export default function GuidesPage() {
  return (
    <PlaceholderPage
      eyebrow="Guides"
      title="Frameworks for the decisions that matter."
      description="Step-by-step guides built from real client work — designed to help you think clearly and act confidently on operational and technology challenges."
      highlightsTitle="Guides in development"
      highlights={[
        "How to assess your readiness for automation (and where to start)",
        "Choosing the right CRM for a growing services business",
        "A temple management technology starter guide",
        "The digital transformation readiness checklist",
        "Building a business case for technology investment",
      ]}
      ctaLabel="Request a Guide Topic"
      ctaHref="/contact?type=Guide+Request"
      backLabel="All Resources"
      backHref="/resources"
    />
  );
}
