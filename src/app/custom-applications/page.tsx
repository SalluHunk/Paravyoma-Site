import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Custom Applications",
  description:
    "Bespoke software built around your exact process when off-the-shelf tools fall short. Built to last, built to scale.",
  alternates: { canonical: `${siteConfig.url}/custom-applications` },
  openGraph: {
    title: `Custom Applications — ${siteConfig.name}`,
    description:
      "When standard software isn't enough — purpose-built applications designed around your exact process.",
    url: `${siteConfig.url}/custom-applications`,
  },
};

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
    />
  );
}
