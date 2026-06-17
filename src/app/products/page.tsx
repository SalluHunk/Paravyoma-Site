import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Landmark,
  LayoutDashboard,
  Users,
  FlaskConical,
  CheckCircle2,
  ArrowRight,
  ArrowDown,
  Microscope,
  GitBranch,
  Cpu,
  Rocket,
  Lightbulb,
  ScanSearch,
  PencilRuler,
  Layers,
  Send,
  Sparkles,
  Clock,
  Bell,
} from "lucide-react";

import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ProductNewsletter } from "@/components/products/product-newsletter";

export const metadata: Metadata = {
  title: "Products & Innovation Lab",
  description:
    "Purpose-built SaaS products emerging from real operational challenges. Temple Suite, Operations Hub, and Community Platform — each born from recurring patterns across Paravyoma client engagements.",
  alternates: { canonical: `${siteConfig.url}/products` },
  openGraph: {
    title: `Products & Innovation Lab — ${siteConfig.name}`,
    description:
      "Three products in development. Each one started as a client problem we solved one too many times.",
    url: `${siteConfig.url}/products`,
  },
};

// ── Stage badge colours ───────────────────────────────────────────────────────
type Stage = "Research" | "Validation" | "Development" | "Launch";

const stageMeta: Record<
  Stage,
  { label: string; className: string; dotClass: string }
> = {
  Research: {
    label: "Research",
    className:
      "bg-slate-500/10 text-slate-500 border border-slate-500/20 dark:bg-slate-400/10 dark:text-slate-400",
    dotClass: "bg-slate-400",
  },
  Validation: {
    label: "Validation",
    className:
      "bg-amber-500/10 text-amber-600 border border-amber-500/20 dark:text-amber-400",
    dotClass: "bg-amber-400",
  },
  Development: {
    label: "Development",
    className: "bg-primary/10 text-primary border border-primary/20",
    dotClass: "bg-primary",
  },
  Launch: {
    label: "Live",
    className: "bg-brand/10 text-brand border border-brand/20",
    dotClass: "bg-brand",
  },
};

