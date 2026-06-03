import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real outcomes from real engagements. How Paravyoma helped organisations solve hard operational and technology problems — with the numbers to prove it.",
  alternates: { canonical: `${siteConfig.url}/resources/case-studies` },
  openGraph: {
    title: `Case Studies — ${siteConfig.name}`,
    description: "Proof over promises — documented outcomes from client engagements.",
    url: `${siteConfig.url}/resources/case-studies`,
  },
};

export default function CaseStudiesPage() {
  return (
    <PlaceholderPage
      eyebrow="Case Studies"
      title="Outcomes we've delivered, documented."
      description="Not testimonials — detailed accounts of the problem, the approach and the measurable result. Coming soon as we formalise work already done."
      highlightsTitle="What case studies will include"
      highlights={[
        "The business problem we were brought in to solve",
        "The approach we took and the decisions we made along the way",
        "Measurable outcomes — time saved, costs reduced, revenue gained",
        "What the client's team could do after that they couldn't before",
        "Sectors covered: operations, temples, automation, digital transformation",
      ]}
      ctaLabel="Discuss a Similar Challenge"
      ctaHref="/contact?type=General+Enquiry"
      backLabel="All Resources"
      backHref="/resources"
    />
  );
}
