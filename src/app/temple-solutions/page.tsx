import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  HandHeart,
  HandCoins,
  Package,
  CalendarCheck,
  BookOpen,
  MessageCircle,
  ClipboardList,
  Landmark,
  Users,
  PieChart,
  GraduationCap,
  FileSpreadsheet,
  Database,
  Zap,
  BarChart3,
  HeartHandshake,
  Sparkles,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
} from "lucide-react";

import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CONSULT_HREF = "/contact?type=Temple+Technology+Consultation";

export const metadata: Metadata = {
  title: "Temple Solutions",
  description:
    "Purpose-built technology for modern temples and spiritual organizations. Volunteer management, donation tracking, event registration, member engagement and reporting — designed around how temples actually operate.",
  alternates: { canonical: `${siteConfig.url}/temple-solutions` },
  openGraph: {
    title: `Temple Solutions — ${siteConfig.name}`,
    description:
      "Technology that supports service, community and growth. Purpose-built systems for modern temples and spiritual organizations.",
    url: `${siteConfig.url}/temple-solutions`,
  },
};

// ── 2 — Challenges We Solve ───────────────────────────────────────────────────
const challenges = [
  {
    icon: HandHeart,
    title: "Volunteer Management",
    description:
      "Coordinate seva schedules, roles and availability without endless phone calls and paper rosters.",
  },
  {
    icon: HandCoins,
    title: "Donation Tracking",
    description:
      "Record every contribution accurately — with receipts, donor history and transparent reporting.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Track prasadam, pooja items, books and supplies so nothing runs out at the moment it's needed.",
  },
  {
    icon: CalendarCheck,
    title: "Event Registration",
    description:
      "Let devotees register for festivals, programs and classes online — with capacity and confirmations handled for you.",
  },
  {
    icon: BookOpen,
    title: "Book Distribution",
    description:
      "Manage spiritual literature distribution, stock and outreach with clear records at every step.",
  },
  {
    icon: MessageCircle,
    title: "Member Engagement",
    description:
      "Stay connected with your community through reminders, updates and meaningful, timely communication.",
  },
  {
    icon: ClipboardList,
    title: "Reporting & Administration",
    description:
      "Replace scattered spreadsheets with clear dashboards trustees and management can rely on.",
  },
];

// ── 3 — Solutions (suites) ────────────────────────────────────────────────────
const suites = [
  {
    icon: Landmark,
    name: "Temple Operations Suite",
    tagline: "Run the day-to-day with calm and clarity.",
    features: [
      "Volunteer & seva scheduling",
      "Inventory and supplies tracking",
      "Event and program registration",
      "Daily operations dashboard",
    ],
  },
  {
    icon: Users,
    name: "Community Engagement Suite",
    tagline: "Keep your community close and connected.",
    features: [
      "Member directory & profiles",
      "Announcements and reminders",
      "Festival & program communication",
      "Outreach and follow-up workflows",
    ],
  },
  {
    icon: PieChart,
    name: "Donation & Reporting Suite",
    tagline: "Every contribution recorded, every rupee accountable.",
    features: [
      "Donation tracking & receipts",
      "Donor history and insights",
      "Transparent financial reporting",
      "Trustee-ready summaries",
    ],
  },
  {
    icon: GraduationCap,
    name: "Education & Learning Suite",
    tagline: "Support teaching, study and spiritual growth.",
    features: [
      "Class & course registration",
      "Book distribution management",
      "Learning material library",
      "Student progress tracking",
    ],
  },
];

// ── 4 — Digital Transformation roadmap ────────────────────────────────────────
const roadmap = [
  {
    icon: FileSpreadsheet,
    stage: "Today",
    title: "Paper & Spreadsheets",
    description:
      "Records scattered across registers, notebooks and disconnected files.",
    variant: "muted" as const,
  },
  {
    icon: Database,
    stage: "Step 1",
    title: "Centralized Systems",
    description:
      "One reliable source of truth for people, donations and operations.",
    variant: "primary" as const,
  },
  {
    icon: Zap,
    stage: "Step 2",
    title: "Automation",
    description:
      "Routine tasks, reminders and receipts handled automatically.",
    variant: "primary" as const,
  },
  {
    icon: BarChart3,
    stage: "Outcome",
    title: "Community Insights",
    description:
      "Clear visibility that helps you serve and grow with confidence.",
    variant: "brand" as const,
  },
];

// ── 5 — Why Paravyoma ─────────────────────────────────────────────────────────
const whyPoints = [
  {
    icon: Landmark,
    title: "Deep understanding of temple operations",
    description:
      "We don't force generic business software onto sacred work. Our systems are shaped around how temples actually run — seva, festivals, donations, prasadam and community — so the technology fits the way you already serve.",
  },
  {
    icon: HeartHandshake,
    title: "A technology partner, not a software vendor",
    description:
      "We're not here to sell a licence and disappear. We stay involved — listening, refining and supporting your team long after go-live — because the goal is a thriving institution, not a closed ticket.",
  },
];

