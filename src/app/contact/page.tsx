import { ContactPageClient } from "./contact-page-client";
import type { InquiryType } from "@/components/sections/contact-form";
import { siteConfig } from "@/lib/site";

function ContactPageSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact — ${siteConfig.name}`,
    url: `${siteConfig.url}/contact`,
    about: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Server component — reads the optional ?type= query param and passes it to
 * the client component as the initial inquiry selection.
 *
 * Example: /contact?type=Schedule+Consultation
 * → opens the contact page with "Schedule Consultation" pre-selected in the form.
 */
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const initialInquiry = (type ?? "") as InquiryType;

  return (
    <>
      <ContactPageSchema />
      <ContactPageClient initialInquiry={initialInquiry} />
    </>
  );
}
