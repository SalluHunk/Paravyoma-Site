import * as React from "react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const steps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We learn your business, map the current state and pinpoint where technology will move the needle most.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We shape the solution and roadmap — prioritised by impact, feasibility and your real-world constraints.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "A focused team delivers with AI-assisted speed and rigorous quality, keeping you in the loop throughout.",
  },
  {
    step: "04",
    title: "Optimize",
    description:
      "We measure, refine and harden the system so it keeps delivering as your organization grows.",
  },
];

export function Process() {
  return (
    <Section id="process">
      <SectionHeading
        eyebrow="Process"
        title="A clear path from intent to measurable outcome"
        description="A disciplined process that keeps strategy and execution aligned at every step — so nothing gets lost between the plan and the result."
        align="center"
        className="mx-auto"
      />

      <ol className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((item, i) => (
          <Reveal as="li" key={item.step} delay={i * 90}>
            <div className="relative">
              <div className="flex items-center gap-4">
                <span className="font-display text-sm font-semibold text-brand">
                  {item.step}
                </span>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted-foreground text-pretty">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
