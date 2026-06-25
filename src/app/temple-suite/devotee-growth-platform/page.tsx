import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  Database,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Landmark,
  LineChart,
  MessageCircle,
  Network,
  Route,
  ShieldCheck,
  Sparkles,
  Target,
  UserCheck,
  Workflow,
} from "lucide-react";

import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Devotee Growth Platform",
  description:
    "Devotee Growth Platform is a Temple Suite module for attracting, registering, engaging, nurturing, retaining and developing devotees across temples and spiritual communities.",
  alternates: {
    canonical: `${siteConfig.url}/temple-suite/devotee-growth-platform`,
  },
  openGraph: {
    title: `Devotee Growth Platform - ${siteConfig.name}`,
    description:
      "A Temple Suite module for spiritual engagement, community growth and devotee development.",
    url: `${siteConfig.url}/temple-suite/devotee-growth-platform`,
  },
};

const stages = [
  {
    icon: MessageCircle,
    stage: "Outreach Programs",
    journey:
      "A person first meets the temple through kirtan, food distribution, book table, online content, school program or public festival.",
    data: ["Campaign", "Source", "Location", "Language", "First contact", "Consent"],
    automations: ["QR registration links", "Source tagging", "Welcome sequence"],
    notifications: ["Outreach lead captured", "New local interest cluster", "Follow-up due"],
    dashboards: ["Campaign reach", "First-time registrations", "Source quality"],
    analytics: ["Source-to-visit rate", "Cost per engaged devotee", "Program geography"],
    metrics: ["New contacts", "Consent rate", "First follow-up completion"],
  },
  {
    icon: CalendarCheck,
    stage: "Event Registration",
    journey:
      "A visitor registers for Sunday program, festival, youth session, home program, retreat or introductory class.",
    data: ["Event", "Registration", "Attendance", "Family members", "Preferences", "Check-in"],
    automations: ["Confirmation message", "Reminder queue", "Post-event next step"],
    notifications: ["Capacity threshold", "VIP or donor attendee", "No-show segment"],
    dashboards: ["Registrations by event", "Attendance by segment", "Repeat attendance"],
    analytics: ["Registration-to-attendance", "Event retention", "Family participation"],
    metrics: ["Attendance rate", "Repeat visit rate", "Post-event action rate"],
  },
  {
    icon: UserCheck,
    stage: "Visitor Tracking",
    journey:
      "A first-time visitor becomes a known devotee profile with attendance, interests and relationship context.",
    data: ["Devotee profile", "Visit history", "Referral", "Age group", "Language", "Family links"],
    automations: ["Duplicate detection", "First-visit task", "Second-visit reminder"],
    notifications: ["First-time visitor", "Returning after gap", "High engagement signal"],
    dashboards: ["New visitors", "Returning visitors", "Dormant visitors"],
    analytics: ["Visit frequency", "Drop-off after first visit", "Referral paths"],
    metrics: ["Profile completeness", "Second visit rate", "Dormancy recovery"],
  },
  {
    icon: Target,
    stage: "Interest Segmentation",
    journey:
      "The platform identifies what each devotee is drawn toward: kirtan, philosophy, prasadam service, youth programs, books, seva or donations.",
    data: ["Interest tags", "Engagement score", "Program history", "Content preference", "Language"],
    automations: ["Segment assignment", "Recommended next program", "Content personalization"],
    notifications: ["New segment trend", "Unserved interest group", "High-intent devotee"],
    dashboards: ["Interest map", "Segment growth", "Engagement heatmap"],
    analytics: ["Segment conversion", "Program affinity", "Content engagement"],
    metrics: ["Tagged profiles", "Segment activation", "Relevant invitation response"],
  },
  {
    icon: HeartHandshake,
    stage: "Mentor Assignment",
    journey:
      "A sincere visitor or new devotee is connected with a trained mentor who can guide them respectfully and consistently.",
    data: ["Mentor profile", "Assignment", "Language fit", "Gender preference", "Meeting history"],
    automations: ["Mentor matching", "Check-in cadence", "Escalation for inactivity"],
    notifications: ["New mentee assigned", "Check-in overdue", "Mentor capacity limit"],
    dashboards: ["Mentor load", "Mentee progress", "Unassigned devotees"],
    analytics: ["Mentor response time", "Retention by mentor", "Progression velocity"],
    metrics: ["Assignment time", "Check-in completion", "Mentored retention"],
  },
  {
    icon: GraduationCap,
    stage: "Course Enrollment",
    journey:
      "Devotees progress from introductory sessions into structured courses, study circles and practice commitments.",
    data: ["Course", "Batch", "Enrollment", "Attendance", "Completion", "Assessment"],
    automations: ["Batch recommendations", "Attendance reminders", "Completion certificate"],
    notifications: ["Low attendance", "New batch demand", "Course completed"],
    dashboards: ["Enrollment funnel", "Batch health", "Completion rates"],
    analytics: ["Course progression", "Attendance correlation", "Topic demand"],
    metrics: ["Enrollment rate", "Completion rate", "Next-course conversion"],
  },
  {
    icon: BookOpen,
    stage: "Book Distribution Tracking",
    journey:
      "Books are distributed with context, follow-up and learning pathways instead of becoming isolated transactions.",
    data: ["Book", "Distributor", "Recipient", "Campaign", "Follow-up", "Reading interest"],
    automations: ["Recipient follow-up", "Reading group invitation", "Stock update"],
    notifications: ["Follow-up due", "High-volume distributor", "Low stock by campaign"],
    dashboards: ["Books distributed", "Follow-up outcomes", "Campaign performance"],
    analytics: ["Book-to-program conversion", "Distributor impact", "Topic interest"],
    metrics: ["Distribution count", "Follow-up rate", "Reader engagement"],
  },
  {
    icon: HandHeart,
    stage: "Volunteer Engagement",
    journey:
      "A devotee expresses willingness to serve and is matched to roles based on skills, availability, training and service maturity.",
    data: ["Skills", "Availability", "Role", "Training", "Attendance", "Service history"],
    automations: ["Role suggestions", "Shift reminders", "Training prerequisites"],
    notifications: ["Coverage gap", "Volunteer burnout signal", "New skill available"],
    dashboards: ["Volunteer capacity", "Role coverage", "Training status"],
    analytics: ["Service consistency", "Volunteer retention", "Role demand"],
    metrics: ["Active volunteers", "Shift completion", "Role coverage"],
  },
  {
    icon: Landmark,
    stage: "Seva Participation",
    journey:
      "Devotees move from occasional attendance into meaningful, regular seva participation aligned with temple needs.",
    data: ["Seva type", "Schedule", "Participation", "Team", "Materials", "Coordinator"],
    automations: ["Recurring seva reminders", "Team roster updates", "Coordinator alerts"],
    notifications: ["Seva missed", "Team below coverage", "Milestone reached"],
    dashboards: ["Seva participation", "Daily rosters", "Coverage by department"],
    analytics: ["Seva frequency", "Department growth", "Participation consistency"],
    metrics: ["Regular seva participants", "Coverage readiness", "Missed seva rate"],
  },
  {
    icon: Sparkles,
    stage: "Leadership Development",
    journey:
      "Committed devotees are gradually developed into reliable coordinators, mentors, teachers and future temple leaders.",
    data: ["Leadership track", "Training history", "Responsibilities", "Mentor review", "Readiness"],
    automations: ["Development pathway", "Review reminders", "Responsibility recommendations"],
    notifications: ["Candidate ready", "Training gap", "Leadership pipeline risk"],
    dashboards: ["Leadership pipeline", "Coordinator readiness", "Training coverage"],
    analytics: ["Progression by pathway", "Leadership retention", "Succession depth"],
    metrics: ["Ready coordinators", "Training completion", "Leadership bench strength"],
  },
] as const;

