import type { Metadata } from "next";
import Image from "next/image";
import {
  Shield,
  Target,
  Gem,
  Handshake,
  CheckCircle2,
  Quote,
  Building2,
  Sparkles,
  Landmark,
  Rocket,
} from "lucide-react";

import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { ContactCta } from "@/components/sections/contact-cta";
import { TeamTrustSection } from "@/components/trust/team-trust-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Paravyoma Technologies is a solutions and technology partner built on the principle that technology should produce measurable business outcomes — not just deliverables.",
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: `About — ${siteConfig.name}`,
    description:
      "AI-assisted execution. Human-led strategy. Learn who we are, what we believe, and how we work.",
    url: `${siteConfig.url}/about`,
  },
};

const values = [
  {
    icon: Target,
    label: "Outcomes over output",
    description:
      "We measure success by what changed in your business — not by lines of code shipped or hours billed.",
  },
  {
    icon: Gem,
    label: "Craftsmanship",
    description:
      "Every system we build is designed to last. We do not cut corners that come back as problems six months later.",
  },
  {
    icon: Shield,
    label: "Integrity",
    description:
      "We tell you what we actually think. If a project is not the right fit, or a better path exists, you will hear it from us first.",
  },
  {
    icon: Handshake,
    label: "True partnership",
    description:
      "We are invested in your success beyond the engagement. The relationships we value most are measured in years.",
  },
];

