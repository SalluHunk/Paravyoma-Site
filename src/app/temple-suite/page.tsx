import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  Boxes,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Database,
  FileText,
  HandCoins,
  HandHeart,
  HeartHandshake,
  Landmark,
  Layers3,
  LineChart,
  MessageCircle,
  Network,
  Package,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Temple Suite",
  description:
    "Temple Suite is Paravyoma's flagship platform initiative for spiritual organizations: donation management, seva scheduling, volunteer coordination, events, inventory, book distribution, community engagement and analytics in one purpose-built operating system.",
  alternates: { canonical: `${siteConfig.url}/temple-suite` },
  openGraph: {
    title: `Temple Suite - ${siteConfig.name}`,
    description:
      "A premium temple operations platform built specifically for spiritual organizations.",
    url: `${siteConfig.url}/temple-suite`,
  },
};

const modules = [
  {
    icon: HandCoins,
    name: "Donation Management",
    tier: "Core records",
    description:
      "Receipts, donor profiles, pledge history, payment references and trustee-ready summaries.",
    features: ["Counter and online donations", "Auto receipt history", "Donor relationship view"],
  },
  {
    icon: CalendarCheck,
    name: "Seva Scheduling",
    tier: "Daily operations",
    description:
      "Seva bookings, priest availability, confirmations, material readiness and daily rosters.",
    features: ["Daily seva calendar", "Capacity and slots", "WhatsApp confirmations"],
  },
  {
    icon: Users,
    name: "Volunteer Management",
    tier: "People coordination",
    description:
      "Volunteer profiles, availability, festival roles, shift assignments and attendance tracking.",
    features: ["Availability tracking", "Role-based rosters", "Coverage alerts"],
  },
  {
    icon: Landmark,
    name: "Events",
    tier: "Community programs",
    description:
      "Festival registrations, classes, capacity, ticketing, participant lists and post-event reporting.",
    features: ["Registration forms", "Capacity management", "Participant records"],
  },
  {
    icon: Package,
    name: "Inventory",
    tier: "Supplies and stock",
    description:
      "Puja materials, prasadam items, books, supplies, thresholds and movement history.",
    features: ["Stock levels", "Low-stock alerts", "Usage by event"],
  },
  {
    icon: BookOpen,
    name: "Book Distribution",
    tier: "Mission support",
    description:
      "Book stock, distribution records, outreach campaigns, counters and community requests.",
    features: ["Stock and sales", "Distribution counters", "Campaign tracking"],
  },
  {
    icon: MessageCircle,
    name: "Community Engagement",
    tier: "Devotee connection",
    description:
      "Member profiles, announcements, reminders, program updates and segmented communication.",
    features: ["Member directory", "Segmented updates", "Reminder workflows"],
  },
  {
    icon: BarChart3,
    name: "Analytics",
    tier: "Trustee visibility",
    description:
      "Daily activity, donations, volunteer coverage, program growth and operational health.",
    features: ["Trustee dashboards", "Monthly summaries", "Audit-ready exports"],
  },
] as const;

const workflows = [
  {
    title: "Donation to trustee report",
    icon: ReceiptText,
    steps: ["Donation captured", "Receipt issued", "Donor profile updated", "Trustee dashboard refreshed"],
  },
  {
    title: "Seva booking to daily roster",
    icon: CalendarCheck,
    steps: ["Seva selected", "Slot confirmed", "Materials checked", "Priest and volunteer roster updated"],
  },
  {
    title: "Festival planning to community update",
    icon: Bell,
    steps: ["Event created", "Capacity opened", "Volunteers assigned", "Devotees notified"],
  },
  {
    title: "Book stock to outreach insight",
    icon: BookOpen,
    steps: ["Inventory logged", "Distribution recorded", "Campaign linked", "Impact report generated"],
  },
] as const;

