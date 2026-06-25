import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Paravyoma Technologies collects, uses, and protects information submitted through this website.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
  robots: { index: true, follow: true },
};

const sections = [
  {
    heading: "Information we collect",
    body: [
      "We collect information you voluntarily provide through forms on this site — including your name, email address, organisation, role, and any message content — when you book a consultation, submit a contact inquiry, download a resource, or sign up for product or content updates.",
      "We also collect basic, non-identifying usage data (such as pages visited and general traffic patterns) through privacy-respecting analytics, to understand how the site is used and where it can be improved.",
    ],
  },
  {
    heading: "How we use this information",
    body: [
      "We use the information you submit to respond to your inquiry, schedule consultations, deliver requested resources, and — where you have opted in — share relevant product updates or insights.",
      "We do not sell, rent, or trade your personal information to third parties for marketing purposes.",
    ],
  },
  {
    heading: "Data sharing",
    body: [
      "Form submissions are routed through our internal workflow tooling (such as our automation and email delivery providers) solely to fulfil the purpose you submitted the form for — for example, sending a requested download or scheduling a call.",
      "We do not share your information with third parties beyond what is required to operate these workflows.",
    ],
  },
  {
    heading: "Cookies and tracking",
    body: [
      "This site uses minimal, privacy-respecting analytics to understand aggregate traffic patterns. We do not use third-party advertising trackers or sell browsing data.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "You can request access to, correction of, or deletion of any personal information we hold about you at any time by emailing us at the address below. You may unsubscribe from any email communications using the link provided in those emails, or by replying directly.",
    ],
  },
  {
    heading: "Contact",
    body: [
      `Questions about this policy or your data can be sent to ${siteConfig.email}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use, and protect information submitted through this website."
      />

      <Section id="privacy-content">
        <Container>
          <div className="mx-auto max-w-2xl">
            <p className="mb-10 text-sm text-muted-foreground">
              Last updated: June 2026
            </p>
            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                    {section.heading}
                  </h2>
                  <div className="mt-3 space-y-3">
                    {section.body.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-base leading-relaxed text-muted-foreground text-pretty"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
