import { ContactPageClient } from "./contact-page-client";
import type { InquiryType } from "@/components/sections/contact-form";

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

  return <ContactPageClient initialInquiry={initialInquiry} />;
}
