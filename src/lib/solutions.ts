import {
  Gauge,
  Workflow,
  MessagesSquare,
  Rocket,
  BarChart3,
  Landmark,
  type LucideIcon,
} from "lucide-react";

export interface Solution {
  id: string;
  number: string;
  name: string;
  icon: LucideIcon;
  challenge: string;
  solution: string;
  benefits: string[];
  cta: { label: string; href: string };
}

/**
 * Solutions organized by business OUTCOME rather than technology. Each entry
 * powers one section on the Solutions page: challenge, solution, benefits, CTA.
 */
export const solutions: Solution[] = [
  {
    id: "operational-efficiency",
    number: "01",
    name: "Operational Efficiency",
    icon: Gauge,
    challenge:
      "Manual processes, scattered tools and unclear ownership quietly drain time, money and morale — and the drag only compounds as you grow.",
    solution:
      "We map how work actually flows, remove the friction, and rebuild your operations around clear, reliable systems with a single source of truth.",
    benefits: [
      "Hours of manual effort reclaimed each week",
      "Fewer errors and far less rework",
      "Clear ownership and end-to-end visibility",
      "Lower cost to operate as you scale",
    ],
    cta: { label: "Streamline our operations", href: "/#contact" },
  },
  {
    id: "workflow-automation",
    number: "02",
    name: "Workflow Automation",
    icon: Workflow,
    challenge:
      "Repetitive, rules-based work eats your team's capacity and invites avoidable mistakes — yet tools stitched together in-house rarely hold up.",
    solution:
      "We design dependable automations across your stack that handle the routine end-to-end, with human checkpoints exactly where judgement matters.",
    benefits: [
      "Routine tasks run without manual effort",
      "Faster turnaround and fewer delays",
      "Consistent, auditable processes",
      "Teams freed for higher-value work",
    ],
    cta: { label: "Automate a workflow", href: "/#contact" },
  },
  {
    id: "customer-engagement",
    number: "03",
    name: "Customer Engagement",
    icon: MessagesSquare,
    challenge:
      "Disjointed, slow or impersonal touchpoints cost you trust and conversions — and you can't improve what you can't see.",
    solution:
      "We build responsive, personalised engagement across your channels, connected to your data so every interaction is timely and relevant.",
    benefits: [
      "Higher response and conversion rates",
      "Personalised, on-brand communication",
      "A unified view of every customer",
      "Stronger retention and loyalty",
    ],
    cta: { label: "Improve engagement", href: "/#contact" },
  },
  {
    id: "digital-transformation",
    number: "04",
    name: "Digital Transformation",
    icon: Rocket,
    challenge:
      "Legacy systems and ad-hoc tools hold you back, but a 'rip and replace' overhaul is risky, costly and disruptive.",
    solution:
      "We modernise pragmatically — sequencing change so you see value early, de-risking each step and bringing your team along the way.",
    benefits: [
      "A modern, connected technology foundation",
      "Value delivered in stages, not big-bang",
      "Reduced risk and minimal disruption",
      "A platform ready for what's next",
    ],
    cta: { label: "Plan our transformation", href: "/#contact" },
  },
  {
    id: "business-intelligence",
    number: "05",
    name: "Business Intelligence",
    icon: BarChart3,
    challenge:
      "Data is everywhere but insight is scarce — decisions get made on gut feel because the numbers are slow, siloed or simply not trusted.",
    solution:
      "We unify your data and turn it into clear, trustworthy dashboards and reporting, so the right people see the right metrics at the right time.",
    benefits: [
      "One trusted source for key metrics",
      "Faster, evidence-based decisions",
      "Automated reporting, less manual work",
      "Early visibility into risks and opportunities",
    ],
    cta: { label: "Unlock our data", href: "/#contact" },
  },
  {
    id: "temple-management",
    number: "06",
    name: "Temple Suite",
    icon: Landmark,
    challenge:
      "Donations, seva, events, volunteers and records are often managed by hand — time-consuming, error-prone and hard to sustain.",
    solution:
      "We provide respectful, easy-to-use systems for donations, bookings, events and communication, plus a dignified online presence — built for non-technical trustees to run with confidence.",
    benefits: [
      "Simpler donation and seva management",
      "Coordinated events and volunteers",
      "Accurate records with far less effort",
      "A dignified, trustworthy digital presence",
    ],
    cta: { label: "Explore Temple Suite", href: "/temple-suite" },
  },
];
