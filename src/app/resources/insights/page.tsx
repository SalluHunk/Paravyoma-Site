import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Insights Blog",
  description:
    "Practical thinking on operations, automation, digital transformation and the decisions that matter for growing organisations.",
  alternates: { canonical: `${siteConfig.url}/resources/insights` },
  openGraph: {
    title: `Insights Blog — ${siteConfig.name}`,
    description:
      "No hype, no fluff — practical articles on building better-run organisations.",
    url: `${siteConfig.url}/resources/insights`,
  },
};

export default function InsightsPage() {
  return (
    <PlaceholderPage
      eyebrow="Insights Blog"
      title="Thinking out loud on what actually works."
      description="Practical articles written by practitioners — covering operations, automation, AI and the real decisions behind digital transformation."
      highlightsTitle="Topics we'll cover"
      highlights={[
        "When to automate — and when not to",
        "How to evaluate whether a CRM is working for or against you",
        "Digital transformation without the disruption",
        "What good looks like in temple and community organisation technology",
        "AI in the real world — beyond the pilot stage",
      ]}
      ctaLabel="Get Notified at Launch"
      ctaHref="/contact?type=Insights+Blog+Notification"
      backLabel="All Resources"
      backHref="/resources"
    />
  );
}