export default function TempleSolutionsPage() {
  return (
    <>
      {/* 1 — Hero */}
      <PageHeader
        eyebrow="Temple Solutions"
        title="Technology that supports service, community and growth."
        description="Purpose-built systems for modern temples and spiritual organizations — designed around the way you serve, not the way software usually works."
      >
        <Button asChild variant="brand" size="lg">
          <Link href={CONSULT_HREF}>
            <CalendarCheck className="size-4" />
            Book a Temple Technology Consultation
          </Link>
        </Button>
      </PageHeader>

      {/* 2 — Challenges We Solve */}
      <Section id="challenges" surface>
        <SectionHeading
          eyebrow="Challenges we solve"
          title="The everyday friction temples know too well."
          description="Most spiritual organizations run on dedication and goodwill — held back by manual processes that drain time better spent on service. These are the gaps we close."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-card sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((item, i) => (
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

      {/* 3 — Solutions (suites) */}
      <Section id="suites">
        <SectionHeading
          eyebrow="Our solutions"
          title="Four suites that cover how a temple really runs."
          description="Start with the one that solves your most pressing need today — and grow into a connected system as you're ready. Every suite works on its own and better together."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {suites.map((suite, i) => (
            <Reveal key={suite.name} delay={(i % 2) * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft transition-shadow duration-300 hover:shadow-lift lg:p-10">
                <div className="flex items-center gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10">
                    <suite.icon className="size-6 text-brand" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-sm font-semibold tracking-widest text-brand/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {suite.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {suite.tagline}
                </p>

                <ul className="mt-6 space-y-3 border-t border-border pt-6">
                  {suite.features.map((feature) => (
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

      {/* 4 — Digital Transformation For Temples */}
      <Section id="transformation" surface>
        <SectionHeading
          eyebrow="Digital transformation for temples"
          title="From paper registers to community insight."
          description="You don't have to change everything overnight. We move you forward one steady step at a time — meeting your team where they are."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14">
          <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:gap-2">
            {roadmap.map((node, i) => (
              <React.Fragment key={node.title}>
                <Reveal delay={i * 90}>
                  <div
                    className={cn(
                      "flex h-full flex-col rounded-2xl border p-7 text-left shadow-soft",
                      node.variant === "muted" && "border-border bg-card",
                      node.variant === "primary" && "border-border bg-card",
                      node.variant === "brand" &&
                        "border-brand/20 bg-primary text-primary-foreground"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={cn(
                          "inline-flex size-11 items-center justify-center rounded-xl shadow-soft",
                          node.variant === "muted" &&
                            "bg-surface text-muted-foreground",
                          node.variant === "primary" &&
                            "bg-primary text-primary-foreground",
                          node.variant === "brand" &&
                            "bg-brand text-brand-foreground"
                        )}
                      >
                        <node.icon className="size-5" aria-hidden="true" />
                      </span>
                      <span
                        className={cn(
                          "text-[11px] font-semibold uppercase tracking-[0.14em]",
                          node.variant === "brand"
                            ? "text-brand"
                            : "text-muted-foreground"
                        )}
                      >
                        {node.stage}
                      </span>
                    </div>
                    <h3
                      className={cn(
                        "mt-5 font-display text-base font-semibold tracking-tight",
                        node.variant === "brand"
                          ? "text-primary-foreground"
                          : "text-foreground"
                      )}
                    >
                      {node.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-2 text-sm leading-relaxed text-pretty",
                        node.variant === "brand"
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      )}
                    >
                      {node.description}
                    </p>
                  </div>
                </Reveal>

                {/* Connector — arrow between nodes (not after the last) */}
                {i < roadmap.length - 1 ? (
                  <div
                    className="flex items-center justify-center text-brand/50"
                    aria-hidden="true"
                  >
                    <ArrowRight className="hidden size-6 lg:block" />
                    <ArrowDown className="size-6 lg:hidden" />
                  </div>
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Section>

      {/* 5 — Why Paravyoma */}
      <Section id="why-temple">
        <SectionHeading
          eyebrow="Why Paravyoma"
          title="Built by people who respect what a temple is."
          description="Sacred institutions deserve technology delivered with the same care they bring to service."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {whyPoints.map((point, i) => (
            <Reveal key={point.title} delay={i * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft lg:p-10">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                  <point.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  {point.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground text-pretty">
                  {point.description}
                </p>
                <div
                  className="mt-6 h-0.5 w-10 rounded-full bg-brand/30"
                  aria-hidden="true"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 6 — Future Vision */}
      <Section id="vision" surface>
        <Reveal>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-card p-10 text-center shadow-lift sm:p-14 lg:p-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-brand/10 blur-3xl"
            />
            <span className="relative inline-flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Sparkles className="size-6" aria-hidden="true" />
            </span>
            <span className="eyebrow relative mt-6 justify-center">
              Future vision
            </span>
            <h2 className="relative mt-3 font-display text-2xl font-semibold tracking-tight text-foreground text-balance sm:text-3xl lg:text-4xl lg:leading-[1.15]">
              Building the digital infrastructure for modern spiritual
              organizations.
            </h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              We see a future where every temple — large or small — runs on
              systems as thoughtful as the service they provide. Where trustees
              have clarity, volunteers have ease, and devotees feel closer than
              ever. We&apos;re building toward that, one institution at a time.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 7 — CTA */}
      <Section id="temple-cta" bleed className="py-20 lg:py-28">
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
                  Let&apos;s begin
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-primary-foreground text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                  Bring modern systems to your temple — with care.
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/70 text-pretty">
                  Tell us how your organization runs today. We&apos;ll listen,
                  understand your service, and show you a clear, respectful path
                  forward — at your pace.
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button
                    asChild
                    variant="brand"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <Link href={CONSULT_HREF}>
                      <CalendarCheck className="size-4" />
                      Book a Temple Technology Consultation
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
