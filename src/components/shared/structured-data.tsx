import * as React from "react";
import { siteConfig } from "@/lib/site";

/**
 * JSON-LD structured data for richer search results and AI-search citation.
 * Rendered once in the root layout.
 */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        slogan: siteConfig.tagline,
        description: siteConfig.description,
        email: siteConfig.email,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en",
      },
      {
        "@type": "ProfessionalService",
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        areaServed: "Worldwide",
        knowsAbout: [
          "Business process automation",
          "Workflow automation",
          "Customer engagement",
          "Digital presence",
          "Scalable systems",
          "Operations optimization",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