const architecture = [
  {
    icon: Database,
    title: "Unified devotee record",
    body:
      "Every event, book, course, seva, mentor interaction and volunteer role updates one structured spiritual engagement profile.",
  },
  {
    icon: Workflow,
    title: "Journey orchestration",
    body:
      "The platform recommends the next meaningful step instead of treating every person as a static contact.",
  },
  {
    icon: ShieldCheck,
    title: "Temple governance",
    body:
      "Role-based access protects personal information while giving leaders insight into growth, care and service health.",
  },
  {
    icon: Network,
    title: "Multi-temple deployment",
    body:
      "Shared product architecture supports local temple autonomy, regional reporting and global rollout patterns.",
  },
] as const;

const pilotPlan = [
  {
    phase: "Pilot foundation",
    duration: "Weeks 1-3",
    focus: "ISKCON Lucknow devotee journey map, data model, consent model and first registration flows.",
  },
  {
    phase: "Engagement workflows",
    duration: "Weeks 4-7",
    focus: "Outreach, event registration, visitor tracking, segmentation and mentor assignment workflows.",
  },
  {
    phase: "Development pathways",
    duration: "Weeks 8-11",
    focus: "Courses, books, volunteer engagement, seva participation and leadership readiness dashboards.",
  },
  {
    phase: "Global template",
    duration: "Weeks 12-14",
    focus: "Package configuration, analytics model, training materials and rollout playbook for other temples.",
  },
] as const;

