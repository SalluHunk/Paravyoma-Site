import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Digital Transformation",
  description:
    "Move from manual, disconnected processes to connected systems and a single source of truth. A pragmatic, staged path to a modern operating model.",
  alternates: { canonical: `${siteConfig.url}/digital-transformation` },
  openGraph: {
    title: `Digital Transformation — ${siteConfig.name}`,
    description:
      "From paper and spreadsheets to connected systems, automation and insight — one steady step at a time.",
    url: `${siteConfig.url}/digital-transformation`,
  },
};

export default function DigitalTransformationPage() {
  return (
    <PlaceholderPage
      eyebrow="Digital Transformation"
      title="From scattered processes to one connected system."
      description="We help organisations modernise without the chaos — replacing manual work and disconnected tools with systems your whole team can rely on."
      highlightsTitle="What this practice will cover"
      highlights={[
        "Operating-model assessment — where you are today vs. where you could be",
        "A staged transformation roadmap with clear milestones and ROI",
        "Systems consolidation into a single, trustworthy source of truth",
        "Change management so your team adopts the new way of working",
        "Measurable outcomes tracked against a real baseline",
      ]}
      ctaLabel="Book a Strategy Session"
      ctaHref="/contact?type=Digital+Transformation+Consultation"
      backLabel="Back to Solutions"
      backHref="/solutions"
    />
  );
}
