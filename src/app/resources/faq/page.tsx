import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/shared/page-header";
import { Faq } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "The questions teams ask Paravyoma most — answered honestly and without jargon.",
  robots: { index: false, follow: true },
  alternates: { canonical: `${siteConfig.url}/resources/faq` },
  openGraph: {
    title: `FAQ — ${siteConfig.name}`,
    description: "Common questions about how Paravyoma works, what we do, and whether we're the right fit.",
    url: `${siteConfig.url}/resources/faq`,
  },
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions we hear most often."
        description="Straight answers to the things teams want to know before they reach out — and a few they wish they'd asked sooner."
      />
      <Faq />
    </>
  );
}