const differentiators = [
  "Outcome-first scoping — we define success metrics before writing a single line of code",
  "Senior judgement on every engagement — no bait-and-switch to junior execution",
  "Transparent delivery — you always know where the work stands and why",
  "Systems you own — no vendor lock-in, no opaque black boxes",
  "AI-accelerated without sacrificing human oversight and strategic clarity",
  "Long-term partners, not project vendors — we stay accountable after go-live",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Technology that earns its place in your business"
        description="We are a solutions and technology partner. Our work is measured not by what we build, but by what improves after we build it."
      />

      {/* Why we exist */}
      <Section id="why-we-exist">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <span className="eyebrow">Why we exist</span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
                Most technology spend produces software. Very little of it
                produces outcomes.
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Paravyoma did not start as a business plan. It started as a
                  pattern that kept repeating: organisations of every size —
                  enterprises, growing businesses, and even temples and
                  community institutions — investing in technology and
                  walking away with a working system that still left the real
                  problem untouched.
                </p>
                <p>
                  The deliverable was technically sound. The business outcome
                  it was supposed to produce never arrived. That gap is rarely
                  a coding failure — it is a failure to connect what gets
                  built to what the organisation actually needs to change.
                </p>
                <p>
                  We built Paravyoma to close that gap on purpose, on every
                  engagement, whether the client is a Fortune-scale enterprise
                  rolling out AI-assisted operations or a temple trying to
                  modernise how it serves its devotees.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section id="mission-vision" surface>
        <Container>
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="eyebrow justify-center">Foundation</span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
                What we believe and where we are headed
              </h2>
            </div>
          </Reveal>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {[
              {
                label: "Mission",
                statement:
                  "To help organisations of every size operate with the systems, automation, and strategic clarity that were once reserved for large enterprises — delivered with the care and accountability of a trusted partner.",
              },
              {
                label: "Vision",
                statement:
                  "A world where technology reliably serves strategy — where every business has access to well-built systems and thoughtful guidance, and where the gap between intent and execution is closed by intelligent, human-led work.",
              },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 100}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft">
                  <span className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">
                    {item.label}
                  </span>
                  <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                    {item.statement}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <TeamTrustSection />

      {/* Values */}
      <Section id="values">
        <Container>
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="eyebrow justify-center">Values</span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
                The principles behind every decision
              </h2>
            </div>
          </Reveal>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.label} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-brand/10">
                    <value.icon className="size-5 text-brand" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    {value.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Approach */}
      <Section id="approach" surface>
        <Container>
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <div className="mb-12 max-w-2xl">
                <span className="eyebrow">Approach</span>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
                  AI-assisted execution.{" "}
                  <span className="text-brand">Human-led strategy.</span>
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
                  We do not treat AI as a shortcut. We treat it as a force
                  multiplier — one that accelerates skilled work while keeping
                  judgement, accountability, and strategic direction firmly in
                  human hands.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-8 sm:grid-cols-2">
              {[
                {
                  heading: "What AI-assisted means in practice",
                  body: "Faster research, analysis, and prototyping. Automated quality checks. Accelerated delivery timelines. But every output is reviewed, refined, and owned by experienced practitioners — not generated and shipped.",
                },
                {
                  heading: "What human-led strategy means for you",
                  body: "Your engagement is guided by senior professionals who understand business context, not just technical requirements. We ask the questions that reveal the real problem before we write the first line of code.",
                },
              ].map((card, i) => (
                <Reveal key={card.heading} delay={i * 100}>
                  <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                    <h3 className="mb-3 font-semibold text-foreground">
                      {card.heading}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {card.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Long-term partnership philosophy */}
      <Section id="partnership">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <span className="eyebrow">Philosophy</span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
                We partner for the long run
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Most technology projects fail not because of bad code, but
                  because the vendor disappears after go-live. Systems drift.
                  Teams grow. Business needs evolve. And there is no one to
                  adapt alongside you.
                </p>
                <p>
                  Paravyoma is built differently. We design for longevity — in
                  both the systems we deliver and the relationships we form. Our
                  engagements do not end at handoff; they evolve as your
                  organisation does.
                </p>
                <p>
                  We take on fewer clients than we could, precisely because this
                  depth of involvement demands real investment. Every
                  organisation we work with has our full attention and our
                  genuine stake in their success.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Why clients choose Paravyoma */}
      <Section id="differentiators" surface>
        <Container>
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="eyebrow justify-center">Why Paravyoma</span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
                What makes the difference
              </h2>
            </div>
          </Reveal>
          <div className="mx-auto max-w-3xl">
            <ul className="space-y-4">
              {differentiators.map((item, i) => (
                <Reveal key={item} delay={i * 60}>
                  <li className="flex items-start gap-4 rounded-xl border border-border bg-card px-6 py-5 shadow-soft">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />
                    <span className="text-base text-foreground">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Founder message */}
      <Section id="founder">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="mx-auto mb-10 max-w-2xl text-center">
                <span className="eyebrow justify-center">
                  From the founder
                </span>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
                  The person behind the pattern
                </h2>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="grid gap-10 sm:grid-cols-[200px_1fr] sm:items-start">
                <div className="mx-auto w-40 shrink-0 overflow-hidden rounded-2xl border border-border shadow-soft sm:mx-0 sm:w-full">
                  <Image
                    src="/sid-ceo-bw.png"
                    alt="Siddharth Gaur, Founder & CEO of Paravyoma Technologies"
                    width={1024}
                    height={1536}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
                <div className="space-y-5 text-base leading-relaxed text-muted-foreground text-pretty">
                  <p>
                    Before Paravyoma, Siddharth spent his career on the inside
                    of exactly the gap this company now exists to close —
                    watching enterprise technology programs ship on schedule
                    and still fail to move the metrics they were funded to
                    move. The software was rarely the problem. The
                    translation between business intent and technical
                    execution was.
                  </p>
                  <p>
                    Paravyoma is his answer to that gap: a firm built to stay
                    accountable for outcomes, not just delivery — one where
                    senior judgement sits on every engagement, AI accelerates
                    the work without replacing the thinking, and the
                    relationship does not end at go-live.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="relative mt-10 rounded-2xl border border-brand/20 bg-card p-8 shadow-soft lg:p-12">
                <Quote
                  className="absolute right-8 top-8 size-8 text-brand/20 lg:right-12 lg:top-12"
                  aria-hidden="true"
                />
                <blockquote className="space-y-5 text-lg leading-relaxed text-muted-foreground text-pretty">
                  <p>
                    &ldquo;I started Paravyoma because I kept seeing the same
                    pattern: organisations spending real money on technology
                    projects that delivered software, but not outcomes. The code
                    worked. The business problem did not move.
                  </p>
                  <p>
                    The gap is almost never technical. It is strategic — a
                    failure to connect what the system does to what the
                    organisation actually needs. We built Paravyoma to close
                    that gap, deliberately and at every step.
                  </p>
                  <p>
                    If you work with us, you will notice we ask uncomfortable
                    questions early. That is intentional. The right questions at
                    the start save everyone from the wrong answers at the
                    end.&rdquo;
                  </p>
                </blockquote>
                <footer className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-lg font-semibold text-brand">
                    SG
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Siddharth Gaur
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Founder &amp; CEO, Paravyoma Technologies
                    </p>
                  </div>
                </footer>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Long-term ambition */}
      <Section id="ambition" surface>
        <Container>
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="eyebrow justify-center">
                Long-term ambition
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
                Where we are headed
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
                Paravyoma is not building toward being a larger version of a
                conventional IT services firm. We are building toward being
                the partner organisations turn to when technology decisions
                are too important to delegate to generic execution.
              </p>
            </div>
          </Reveal>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {[
              {
                icon: Building2,
                heading: "Enterprise technology, done with senior judgement",
                body: "We are scaling our capacity without scaling away the senior involvement that makes the work trustworthy — deepening our enterprise practice rather than diluting it.",
              },
              {
                icon: Sparkles,
                heading: "AI-assisted execution as the default, not the pitch",
                body: "AI already accelerates research, build, and quality assurance across our engagements. Our ambition is for that acceleration to keep compounding, always under human accountability.",
              },
              {
                icon: Landmark,
                heading: "Temple initiatives, taken as seriously as enterprise work",
                body: "Our work with temples and community institutions is not a side project — it is proof that operational excellence belongs everywhere, not only where the budgets are largest.",
              },
              {
                icon: Rocket,
                heading: "Product innovation born from real engagements",
                body: "Every product we build in our Innovation Lab starts as a pattern we solved for a client first. We intend to keep turning hard-won operational knowledge into reusable software.",
              },
            ].map((item, i) => (
              <Reveal key={item.heading} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-brand/10">
                    <item.icon className="size-5 text-brand" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    {item.heading}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <ContactCta />
    </>
  );
}