// ── Products ──────────────────────────────────────────────────────────────────
const products = [
  {
    icon: Landmark,
    name: "Temple Suite",
    href: "/temple-suite",
    tagline:
      "Specialized operations platform for temples and spiritual organizations.",
    description:
      "Paravyoma's flagship platform initiative for spiritual organizations: donation management, seva scheduling, volunteer coordination, events, inventory, book distribution, community engagement and trustee visibility in one purpose-built system.",
    capabilities: [
      "Donation, seva, and puja management",
      "Volunteer scheduling and event coordination",
      "Inventory, book distribution, analytics and community engagement",
    ],
    stage: "Validation" as Stage,
    stageNote: "Being tested with active temple partners",
    accentClass: "from-amber-500/5 to-orange-500/5",
    iconBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    icon: LayoutDashboard,
    name: "Operations Hub",
    tagline: "Unified operations dashboard for multi-location businesses.",
    description:
      "Mid-market businesses running across multiple locations spend hours stitching together reports from separate systems. Operations Hub gives operations leaders one live view — across locations, teams, and KPIs — without rebuilding their entire technology stack.",
    capabilities: [
      "Multi-location performance monitoring",
      "Automated reporting, alerts, and anomaly detection",
      "Native integrations with CRMs, ERPs, and point-of-sale systems",
    ],
    stage: "Development" as Stage,
    stageNote: "Core architecture in active development",
    accentClass: "from-blue-500/5 to-indigo-500/5",
    iconBg: "bg-primary/10 text-primary",
  },
  {
    icon: Users,
    name: "Community Platform",
    tagline:
      "Engagement and communication platform for local communities and associations.",
    description:
      "Built for organisations that have outgrown WhatsApp groups but don't need enterprise software — neighbourhood groups, professional associations, cultural societies, and alumni networks. A focused platform for structured community engagement without the noise.",
    capabilities: [
      "Member directory, profiles, and private communication",
      "Event coordination, RSVPs, and attendance tracking",
      "Announcements, newsletters, and moderated group discussion",
    ],
    stage: "Research" as Stage,
    stageNote: "Problem validation and user interviews underway",
    accentClass: "from-violet-500/5 to-purple-500/5",
    iconBg: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
] as const;

// ── Roadmap stages ────────────────────────────────────────────────────────────
const roadmapStages = [
  {
    icon: Microscope,
    stage: "Research",
    description:
      "Problem discovery, market sizing, and user interviews. We confirm the pain is real, widespread, and worth building a product around — not just a bespoke solution.",
    products: ["Community Platform"],
  },
  {
    icon: FlaskConical,
    stage: "Validation",
    description:
      "Prototype testing with select clients. We build the narrowest useful slice and let real users break it — iterating fast before committing to full product architecture.",
    products: ["Temple Suite"],
  },
  {
    icon: GitBranch,
    stage: "Development",
    description:
      "Core product build and alpha testing. We move from client-specific solution to multi-tenant architecture, with structured feedback loops at every milestone.",
    products: ["Operations Hub"],
  },
  {
    icon: Rocket,
    stage: "Launch",
    description:
      "Controlled public release. Existing clients and early-access registrants get first access. Broader availability follows measured, milestone-gated growth.",
    products: [] as string[],
  },
];

// ── Innovation philosophy steps ───────────────────────────────────────────────
const philosophySteps = [
  {
    icon: ScanSearch,
    step: "01",
    title: "Pattern Recognition",
    description:
      "We notice a recurring challenge across multiple client engagements — one we've solved three, five, ten times — and ask whether this belongs in a product, not a proposal.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Problem Validation",
    description:
      "We verify the problem is widespread enough to warrant a product and distinct enough that no existing tool solves it well. Most ideas die here — and should.",
  },
  {
    icon: PencilRuler,
    step: "03",
    title: "Internal Prototype",
    description:
      "We build the narrowest useful slice and deploy it within active client environments. Real usage surfaces what matters before we commit to architecture.",
  },
  {
    icon: Layers,
    step: "04",
    title: "Product Architecture",
    description:
      "We re-engineer from a client-specific solution to a proper multi-tenant product — security, scalability, and configurability built in from the ground up.",
  },
  {
    icon: Send,
    step: "05",
    title: "Controlled Launch",
    description:
      "Existing clients and early-access registrants get priority access. We grow deliberately — measuring outcomes before expanding availability.",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* 1 — Hero */}
      <PageHeader
        eyebrow="Innovation Lab"
        title="Purpose-built products born from real operational challenges."
        description="Every product we build started as a client problem we solved one too many times. When a solution proves itself in the field — repeatedly — we turn it into a product. Three are in motion now."
      >
        <div className="flex flex-col items-start gap-3 sm:flex-row">
          <Button asChild variant="brand" size="lg">
            <Link href="#early-access">
              <Bell className="size-4" />
              Request Early Access
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="#initiatives">
              See current initiatives
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </PageHeader>

      {/* 2 — Current Initiatives */}
      <Section id="initiatives" surface>
        <SectionHeading
          eyebrow="Current initiatives"
          title="Three products in motion."
          description="Each at a different stage of development. None launched yet — but each grounded in validated, real-world demand."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {products.map((product, i) => {
            const badge = stageMeta[product.stage];
            return (
              <Reveal key={product.name} delay={i * 90}>
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow duration-300 hover:shadow-lift">
                  {/* top accent gradient */}
                  <div
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-0 top-0 h-32 bg-gradient-to-b opacity-60",
                      product.accentClass
                    )}
                  />

                  <div className="relative flex flex-1 flex-col p-7 lg:p-8">
                    {/* Stage badge + coming soon */}
                    <div className="mb-5 flex items-center justify-between">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider",
                          badge.className
                        )}
                      >
                        <span
                          className={cn("size-1.5 rounded-full", badge.dotClass)}
                          aria-hidden="true"
                        />
                        {badge.label}
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground">
                        <Clock className="size-3" aria-hidden="true" />
                        Coming soon
                      </span>
                    </div>

                    {/* Icon + name */}
                    <div className="flex items-center gap-4">
                      <span
                        className={cn(
                          "inline-flex size-12 shrink-0 items-center justify-center rounded-xl",
                          product.iconBg
                        )}
                      >
                        <product.icon className="size-6" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                          {product.name}
                        </h3>
                        <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                          {product.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {product.description}
                    </p>

                    {/* Capabilities */}
                    <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                      {product.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className="mt-0.5 size-4 shrink-0 text-brand"
                            aria-hidden="true"
                          />
                          <span className="text-sm leading-snug text-foreground">
                            {cap}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Stage note */}
                    <div className="mt-5 flex items-center gap-2 rounded-lg bg-surface px-3 py-2.5">
                      <Cpu
                        className="size-3.5 shrink-0 text-muted-foreground"
                        aria-hidden="true"
                      />
                      <span className="text-[11px] text-muted-foreground">
                        {product.stageNote}
                      </span>
                    </div>

                    {"href" in product ? (
                      <Button
                        asChild
                        variant="secondary"
                        size="sm"
                        className="mt-5 w-fit"
                      >
                        <Link href={product.href}>
                          Explore Temple Suite
                          <ArrowRight className="size-4" />
                        </Link>
                      </Button>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* 3 — Roadmap Timeline */}
      <Section id="roadmap">
        <SectionHeading
          eyebrow="Product roadmap"
          title="Every product starts with a real problem."
          description="Our stage-gate framework ensures no product ships before it's been validated and tested with real users. No vaporware. No premature launches."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14">
          <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:gap-2">
            {roadmapStages.map((s, i) => (
              <React.Fragment key={s.stage}>
                <Reveal delay={i * 90}>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                        <s.icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        Stage {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-sm font-semibold tracking-tight text-foreground">
                      {s.stage}
                    </h3>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground text-pretty">
                      {s.description}
                    </p>

                    <div className="mt-4 space-y-1.5 border-t border-border pt-4">
                      {s.products.length > 0 ? (
                        s.products.map((p) => (
                          <span
                            key={p}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-brand/10 px-2.5 py-1 text-[11px] font-semibold text-brand"
                          >
                            <span
                              className="size-1.5 rounded-full bg-brand"
                              aria-hidden="true"
                            />
                            {p}
                          </span>
                        ))
                      ) : (
                        <span className="text-[11px] italic text-muted-foreground/50">
                          No products here yet
                        </span>
                      )}
                    </div>
                  </div>
                </Reveal>

                {i < roadmapStages.length - 1 ? (
                  <div
                    className="flex items-center justify-center text-brand/40"
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
                  Products evolve from services engagements — not whiteboards.
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  Existing Paravyoma clients who have worked with us in the relevant domain receive
                  priority early access — often before a product reaches Validation stage. If
                  you&apos;re already a client and want to be considered, reach out directly.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 4 — Innovation Philosophy */}
      <Section id="philosophy" surface>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <span className="eyebrow">How we build</span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl lg:leading-[1.1]">
                Client problems become product opportunities.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
                We don&apos;t build products in a lab and then look for a market. Every
                product on our roadmap started as a problem we encountered — and solved —
                in the field. The question we ask is whether a solution we&apos;ve built
                once deserves to exist permanently.
              </p>
              <div className="mt-8">
                <Button asChild variant="secondary" size="lg">
                  <Link href="/case-studies">
                    See field work in practice
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-0">
            {philosophySteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 70}>
                <div
                  className={cn(
                    "flex gap-5 py-6",
                    i < philosophySteps.length - 1 && "border-b border-border"
                  )}
                >
                  <div className="flex shrink-0 flex-col items-center">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                      <s.icon className="size-5" aria-hidden="true" />
                    </span>
                    {i < philosophySteps.length - 1 && (
                      <div
                        className="mt-3 h-full w-px bg-border"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="min-w-0 flex-1 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] font-semibold text-brand">
                        {s.step}
                      </span>
                      <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                        {s.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {s.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* 5 — Early Access Newsletter */}
      <Section id="early-access" bleed className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 shadow-lift sm:px-12 lg:px-16 lg:py-20">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand/20 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-violet-500/10 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
              >
                <div className="absolute inset-0 bg-grid-slate bg-[size:40px_40px] invert" />
              </div>

              <div className="relative mx-auto max-w-2xl text-center">
                <span className="eyebrow justify-center text-brand">
                  Early access
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-primary-foreground text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                  Be first in the room when these ship.
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/70 text-pretty">
                  We share product updates, early access invitations, and the thinking
                  behind what we&apos;re building — exclusively with this list. No marketing
                  noise. Existing Paravyoma clients receive priority consideration.
                </p>
              </div>

              <div className="relative mx-auto mt-10 max-w-2xl">
                <ProductNewsletter />
                <p className="mt-4 text-center text-xs text-primary-foreground/40">
                  No spam. Unsubscribe any time. Priority early access for existing clients.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
