/**
 * Case Studies data layer.
 *
 * Designed for CMS integration: swap `CASE_STUDIES` for an API fetch and
 * keep the query functions — pages and components need no changes.
 *
 * CMS field mapping notes (Sanity / Contentful):
 *   slug        → document slug
 *   coverImage  → image asset URL from CMS
 *   publishedAt → ISO date string from CMS
 *   All other fields map 1:1 as rich text or structured objects.
 */

// ── Types ─────────────────────────────────────────────────────────────────────

export type Industry =
  | "Professional Services"
  | "Education"
  | "Nonprofit"
  | "Temple & Spiritual"
  | "Healthcare"
  | "Retail";

export type Service =
  | "CRM & Workflow Systems"
  | "AI Automation"
  | "Digital Transformation"
  | "Temple Solutions"
  | "Custom Applications";

export interface CaseStudyMetric {
  value: string;
  label: string;
  direction: "up" | "down" | "neutral";
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  description: string;
  duration: string;
}

export interface StrategyPillar {
  title: string;
  description: string;
}

export interface LessonLearned {
  title: string;
  description: string;
}

export interface ExecutiveSummaryBlock {
  label: string;
  value: string;
}

export interface ExistingProcess {
  heading: string;
  body: string;
  steps: string[];
}

export interface CaseStudyVisual {
  title: string;
  description: string;
  points: string[];
}

export interface CaseStudyTestimonial {
  quote: string;
  name: string;
  role: string;
}

