import {
  Building2,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  Landmark,
  type LucideIcon,
} from "lucide-react";

export interface Industry {
  id: string;
  number: string;
  name: string;
  icon: LucideIcon;
  lead: string;
  challenges: string[];
  helps: string;
  solutions: string[];
  outcomes: string[];
}

/**
 * Industry content. Each entry powers one section on the Industries page and
 * follows the same four-part structure: challenges, how we help, recommended
 * solutions and measurable outcomes.
 */
export const industries: Industry[] = [
  {
    id: "smes",
    number: "01",
    name: "SMEs",
    icon: Building2,
    lead: "Small and mid-sized businesses run lean — every hour and every rupee counts. We bring enterprise-grade systems within reach, without the enterprise overhead.",
    challenges: [
      "Manual, spreadsheet-driven processes that don't scale",
      "Disconnected tools that fragment data and slow decisions",
      "Limited in-house technical capacity",
      "Growth stalling under operational drag",
    ],
    helps:
      "We map how your business actually runs, then consolidate and automate the work that drains your team — giving you reliable systems you can grow on, supported by people who explain everything in plain language.",
    solutions: ["Business Systems", "Workflow Automation", "AI-assisted Operations"],
    outcomes: [
      "Hours of manual work removed every week",
      "Faster, data-backed decisions",
      "Lower cost to serve as you scale",
      "A single source of truth across the business",
    ],
  },
  {
    id: "professional-services",
    number: "02",
    name: "Professional Services",
    icon: Briefcase,
    lead: "For services firms, time is the product. We help you protect billable hours, deliver consistently and look credible at every client touchpoint.",
    challenges: [
      "Billable time lost to admin and rework",
      "Inconsistent delivery across teams and projects",
      "Client communication scattered across inboxes and tools",
      "Hard to see true project profitability",
    ],
    helps:
      "We streamline intake, delivery and reporting into dependable workflows, automate the busywork around client engagements, and give partners clear visibility into utilisation and margins.",
    solutions: ["Workflow Automation", "Custom Applications", "Customer Engagement"],
    outcomes: [
      "More billable hours recovered",
      "Consistent, on-brand client delivery",
      "Clear visibility into project profitability",
      "Faster turnaround on client requests",
    ],
  },
  {
    id: "education",
    number: "03",
    name: "Education",
    icon: GraduationCap,
    lead: "Educational institutions juggle administration, communication and engagement with limited resources. We modernise the systems behind learning so staff can focus on students.",
    challenges: [
      "Admissions, records and fees managed manually",
      "Fragmented communication with students and parents",
      "Staff stretched thin by administrative load",
      "Limited insight into engagement and outcomes",
    ],
    helps:
      "We digitise and connect core administration, automate routine communication, and build engagement tools that keep students, parents and staff aligned — all designed for non-technical teams to run with confidence.",
    solutions: ["Business Systems", "Workflow Automation", "Customer Engagement"],
    outcomes: [
      "Less administrative burden on staff",
      "Faster, clearer parent and student communication",
      "Smoother admissions and records management",
      "Better visibility into engagement",
    ],
  },
  {
    id: "nonprofits",
    number: "04",
    name: "Nonprofits",
    icon: HeartHandshake,
    lead: "Mission-driven organizations need to do more with less. We help nonprofits stretch every resource, deepen donor relationships and prove their impact.",
    challenges: [
      "Lean teams overwhelmed by manual operations",
      "Donor and volunteer data spread across spreadsheets",
      "Difficulty demonstrating impact to funders",
      "Limited budget for technology",
    ],
    helps:
      "We automate the operational load that drains volunteer and staff time, unify donor and program data, and build simple tools to track and report impact — pragmatically scoped to a nonprofit budget.",
    solutions: ["Workflow Automation", "Business Systems", "Customer Engagement"],
    outcomes: [
      "More capacity redirected to your mission",
      "Stronger, better-organised donor relationships",
      "Clear, fundable impact reporting",
      "More accomplished within budget",
    ],
  },
  {
    id: "temples",
    number: "05",
    name: "Temples & Spiritual Organizations",
    icon: Landmark,
    lead: "Temples and spiritual organizations serve communities with care and tradition. We bring a dignified digital presence and calm, reliable administration — without disrupting what makes them special.",
    challenges: [
      "Manual handling of donations, seva and events",
      "Limited or outdated online presence",
      "Coordinating volunteers and community communication",
      "Maintaining records across festivals and daily operations",
    ],
    helps:
      "We provide respectful, easy-to-use systems for donations, bookings, events and communication, plus a digital presence that reflects the institution's stature — built and supported so non-technical trustees and volunteers can manage it with ease.",
    solutions: ["Temple & Community Solutions", "Customer Engagement", "Workflow Automation"],
    outcomes: [
      "Simpler donation and seva management",
      "A dignified, trustworthy online presence",
      "Better-coordinated volunteers and events",
      "Accurate records with far less manual effort",
    ],
  },
];
