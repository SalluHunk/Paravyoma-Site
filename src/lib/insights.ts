/**
 * Insights (Blog) data layer.
 * CMS migration: replace ARTICLES array with an API fetch;
 * all query functions and components remain unchanged.
 */

// ── Types ─────────────────────────────────────────────────────────────────────

export type ArticleCategory =
  | "AI"
  | "Operations"
  | "Digital Transformation"
  | "Temple Technology"
  | "Business Systems"
  | "Leadership";

export interface ArticleAuthor {
  name: string;
  title: string;
  bio: string;
  /** CMS: replace with asset URL */
  avatarUrl: string | null;
}

export interface ArticleSection {
  /** Used as anchor id — e.g. "why-crms-fail" */
  id: string;
  heading: string;
  level: 2 | 3;
  body: string;
  bullets?: string[];
}

export interface TocEntry {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  tags: string[];
  author: ArticleAuthor;
  featured: boolean;
  /** Estimated reading time in minutes */
  readingTime: number;
  publishedAt: string; // ISO 8601
  updatedAt?: string;
  /** CMS: replace with asset URL */
  coverImage: string | null;
  sections: ArticleSection[];
  relatedSlugs: string[];
  /** SEO */
  metaDescription: string;
}

// ── Authors ───────────────────────────────────────────────────────────────────

const AUTHORS: Record<string, ArticleAuthor> = {
  paravyoma: {
    name: "Paravyoma Editorial",
    title: "Paravyoma Technologies",
    bio: "Practical thinking from the Paravyoma team — written by practitioners who implement CRM systems, automation workflows and digital transformation programmes for growing organisations every day.",
    avatarUrl: null,
  },
  siddharth: {
    name: "Siddharth",
    title: "Founder, Paravyoma Technologies",
    bio: "Siddharth founded Paravyoma Technologies to close the gap between what business software promises and what growing organisations actually need. He writes on operations, digital transformation and the overlooked cost of manual processes.",
    avatarUrl: null,
  },
};

// ── Mock data ─────────────────────────────────────────────────────────────────

