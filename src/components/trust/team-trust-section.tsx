import * as React from "react";
import { ArrowRight, Quote } from "lucide-react";

import { teamExpertise, trustStats } from "@/lib/trust";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function TeamTrustSection() {
  return (
    <Section id="team-trust" surface>
      <SectionHeading
        eyebrow="Team and expertise"
        title="Founder-led strategy, specialist execution and accountable adoption."
        description="The team story is built around judgement, systems thinking and delivery discipline: the capabilities that matter when operations depend on the system after launch."
        align="center"
        className="mx-auto"
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft lg:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
              Founder profile
            </span>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground">
              Siddharth Gaur
            </h3>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">
              Founder &amp; CEO, Paravyoma Technologies
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">
              A practical systems consultant connecting business diagnosis,
              technology buildout and post-launch adoption into one accountable
              engagement.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-3">
              {trustStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-surface p-4"
                >
                  <dt className="text-xs font-medium text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold tracking-tight text-brand">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 rounded-xl border border-brand/20 bg-brand/5 p-5">
              <Quote className="size-4 text-brand" aria-hidden="true" />
              <p className="mt-3 text-sm leading-relaxed text-foreground">
                &ldquo;The right questions at the start save everyone from the
                wrong answers at the end.&rdquo;
              </p>
            </div>
          </article>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {teamExpertise.map((area, i) => (
            <Reveal key={area.title} delay={(i % 2) * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                  <area.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-foreground">
                  {area.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {area.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <ArrowRight
                        className="mt-1 size-3.5 shrink-0 text-brand"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
