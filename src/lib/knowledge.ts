/**
 * Knowledge Center data layer — Authority Engine pillar pages (Phase 5).
 *
 * Each knowledge center pairs with categories that already exist in
 * resources.ts / insights.ts / case-studies.ts, so a pillar page is an
 * aggregation view, not a new content silo. Only "digital-transformation"
 * is populated for now (proof of pattern) — add a center by extending
 * KnowledgeCenterKey and adding one entry to KNOWLEDGE_CENTERS.
 *
 * CMS migration path: same as resources.ts — replace the literal config
 * with a fetch; getKnowledgeCenter()'s signature stays unchanged.
 */

import type { ResourceCategory } from "./resources";
import type { ArticleCategory } from "./insights";
import type { Service } from "./case-studies";

// ── Types ─────────────────────────────────────────────────────────────────────

export type KnowledgeCenterKey =
  | "digital-transformation"
  | "ai-automation"
  | "temple-operations"
  | "crm-maturity";

export interface AssessmentOption {
  label: string;
  score: number;
}

export interface AssessmentQuestion {
  id: string;
  prompt: string;
  options: AssessmentOption[];
}

export interface AssessmentTier {
  /** First tier (sorted descending) whose minScore the total meets or exceeds wins. */
  minScore: number;
  title: string;
  description: string;
}

export interface AssessmentConfig {
  title: string;
  description: string;
  questions: AssessmentQuestion[];
  tiers: AssessmentTier[];
}

export interface KnowledgeCenterConfig {
  key: KnowledgeCenterKey;
  eyebrow: string;
  title: string;
  description: string;
  problem: {
    heading: string;
    body: string;
    painPoints: string[];
  };
  /** Resource.id of the flagship Guide featured on this pillar page. */
  flagshipGuideId: string;
  resourceCategory: ResourceCategory;
  articleCategory: ArticleCategory;
  caseStudyService: Service;
  assessment: AssessmentConfig;
}

// ── Mock data ─────────────────────────────────────────────────────────────────