const ARTICLES: Article[] = [
  {
    slug: "why-crm-implementations-fail",
    title: "Why Most CRM Implementations Fail (And How to Avoid It)",
    excerpt:
      "A CRM sitting unused is worse than no CRM at all. After implementing systems for organisations across professional services, education and nonprofits, we've seen the same failure patterns repeat. Here's what they are — and how to avoid them.",
    category: "Business Systems",
    tags: ["CRM", "Implementation", "Change Management", "Workflow"],
    author: AUTHORS.siddharth,
    featured: true,
    readingTime: 7,
    publishedAt: "2025-05-20T00:00:00.000Z",
    coverImage: null,
    metaDescription:
      "After dozens of CRM implementations, we've seen the same failure patterns repeat. Here's what causes them — and how to avoid them before you start.",
    sections: [
      {
        id: "the-adoption-problem",
        heading: "The adoption problem nobody talks about",
        level: 2,
        body: "Every CRM implementation has two phases. There's the technical phase — configuring the platform, migrating data, setting up integrations. And then there's the harder phase: getting people to actually use it. Most implementation projects invest 80% of effort in the technical phase and almost none in adoption. The result is a well-configured system that sits unused three months after launch.",
      },
      {
        id: "failure-pattern-1",
        heading: "Failure pattern 1: The tool was chosen before the workflow was designed",
        level: 2,
        body: "The most common failure we see has nothing to do with the software. It happens when an organisation selects a CRM, buys licences, and only then starts thinking about how it should work. The software is the last decision, not the first. Before you evaluate a single platform, map the workflow you're trying to support: how do leads arrive, who touches them, what happens at each stage, and what does a successful handoff look like? The CRM should fit that workflow — not the other way around.",
        bullets: [
          "Map your workflow on paper before opening a single demo",
          "Involve the people who will use it daily in the design process",
          "Choose the platform that matches how your team actually works, not the most feature-rich option",
        ],
      },
      {
        id: "failure-pattern-2",
        heading: "Failure pattern 2: No one owns the CRM after go-live",
        level: 2,
        body: "Implementations have a natural owner — the project lead, the consultant, the IT team. But at go-live, that ownership often evaporates. Nobody is responsible for keeping data clean, enforcing the process, or updating the system as the business changes. Within six months, the CRM has become a graveyard of stale contacts and abandoned pipelines. Every implementation needs a named owner with ongoing accountability — not just a project manager who disappears at cutover.",
      },
      {
        id: "failure-pattern-3",
        heading: "Failure pattern 3: The system was too complex for the team",
        level: 2,
        body: "Enterprise CRM platforms are designed for enterprise teams with dedicated operations staff. A 15-person professional services firm doesn't have a Salesforce admin. Yet many small organisations end up with a system configured at enterprise complexity — custom objects, multi-stage workflows, and an approval matrix that requires a manual to navigate. The result is abandonment. Configure only what you need today. Complexity can be added; trust in the tool cannot be rebuilt once lost.",
        bullets: [
          "Start with the simplest configuration that serves your core workflow",
          "Remove every field that nobody will fill in consistently",
          "Add features when the team asks for them — not in anticipation of eventual need",
        ],
      },
      {
        id: "failure-pattern-4",
        heading: "Failure pattern 4: WhatsApp was ignored",
        level: 2,
        body: "In India, WhatsApp is a primary business communication channel. We've seen CRM implementations fail for no reason other than this: the system had no WhatsApp integration. Staff continued managing client conversations in WhatsApp — outside the CRM — because that's where clients were. The CRM became a reporting tool at best, a compliance burden at worst. If your clients communicate on WhatsApp, your CRM must connect to it.",
      },
      {
        id: "what-success-looks-like",
        heading: "What a successful implementation actually looks like",
        level: 2,
        body: "A CRM implementation has succeeded when it makes your team's work measurably easier — not when it's technically complete. The signals: staff are entering data voluntarily because the system saves them time, managers can answer pipeline questions without chasing updates, and no lead has slipped through in the last 30 days. Technical go-live is a milestone, not a finish line.",
        bullets: [
          "Staff enter data because it helps them, not because they're required to",
          "Pipeline and follow-up questions are answered by the system, not by asking around",
          "The CRM owner is reviewing and improving the system monthly",
        ],
      },
    ],
    relatedSlugs: ["what-spreadsheets-cost-you", "stop-being-the-bottleneck"],
  },

  {
    slug: "ai-opportunity-for-growing-businesses",
    title: "The AI Opportunity Most Growing Businesses Are Missing",
    excerpt:
      "Most small businesses hear 'AI' and think of chatbots or large language models. The real opportunity is quieter, cheaper and already available — and it's being missed while everyone waits for the next big tool.",
    category: "AI",
    tags: ["AI", "Automation", "Small Business", "Operations"],
    author: AUTHORS.siddharth,
    featured: false,
    readingTime: 6,
    publishedAt: "2025-04-14T00:00:00.000Z",
    coverImage: null,
    metaDescription:
      "The AI opportunity for growing businesses isn't chatbots. It's in the repetitive, high-volume tasks your team does manually every day. Here's where to start.",
    sections: [
      {
        id: "the-hype-gap",
        heading: "The gap between AI hype and AI reality",
        level: 2,
        body: "Every week there's a new AI announcement designed to make every existing business feel behind. The coverage focuses on frontier models and enterprise deployments. What gets almost no coverage is where AI is quietly delivering the most practical value for organisations with 10 to 100 people: automating the small, repetitive, high-volume tasks that drain staff time every day.",
      },
      {
        id: "where-value-actually-is",
        heading: "Where the value actually is",
        level: 2,
        body: "The highest-ROI AI applications for growing organisations are rarely glamorous. They're the tasks that meet three criteria: they happen frequently (daily or weekly), they follow a consistent pattern, and they currently require a human even though almost no genuine judgement is involved.",
        bullets: [
          "Lead qualification: routing enquiries based on criteria your team already applies manually",
          "Follow-up sequences: sending the right message at the right time without anyone remembering to do it",
          "Document drafting: generating first drafts of proposals, reports or summaries from structured data",
          "Data entry and deduplication: extracting and cleaning information from unstructured inputs",
          "Reporting: compiling numbers from multiple sources into a formatted output",
        ],
      },
      {
        id: "the-pilot-trap",
        heading: "The pilot trap — and how to avoid it",
        level: 2,
        body: "The most common failure mode in AI adoption isn't scepticism — it's endless piloting. An organisation runs a proof-of-concept, sees promising results, and then nothing happens. The pilot doesn't scale because no one owns the productionisation, the workflow integration was never designed, or the ROI case was never made clearly enough to justify ongoing investment. A pilot that doesn't lead to a decision is just a distraction.",
      },
      {
        id: "honest-roi",
        heading: "What honest ROI looks like",
        level: 2,
        body: "AI ROI for small businesses should be calculated in one of three ways: time saved (how many staff-hours per week does this automation replace?), error reduction (what is the cost of the errors this eliminates?), or revenue recovered (what leads or opportunities are currently lost that this would capture?). If you can't articulate which category an AI investment falls into, it's not ready to deploy.",
        bullets: [
          "Time saved × hourly cost × weeks per year = annual value",
          "Error rate × cost per error × volume = annual risk reduction",
          "Conversion rate improvement × average deal value × lead volume = revenue impact",
        ],
      },
      {
        id: "where-to-start",
        heading: "Where to start this week",
        level: 2,
        body: "The most useful thing a growing business can do with AI this week is not to evaluate platforms. It's to list every task that happens more than once a week that follows a consistent pattern. Pick the three that consume the most total staff time. Those are your first automation candidates. Only once you've identified specific processes should you start evaluating tools.",
      },
    ],
    relatedSlugs: ["why-crm-implementations-fail", "digital-transformation-without-chaos"],
  },

  {
    slug: "digital-transformation-without-chaos",
    title: "Digital Transformation Without the Chaos",
    excerpt:
      "Digital transformation projects have a reputation for cost overruns, disruption and disappointment. Most of that reputation is earned. Here's what separates the projects that succeed from the ones that become cautionary tales.",
    category: "Digital Transformation",
    tags: ["Digital Transformation", "Change Management", "Strategy", "Technology"],
    author: AUTHORS.paravyoma,
    featured: false,
    readingTime: 8,
    publishedAt: "2025-03-05T00:00:00.000Z",
    coverImage: null,
    metaDescription:
      "Most digital transformation failures share the same root causes. Here's what separates projects that succeed from those that become cautionary tales.",
    sections: [
      {
        id: "why-dt-fails",
        heading: "Why digital transformation projects fail at the same rate they always have",
        level: 2,
        body: "The tools have changed completely in the last decade. The failure rate hasn't. Study after study puts digital transformation failure rates at 70% or above — and the causes are remarkably consistent across decades: unclear ownership, scope that expanded beyond what anyone could manage, staff who weren't ready for the change, and a definition of 'success' that nobody agreed on at the start.",
      },
      {
        id: "the-right-sequence",
        heading: "The sequence matters more than the technology",
        level: 2,
        body: "Every successful digital transformation we've been part of followed the same sequence: first, map the process as it currently exists. Second, identify where the process is actually broken. Third, fix the process — on paper, before touching any software. Fourth, choose and configure the technology to support the fixed process. The projects that fail do it backwards: they buy the technology first and try to redesign the process around it.",
        bullets: [
          "Current-state process map — honest, detailed, including the workarounds",
          "Gap analysis — where are decisions being made without data? Where is work being duplicated?",
          "Future-state design — what should the process look like, independent of any tool?",
          "Technology selection — which platform fits the designed process at your scale?",
        ],
      },
      {
        id: "scope-discipline",
        heading: "Scope discipline is the project manager's most important job",
        level: 2,
        body: "Scope creep is the single most common cause of digital transformation failure. It starts with legitimate additions: 'while we're in there, could we also...' is how every overrun begins. Each addition is reasonable in isolation. Together, they turn a six-week project into an eighteen-month programme that consumes the organisation's capacity and goodwill. The discipline required is to define scope in writing before work starts, establish a formal change process for any additions, and protect the team from well-intentioned stakeholder requests that don't meet the bar.",
      },
      {
        id: "staff-readiness",
        heading: "Staff readiness is not the same as training",
        level: 2,
        body: "Most transformation projects budget for training and nothing else on the people side. Training teaches how to use a tool. It does not address the fear of being made redundant by automation, the frustration of a workflow that doesn't match how people actually work, or the loss of informal power that comes from being the person who knows where the data is. Readiness work addresses those concerns directly — ideally before a line of configuration has been written.",
        bullets: [
          "Involve key users in the design process, not just the review process",
          "Be explicit about what is and isn't changing in people's roles",
          "Celebrate the staff members who adapt early — they become your internal champions",
        ],
      },
      {
        id: "measuring-success",
        heading: "Agreeing what success looks like before you start",
        level: 2,
        body: "The most important conversation in any digital transformation project happens before the first meeting with a vendor: what does success look like, and how will we measure it? 'Better processes' and 'improved efficiency' are not measures. 'Reduce time to first customer response from 3 days to same day' is a measure. 'Eliminate the weekly reporting meeting by automating the report' is a measure. Build your success definition around outcomes you can observe, not features you can deploy.",
      },
    ],
    relatedSlugs: ["ai-opportunity-for-growing-businesses", "stop-being-the-bottleneck"],
  },

  {
    slug: "technology-for-sacred-spaces",
    title: "Building Technology for Sacred Spaces: What's Different",
    excerpt:
      "Temples and spiritual organisations have unique operational needs that generic business software was never designed to address. After building systems for several such institutions, here's what we've learned.",
    category: "Temple Technology",
    tags: ["Temple Technology", "Nonprofit", "Operations", "Community"],
    author: AUTHORS.siddharth,
    featured: false,
    readingTime: 7,
    publishedAt: "2025-02-18T00:00:00.000Z",
    coverImage: null,
    metaDescription:
      "What's different about building technology for temples and spiritual organisations — and why generic business software almost always fails in this context.",
    sections: [
      {
        id: "the-wrong-tool-problem",
        heading: "Why generic software fails in sacred institutions",
        level: 2,
        body: "The first instinct when a temple decides to 'digitalise' is usually to look at what other organisations use. Someone suggests QuickBooks for accounts, Google Sheets for volunteers, Mailchimp for communications. Two years later, the temple is running on three disconnected tools that nobody uses consistently, the spreadsheets are out of date, and the administration feels more burdened than before. Generic tools fail not because they're bad software, but because they weren't designed around how a temple actually works.",
      },
      {
        id: "what-makes-temples-different",
        heading: "What makes temple operations genuinely different",
        level: 2,
        body: "The differences aren't cosmetic. They're structural. A temple doesn't have customers — it has devotees, and the relationship is sacred in a way that no CRM terminology captures. Donors aren't giving in exchange for a service — they're expressing devotion, and acknowledgment of that contribution has meaning beyond a tax receipt. Volunteers aren't employees — they're seva participants, and scheduling them requires understanding their motivations, availability and spiritual commitments.",
        bullets: [
          "Donation acknowledgment must feel personal and spiritually resonant, not transactional",
          "Seva scheduling is about matching people to roles that fit their devotion and capacity",
          "Event registration is about enabling participation, not just managing capacity",
          "Reporting must be transparent to the community, not just useful to management",
        ],
      },
      {
        id: "language-and-culture",
        heading: "Language and cultural fit are not optional",
        level: 2,
        body: "We've seen temple management adopt a technically excellent system and abandon it because the interface was in English and the staff were more comfortable in Tamil. We've seen dashboards that trustees refused to use because the financial terminology felt corporate rather than communal. The software is only as good as the adoption — and adoption depends on people feeling that the tool was made for them.",
      },
      {
        id: "the-trust-principle",
        heading: "The technology must earn trust before it can help",
        level: 2,
        body: "Institutions that have operated for decades or centuries have established patterns of trust. A new system doesn't inherit that trust — it has to earn it. The right approach is to start with the highest-value, lowest-disruption function (usually donation recording), demonstrate that it works reliably, and let the institution's own experience of the tool build confidence for the next phase.",
      },
      {
        id: "what-good-looks-like",
        heading: "What good technology looks like for a temple",
        level: 2,
        body: "The best feedback we've received from a temple client is that the system had become 'invisible' — it simply did what needed doing without anyone having to think about it. Receipts generated automatically. Reminders sent on time. The trustee report ready before the meeting. Nobody talking about the software, because it was just working.",
        bullets: [
          "Donation receipts generated and sent without staff involvement",
          "Volunteer schedules visible to everyone who needs them without a phone call",
          "Trustee reporting that takes minutes, not hours, to produce",
          "A record of every devotee interaction that any authorised person can access",
        ],
      },
    ],
    relatedSlugs: ["digital-transformation-without-chaos", "why-crm-implementations-fail"],
  },

  {
    slug: "stop-being-the-bottleneck",
    title: "How to Stop Being the Bottleneck in Your Own Business",
    excerpt:
      "Every growing business reaches a point where the founder or a key person becomes the constraint. Decisions queue up. Approvals slow everything down. Here's how to design yourself out of the critical path.",
    category: "Operations",
    tags: ["Operations", "Leadership", "Delegation", "Workflow", "Scaling"],
    author: AUTHORS.siddharth,
    featured: false,
    readingTime: 6,
    publishedAt: "2025-01-28T00:00:00.000Z",
    coverImage: null,
    metaDescription:
      "When you're the bottleneck in your own business, growth slows and so does everything else. Here's how to redesign your operations so decisions move without you.",
    sections: [
      {
        id: "recognising-the-bottleneck",
        heading: "Recognising when you've become the bottleneck",
        level: 2,
        body: "The signs are usually visible before you admit them: emails that sit unanswered because you're the only person who can respond, decisions that can't be made until you're in the room, approvals that queue up when you travel, and a team that's learned not to start things that require your input until you've explicitly cleared the path. If your organisation moves at the pace you personally can move, you're the bottleneck.",
      },
      {
        id: "why-this-happens",
        heading: "Why smart leaders end up as bottlenecks",
        level: 2,
        body: "It rarely starts with a decision to centralise authority. It happens through accumulation. A founder answers a question directly rather than building a process for the team to answer it. A manager reviews every document because it's faster than explaining the standard. A key person gets copied on every email 'just to keep them informed'.",
        bullets: [
          "You answer questions that should be answered by a documented process",
          "You review work that should be reviewed against a clear standard",
          "You make decisions that should be made by whoever has the most relevant information",
          "You're CC'd on communications where your presence adds friction, not value",
        ],
      },
      {
        id: "delegation-as-design",
        heading: "Delegation is design, not abdication",
        level: 2,
        body: "Effective delegation isn't telling someone to handle something and hoping for the best. It's designing a system — a process, a standard, a decision rule — that allows someone else to handle that category of work reliably and consistently. The difference between a delegated decision and an abdicated decision is the presence of clear criteria. 'Use your judgement' is abdication. 'Approve requests under ₹10,000 if they meet these three criteria' is delegation.",
      },
      {
        id: "which-decisions-first",
        heading: "Which decisions to decentralise first",
        level: 2,
        body: "Not every decision should be decentralised. The ones to delegate first are those that are high volume, low risk, and well-understood. These are the decisions that are consuming your time without requiring your unique expertise.",
        bullets: [
          "High-volume, low-risk approvals: delegate with written criteria",
          "Standard customer responses: document templates and empower the team",
          "Routine operational decisions: create a decision tree, not a queue to your inbox",
          "Vendor and procurement choices under a threshold: set the criteria, remove yourself",
        ],
      },
      {
        id: "systems-over-supervision",
        heading: "Systems replace supervision",
        level: 2,
        body: "The most scalable thing you can build as a leader is a set of systems that produce good outcomes without your presence. Every process you document, every standard you make explicit, every decision rule you write down is an investment that returns time to you while it runs. The goal is to remove yourself from the critical path of day-to-day operations so you can focus on the work only you can do.",
      },
    ],
    relatedSlugs: ["what-spreadsheets-cost-you", "digital-transformation-without-chaos"],
  },

  {
    slug: "what-spreadsheets-cost-you",
    title: "What Your Spreadsheets Are Actually Costing You",
    excerpt:
      "Spreadsheets are the most useful tool most businesses ever outgrow. The problem isn't using them — it's continuing to use them past the point where they're serving you well. Here's how to know when you've crossed that line.",
    category: "Leadership",
    tags: ["Spreadsheets", "Operations", "Data", "Business Systems", "Efficiency"],
    author: AUTHORS.paravyoma,
    featured: false,
    readingTime: 5,
    publishedAt: "2025-05-01T00:00:00.000Z",
    coverImage: null,
    metaDescription:
      "The hidden costs of running your business on spreadsheets — and how to know when you've outgrown them before the cost becomes a crisis.",
    sections: [
      {
        id: "spreadsheets-not-the-enemy",
        heading: "Spreadsheets are not the enemy",
        level: 2,
        body: "This is not an argument against spreadsheets. They're extraordinarily versatile, immediately accessible, and genuinely excellent for many purposes: modelling, one-off analysis, small-team coordination where one person owns the file. The problem isn't using spreadsheets — it's using them past the point where they're the right tool. And most organisations cross that line quietly, without realising it, while the spreadsheet-shaped risks accumulate.",
      },
      {
        id: "hidden-costs",
        heading: "The costs that don't show up on any invoice",
        level: 2,
        body: "Every organisation running core operations on spreadsheets is paying costs that never appear in a P&L: staff time maintaining and reconciling files, errors from data entry and formula breaks, and the cost of decisions made on stale data.",
        bullets: [
          "Average staff time on spreadsheet maintenance: 4–8 hours per week per person",
          "One in five spreadsheets contains a material error (University of Hawaii study)",
          "Version control problems mean most shared spreadsheets have diverged copies simultaneously",
          "Data that's 24 hours old in a fast-moving business is often functionally useless",
        ],
      },
      {
        id: "crossed-the-line",
        heading: "How to know when you've crossed the line",
        level: 2,
        body: "The signs are gradual and easy to rationalise. But there are clear indicators that spreadsheets have become a liability:",
        bullets: [
          "More than one person editing the same file, ever",
          "Data copied from one sheet into another more than twice a week",
          "A decision was delayed or made incorrectly because the spreadsheet was out of date",
          "Someone who has left the organisation was the only one who understood the file",
          "You've added more than three sheets to a workbook to handle a growing workflow",
        ],
      },
      {
        id: "what-to-replace-first",
        heading: "What to replace first — and what to keep",
        level: 2,
        body: "The spreadsheets worth replacing first are those that multiple people depend on, that change frequently, and that produce outputs used for decisions. Customer pipelines, fee tracking, inventory management, donation records — these are cases where a purpose-built system will immediately deliver time savings and reliability improvements.",
      },
      {
        id: "the-transition",
        heading: "The transition doesn't have to be painful",
        level: 2,
        body: "A well-designed transition happens in phases, starting with the highest-cost spreadsheets, running the new system in parallel until confidence is established, and migrating data before decommissioning the old file. Three months after a clean migration, most teams wonder why they waited.",
      },
    ],
    relatedSlugs: ["why-crm-implementations-fail", "stop-being-the-bottleneck"],
  },
];

// ── Query functions ───────────────────────────────────────────────────────────

export function getAllArticles(): Article[] {
  return [...ARTICLES].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getFeaturedArticle(): Article | undefined {
  return ARTICLES.find((a) => a.featured);
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function getRelatedArticles(slug: string): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return [];
  return current.relatedSlugs
    .map((s) => getArticleBySlug(s))
    .filter((a): a is Article => a !== undefined);
}

export function getAllCategories(): ArticleCategory[] {
  const set = new Set(ARTICLES.map((a) => a.category));
  return Array.from(set).sort();
}

export function getAllArticleSlugs(): string[] {
  return ARTICLES.map((a) => a.slug);
}

export function buildToc(sections: ArticleSection[]): TocEntry[] {
  return sections.map((s) => ({ id: s.id, text: s.heading, level: s.level }));
}
