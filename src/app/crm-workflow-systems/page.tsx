import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  UserX,
  BellOff,
  FolderOpen,
  EyeOff,
  Gauge,
  Database,
  Workflow,
  MonitorSmartphone,
  LayoutDashboard,
  BarChart3,
  UserPlus,
  Phone,
  FileText,
  Handshake,
  Trophy,
  ArrowRight,
  ArrowDown,
  Briefcase,
  GraduationCap,
  Heart,
  Landmark,
  CheckCircle2,
  CalendarCheck,
  Sparkles,
} from "lucide-react";

import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { OperationsSystemPreview } from "@/components/proof/operations-system-preview";
import { cn } from "@/lib/utils";

const ASSESS_HREF = "/contact?type=Workflow+Assessment";

export const metadata: Metadata = {
  title: "CRM & Workflow Systems",
  description:
    "CRM and workflow systems that capture every lead, automate follow-ups, and give your team full visibility — built around how your business actually operates, not a generic template.",
  alternates: { canonical: `${siteConfig.url}/crm-workflow-systems` },
  openGraph: {
    title: `CRM & Workflow Systems — ${siteConfig.name}`,
    description:
      "Your business should not run on spreadsheets and memory. End-to-end CRM and workflow systems — no lead lost, no step missed.",
    url: `${siteConfig.url}/crm-workflow-systems`,
  },
};

const crmProofPreview = {
  modules: [
    "Pipeline",
    "Contacts",
    "Tasks",
    "Automations",
    "Dashboards",
  ],
  metrics: [
    { label: "Open leads", value: "42", change: "Live" },
    { label: "Response SLA", value: "94%", change: "On track" },
    { label: "Overdue tasks", value: "3", change: "Flagged" },
    { label: "Conversion rate", value: "28%", change: "+6%" },
  ],
  records: [
    {
      name: "New enquiry: legal consultation",
      meta: "Owner assigned, first response task generated",
      status: "New",
    },
    {
      name: "Proposal follow-up: NGO donor CRM",
      meta: "Day 3 follow-up sequence scheduled",
      status: "Due today",
    },
    {
      name: "Temple operations discovery",
      meta: "Consultation booked, briefing note created",
      status: "Booked",
    },
  ],
  workflow: [
    {
      label: "Lead captured",
      detail: "Every source creates a CRM record with context attached.",
      tone: "done" as const,
    },
    {
      label: "Owner assigned",
      detail: "Routing rules assign the right team member automatically.",
      tone: "done" as const,
    },
    {
      label: "Follow-up triggered",
      detail: "Tasks, reminders and messages fire without depending on memory.",
      tone: "active" as const,
    },
    {
      label: "Dashboard updated",
      detail: "Leadership sees pipeline health without asking for reports.",
    },
  ],
  integrations: ["Website", "WhatsApp", "Email", "Calendar", "Accounting"],
} as const;

// ── 2 — Common Problems ───────────────────────────────────────────────────────
const problems = [
  {
    icon: UserX,
    title: "Lost Leads",
    description:
      "Enquiries that never get a follow-up. Warm prospects who go cold because no one knew they were waiting. Revenue leaving before it arrives.",
  },
  {
    icon: BellOff,
    title: "Manual Follow-Ups",
    description:
      "Reminders written on sticky notes, follow-ups that depend on memory, and important tasks that fall through the moment someone gets busy.",
  },
  {
    icon: FolderOpen,
    title: "Scattered Information",
    description:
      "Customer history spread across email threads, WhatsApp, spreadsheets and one person's notebook. Nobody has the full picture.",
  },
  {
    icon: EyeOff,
    title: "No Visibility",
    description:
      "Leadership can't see pipeline health, team workload or operational status without chasing updates — which itself costs time every week.",
  },
  {
    icon: Gauge,
    title: "Operational Bottlenecks",
    description:
      "The same manual steps repeated every day: copying data, generating reports, routing requests. Time that should go toward growing the business.",
  },
];

// ── 3 — Solutions ─────────────────────────────────────────────────────────────
const solutions = [
  {
    icon: Database,
    name: "CRM Systems",
    tagline: "One source of truth for every customer relationship.",
    features: [
      "CRM selection and configuration for your sales cycle",
      "Contact, deal and pipeline management",
      "Lead capture from every touchpoint",
      "Full migration from spreadsheets or legacy tools",
    ],
  },
  {
    icon: Workflow,
    name: "Workflow Automation",
    tagline: "Routine steps handled — without anyone lifting a finger.",
    features: [
      "Automated follow-up sequences and reminders",
      "Approval and handoff workflows",
      "Trigger-based task creation and notifications",
      "Integration across tools your team already uses",
    ],
  },
  {
    icon: MonitorSmartphone,
    name: "Customer Portals",
    tagline: "Give clients a window into their work — and trust.",
    features: [
      "Self-service portals for project or account status",
      "Document sharing and approval flows",
      "Support request submission and tracking",
      "Branded, professional experience on any device",
    ],
  },
  {
    icon: LayoutDashboard,
    name: "Dashboards",
    tagline: "The real-time picture your team needs, always ready.",
    features: [
      "Live pipeline and revenue dashboards",
      "Team activity and performance views",
      "Operational health at a glance",
      "Role-based access — the right view for each stakeholder",
    ],
  },
  {
    icon: BarChart3,
    name: "Reporting",
    tagline: "Answers ready before anyone has to ask.",
    features: [
      "Scheduled weekly and monthly reports",
      "Multi-source data pulled into a single view",
      "KPIs that reflect your actual business goals",
      "Export-ready formats for leadership and boards",
    ],
  },
];