const KNOWLEDGE_CENTERS: Record<KnowledgeCenterKey, KnowledgeCenterConfig> = {
  "digital-transformation": {
    key: "digital-transformation",
    eyebrow: "Digital Transformation Knowledge Center",
    title: "Everything we know about transforming without the disruption.",
    description:
      "Frameworks, templates and an interactive readiness score — built from the digital transformation engagements we run for growing organisations every day.",
    problem: {
      heading: "Why most transformations stall",
      body: "Most digital transformation programmes don't fail because the technology is wrong — they fail because leadership, data, process and budget weren't aligned before the first tool was selected.",
      painPoints: [
        "Technology chosen before the problem was clearly defined",
        "No single owner accountable for the transformation outcome",
        "Legacy data too messy to migrate with confidence",
        "Teams trained on a new system with no change to the underlying process",
      ],
    },
    flagshipGuideId: "dt-readiness-guide",
    resourceCategory: "Digital Transformation",
    articleCategory: "Digital Transformation",
    caseStudyService: "Digital Transformation",
    assessment: {
      title: "Digital Transformation Readiness Score",
      description:
        "Five questions across the dimensions that determine whether a transformation programme succeeds. Takes two minutes — get your score and a tailored next step.",
      questions: [
        {
          id: "leadership",
          prompt: "Is leadership aligned on why this transformation matters?",
          options: [
            { label: "Not yet — it's not a shared priority", score: 0 },
            { label: "Mostly — a few stakeholders need convincing", score: 1 },
            { label: "Yes — fully aligned with a named owner", score: 2 },
          ],
        },
        {
          id: "data",
          prompt: "How confident are you in your current data quality?",
          options: [
            { label: "Scattered across spreadsheets and tools", score: 0 },
            { label: "Centralised but inconsistent", score: 1 },
            { label: "Clean, structured and ready to migrate", score: 2 },
          ],
        },
        {
          id: "capacity",
          prompt: "Does your team have capacity to take this on?",
          options: [
            { label: "Everyone is already stretched thin", score: 0 },
            { label: "Some bandwidth, but it'll be tight", score: 1 },
            { label: "Dedicated time has been carved out", score: 2 },
          ],
        },
        {
          id: "process",
          prompt: "Are your current processes documented?",
          options: [
            { label: "Mostly tribal knowledge", score: 0 },
            { label: "Partially documented", score: 1 },
            { label: "Well documented and repeatable", score: 2 },
          ],
        },
        {
          id: "budget",
          prompt: "Is budget allocated for this initiative?",
          options: [
            { label: "Not yet approved", score: 0 },
            { label: "Estimated but not confirmed", score: 1 },
            { label: "Approved and ring-fenced", score: 2 },
          ],
        },
      ],
      tiers: [
        {
          minScore: 8,
          title: "Ready to execute",
          description:
            "You're in strong shape. The biggest risk now is picking the wrong implementation partner or sequencing the rollout poorly — both solvable with the right plan.",
        },
        {
          minScore: 4,
          title: "Building momentum",
          description:
            "You have real foundations, but at least one dimension needs attention before you start — most often data quality or a confirmed budget. Closing that gap first will save months later.",
        },
        {
          minScore: 0,
          title: "Not yet ready — and that's useful to know",
          description:
            "Starting now would likely stall. The good news: every gap above is fixable in weeks, not months, with the right sequencing.",
        },
      ],
    },
  },

  "ai-automation": {
    key: "ai-automation",
    eyebrow: "AI & Automation Knowledge Center",
    title: "Where automation actually pays off — and where it doesn't.",
    description:
      "Frameworks, templates and an interactive readiness score — built from the automation and AI engagements we run for growing organisations every day.",
    problem: {
      heading: "Why most automation efforts under-deliver",
      body: "Automation fails quietly — not with an error, but with a tool nobody trusts, a workflow nobody maintains, and a team that quietly goes back to doing it by hand.",
      painPoints: [
        "Automating a process before fixing what's broken about it",
        "No one owns the workflow once the consultant leaves",
        "Tools that don't talk to each other, so manual re-entry continues",
        "Teams never trained to trust — or override — what the automation decides",
      ],
    },
    flagshipGuideId: "ai-practical-guide",
    resourceCategory: "AI & Automation",
    articleCategory: "AI",
    caseStudyService: "AI Automation",
    assessment: {
      title: "Automation Readiness Score",
      description:
        "Five questions on where automation is most likely to pay off in your organisation right now. Takes two minutes — get your score and a tailored next step.",
      questions: [
        {
          id: "repetition",
          prompt: "How repetitive are your team's daily manual tasks?",
          options: [
            { label: "Mostly varied, case-by-case work", score: 0 },
            { label: "A mix of routine and judgment calls", score: 1 },
            { label: "Highly repetitive, same steps every time", score: 2 },
          ],
        },
        {
          id: "time-cost",
          prompt: "How much team time goes into manual data entry or follow-ups weekly?",
          options: [
            { label: "Under 2 hours", score: 0 },
            { label: "2–10 hours", score: 1 },
            { label: "10+ hours", score: 2 },
          ],
        },
        {
          id: "integration",
          prompt: "Are your current tools (CRM, spreadsheets, comms) connected to each other?",
          options: [
            { label: "No — everything is manually re-entered", score: 0 },
            { label: "Partially — a few integrations exist", score: 1 },
            { label: "Yes — most tools already talk to each other", score: 2 },
          ],
        },
        {
          id: "ownership",
          prompt: "Is there a designated owner for automation initiatives?",
          options: [
            { label: "No one specific", score: 0 },
            { label: "Informally, not an assigned role", score: 1 },
            { label: "Yes — a named owner", score: 2 },
          ],
        },
        {
          id: "adoption",
          prompt: "How comfortable is your team with adopting new automated workflows?",
          options: [
            { label: "Resistant to changing how they work", score: 0 },
            { label: "Open, but will need training and support", score: 1 },
            { label: "Eager — they're already asking for this", score: 2 },
          ],
        },
      ],
      tiers: [
        {
          minScore: 8,
          title: "Ready to automate now",
          description:
            "You have the volume, the connectivity and the team buy-in. The work now is picking the right first workflow to automate — not whether to start.",
        },
        {
          minScore: 4,
          title: "A few foundations needed",
          description:
            "Automation will pay off here, but closing a gap first — usually integration or ownership — will make the first rollout far more likely to stick.",
        },
        {
          minScore: 0,
          title: "Fix the process before you automate it",
          description:
            "Automating a broken or undocumented process just makes it fail faster. Start by documenting and stabilising the workflow, then revisit automation.",
        },
      ],
    },
  },

  "temple-operations": {
    key: "temple-operations",
    eyebrow: "Temple Operations Knowledge Center",
    title: "Running a temple like the institution it already is.",
    description:
      "Frameworks, templates and an interactive readiness score for trustees and administrators — built from the temple technology engagements we run every day.",
    problem: {
      heading: "Why temple technology adoption stalls",
      body: "Temples don't lack the will to modernise — they lack a rollout designed around volunteers, donors and trustees who were never asked to learn new software before.",
      painPoints: [
        "Donor and seva records scattered across registers and spreadsheets",
        "Volunteer scheduling done entirely over phone calls and WhatsApp",
        "Trustees lacking real-time visibility into donations and finances",
        "New systems introduced without enough hands-on support for staff",
      ],
    },
    flagshipGuideId: "temple-tech-adoption-guide",
    resourceCategory: "Temple Management",
    articleCategory: "Temple Technology",
    caseStudyService: "Temple Solutions",
    assessment: {
      title: "Temple Technology Readiness Score",
      description:
        "Five questions for trustees and administrators considering a technology rollout. Takes two minutes — get your score and a tailored next step.",
      questions: [
        {
          id: "donor-data",
          prompt: "How is donor and seva data currently tracked?",
          options: [
            { label: "Paper registers or scattered spreadsheets", score: 0 },
            { label: "A single spreadsheet, manually updated", score: 1 },
            { label: "A dedicated system already in place", score: 2 },
          ],
        },
        {
          id: "volunteers",
          prompt: "How are volunteers scheduled and communicated with?",
          options: [
            { label: "Phone calls and word of mouth", score: 0 },
            { label: "A WhatsApp group, informally organised", score: 1 },
            { label: "A shared schedule everyone can see", score: 2 },
          ],
        },
        {
          id: "reporting",
          prompt: "How confident are trustees in current financial and donation reporting?",
          options: [
            { label: "Reports are manually compiled and often delayed", score: 0 },
            { label: "Available, but not in real time", score: 1 },
            { label: "Trustees can see up-to-date figures any time", score: 2 },
          ],
        },
        {
          id: "buy-in",
          prompt: "Has the temple committee agreed on adopting new technology?",
          options: [
            { label: "Not discussed yet", score: 0 },
            { label: "Discussed, but no decision made", score: 1 },
            { label: "Agreed and ready to move forward", score: 2 },
          ],
        },
        {
          id: "support",
          prompt: "How much hands-on support will staff and volunteers need during rollout?",
          options: [
            { label: "Most are unfamiliar with any software", score: 0 },
            { label: "Some are comfortable, others will need help", score: 1 },
            { label: "Most already use smartphones and apps comfortably", score: 2 },
          ],
        },
      ],
      tiers: [
        {
          minScore: 8,
          title: "Ready to roll out",
          description:
            "Your committee, data and team are aligned. The focus now is choosing a system that fits how your temple actually runs day to day.",
        },
        {
          minScore: 4,
          title: "Building momentum",
          description:
            "You have real foundations, but committee buy-in or donor data quality likely needs attention first — both fixable in weeks with the right plan.",
        },
        {
          minScore: 0,
          title: "Start with the conversation, not the software",
          description:
            "Rolling out a system now would likely meet resistance. Building committee agreement and basic data hygiene first will make adoption far smoother.",
        },
      ],
    },
  },

  "crm-maturity": {
    key: "crm-maturity",
    eyebrow: "CRM Maturity Knowledge Center",
    title: "Most CRM problems aren't CRM problems.",
    description:
      "Frameworks, templates and an interactive maturity score — built from the CRM and workflow engagements we run for growing organisations every day.",
    problem: {
      heading: "Why CRMs get blamed for process problems",
      body: "Most \"the CRM doesn't work\" complaints are actually data, adoption or process problems wearing a CRM costume. Replacing the tool without fixing the underlying issue just moves the same problem into a new system.",
      painPoints: [
        "Leads and customer data scattered across spreadsheets and WhatsApp",
        "Logging customer interactions is inconsistent across the team",
        "No visibility into pipeline or conversion without manual compilation",
        "A CRM was bought, but the team quietly reverted to old habits",
      ],
    },
    flagshipGuideId: "crm-maturity-guide",
    resourceCategory: "CRM & Sales",
    articleCategory: "Business Systems",
    caseStudyService: "CRM & Workflow Systems",
    assessment: {
      title: "CRM Maturity Score",
      description:
        "Five questions on how your team actually captures, tracks and acts on customer data today. Takes two minutes — get your score and a tailored next step.",
      questions: [
        {
          id: "centralization",
          prompt: "How centralized is your customer and lead data today?",
          options: [
            { label: "Scattered across spreadsheets and WhatsApp", score: 0 },
            { label: "One tool, but used inconsistently", score: 1 },
            { label: "A single, reliable source of truth", score: 2 },
          ],
        },
        {
          id: "logging",
          prompt: "How consistently does your team log customer interactions?",
          options: [
            { label: "Rarely — mostly kept in people's heads", score: 0 },
            { label: "Sometimes, depending on the person", score: 1 },
            { label: "Consistently, as part of the workflow", score: 2 },
          ],
        },
        {
          id: "routing",
          prompt: "Are new leads routed and assigned automatically, or manually?",
          options: [
            { label: "Manually, whenever someone notices them", score: 0 },
            { label: "A loose manual process exists", score: 1 },
            { label: "Automatically, by defined rules", score: 2 },
          ],
        },
        {
          id: "visibility",
          prompt: "Can you see pipeline and conversion metrics without manual compilation?",
          options: [
            { label: "No — someone has to build a report by hand", score: 0 },
            { label: "Partially, with some manual cleanup", score: 1 },
            { label: "Yes, in real time", score: 2 },
          ],
        },
        {
          id: "adoption",
          prompt: "How well does your team actually use the CRM day to day?",
          options: [
            { label: "Most have quietly gone back to old habits", score: 0 },
            { label: "Used, but inconsistently across the team", score: 1 },
            { label: "Used consistently — it's the system of record", score: 2 },
          ],
        },
      ],
      tiers: [
        {
          minScore: 8,
          title: "CRM-mature — optimize, don't rebuild",
          description:
            "Your foundations are solid. The highest-value work now is automation and reporting on top of what you have, not replacing the system.",
        },
        {
          minScore: 4,
          title: "Functional but fragile",
          description:
            "The CRM technically works, but at least one gap — usually adoption or routing — is quietly costing you leads. Closing it first is cheaper than switching platforms.",
        },
        {
          minScore: 0,
          title: "Pre-CRM — fix the data before adding a tool",
          description:
            "Buying or replacing a CRM right now would just move the same problem into a new system. Centralizing and cleaning your data first is the actual unlock.",
        },
      ],
    },
  },
};

// ── Query functions ───────────────────────────────────────────────────────────

export function getKnowledgeCenter(
  key: KnowledgeCenterKey
): KnowledgeCenterConfig {
  return KNOWLEDGE_CENTERS[key];
}

export function getAllKnowledgeCenterKeys(): KnowledgeCenterKey[] {
  return Object.keys(KNOWLEDGE_CENTERS) as KnowledgeCenterKey[];
}
