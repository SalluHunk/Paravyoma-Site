import type { Metadata } from "next";
import {
  Shield,
  Target,
  Gem,
  Handshake,
  CheckCircle2,
  Quote,
} from "lucide-react";

import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { ContactCta } from "@/components/sections/contact-cta";

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
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <span className="eyebrow">From the founder</span>
              <div className="relative mt-8 rounded-2xl border border-brand/20 bg-card p-8 shadow-soft lg:p-12">
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
                  {/* Placeholder — replace with actual founder photo/name */}
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-lg font-semibold text-brand">
                    P
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      [Founder Name] {/* TODO: Replace with actual name */}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Founder &amp; Principal, Paravyoma Technologies
                    </p>
                  </div>
                </footer>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <ContactCta />
    </>
  );
}