export interface CaseStudySalesAsset {
  executiveSummary: ExecutiveSummaryBlock[];
  existingProcess: ExistingProcess;
  visuals: CaseStudyVisual[];
  testimonial: CaseStudyTestimonial;
  futureRoadmap: RoadmapPhase[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  industry: Industry;
  services: Service[];
  /** Anonymised or actual client name — swap when real clients approve. */
  client: string;
  duration: string;
  year: number;
  featured: boolean;
  /**
   * CMS: replace with asset URL from CMS provider.
   * Local dev: use /images/case-studies/<slug>.jpg
   */
  coverImage: string | null;
  summary: string;
  challenge: {
    heading: string;
    body: string;
    painPoints: string[];
  };
  discovery: {
    heading: string;
    body: string;
    findings: string[];
  };
  strategy: {
    heading: string;
    body: string;
    pillars: StrategyPillar[];
  };
  implementation: {
    heading: string;
    body: string;
    phases: RoadmapPhase[];
  };
  results: {
    heading: string;
    narrative: string;
    metrics: CaseStudyMetric[];
  };
  lessonsLearned: LessonLearned[];
  relatedSlugs: string[];
  publishedAt: string; // ISO 8601
}

// ── Mock data ─────────────────────────────────────────────────────────────────
// Replace this array with a CMS fetch when content is ready.

const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "law-firm-crm-transformation",
    title: "From Sticky Notes to a Fully Automated Client Pipeline",
    tagline:
      "A 12-person law firm replaced spreadsheets and WhatsApp threads with a CRM that captures every enquiry and automates follow-up — resulting in a 40% increase in conversion rate.",
    industry: "Professional Services",
    services: ["CRM & Workflow Systems"],
    client: "Mid-size Litigation Firm (South India)",
    duration: "8 weeks",
    year: 2024,
    featured: true,
    coverImage: null,
    summary:
      "A litigation firm was losing prospective clients because enquiries landed in three different inboxes with no central tracking. We designed and implemented a CRM with automated intake, qualification and follow-up workflows — cutting response time from 48 hours to under 2 hours and raising their conversion rate by 40%.",
    challenge: {
      heading: "A firm running on goodwill and memory",
      body: "When enquiries came through the website, WhatsApp and referrals simultaneously, there was no single place to track them. Senior partners were manually following up from personal inboxes. Leads that weren't followed up in 48 hours were effectively lost. The firm had the talent to win cases — but the intake process was costing them clients before any conversation could happen.",
      painPoints: [
        "Enquiries arriving across 4 separate channels with no unified inbox",
        "No tracking of which leads had been contacted, and when",
        "Follow-up entirely manual and dependent on one partner's memory",
        "Zero visibility into pipeline size or conversion rate",
        "Onboarding handoff from intake to case team done verbally",
      ],
    },
    discovery: {
      heading: "Two weeks mapping every touchpoint",
      body: "We spent the first two weeks shadowing the intake process — observing how enquiries arrived, how they were routed, and where they died. We interviewed the two partners handling intake, the paralegal who managed WhatsApp, and the receptionist fielding calls. The picture that emerged was of a team working hard inside a system that had never been designed.",
      findings: [
        "38% of website enquiries received no reply within 72 hours",
        "WhatsApp was the highest-volume channel but had no CRM touchpoint",
        "The firm had no data on which referral sources produced the best clients",
        "The handoff from intake to case team had no structured information transfer",
        "Partners estimated 2–3 hours per week spent chasing their own follow-up notes",
      ],
    },
    strategy: {
      heading: "One pipeline. Every channel. Automated from first touch.",
      body: "Rather than recommending a complex enterprise CRM, we configured a mid-market platform that matched the firm's size and technical comfort. The core principle: every enquiry — regardless of channel — enters one pipeline stage, triggers one confirmation to the prospect, and creates one task for the responsible partner. Nothing manual until a human decision is actually needed.",
      pillars: [
        {
          title: "Unified Intake",
          description:
            "Website form, WhatsApp and phone enquiries all route into a single CRM pipeline stage via Zapier integrations and a shared team inbox.",
        },
        {
          title: "Automatic Qualification Sequence",
          description:
            "Each new lead receives an immediate acknowledgment email and a 15-minute calendar booking link. Unresponsive leads enter a 5-touch automated sequence over 14 days.",
        },
        {
          title: "Handoff Protocol",
          description:
            "When a lead moves to 'Consultation Booked', the system generates a structured briefing note — practice area, matter summary, source — and assigns it to the relevant case team member.",
        },
        {
          title: "Pipeline Reporting",
          description:
            "A weekly dashboard shows lead volume by source, average time-to-contact, and conversion rates at each stage — giving the managing partner a true picture of business development health.",
        },
      ],
    },
    implementation: {
      heading: "Eight weeks from spreadsheets to live system",
      body: "We ran a phased rollout so the team never lost continuity on active matters. Week 1–2 was discovery and data migration. Weeks 3–5 were CRM configuration, integration build and workflow automation. Weeks 6–7 were staff training and parallel running. Week 8 was full go-live with a 30-day hypercare period.",
      phases: [
        {
          phase: "Phase 1",
          title: "Discovery & Data Migration",
          description:
            "Audited existing contacts, mapped enquiry sources, and migrated 18 months of client records into the new CRM with clean tagging.",
          duration: "2 weeks",
        },
        {
          phase: "Phase 2",
          title: "CRM Configuration & Automation Build",
          description:
            "Configured pipeline stages, built intake workflows, connected WhatsApp and website form via Zapier, and set up the automated follow-up sequences.",
          duration: "3 weeks",
        },
        {
          phase: "Phase 3",
          title: "Training & Parallel Running",
          description:
            "Ran hands-on sessions for all 5 staff involved in intake. Team ran old and new systems in parallel for 2 weeks to build confidence before full cutover.",
          duration: "2 weeks",
        },
        {
          phase: "Phase 4",
          title: "Go-Live & Hypercare",
          description:
            "Full cutover to new system. 30-day hypercare period with weekly check-ins to catch edge cases and refine automations based on real usage.",
          duration: "1 week + 30 days",
        },
      ],
    },
    results: {
      heading: "Six months post-launch",
      narrative:
        "Six months after go-live, the firm's intake process was unrecognisable. What had been a manual, memory-dependent system became the most reliable part of their operations. The managing partner described it as the first time she had felt truly in control of business development.",
      metrics: [
        { value: "40%", label: "Increase in enquiry-to-consultation conversion", direction: "up" },
        { value: "< 2h", label: "Average first-response time (from 48h)", direction: "up" },
        { value: "38%", label: "Reduction in leads with no response", direction: "down" },
        { value: "3h/wk", label: "Time saved per partner on follow-up admin", direction: "up" },
        { value: "100%", label: "Enquiries now captured in one system", direction: "neutral" },
        { value: "2.3×", label: "Pipeline visibility — stages now tracked vs. none", direction: "up" },
      ],
    },
    lessonsLearned: [
      {
        title: "The tool matters less than the workflow design",
        description:
          "The firm had tried a CRM once before and abandoned it. The failure wasn't the software — it was that no one had designed the workflow around the way the team actually worked. Configuration is a small fraction of the job.",
      },
      {
        title: "WhatsApp integration is non-negotiable in India",
        description:
          "Every professional services client we've worked with uses WhatsApp as a primary business channel. Any CRM that doesn't connect to it creates a parallel process that staff will default to — making the CRM optional, and therefore unused.",
      },
      {
        title: "Parallel running reduces resistance more than training",
        description:
          "Staff who were sceptical of the new system became advocates once they experienced a full week where every enquiry was tracked without effort on their part. Proof beats persuasion.",
      },
    ],
    relatedSlugs: ["coaching-institute-admissions", "nonprofit-donor-crm"],
    publishedAt: "2025-01-15T00:00:00.000Z",
  },

  {
    slug: "coaching-institute-admissions",
    title: "Automating Admissions for a 2,000-Student Coaching Institute",
    tagline:
      "A growing coaching institute replaced a paper-based admissions process with an end-to-end digital system — cutting processing time by 65% and eliminating fee collection errors.",
    industry: "Education",
    services: ["CRM & Workflow Systems", "Digital Transformation"],
    client: "STEM Coaching Institute (Karnataka)",
    duration: "10 weeks",
    year: 2024,
    featured: false,
    coverImage: null,
    summary:
      "A STEM coaching institute handling 2,000 students across three locations was managing admissions, fee collection and attendance on paper and WhatsApp. We built a connected digital system — admissions CRM, fee automation, and a parent communication portal — that reduced administrative overhead by 65% and gave management their first real-time view of institute health.",
    challenge: {
      heading: "Three locations, no single source of truth",
      body: "Each branch ran independently. Admissions were tracked in registers. Fee collection was handled in Excel by individual coordinators. Parent communication was a mix of WhatsApp group broadcasts and phone calls. When management needed numbers — enrollment counts, fee collection status, batch sizes — they had to call each branch and wait for a response.",
      painPoints: [
        "Admissions data siloed at branch level — no consolidated view",
        "Fee reminders sent manually via WhatsApp, with no tracking",
        "Duplicate student registrations across branches went undetected",
        "No parent-facing portal for fee receipts or class schedules",
        "Management reporting required 4–6 hours of manual data collation weekly",
      ],
    },
    discovery: {
      heading: "Process mapping across three branches",
      body: "We embedded with each branch coordinator for two days each, observing the admissions process from initial enquiry through enrollment and fee payment. We identified 23 distinct manual steps in the admissions journey — most of which could be automated or eliminated without losing quality.",
      findings: [
        "Average admissions process: 14 touchpoints, 3 staff involved, 5 days end-to-end",
        "Fee reminder process consumed 6+ hours per coordinator per month",
        "15% of student records had data discrepancies across branch records",
        "Parents had no self-service channel for receipts, schedules or progress",
        "No historical data on which marketing channels produced enrolled students",
      ],
    },
    strategy: {
      heading: "One system across all three branches — with local flexibility",
      body: "We built on a cloud-based CRM platform with multi-location support, layering automation for the highest-volume manual tasks first. The guiding principle: coordinators should spend time with students and parents, not with spreadsheets.",
      pillars: [
        {
          title: "Unified Admissions Pipeline",
          description:
            "All enquiries — walk-in, online, referral — enter a single pipeline with branch tagging. Coordinators manage their branch view; management sees the consolidated picture.",
        },
        {
          title: "Automated Fee Management",
          description:
            "Fee schedules configured per course. Automated reminders at 7 days, 3 days and due date. Receipts generated and delivered automatically on payment confirmation.",
        },
        {
          title: "Parent Portal",
          description:
            "Self-service portal for fee history, payment receipts, batch schedules and announcements. Reduces inbound queries by giving parents answers without calling the branch.",
        },
        {
          title: "Management Dashboard",
          description:
            "Live enrollment counts, fee collection rates, batch capacity utilisation and branch performance — updated in real time, available to management from any device.",
        },
      ],
    },
    implementation: {
      heading: "Ten weeks with zero disruption to the academic calendar",
      body: "Implementation was timed around the gap between academic batches. Data migration was the most complex phase — consolidating 3 branch registers into one clean dataset required manual deduplication and validation before import.",
      phases: [
        {
          phase: "Phase 1",
          title: "Data Audit & Consolidation",
          description:
            "Extracted records from all three branches. Deduplicated 340 student records, standardised field formats, and built a clean master dataset ready for import.",
          duration: "2 weeks",
        },
        {
          phase: "Phase 2",
          title: "CRM & Automation Configuration",
          description:
            "Configured multi-location CRM, built fee automation workflows, set up WhatsApp and email notification pipelines, and created management dashboard views.",
          duration: "4 weeks",
        },
        {
          phase: "Phase 3",
          title: "Parent Portal Build",
          description:
            "Designed and built the parent-facing portal integrated with CRM data. Included fee history, payment gateway, schedule views and announcement board.",
          duration: "2 weeks",
        },
        {
          phase: "Phase 4",
          title: "Training, Rollout & Stabilisation",
          description:
            "Branch coordinator training, phased rollout starting with the largest branch, followed by the other two over two weeks.",
          duration: "2 weeks",
        },
      ],
    },
    results: {
      heading: "First full admissions cycle on the new system",
      narrative:
        "The first full admissions cycle on the new system processed 600 new enrollments with no paper, no spreadsheets and no branch-to-branch data calls. The institute director described the parent portal as 'the single most appreciated thing we've done for parent trust in ten years'.",
      metrics: [
        { value: "65%", label: "Reduction in admissions processing time", direction: "up" },
        { value: "92%", label: "Fee collection rate (from 78% prior year)", direction: "up" },
        { value: "6h → 30m", label: "Weekly management reporting time", direction: "up" },
        { value: "0", label: "Fee collection errors in first cycle (vs. avg 12/cycle)", direction: "down" },
        { value: "600", label: "Enrollments processed in first cycle without paper", direction: "neutral" },
        { value: "4.8/5", label: "Parent portal satisfaction (post-launch survey)", direction: "neutral" },
      ],
    },
    lessonsLearned: [
      {
        title: "Data quality work is the project",
        description:
          "The most challenging and time-consuming part of this engagement was not the software — it was cleaning, deduplicating and validating 3 years of branch records. Investing in data quality upfront made everything downstream reliable.",
      },
      {
        title: "Parent portals build trust faster than any marketing",
        description:
          "Within a month of launch, the institute received unsolicited positive feedback from parents in three separate meetings. A professional digital experience signals institutional quality in ways that are hard to achieve otherwise.",
      },
      {
        title: "Start with the highest-volume pain point",
        description:
          "We chose fee reminders as the first automation — not because it was technically interesting, but because it freed 6 hours per coordinator per month immediately. Early wins sustain change management momentum.",
      },
    ],
    relatedSlugs: ["law-firm-crm-transformation", "temple-operations-overhaul"],
    publishedAt: "2025-03-20T00:00:00.000Z",
  },

  {
    slug: "temple-operations-overhaul",
    title: "Building a Digital Operations System for a 500-Year-Old Temple",
    tagline:
      "One of South India's oldest temples replaced paper-based administration with a purpose-built digital system — improving donation transparency, seva coordination and community engagement.",
    industry: "Temple & Spiritual",
    services: ["Temple Solutions", "CRM & Workflow Systems"],
    client: "Historic Temple Trust (Tamil Nadu)",
    duration: "12 weeks",
    year: 2025,
    featured: false,
    coverImage: null,
    summary:
      "A temple managing over 800 devotees, regular festivals and a team of 40 volunteers had never moved beyond paper registers. We built a purpose-designed digital operations system covering donation tracking, seva scheduling, event registration and trustee reporting — with deep respect for the institution's culture and pace.",
    challenge: {
      heading: "Sacred operations running on registers and goodwill",
      body: "The temple ran entirely on paper — donation records in ledger books, seva schedules pinned to a noticeboard, event registrations collected by hand. Trustees had no consolidated view of finances. The administration worked through dedication — but the system had no resilience. When key volunteers were unavailable, operations became uncertain.",
      painPoints: [
        "Donation records manually entered in physical ledgers — no receipts issued",
        "No searchable donor history — repeat donors had to re-provide details each visit",
        "Seva scheduling relied on one volunteer who held all knowledge informally",
        "Event registration by paper form — capacity management entirely manual",
        "Trustees received monthly summaries prepared by hand from ledger data",
      ],
    },
    discovery: {
      heading: "Understanding how a temple really works before touching anything",
      body: "We spent three weeks before any design work simply observing — attending morning and evening services, sitting with the administration team during festival planning, joining a trustee meeting. Digital transformation for a sacred institution requires understanding what the institution is, not just how it operates.",
      findings: [
        "Devotee communication primarily via WhatsApp family groups — not email",
        "Donors deeply value personal acknowledgment — automated receipts alone would feel cold",
        "Seva scheduling decisions are semi-ritualistic — system must support, not replace, human assignment",
        "Trustees' primary reporting need: transparency to donors, not operational metrics",
        "Festival registration overflows caused real friction — turning away devotees who had travelled far",
      ],
    },
    strategy: {
      heading: "Technology that serves service — not the other way around",
      body: "Every design decision was filtered through one question: does this make it easier for the temple to serve its community? We resisted features that would add training burden without proportional benefit. The result was a smaller, more focused system than initially proposed — and significantly more successful.",
      pillars: [
        {
          title: "Donation System with Human Touch",
          description:
            "Digital recording and instant receipt generation — with a printed receipt option for devotees who prefer paper. Donor history searchable by phone number so returning donors are greeted by name.",
        },
        {
          title: "Seva Scheduling Support",
          description:
            "Volunteer availability and skills database. The head coordinator still makes assignments — the system surfaces who is available and qualified, rather than automating the decision.",
        },
        {
          title: "Event Registration Portal",
          description:
            "Simple online registration for festivals and programs with capacity management. WhatsApp confirmation sent automatically. Walk-in registration also supported at the gate.",
        },
        {
          title: "Trustee Transparency Dashboard",
          description:
            "Monthly financial summary generated automatically from donation records. Export-ready for auditors. Designed to be shown to donors who ask how their contributions are used.",
        },
      ],
    },
    implementation: {
      heading: "Twelve weeks designed around the festival calendar",
      body: "We worked around the temple's festival schedule deliberately — no major changes were made in the two weeks before or after significant events. The system was introduced gradually, starting with donation recording during a period of lower visitor volume.",
      phases: [
        {
          phase: "Phase 1",
          title: "Discovery & Relationship Building",
          description:
            "Three weeks of observation, interviews and process mapping. Built trust with the administration team before proposing any changes.",
          duration: "3 weeks",
        },
        {
          phase: "Phase 2",
          title: "Donation System & Receipts",
          description:
            "Built and deployed the donation recording system first — the highest-value, lowest-risk starting point. Staff trained during normal operations.",
          duration: "3 weeks",
        },
        {
          phase: "Phase 3",
          title: "Seva & Event Systems",
          description:
            "Volunteer database, seva scheduling support, and event registration portal built and integrated with donation system.",
          duration: "4 weeks",
        },
        {
          phase: "Phase 4",
          title: "Trustee Dashboard & Handover",
          description:
            "Reporting dashboard configured, trustee walkthroughs conducted, comprehensive handover documentation prepared in the local language.",
          duration: "2 weeks",
        },
      ],
    },
    results: {
      heading: "One year post-implementation",
      narrative:
        "One year after implementation, the temple's administration team described the system as 'invisible in the best way' — it handles what needs handling without disrupting the flow of service. Donation transparency was cited by three major donors as a reason they increased their annual contributions.",
      metrics: [
        { value: "100%", label: "Donations now digitally recorded and receipted", direction: "neutral" },
        { value: "3×", label: "Increase in online festival registrations", direction: "up" },
        { value: "₹0", label: "Discrepancies in trustee financial reporting (year 1)", direction: "down" },
        { value: "40+", label: "Volunteers with digital profiles and availability records", direction: "neutral" },
        { value: "2", label: "Major donors who cited transparency in increasing contributions", direction: "up" },
        { value: "0", label: "Festival registration overflows (vs. 3 in previous year)", direction: "down" },
      ],
    },
    lessonsLearned: [
      {
        title: "Spend more time listening than proposing",
        description:
          "Three weeks of observation before any design work produced a fundamentally different system than we would have proposed on day one. Sacred institutions have operating logic that isn't visible from the outside.",
      },
      {
        title: "A smaller, trusted system beats a larger unused one",
        description:
          "We cut two features from the original scope because staff feedback suggested they would add complexity without proportional benefit. The reduced scope was fully adopted. The cut features would not have been.",
      },
      {
        title: "Language and format matter as much as functionality",
        description:
          "The trustee dashboard was initially in English. After feedback, we reproduced all labels and reports in Tamil. Adoption by trustees went from occasional to weekly immediately after.",
      },
    ],
    relatedSlugs: ["nonprofit-donor-crm", "coaching-institute-admissions"],
    publishedAt: "2025-05-10T00:00:00.000Z",
  },

  {
    slug: "nonprofit-donor-crm",
    title: "Giving a Nonprofit Full Visibility Over Its Donor Relationships",
    tagline:
      "An NGO working across 6 districts was managing 1,200 donors in spreadsheets. We implemented a donor CRM with automated stewardship workflows — improving donor retention by 28%.",
    industry: "Nonprofit",
    services: ["CRM & Workflow Systems", "AI Automation"],
    client: "Rural Education NGO (Maharashtra)",
    duration: "6 weeks",
    year: 2025,
    featured: false,
    coverImage: null,
    summary:
      "A rural education NGO with 1,200 active donors across 6 districts had no systematic donor stewardship. We implemented a donor CRM with automated acknowledgment, impact reporting and lapsed-donor re-engagement workflows, improving first-year donor retention from 52% to 80%.",
    challenge: {
      heading: "Donors who gave once and never heard back",
      body: "The NGO's fundraising success had outgrown its administrative capacity. When a new donor contributed, the acknowledgment — if it happened at all — was a manual WhatsApp message sent days later. Impact reporting was a once-a-year newsletter that reached fewer than 30% of the donor list.",
      painPoints: [
        "No systematic acknowledgment process — thank-you messages sent ad hoc",
        "Donor records in three separate Excel files maintained by different staff",
        "No tracking of which donors had lapsed — no re-engagement process",
        "Impact reports sent annually with 30% open rate and no segmentation",
        "Major donors received same communications as first-time ₹500 donors",
      ],
    },
    discovery: {
      heading: "Understanding the donor journey from the donor's perspective",
      body: "We conducted 12 structured interviews with donors at different giving levels — recent first-time donors, multi-year supporters and lapsed donors. The pattern was consistent: donors who felt acknowledged and informed gave again; those who felt their contribution disappeared into silence did not.",
      findings: [
        "First-year donor retention rate: 52% (sector benchmark: 45–55%)",
        "Average time to first acknowledgment: 4.7 days (industry best practice: same day)",
        "0% of lapsed donors had received a re-engagement communication in 12 months",
        "Major donors expressed desire for more frequent, specific impact updates",
        "3 of 12 interviewed donors had recently redirected giving to another organisation",
      ],
    },
    strategy: {
      heading: "Acknowledge immediately. Inform regularly. Re-engage systematically.",
      body: "The strategic framing: treat donors as partners in the mission, not transactions to be processed. Every workflow we built was designed to make donors feel their contribution was seen, understood and used well. We segmented the donor base into three tiers with differentiated communication strategies for each.",
      pillars: [
        {
          title: "Immediate Acknowledgment",
          description:
            "Same-day automated thank-you with personalised impact language based on donation amount and programme area. WhatsApp for amounts under ₹5,000; email + WhatsApp for above.",
        },
        {
          title: "Tiered Stewardship",
          description:
            "Three donor tiers with differentiated contact cadence. Major donors receive quarterly impact calls. Mid-tier receive monthly impact briefs. Small donors receive bi-annual project updates.",
        },
        {
          title: "Lapsed Donor Re-engagement",
          description:
            "Donors who haven't given in 13 months enter a 3-touch re-engagement sequence — a personalised impact story, a programme update, and a soft ask.",
        },
        {
          title: "Reporting Automation",
          description:
            "Monthly donor report generated automatically — total contributions, new donors, retention rate, lapsed count — so the fundraising director has a real picture without building it manually.",
        },
      ],
    },
    implementation: {
      heading: "Six weeks: data, CRM, automation, training",
      body: "The tight timeline was achievable because the scope was well-defined and the team was small. The most complex element was data consolidation — three Excel files with overlapping records required careful manual reconciliation.",
      phases: [
        {
          phase: "Phase 1",
          title: "Data Consolidation",
          description:
            "Merged and deduplicated 3 spreadsheet files into one clean donor dataset. Standardised naming, tagged donation history, and segmented into 3 tiers.",
          duration: "1.5 weeks",
        },
        {
          phase: "Phase 2",
          title: "CRM Setup & Automation",
          description:
            "Configured donor CRM, built acknowledgment automations, set up stewardship sequences and lapsed-donor re-engagement workflows.",
          duration: "3 weeks",
        },
        {
          phase: "Phase 3",
          title: "Training & Go-Live",
          description:
            "Trained fundraising team of 4. Configured reporting dashboard. Full go-live with 2-week hypercare.",
          duration: "1.5 weeks",
        },
      ],
    },
    results: {
      heading: "Eight months post-launch",
      narrative:
        "Eight months after launch, the NGO's donor retention rate had moved from 52% to 80% — a 28-point improvement representing approximately ₹8L in contributions that would previously have lapsed.",
      metrics: [
        { value: "80%", label: "First-year donor retention (from 52%)", direction: "up" },
        { value: "Same day", label: "Average acknowledgment time (from 4.7 days)", direction: "up" },
        { value: "28%", label: "Improvement in donor retention rate", direction: "up" },
        { value: "~₹8L", label: "Estimated additional retained contributions", direction: "up" },
        { value: "62%", label: "Lapsed-donor re-engagement email open rate", direction: "neutral" },
        { value: "18%", label: "Lapsed donors re-activated within 90 days", direction: "up" },
      ],
    },
    lessonsLearned: [
      {
        title: "Retention is more valuable than acquisition for small NGOs",
        description:
          "The cost of acquiring a new donor is significantly higher than retaining an existing one. Improving retention by 28 points delivered more revenue impact than any new acquisition campaign would have at the same investment level.",
      },
      {
        title: "Segmentation doesn't need to be complex to be effective",
        description:
          "Three tiers based on annual giving volume was enough to create meaningfully differentiated experiences. Over-segmentation would have created workflow complexity that a 4-person team couldn't sustain.",
      },
      {
        title: "Impact language is a skill, not a template",
        description:
          "We spent significant time translating operational metrics into donor-resonant language. 'We ran 12 learning camps' became 'your contribution gave 180 children their first experience of hands-on science'.",
      },
    ],
    relatedSlugs: ["temple-operations-overhaul", "law-firm-crm-transformation"],
    publishedAt: "2025-04-08T00:00:00.000Z",
  },
];