// ── 4 — CRM Pipeline Visual ───────────────────────────────────────────────────
const pipelineStages = [
  {
    icon: UserPlus,
    stage: "Capture",
    title: "New Lead",
    description:
      "Enquiry arrives from any channel — website, referral, social — and lands automatically in your CRM.",
    color: "muted" as const,
  },
  {
    icon: Phone,
    stage: "Qualify",
    title: "First Contact",
    description:
      "Automated welcome, reminder fired to the assigned rep. No lead waits more than 15 minutes.",
    color: "primary" as const,
  },
  {
    icon: FileText,
    stage: "Propose",
    title: "Proposal Sent",
    description:
      "Proposal template generated from CRM data. Follow-up sequence begins automatically on day 3.",
    color: "primary" as const,
  },
  {
    icon: Handshake,
    stage: "Negotiate",
    title: "In Discussion",
    description:
      "All conversations logged. Every team member has the full context without asking anyone.",
    color: "primary" as const,
  },
  {
    icon: Trophy,
    stage: "Close",
    title: "Deal Won",
    description:
      "Onboarding workflow triggered instantly. Finance notified. No dropped handoffs.",
    color: "brand" as const,
  },
];

// ── 5 — Industry Examples ─────────────────────────────────────────────────────
const industries = [
  {
    icon: Briefcase,
    name: "Professional Services",
    description:
      "Law firms, consultancies and agencies managing client relationships, project pipelines and billing cycles — all in one connected system that keeps every engagement on track.",
    examples: [
      "Client intake and matter tracking",
      "Project milestone and deadline workflows",
      "Automated invoice follow-up sequences",
    ],
  },
  {
    icon: GraduationCap,
    name: "Education",
    description:
      "Coaching institutes, training providers and schools tracking admissions, attendance, fee collections and parent communication without the spreadsheet overhead.",
    examples: [
      "Admissions pipeline and enquiry follow-up",
      "Fee reminder and payment workflows",
      "Parent and student communication automation",
    ],
  },
  {
    icon: Heart,
    name: "Nonprofits",
    description:
      "NGOs and charitable organizations managing donors, volunteers, campaigns and impact reporting — with the transparency funders expect and the simplicity teams need.",
    examples: [
      "Donor pipeline and retention workflows",
      "Volunteer coordination and task assignment",
      "Impact and grant reporting dashboards",
    ],
  },
  {
    icon: Landmark,
    name: "Temples & Spiritual Organizations",
    description:
      "Temples managing donations, seva coordination, event registrations and community outreach — replacing scattered registers with systems that serve the way the institution serves.",
    examples: [
      "Donation tracking and donor communication",
      "Event registration and volunteer workflows",
      "Trustee reporting and audit-ready records",
    ],
  },
];

