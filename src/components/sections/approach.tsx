import * as React from "react";
import { Compass, Cpu, Brain, ShieldCheck } from "lucide-react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const pillars = [
  {
    icon: Compass,
    title: "Human-led strategy",
    description:
      "Senior people own the thinking. We start with your business goals, constraints and context — then decide what's actually worth building.",
  },
  {
    icon: Cpu,
    title: "AI-assisted execution",
    description:
      "Modern tooling and AI compress timelines and raise quality, letting a focused team ship more, faster, without cutting corners.",
  },
  {
    icon: Brain,
    title: "Judgement over automation",
    description:
      "Automation handles the repeatable. Experienced practitioners handle the decisions that carry real consequences.",
  },
  {
    icon: ShieldCheck,
    title: "Accountable delivery",
    description:
      "Clear ownership, transparent progress and outcomes you can measure. No black boxes, no hand-waving.",
  },
];

export function Approach() {
  return (
    <Section id="why" surface>
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Why Paravyoma"
            title={
              <>
                AI-assisted execution.
                <br />
                Human-led strategy.
              </>
            }
            description="Most partners pick one and compromise the other. We pair seasoned judgement with modern tooling — so you get thoughtful decisions and rapid delivery, without trading either away."
          />
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-card sm:grid-cols-2">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={(i % 2) * 90}>
              <div className="flex h-full flex-col bg-card p-7">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                  <pillar.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
