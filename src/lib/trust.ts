import {
  BadgeCheck,
  BrainCircuit,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  DatabaseZap,
  Handshake,
  HeartHandshake,
  Landmark,
  LineChart,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";

export const trustStats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "25+", label: "Systems Built" },
  { value: "20,000+", label: "Hours Saved" },
  { value: "30+", label: "Organizations Served" },
] as const;

export const clientMarks = [
  "Professional Services Firm",
  "Temple Trust",
  "Education Provider",
  "Nonprofit Organization",
  "Operations Team",
  "Growing Business",
] as const;

export const credibilityIndicators = [
  {
    icon: ClipboardCheck,
    label: "Implementation discipline",
    value: "Discovery, workflow mapping, build, adoption and measurement",
  },
  {
    icon: Building2,
    label: "Industries served",
    value: "Services, temples, nonprofits, education and operations-heavy teams",
  },
  {
    icon: DatabaseZap,
    label: "Systems expertise",
    value: "CRM, workflow automation, dashboards, portals and custom apps",
  },
  {
    icon: BrainCircuit,
    label: "AI capability",
    value: "Practical automation with human review and accountable rollout",
  },
] as const;

export const trustPillars = [
  {
    icon: Users,
    title: "Founder-led accountability",
    description:
      "Senior judgement stays close to the work, from first diagnosis through adoption.",
  },
  {
    icon: Network,
    title: "Workflow-first design",
    description:
      "We map how the organisation actually runs before recommending software or automation.",
  },
  {
    icon: LineChart,
    title: "Measurable outcomes",
    description:
      "Every engagement is tied to clearer visibility, reduced manual work or faster response.",
  },
  {
    icon: ShieldCheck,
    title: "Human-controlled automation",
    description:
      "AI helps with routine work, but judgement, approvals and accountability stay with people.",
  },
  {
    icon: Landmark,
    title: "Industry-aware delivery",
    description:
      "Temple operations, professional services and nonprofits each need different operating logic.",
  },
  {
    icon: Handshake,
    title: "Support beyond launch",
    description:
      "We stay involved after go-live so the system keeps fitting the organisation as it evolves.",
  },
] as const;

export const testimonials = {
  home: [
    {
      quote:
        "Paravyoma replaced three disconnected systems with a single workflow. Our team now spends significantly less time on administration and has far better visibility into operations.",
      role: "Operations Director",
      organization: "Professional Services Firm",
      outcome: "Workflow visibility improved",
    },
    {
      quote:
        "What impressed us was not just the software. It was their ability to understand how our organisation actually worked before recommending technology.",
      role: "Temple Trustee",
      organization: "Community Institution",
      outcome: "Process mapped before build",
    },
    {
      quote:
        "The value was clarity. We finally had one place to see leads, follow-ups and operational status without chasing updates.",
      role: "Managing Partner",
      organization: "Growing Business",
      outcome: "Leadership visibility increased",
    },
  ],
  ai: {
    quote:
      "They kept the automation practical. Routine classification and follow-ups moved faster, but the sensitive decisions still stayed with our team.",
    role: "Operations Lead",
    organization: "Service Business",
    outcome: "Automation with human oversight",
  },
  crm: {
    quote:
      "The CRM finally reflected how our sales process actually works. Leads, owners and next actions became visible without another spreadsheet.",
    role: "Revenue Operations Manager",
    organization: "Professional Services Firm",
    outcome: "Pipeline and follow-up control",
  },
  temple: {
    quote:
      "The system respected the way our temple serves. Donation records, seva coordination and trustee reports became clearer without making the work feel commercial.",
    role: "Temple Trustee",
    organization: "Temple Trust",
    outcome: "Calmer daily administration",
  },
  transformation: {
    quote:
      "Before changing tools, Paravyoma showed us where the operating gaps actually were. That made the roadmap much easier for leadership to trust.",
    role: "Executive Sponsor",
    organization: "Mid-sized Organization",
    outcome: "Transformation roadmap clarified",
  },
  custom: {
    quote:
      "The application was designed around our real workflow, not a generic template. That is why the team actually adopted it.",
    role: "Program Director",
    organization: "Operations-heavy Team",
    outcome: "Custom system adopted",
  },
} as const;

export const successStoryPrompts = [
  {
    title: "From scattered follow-ups to one operating view",
    context: "A growing services team losing visibility across leads and tasks.",
    result: "Centralized pipeline, assigned owners and automated follow-up discipline.",
  },
  {
    title: "Temple administration without spreadsheet dependence",
    context: "A temple trust coordinating sevas, donations, volunteers and trustee reports.",
    result: "One calm operating layer for daily service and governance visibility.",
  },
] as const;

export const teamExpertise = [
  {
    title: "Systems strategy",
    icon: BadgeCheck,
    points: [
      "Operating model diagnosis",
      "Workflow architecture",
      "Implementation roadmap design",
    ],
  },
  {
    title: "Build and integration",
    icon: DatabaseZap,
    points: [
      "CRM and workflow systems",
      "Custom applications",
      "Dashboards and integrations",
    ],
  },
  {
    title: "Adoption and support",
    icon: HeartHandshake,
    points: [
      "Team onboarding",
      "Documentation and handover",
      "Post-launch improvement cycles",
    ],
  },
  {
    title: "Quality and accountability",
    icon: CheckCircle2,
    points: [
      "Human-reviewed AI acceleration",
      "Measured outcomes",
      "Transparent progress reporting",
    ],
  },
] as const;
