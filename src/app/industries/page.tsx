import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { industries } from "@/lib/industries";
import { PageHeader } from "@/components/shared/page-header";
import { IndustryDetail } from "@/components/sections/industry-detail";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "How Paravyoma helps SMEs, professional services, education, nonprofits, and temples & spiritual organizations — common challenges, our approach, recommended solutions and measurable outcomes.",
  alternates: { canonical: `${siteConfig.url}/industries` },
  openGraph: {
    title: `Industries — ${siteConfig.name}`,
    description:
      "Tailored technology solutions and measurable outcomes for the industries we serve.",
    url: `${siteConfig.url}/industries`,
  },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Built around the realities of your sector"
        description="We adapt our approach to the way each industry actually works. Explore the common challenges we solve, how we help, the solutions we recommend, and the outcomes you can measure."
      >
        <nav aria-label="Jump to industry">
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {industries.map((industry) => (
              <li key={industry.id}>
                <Link
                  href={`#${industry.id}`}
                  className="inline-flex items-center rounded-full border border-border bg-background/70 px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-soft backdrop-blur transition-colors hover:border-foreground/20 hover:text-foreground"
                >
                  {industry.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      <div className="border-t border-border">
        {industries.map((industry, index) => (
          <IndustryDetail
            key={industry.id}
            industry={industry}
            index={index}
          />
        ))}
      </div>

      <ContactCta />
    </>
  );
}