export default function CrmWorkflowSystemsPage() {
  return (
    <>
      {/* 1 — Hero */}
      <PageHeader
        eyebrow="CRM & Workflow Systems"
        title="Your business should not run on spreadsheets and memory."
        description="We design and implement CRM and workflow systems built around how your business actually operates — capturing every lead, automating every follow-up, and giving your team full visibility from day one."
      >
        <Button asChild variant="brand" size="lg">
          <Link href={ASSESS_HREF}>
            <CalendarCheck className="size-4" />
            Book a Workflow Assessment
          </Link>
        </Button>
      </PageHeader>

      {/* 2 — Common Problems */}
      <Section id="crm-preview" surface>
        <Reveal>
          <OperationsSystemPreview
            eyebrow="Visual proof"
            title="A connected CRM workspace, not another spreadsheet."
            description="This is the operating view clients need: every lead captured, every next step assigned, and every workflow visible without chasing status updates."
            highlight="The CRM becomes useful when the workflow is designed first and the software is configured around it."
            {...crmProofPreview}
          />
        </Reveal>
      </Section>

      <Section id="problems">
        <SectionHeading
          eyebrow="Common problems we solve"
          title="The gaps that cost you deals, time and trust."
          description="Most growing businesses hit the same wall — processes that worked at ten people break at thirty. These are the friction points we eliminate."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-card sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80}>
              <div className="flex h-full flex-col bg-card p-7 lg:p-8">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {item.description}
                </p>
                <div
                  className="mt-auto pt-6 h-0.5 w-8 rounded-full bg-brand/30"
                  aria-hidden="true"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3 — Solutions */}
      <Section id="solutions">
        <SectionHeading
          eyebrow="Our solutions"
          title="Five capabilities. One connected system."
          description="Start with the piece that solves your most pressing problem today — and build out as you grow. Every capability works alone, and works better together."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {solutions.map((item, i) => (
            <Reveal key={item.name} delay={(i % 2) * 100}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft transition-shadow duration-300 hover:shadow-lift lg:p-10",
                  i === 4 && "lg:col-span-2"
                )}
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10">
                    <item.icon className="size-6 text-brand" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-sm font-semibold tracking-widest text-brand/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {item.tagline}
                </p>

                <ul className="mt-6 space-y-3 border-t border-border pt-6">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-brand"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-relaxed text-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4 — Visual CRM Pipeline */}
      <Section id="pipeline" surface>
        <SectionHeading
          eyebrow="CRM pipeline in action"
          title="From first enquiry to closed deal — nothing falls through."
          description="This is what a properly configured CRM workflow looks like. Every stage is clear, every handoff is automatic, and every team member always has the full picture."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14">
          <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] lg:gap-2">
            {pipelineStages.map((node, i) => (
              <React.Fragment key={node.title}>
                <Reveal delay={i * 90}>
                  <div
                    className={cn(
                      "flex h-full flex-col rounded-2xl border p-6 text-left shadow-soft",
                      node.color === "muted" && "border-border bg-card",
                      node.color === "primary" && "border-border bg-card",
                      node.color === "brand" &&
                        "border-brand/20 bg-primary text-primary-foreground"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={cn(
                          "inline-flex size-10 items-center justify-center rounded-xl shadow-soft",
                          node.color === "muted" &&
                            "bg-surface text-muted-foreground",
                          node.color === "primary" &&
                            "bg-primary text-primary-foreground",
                          node.color === "brand" &&
                            "bg-brand text-brand-foreground"
                        )}
                      >
                        <node.icon className="size-5" aria-hidden="true" />
                      </span>
                      <span
                        className={cn(
                          "text-[10px] font-semibold uppercase tracking-[0.14em]",
                          node.color === "brand"
                            ? "text-brand"
                            : "text-muted-foreground"
                        )}
                      >
                        {node.stage}
                      </span>
                    </div>
                    <h3
                      className={cn(
                        "mt-4 font-display text-sm font-semibold tracking-tight",
                        node.color === "brand"
                          ? "text-primary-foreground"
                          : "text-foreground"
                      )}
                    >
                      {node.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-2 text-xs leading-relaxed text-pretty",
                        node.color === "brand"
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      )}
                    >
                      {node.description}
                    </p>
                  </div>
                </Reveal>

                {i < pipelineStages.length - 1 ? (
                  <div
                    className="flex items-center justify-center text-brand/50"
                    aria-hidden="true"
                  >
                    <ArrowRight className="hidden size-5 lg:block" />
                    <ArrowDown className="size-5 lg:hidden" />
                  </div>
                ) : null}
              </React.Fragment>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-brand/20 bg-brand/5 p-6">
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Sparkles className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  This is what we configure for you.
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  Every stage, trigger, automation and handoff is designed around
                  your actual sales process — not a generic template. We map your
                  current workflow first, then build a system that fits it and
                  improves it.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 5 — Industry Examples */}
      <Section id="industries">
        <SectionHeading
          eyebrow="Industry examples"
          title="Built for the way different organisations actually operate."
          description="CRM and workflow problems look different in every sector. We've worked across all of these — and we understand the specific operational patterns each one runs on."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {industries.map((industry, i) => (
            <Reveal key={industry.name} delay={(i % 2) * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft transition-shadow duration-300 hover:shadow-lift lg:p-10">
                <div className="flex items-center gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                    <industry.icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                    {industry.name}
                  </h3>
                </div>

                <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {industry.description}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                  {industry.examples.map((example) => (
                    <li key={example} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-brand"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-relaxed text-foreground">
                        {example}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 6 — CTA */}
      <Section id="crm-cta" bleed className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center shadow-lift sm:px-12 lg:px-16 lg:py-20">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand/20 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
              >
                <div className="absolute inset-0 bg-grid-slate bg-[size:40px_40px] invert" />
              </div>

              <div className="relative mx-auto max-w-2xl">
                <span className="eyebrow justify-center text-brand">
                  Let&apos;s build your system
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-primary-foreground text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                  Stop losing leads to a process that was never designed.
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/70 text-pretty">
                  A Workflow Assessment maps where your leads, information and
                  tasks are currently falling through — and gives you a clear,
                  prioritised plan to fix it. No pressure. Just clarity.
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button
                    asChild
                    variant="brand"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <Link href={ASSESS_HREF}>
                      <CalendarCheck className="size-4" />
                      Book a Workflow Assessment
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="w-full border border-white/15 bg-white/10 text-primary-foreground shadow-soft hover:bg-white/15 sm:w-auto"
                  >
                    <Link href="/solutions">
                      Explore all solutions
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