const platformMetrics = [
  ["Attract", "New contacts, source quality, first visit conversion"],
  ["Engage", "Event attendance, repeat visits, segment activation"],
  ["Nurture", "Mentor assignment, check-ins, course enrollment"],
  ["Retain", "Dormancy recovery, seva consistency, volunteer retention"],
  ["Develop", "Course completion, coordinator readiness, leadership bench"],
] as const;

function DevoteeGrowthPreview() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
      <div className="border-b border-border bg-surface px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-red-400/80" />
            <span className="size-2.5 rounded-full bg-amber-400/80" />
            <span className="size-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="hidden rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium text-muted-foreground sm:inline-flex">
            Devotee Growth command center
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-[230px_1fr]">
        <aside className="bg-primary p-5 text-primary-foreground">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand text-brand-foreground">
              <HeartHandshake className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                Temple Suite
              </p>
              <p className="text-sm font-semibold">Devotee Growth</p>
            </div>
          </div>

          <div className="mt-8 space-y-2">
            {["Outreach", "Visitors", "Mentors", "Courses", "Seva", "Leaders"].map(
              (item, index) => (
                <div
                  key={item}
                  className={cn(
                    "rounded-xl px-3 py-2.5 text-sm",
                    index === 1
                      ? "bg-white/10 text-primary-foreground"
                      : "text-primary-foreground/60"
                  )}
                >
                  {item}
                </div>
              )
            )}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
              This week
            </p>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
              184 new visitors, 47 mentor assignments and 29 course enrollments
              need coordinated follow-up.
            </p>
          </div>
        </aside>

        <div className="p-5 sm:p-6 lg:p-8">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ["New visitors", "184", "+22%"],
              ["Mentor coverage", "91%", "Ready"],
              ["Course pipeline", "312", "Active"],
              ["Seva pathway", "68", "Growing"],
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

          <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.9fr]">
            <div className="rounded-2xl border border-border bg-background p-5 shadow-soft">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Engagement journey
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    From first contact to service leadership.
                  </p>
                </div>
                <Route className="size-5 text-brand" aria-hidden="true" />
              </div>

              <div className="mt-5 space-y-3">
                {[
                  ["First visit", "Registered after Sunday program", "184"],
                  ["Interest matched", "Kirtan, Gita course, prasadam seva", "126"],
                  ["Mentor assigned", "Language and availability matched", "47"],
                  ["Seva activated", "Placed into recurring service team", "68"],
                ].map(([label, detail, count], index) => (
                  <div
                    key={label}
                    className="grid grid-cols-[1fr_auto] gap-4 rounded-xl border border-border bg-surface p-4"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {label}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {detail}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "h-fit rounded-full px-2.5 py-1 text-[11px] font-semibold",
                        index === 0
                          ? "bg-brand text-brand-foreground"
                          : "bg-brand/10 text-brand"
                      )}
                    >
                      {count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background p-5 shadow-soft">
              <p className="text-sm font-semibold text-foreground">
                Automation queue
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Human care, system-supported timing.
              </p>

              <div className="mt-5 space-y-4">
                {[
                  ["Welcome messages", "62 due today"],
                  ["Mentor check-ins", "14 overdue"],
                  ["Course reminders", "3 batches"],
                  ["Dormant devotee care", "28 reactivation tasks"],
                ].map(([label, detail]) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-brand/20 bg-brand/10 text-brand">
                      <Bell className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {label}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
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

export default function DevoteeGrowthPlatformPage() {
  return (
    <>
      <PageHeader
        eyebrow="Temple Suite module"
        title="Devotee Growth Platform for spiritual engagement and community development."
        description="A complete system for temples to attract, register, engage, nurture, retain and develop devotees - from first contact to seva participation and leadership readiness."
      >
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="brand" size="lg">
            <Link href="/contact?type=Devotee+Growth+Platform+Pilot">
              Discuss pilot
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/temple-suite">Back to Temple Suite</Link>
          </Button>
        </div>
      </PageHeader>

      <Section id="preview" surface>
        <Reveal>
          <DevoteeGrowthPreview />
        </Reveal>
      </Section>

      <Section id="positioning">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div>
              <span className="eyebrow">Strategic position</span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
                Not contact management. A spiritual engagement operating system.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
                The platform treats every interaction as part of a devotee
                journey. Outreach, programs, books, courses, mentoring,
                volunteering, sevas and leadership development all update one
                living engagement model.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Attract", "Understand which outreach programs create sincere engagement."],
                ["Nurture", "Guide devotees through mentors, classes and relevant invitations."],
                ["Retain", "Identify drop-off patterns and revive relationships with care."],
                ["Develop", "Build a visible pipeline of volunteers, coordinators and leaders."],
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

      <Section id="journey-framework" surface>
        <SectionHeading
          eyebrow="Growth framework"
          title="Ten stages from first contact to leadership development."
          description="Each stage defines the journey, data model, automation opportunities, notifications, dashboards, analytics and success metrics needed for scalable temple growth."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-5">
          {stages.map((stage, i) => (
            <Reveal key={stage.stage} delay={(i % 2) * 60}>
              <article className="grid gap-0 overflow-hidden rounded-2xl border border-border bg-card shadow-soft lg:grid-cols-[260px_1fr]">
                <div className="bg-primary p-6 text-primary-foreground">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand text-brand-foreground shadow-soft">
                    <stage.icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="mt-5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                    Stage {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
                    {stage.stage}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
                    {stage.journey}
                  </p>
                </div>

                <div className="grid gap-4 p-5 sm:grid-cols-2 xl:grid-cols-3">
                  {[
                    ["Data model", stage.data, Database],
                    ["Automations", stage.automations, Workflow],
                    ["Notifications", stage.notifications, Bell],
                    ["Dashboards", stage.dashboards, BarChart3],
                    ["Analytics", stage.analytics, LineChart],
                    ["Success metrics", stage.metrics, CheckCircle2],
                  ].map(([label, items, Icon]) => {
                    const DetailIcon = Icon as React.ComponentType<{
                      className?: string;
                      "aria-hidden"?: "true";
                    }>;
                    return (
                      <div
                        key={label as string}
                        className="rounded-xl border border-border bg-surface p-4"
                      >
                        <div className="flex items-center gap-2">
                          <DetailIcon
                            className="size-4 text-brand"
                            aria-hidden="true"
                          />
                          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                            {label as string}
                          </p>
                        </div>
                        <ul className="mt-3 space-y-2">
                          {(items as readonly string[]).map((item) => (
                            <li key={item} className="text-xs leading-relaxed text-foreground">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="architecture">
        <SectionHeading
          eyebrow="Scalable architecture"
          title="Designed for thousands of devotees and multi-temple deployments."
          description="The module starts with ISKCON Lucknow as a disciplined pilot, then generalizes into a configurable Temple Suite capability for temples worldwide."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {architecture.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
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

        <Reveal>
          <div className="mt-12 rounded-3xl border border-border bg-card p-6 shadow-lift lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <span className="eyebrow">Data model spine</span>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground">
                  One devotee profile, many spiritual engagement signals.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
                  The intellectual property is the engagement model: how a
                  temple recognizes readiness, assigns care, recommends next
                  steps and measures growth without reducing devotees to sales
                  leads.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Identity", "Profile, family, language, consent, location"],
                  ["Engagement", "Visits, events, books, courses, seva, donations"],
                  ["Care", "Mentor, check-ins, pastoral notes, dormancy risk"],
                  ["Development", "Training, roles, responsibility, readiness"],
                  ["Governance", "Access controls, audit trail, reporting scopes"],
                  ["Network", "Temple, zone, region, global configuration"],
                ].map(([label, body]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-border bg-surface p-5"
                  >
                    <p className="text-sm font-semibold text-foreground">
                      {label}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section id="pilot-plan" surface>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div>
              <span className="eyebrow">Pilot to platform</span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
                Pilot in ISKCON Lucknow, then package for global temple rollout.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
                The pilot should produce more than a working implementation. It
                should produce the repeatable data model, workflows, dashboards,
                training system and rollout playbook for future temples.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {pilotPlan.map((phase, i) => (
              <Reveal key={phase.phase} delay={i * 70}>
                <article className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                      {phase.phase}
                    </p>
                    <span className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground">
                    {phase.focus}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="analytics">
        <SectionHeading
          eyebrow="Leadership analytics"
          title="Measure spiritual engagement without flattening it into sales activity."
          description="Dashboards should help leaders care better: where people are coming from, where they are dropping off, and where service leadership is emerging."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-4 md:grid-cols-5">
          {platformMetrics.map(([label, body], i) => (
            <Reveal key={label} delay={i * 60}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-soft">
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-foreground">
                  {label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="growth-cta" bleed className="py-20 lg:py-28">
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
                  Temple Suite Phase 3A
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-primary-foreground text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                  Turn devotee growth into a repeatable temple capability.
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/70 text-pretty">
                  Start with one disciplined pilot. Build the framework,
                  workflows and dashboards that can serve temples worldwide.
                </p>
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button asChild variant="brand" size="lg" className="w-full sm:w-auto">
                    <Link href="/contact?type=Devotee+Growth+Platform+Pilot">
                      Plan a pilot
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="w-full border border-white/15 bg-white/10 text-primary-foreground shadow-soft hover:bg-white/15 sm:w-auto"
                  >
                    <Link href="/temple-suite">View Temple Suite</Link>
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
