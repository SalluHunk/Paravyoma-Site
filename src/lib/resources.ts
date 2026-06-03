/**
 * Resources Hub data layer.
 *
 * CMS migration path:
 *   1. Replace `RESOURCES` array with an API fetch (Sanity / Contentful / REST)
 *   2. All query functions remain unchanged
 *   3. Components need no changes
 *
 * Download gate integration:
 *   Set NEXT_PUBLIC_RESOURCES_WEBHOOK_URL to your Make.com / Zapier webhook.
 *   Gate form POSTs: { firstName, email, company, role, resourceId, resourceTitle, resourceType }
 */

// ── Types ─────────────────────────────────────────────────────────────────────

export type ResourceType = "Guide" | "Template" | "Checklist" | "Download";

export type ResourceCategory =
  | "Operations"
  | "CRM & Sales"
  | "AI & Automation"
  | "Digital Transformation"
  | "Temple Management"
  | "Finance & Admin";

export interface Resource {
  id: string;
  title: string;
  excerpt: string;
  type: ResourceType;
  category: ResourceCategory;
  tags: string[];
  featured: boolean;
  /**
   * true  → show full lead-capture form before download
   * false → single-email lighter form
   */
  gated: boolean;
  /**
   * CMS: swap null for a signed asset URL.
   * null during dev → success state shows "link sent to email" copy.
   */
  downloadUrl: string | null;
  /** Estimated page / section count */
  pageCount?: number;
  publishedAt: string; // ISO 8601
  /** Slugs from /insights that complement this resource */
  relatedInsightSlugs: string[];
}

// ── Mock data ─────────────────────────────────────────────────────────────────