const architecture = [
  {
    icon: Database,
    layer: "Temple record layer",
    description:
      "Devotees, donors, sevas, receipts, volunteers, events, stock and books share one structured source of truth.",
  },
  {
    icon: Workflow,
    layer: "Operations workflow layer",
    description:
      "Daily desk work, festival planning, reminders, assignments and confirmations move through controlled workflows.",
  },
  {
    icon: ShieldCheck,
    layer: "Governance layer",
    description:
      "Role-based access, audit history, trustee reports and exports keep sensitive institutional work accountable.",
  },
  {
    icon: LineChart,
    layer: "Insight layer",
    description:
      "Leadership sees donation patterns, capacity, volunteer coverage and program health without manual collation.",
  },
] as const;

const roadmap = [
  {
    phase: "Foundation",
    title: "Core temple operating system",
    description:
      "Donation records, seva scheduling, volunteer rosters, event registrations and trustee dashboards.",
  },
  {
    phase: "Expansion",
    title: "Community and inventory intelligence",
    description:
      "Book distribution, member engagement, inventory forecasting, program reminders and segmented outreach.",
  },
  {
    phase: "Automation",
    title: "Guided workflows and anomaly alerts",
    description:
      "Capacity alerts, receipt reconciliation, low-stock signals, volunteer coverage warnings and routine summaries.",
  },
  {
    phase: "Network",
    title: "Multi-location and institution networks",
    description:
      "Support for larger trusts, multiple temples, shared reporting, program coordination and institutional knowledge.",
  },
] as const;

const moats = [
  "Built around temple operating language: sevas, devotees, trustees, volunteers, festivals, donations and prasadam.",
  "Combines product architecture with implementation support, so adoption is part of the platform motion.",
  "Connects daily desk operations with trustee visibility instead of treating reporting as an afterthought.",
  "Designed for spiritual organizations that need dignity, accountability and continuity, not generic admin software.",
] as const;

