import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Paravyoma Technologies. Schedule a consultation, submit a project inquiry, or explore a partnership.",
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: `Contact — ${siteConfig.name}`,
    description:
      "Reach out to discuss your project, schedule a discovery call, or ask how Paravyoma can help your organisation.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