const RESOURCES: Resource[] = [
  {
    id: "dt-readiness-guide",
    title: "Digital Transformation Readiness Guide",
    excerpt:
      "An 18-page assessment guide that maps your current operating model across five readiness dimensions and produces a prioritised action plan for your transformation journey.",
    type: "Guide",
    category: "Digital Transformation",
    tags: ["Digital Transformation", "Assessment", "Strategy", "Planning"],
    featured: true,
    gated: true,
    downloadUrl: null,
    pageCount: 18,
    publishedAt: "2025-05-01T00:00:00.000Z",
    relatedInsightSlugs: ["ai-opportunity-for-growing-businesses"],
  },
  {
    id: "crm-requirements-template",
    title: "CRM Requirements Template",
    excerpt:
      "A structured four-page template for documenting your CRM needs before you evaluate a single vendor — covering workflow, integrations, team size, data migration and success criteria.",
    type: "Template",
    category: "CRM & Sales",
    tags: ["CRM", "Requirements", "Evaluation", "Vendor Selection"],
    featured: false,
    gated: true,
    downloadUrl: null,
    pageCount: 4,
    publishedAt: "2025-04-20T00:00:00.000Z",
    relatedInsightSlugs: ["why-crm-implementations-fail"],
  },
  {
    id: "pre-crm-checklist",
    title: "Pre-CRM Implementation Checklist",
    excerpt:
      "27 questions to answer before your CRM go-live — covering data readiness, workflow design, training plan, ownership assignment and success definition.",
    type: "Checklist",
    category: "CRM & Sales",
    tags: ["CRM", "Implementation", "Go-Live", "Checklist"],
    featured: false,
    gated: false,
    downloadUrl: null,
    publishedAt: "2025-04-10T00:00:00.000Z",
    relatedInsightSlugs: ["why-crm-implementations-fail"],
  },
  {
    id: "automation-opportunity-checklist",
    title: "Automation Opportunity Assessment Checklist",
    excerpt:
      "A one-page checklist to identify which repetitive tasks in your business are ready for automation — scored by frequency, consistency and current manual effort.",
    type: "Checklist",
    category: "AI & Automation",
    tags: ["Automation", "AI", "Assessment", "Operations"],
    featured: false,
    gated: false,
    downloadUrl: null,
    publishedAt: "2025-03-28T00:00:00.000Z",
    relatedInsightSlugs: ["ai-opportunity-for-growing-businesses"],
  },
  {
    id: "temple-tech-adoption-guide",
    title: "Temple Technology Adoption Guide",
    excerpt:
      "A 12-page guide for temple trustees and administrators — covering system selection, volunteer adoption, donor data migration and trustee reporting setup.",
    type: "Guide",
    category: "Temple Management",
    tags: ["Temple", "Technology", "Adoption", "Trustees"],
    featured: false,
    gated: true,
    downloadUrl: null,
    pageCount: 12,
    publishedAt: "2025-03-15T00:00:00.000Z",
    relatedInsightSlugs: [],
  },
  {
    id: "ops-report-template",
    title: "Monthly Operations Report Template",
    excerpt:
      "A three-page reporting template for operations leads — structured to surface KPIs, bottlenecks, team capacity and next-month priorities in one executive-ready document.",
    type: "Template",
    category: "Operations",
    tags: ["Operations", "Reporting", "Template", "Leadership"],
    featured: false,
    gated: true,
    downloadUrl: null,
    pageCount: 3,
    publishedAt: "2025-02-28T00:00:00.000Z",
    relatedInsightSlugs: [],
  },
  {
    id: "dt-readiness-checklist",
    title: "Digital Transformation Readiness Checklist",
    excerpt:
      "20 yes/no questions across five dimensions — leadership alignment, data quality, team capacity, process documentation and budget clarity — that reveal if you're ready to start.",
    type: "Checklist",
    category: "Digital Transformation",
    tags: ["Digital Transformation", "Readiness", "Assessment"],
    featured: false,
    gated: false,
    downloadUrl: null,
    publishedAt: "2025-02-14T00:00:00.000Z",
    relatedInsightSlugs: [],
  },
  {
    id: "crm-vendor-comparison",
    title: "CRM Vendor Comparison Sheet",
    excerpt:
      "A side-by-side comparison of six CRM platforms used by mid-market organisations in India — scored across pricing, integration depth, WhatsApp support, mobile UX and implementation complexity.",
    type: "Download",
    category: "CRM & Sales",
    tags: ["CRM", "Comparison", "Vendor Selection", "Evaluation"],
    featured: false,
    gated: true,
    downloadUrl: null,
    publishedAt: "2025-02-01T00:00:00.000Z",
    relatedInsightSlugs: ["why-crm-implementations-fail"],
  },
  {
    id: "ai-practical-guide",
    title: "AI for Growing Businesses — Practical Guide",
    excerpt:
      "A 14-page guide to the AI applications with the highest ROI for organisations with 10–100 people — covering lead qualification, document automation, follow-up sequences and data summarisation.",
    type: "Guide",
    category: "AI & Automation",
    tags: ["AI", "Automation", "Strategy", "ROI"],
    featured: false,
    gated: true,
    downloadUrl: null,
    pageCount: 14,
    publishedAt: "2025-01-20T00:00:00.000Z",
    relatedInsightSlugs: ["ai-opportunity-for-growing-businesses"],
  },
  {
    id: "process-mapping-template",
    title: "Process Mapping Template",
    excerpt:
      "A two-page template for documenting any business process in a format that both operations teams and technology consultants can work from — including swim-lanes, decision points and handoff definitions.",
    type: "Template",
    category: "Operations",
    tags: ["Process", "Mapping", "Operations", "Documentation"],
    featured: false,
    gated: true,
    downloadUrl: null,
    pageCount: 2,
    publishedAt: "2025-01-10T00:00:00.000Z",
    relatedInsightSlugs: [],
  },
];

// ── Query functions ───────────────────────────────────────────────────────────

export function getAllResources(): Resource[] {
  return [...RESOURCES].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedResource(): Resource | null {
  return RESOURCES.find((r) => r.featured) ?? null;
}

export function getResourceById(id: string): Resource | undefined {
  return RESOURCES.find((r) => r.id === id);
}

export function getResourcesByType(type: ResourceType): Resource[] {
  return getAllResources().filter((r) => r.type === type);
}

export function getResourcesByCategory(category: ResourceCategory): Resource[] {
  return getAllResources().filter((r) => r.category === category);
}

export function getAllResourceTypes(): ResourceType[] {
  return ["Guide", "Template", "Checklist", "Download"];
}

export function getAllResourceCategories(): ResourceCategory[] {
  const seen = new Set<ResourceCategory>();
  for (const r of RESOURCES) seen.add(r.category);
  return Array.from(seen);
}

export function searchResources(query: string): Resource[] {
  const q = query.toLowerCase().trim();
  if (!q) return getAllResources();
  return getAllResources().filter(
    (r) =>
      r.title.toLowerCase().includes(q) ||
      r.excerpt.toLowerCase().includes(q) ||
      r.tags.some((t) => t.toLowerCase().includes(q)) ||
      r.category.toLowerCase().includes(q) ||
      r.type.toLowerCase().includes(q)
  );
}