function TempleSuitePreview() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
      <div className="border-b border-border bg-surface/80 px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-red-400/80" />
            <span className="size-2.5 rounded-full bg-amber-400/80" />
            <span className="size-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="hidden rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium text-muted-foreground sm:block">
            Temple Suite operating console
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[240px_1fr]">
        <aside className="bg-primary p-5 text-primary-foreground">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand text-brand-foreground">
              <Landmark className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                Temple Suite
              </p>
              <p className="text-sm font-semibold">Sri Govinda Mandir</p>
            </div>
          </div>

          <nav className="mt-8 space-y-1" aria-label="Temple Suite modules">
            {["Dashboard", "Donations", "Sevas", "Volunteers", "Events", "Reports"].map(
              (item, index) => (
                <div
                  key={item}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm",
                    index === 0
                      ? "bg-white/10 text-primary-foreground"
                      : "text-primary-foreground/60"
                  )}
                >
                  <span
                    className={cn(
                      "size-1.5 rounded-full",
                      index === 0 ? "bg-brand" : "bg-primary-foreground/25"
                    )}
                    aria-hidden="true"
                  />
                  {item}
                </div>
              )
            )}
          </nav>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
              Today
            </p>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
              92% volunteer coverage for evening program. Two material alerts
              need review before 4 PM.
            </p>
          </div>
        </aside>

        <div className="p-5 sm:p-6 lg:p-8">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ["Today's sevas", "36", "Scheduled"],
              ["Donation receipts", "128", "Issued"],
              ["Volunteer coverage", "92%", "Ready"],
              ["Event capacity", "640/800", "Open"],
            ].map(([label, value, status]) => (
              <div
                key={label}
                className="rounded-2xl border border-border bg-background p-4 shadow-soft"
              >
                <p className="text-xs font-medium text-muted-foreground">
                  {label}
                </p>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <p className="font-display text-2xl font-semibold tracking-tight text-foreground">
                    {value}
                  </p>
                  <span className="rounded-full bg-brand/10 px-2 py-1 text-[11px] font-semibold text-brand">
                    {status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-border bg-background p-5 shadow-soft">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Daily operating queue
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Desk, seva, inventory and trustee work in one view.
                  </p>
                </div>
                <ClipboardList className="size-5 text-brand" aria-hidden="true" />
              </div>

              <div className="mt-5 overflow-hidden rounded-xl border border-border">
                {[
                  ["Morning seva roster", "Priest team, flowers and volunteers assigned", "Ready"],
                  ["Festival registration", "Capacity open, 160 seats remaining", "Open"],
                  ["Trustee donation summary", "Receipt totals reconciled for review", "Updated"],
                ].map(([name, meta, status], index) => (
                  <div
                    key={name}
                    className={cn(
                      "grid gap-3 px-4 py-3 text-sm sm:grid-cols-[1fr_auto]",
                      index > 0 && "border-t border-border"
                    )}
                  >
                    <div>
                      <p className="font-medium text-foreground">{name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {meta}
                      </p>
                    </div>
                    <span className="h-fit rounded-full border border-brand/20 bg-brand/10 px-2.5 py-1 text-[11px] font-semibold text-brand">
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background p-5 shadow-soft">
              <p className="text-sm font-semibold text-foreground">
                Connected workflows
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Routine temple operations update records and reports together.
              </p>

              <div className="mt-5 space-y-3">
                {[
                  ["Donation captured", "Receipt and donor record created."],
                  ["Seva confirmed", "Calendar, materials and roster updated."],
                  ["Volunteer assigned", "Coverage and reminder queue refreshed."],
                  ["Trustee view updated", "Daily reporting stays ready."],
                ].map(([label, detail], index) => (
                  <div key={label} className="flex gap-3">
                    <span
                      className={cn(
                        "inline-flex size-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold",
                        index === 0
                          ? "border-brand/20 bg-brand text-brand-foreground"
                          : "border-border bg-surface text-muted-foreground"
                      )}
                    >
                      {index === 0 ? (
                        <CheckCircle2 className="size-4" aria-hidden="true" />
                      ) : (
                        index + 1
                      )}
                    </span>
                    <div className="pb-3">
                      <p className="text-sm font-medium text-foreground">
                        {label}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TempleSuitePage() {
  return (
    <>
      <PageHeader
        eyebrow="Temple Suite"
        title="A temple operations platform built for spiritual organizations."
        description="Temple Suite is Paravyoma's flagship platform initiative: a specialized operating system for donations, sevas, volunteers, events, inventory, books, community engagement and trustee visibility."
      >
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="brand" size="lg">
            <Link href="/contact?type=Temple+Suite+Consultation">
              Discuss Temple Suite
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="#modules">View modules</Link>
          </Button>
        </div>
      </PageHeader>

      <Section id="suite-preview" surface>
        <Reveal>
          <TempleSuitePreview />
        </Reveal>
      </Section>

      <Section id="positioning">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div>
              <span className="eyebrow">Category position</span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
                Not generic administration software. A long-term temple
                operating platform.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
                Temple Suite is designed around the actual rhythm of spiritual
                institutions: daily sevas, festival peaks, donations, trustee
                governance, volunteer service, book distribution and community
                connection.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Built for service", "Supports sacred work without forcing it into commercial CRM language."],
                ["Operationally complete", "Connects front desk records, volunteers, stock, events and reports."],
                ["Trustee-ready", "Gives leadership reliable visibility without asking teams for manual summaries."],
                ["Long-term initiative", "Designed as a platform Paravyoma can deepen through implementation learning."],
              ].map(([title, body]) => (
                <article
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-soft"
                >
                  <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="modules" surface>
        <SectionHeading
          eyebrow="Product modules"
          title="Eight modules, one temple operating system."
          description="The product hierarchy is intentionally practical: start with the core records, then connect the workflows that make daily service easier to coordinate."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((module, i) => (
            <Reveal key={module.name} delay={(i % 4) * 70}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                  <module.icon className="size-5" aria-hidden="true" />
                </span>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                  {module.tier}
                </p>
                <h3 className="mt-2 font-display text-base font-semibold tracking-tight text-foreground">
                  {module.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {module.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-border pt-5">
                  {module.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2
                        className="mt-0.5 size-3.5 shrink-0 text-brand"
                        aria-hidden="true"
                      />
                      <span className="text-xs leading-relaxed text-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="architecture">
        <SectionHeading
          eyebrow="Product architecture"
          title="A platform architecture for temple continuity."
          description="Temple Suite is not a collection of disconnected tools. Its moat is the shared record layer that lets operations, governance and community engagement reinforce each other."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {architecture.map((item, i) => (
            <Reveal key={item.layer} delay={i * 80}>
              <article className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-foreground">
                  {item.layer}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                {i < architecture.length - 1 ? (
                  <ArrowRight
                    className="absolute -right-3 top-1/2 hidden size-6 text-brand/40 lg:block"
                    aria-hidden="true"
                  />
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="workflows" surface>
        <SectionHeading
          eyebrow="Temple operations workflows"
          title="Designed around the moments that keep a temple running."
          description="Temple Suite connects daily desk work with back-office accuracy and trustee visibility."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {workflows.map((workflow, i) => (
            <Reveal key={workflow.title} delay={(i % 2) * 100}>
              <article className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                <div className="flex items-center gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                    <workflow.icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                    {workflow.title}
                  </h3>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-4">
                  {workflow.steps.map((step, index) => (
                    <div key={step} className="relative rounded-xl border border-border bg-surface p-4">
                      <p className="text-[11px] font-semibold text-brand">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-2 text-sm font-medium leading-snug text-foreground">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="ecosystem">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div>
              <span className="eyebrow">Product ecosystem</span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
                One ecosystem for devotees, volunteers, staff and trustees.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
                The platform is shaped around how a spiritual organization
                actually operates: public interactions at the front desk and
                online, coordinated service by volunteers and staff, and
                responsible oversight by trustees.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-lift">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Devotee touchpoints", HeartHandshake, "Donations, sevas, events, programs and reminders."],
                  ["Front desk operations", ReceiptText, "Receipts, bookings, confirmations and daily queues."],
                  ["Volunteer service", HandHeart, "Roles, availability, rosters and festival coverage."],
                  ["Trustee governance", FileText, "Dashboards, exports, audit trails and monthly summaries."],
                  ["Community outreach", MessageCircle, "Announcements, segments, classes and engagement."],
                  ["Supply readiness", Boxes, "Inventory, book stock, material planning and alerts."],
                ].map(([title, Icon, body]) => {
                  const EcosystemIcon = Icon as React.ComponentType<{
                    className?: string;
                    "aria-hidden"?: "true";
                  }>;
                  return (
                    <article
                      key={title as string}
                      className="rounded-2xl border border-border bg-background p-5"
                    >
                      <EcosystemIcon
                        className="size-5 text-brand"
                        aria-hidden="true"
                      />
                      <h3 className="mt-4 font-display text-sm font-semibold tracking-tight text-foreground">
                        {title as string}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {body as string}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="roadmap" surface>
        <SectionHeading
          eyebrow="Future roadmap"
          title="A flagship initiative built to deepen over time."
          description="Temple Suite is positioned as a long-term platform category for Paravyoma, not a one-off implementation package."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {roadmap.map((item, i) => (
            <Reveal key={item.phase} delay={i * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                  {item.phase}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="moat">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <div>
              <span className="eyebrow">Differentiators and moat</span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
                The advantage is domain depth plus implementation discipline.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
                The category opportunity is not another admin dashboard. It is
                a premium operating platform that understands spiritual service,
                institutional accountability and community continuity.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {moats.map((moat, i) => (
              <Reveal key={moat} delay={i * 70}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    {i === 0 ? (
                      <Landmark className="size-4" aria-hidden="true" />
                    ) : i === 1 ? (
                      <Layers3 className="size-4" aria-hidden="true" />
                    ) : i === 2 ? (
                      <Network className="size-4" aria-hidden="true" />
                    ) : (
                      <Sparkles className="size-4" aria-hidden="true" />
                    )}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground">
                    {moat}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="temple-suite-cta" bleed className="py-20 lg:py-28">
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
                  Flagship initiative
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-primary-foreground text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                  Build the digital operating foundation for your temple.
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/70 text-pretty">
                  Start with a consultation. We will map your current temple
                  operations, identify the highest-value modules and define a
                  phased path toward Temple Suite adoption.
                </p>
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button asChild variant="brand" size="lg" className="w-full sm:w-auto">
                    <Link href="/contact?type=Temple+Suite+Consultation">
                      Discuss Temple Suite
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="w-full border border-white/15 bg-white/10 text-primary-foreground shadow-soft hover:bg-white/15 sm:w-auto"
                  >
                    <Link href="/temple-solutions">Compare service approach</Link>
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