// ── Query functions ───────────────────────────────────────────────────────────
// These are the only interfaces pages and components should use.
// When switching to a CMS, replace the implementations — not the call sites.

const CASE_STUDY_SALES_ASSETS: Record<string, CaseStudySalesAsset> = {
  "law-firm-crm-transformation": {
    executiveSummary: [
      {
        label: "Client situation",
        value:
          "A litigation firm had strong demand but no reliable intake system across website, WhatsApp, phone and referrals.",
      },
      {
        label: "Mandate",
        value:
          "Create one pipeline for every enquiry, automate routine follow-up and give partners live visibility into business development.",
      },
      {
        label: "Intervention",
        value:
          "A configured CRM, channel integrations, automated qualification, partner tasks and structured handoff notes.",
      },
      {
        label: "Commercial impact",
        value:
          "First response dropped below 2 hours and enquiry-to-consultation conversion increased by 40%.",
      },
    ],
    existingProcess: {
      heading: "The intake process before Paravyoma",
      body:
        "The firm did not have a defined intake operating model. Each channel created its own informal process, which meant follow-up quality depended on who saw the message first.",
      steps: [
        "Prospect enquiry arrived through website, WhatsApp, phone or referral.",
        "A partner, paralegal or receptionist manually noted the enquiry.",
        "Follow-up depended on personal reminders and inbox memory.",
        "Consultation context was passed verbally to the case team.",
        "Leadership had no reliable view of lead volume, source or conversion.",
      ],
    },
    visuals: [
      {
        title: "Unified intake pipeline",
        description:
          "A board-style CRM view showing every enquiry by stage, owner, practice area and next action.",
        points: [
          "New, contacted, consultation booked and retained stages",
          "Source tagging for website, WhatsApp, phone and referral",
          "Owner and next-action due dates visible at a glance",
        ],
      },
      {
        title: "Partner follow-up dashboard",
        description:
          "A daily operating view for partners showing overdue leads, booked consultations and source quality.",
        points: [
          "Response SLA tracker",
          "High-intent lead queue",
          "Weekly conversion and source reporting",
        ],
      },
    ],
    testimonial: {
      quote:
        "For the first time, we can see every enquiry, who owns it and what needs to happen next. It removed the anxiety of wondering what we had missed.",
      name: "Managing Partner",
      role: "Mid-size Litigation Firm",
    },
    futureRoadmap: [
      {
        phase: "Next phase",
        title: "Matter onboarding automation",
        description:
          "Extend the CRM handoff into matter setup, document collection and new-client onboarding tasks.",
        duration: "4 weeks",
      },
      {
        phase: "Expansion",
        title: "Referral source intelligence",
        description:
          "Build deeper reporting on referral quality, practice-area demand and partner conversion performance.",
        duration: "6 weeks",
      },
    ],
  },
  "coaching-institute-admissions": {
    executiveSummary: [
      {
        label: "Client situation",
        value:
          "A multi-branch coaching institute was managing admissions, fees and parent communication across registers, Excel and WhatsApp.",
      },
      {
        label: "Mandate",
        value:
          "Create one admissions and fee-management system across three locations without disrupting the academic calendar.",
      },
      {
        label: "Intervention",
        value:
          "A multi-location CRM, automated fee workflows, parent portal and live management dashboards.",
      },
      {
        label: "Operational impact",
        value:
          "Admissions processing time fell by 65% and weekly reporting dropped from 6 hours to 30 minutes.",
      },
    ],
    existingProcess: {
      heading: "The admissions process before Paravyoma",
      body:
        "Each branch operated independently. This gave local coordinators flexibility, but it left leadership without dependable numbers and created repeated manual work for every admissions cycle.",
      steps: [
        "Enquiry captured locally in a register or coordinator spreadsheet.",
        "Coordinator manually followed up with parents by phone or WhatsApp.",
        "Fee schedule tracked in branch-level Excel files.",
        "Receipts and reminders handled manually by each coordinator.",
        "Management called branches weekly to assemble consolidated numbers.",
      ],
    },
    visuals: [
      {
        title: "Admissions command center",
        description:
          "A consolidated view of enquiries, branch capacity, student status and pending fee actions.",
        points: [
          "Branch and course filters",
          "Admission stage funnel",
          "Duplicate record warnings",
        ],
      },
      {
        title: "Parent portal",
        description:
          "A simple self-service layer for receipts, fee history, schedules and announcements.",
        points: [
          "Payment receipt history",
          "Class and batch schedules",
          "Announcement feed for parents",
        ],
      },
    ],
    testimonial: {
      quote:
        "The parent portal changed how families perceived us. It made the institute feel organized, transparent and easier to trust.",
      name: "Institute Director",
      role: "STEM Coaching Institute",
    },
    futureRoadmap: [
      {
        phase: "Next phase",
        title: "Student progress visibility",
        description:
          "Connect attendance, assessment performance and parent communication into the same portal experience.",
        duration: "8 weeks",
      },
      {
        phase: "Expansion",
        title: "Marketing attribution",
        description:
          "Track which campaigns and referral sources produce enrolled, retained students by branch and course.",
        duration: "5 weeks",
      },
    ],
  },
  "temple-operations-overhaul": {
    executiveSummary: [
      {
        label: "Client situation",
        value:
          "A historic temple trust relied on paper ledgers, informal volunteer knowledge and manual trustee reporting.",
      },
      {
        label: "Mandate",
        value:
          "Modernize temple administration while preserving the institution's rhythm, dignity and service culture.",
      },
      {
        label: "Intervention",
        value:
          "A purpose-built temple operations system for donations, seva scheduling, event registration, volunteers and trustee dashboards.",
      },
      {
        label: "Institutional impact",
        value:
          "Donation transparency improved, festival overflow was eliminated and trustee reports had zero discrepancies in year one.",
      },
    ],
    existingProcess: {
      heading: "The temple operating model before Paravyoma",
      body:
        "The temple's daily operations were sustained by dedication and personal knowledge. That worked while key volunteers were present, but it created fragility and limited transparency for trustees and donors.",
      steps: [
        "Donation details entered by hand in physical ledgers.",
        "Seva schedules maintained on noticeboards and in volunteer memory.",
        "Festival registrations collected through paper forms.",
        "Volunteer assignments made informally by one coordinator.",
        "Trustee reports prepared manually from ledgers after month-end.",
      ],
    },
    visuals: [
      {
        title: "Temple operations console",
        description:
          "A calm daily view of donations, sevas, events, volunteers and trustee reporting.",
        points: [
          "Donation receipt queue",
          "Daily seva roster",
          "Festival capacity and volunteer coverage",
        ],
      },
      {
        title: "Trustee transparency dashboard",
        description:
          "A monthly reporting layer designed for governance, donor transparency and audit readiness.",
        points: [
          "Donation totals and categories",
          "Receipt reconciliation",
          "Export-ready trustee summaries",
        ],
      },
    ],
    testimonial: {
      quote:
        "The system became invisible in the best way. It supports service without changing the spirit of how the temple runs.",
      name: "Temple Trustee",
      role: "Historic Temple Trust",
    },
    futureRoadmap: [
      {
        phase: "Next phase",
        title: "Temple Suite migration",
        description:
          "Move the implementation into Paravyoma's Temple Suite architecture for deeper module coverage and long-term product support.",
        duration: "6 weeks",
      },
      {
        phase: "Expansion",
        title: "Community engagement and book distribution",
        description:
          "Add member communication, book stock, distribution counters and campaign reporting to the same temple record layer.",
        duration: "8 weeks",
      },
    ],
  },
  "nonprofit-donor-crm": {
    executiveSummary: [
      {
        label: "Client situation",
        value:
          "A rural education NGO had 1,200 donors but no systematic donor stewardship or retention process.",
      },
      {
        label: "Mandate",
        value:
          "Create a donor relationship system that acknowledged giving quickly, segmented communication and recovered lapsed donors.",
      },
      {
        label: "Intervention",
        value:
          "A donor CRM with acknowledgment automation, stewardship sequences, lapsed-donor workflows and fundraising dashboards.",
      },
      {
        label: "Fundraising impact",
        value:
          "First-year donor retention increased from 52% to 80%, representing roughly Rs. 8L in retained contributions.",
      },
    ],
    existingProcess: {
      heading: "The donor journey before Paravyoma",
      body:
        "The organization had earned donor trust through field work, but its operating system did not sustain that trust after the first contribution.",
      steps: [
        "Donation received and manually added to one of several spreadsheets.",
        "Acknowledgment sent days later, if a staff member remembered.",
        "Donor history unavailable during follow-up conversations.",
        "Annual newsletter sent without segmentation or engagement tracking.",
        "Lapsed donors were not identified or re-engaged systematically.",
      ],
    },
    visuals: [
      {
        title: "Donor relationship dashboard",
        description:
          "A segmented CRM view of new donors, retained donors, lapsed donors and major supporters.",
        points: [
          "Donation history by donor",
          "Stewardship tier",
          "Next touchpoint and owner",
        ],
      },
      {
        title: "Impact communication workflow",
        description:
          "Automated but human-reviewed messages that connect donor contribution to program outcomes.",
        points: [
          "Same-day acknowledgment",
          "Monthly impact briefs",
          "Lapsed donor reactivation sequence",
        ],
      },
    ],
    testimonial: {
      quote:
        "We stopped treating donor communication as admin. The system helped us steward relationships with the care our donors expected.",
      name: "Fundraising Director",
      role: "Rural Education NGO",
    },
    futureRoadmap: [
      {
        phase: "Next phase",
        title: "Grant and major donor reporting",
        description:
          "Extend the CRM into funder-specific reporting, grant milestones and major donor briefing packs.",
        duration: "6 weeks",
      },
      {
        phase: "Expansion",
        title: "Program impact data integration",
        description:
          "Connect student and program outcome data directly into donor impact communication workflows.",
        duration: "8 weeks",
      },
    ],
  },
};

export function getAllCaseStudies(): CaseStudy[] {
  return [...CASE_STUDIES].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}

export function getCaseStudySalesAsset(
  slug: string
): CaseStudySalesAsset | undefined {
  return CASE_STUDY_SALES_ASSETS[slug];
}

export function getFeaturedCaseStudy(): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.featured);
}

export function getCaseStudiesByIndustry(industry: Industry): CaseStudy[] {
  return getAllCaseStudies().filter((cs) => cs.industry === industry);
}

export function getRelatedCaseStudies(slug: string): CaseStudy[] {
  const current = getCaseStudyBySlug(slug);
  if (!current) return [];
  return current.relatedSlugs
    .map((s) => getCaseStudyBySlug(s))
    .filter((cs): cs is CaseStudy => cs !== undefined);
}

export function getAllIndustries(): Industry[] {
  const set = new Set(CASE_STUDIES.map((cs) => cs.industry));
  return Array.from(set).sort();
}

export function getAllSlugs(): string[] {
  return CASE_STUDIES.map((cs) => cs.slug);
}
