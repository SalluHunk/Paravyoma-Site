import * as React from "react";
import { ArrowRight, Quote } from "lucide-react";

import {
  credibilityIndicators,
  successStoryPrompts,
  testimonials,
  trustPillars,
  trustStats,
} from "@/lib/trust";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function Credibility() {
  return (
    <Section id="credibility" surface>
      <SectionHeading
        eyebrow="Proof and credibility"
        title="Evidence that Paravyoma can handle serious operational systems."
        description="Credibility comes from visible outcomes, industry familiarity, founder-led accountability and proof that the system will keep working after launch."
        align="center"
        className="mx-auto"
      />

      <Reveal>
        <div className="mt-14 overflow-hidden rounded-2xl bg-primary shadow-lift">
          <dl className="grid grid-cols-2 divide-x divide-y divide-primary-foreground/10 lg:grid-cols-4 lg:divide-y-0">
            {trustStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center px-6 py-10 text-center"
              >
                <dt className="order-2 mt-2 text-sm font-medium text-primary-foreground/60">
                  {stat.label}
                </dt>
                <dd className="order-1 font-display text-4xl font-bold tracking-tight text-brand sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {testimonials.home.map((testimonial, i) => (
          <Reveal key={testimonial.role} delay={i * 80}>
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-card">
              <Quote className="size-5 text-brand" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground text-pretty">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">
                  {testimonial.role}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {testimonial.organization}
                </p>
                <p className="mt-3 w-fit rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-[11px] font-semibold text-brand">
                  {testimonial.outcome}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid gap-4 lg:grid-cols-4">
        {credibilityIndicators.map((item, i) => (
          <Reveal key={item.label} delay={(i % 4) * 70}>
            <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <item.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-foreground">
                {item.label}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.value}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <div>
            <span className="eyebrow">Success patterns</span>
            <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground text-balance">
              Proof that reads like implementation evidence, not marketing copy.
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">
              Strong trust stories show the operating context, the risk in the
              old process, the system designed and the measurable change after
              adoption.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {successStoryPrompts.map((story, i) => (
            <Reveal key={story.title} delay={i * 90}>
              <article className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                  Success story
                </p>
                <h4 className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground">
                  {story.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {story.context}
                </p>
                <div className="mt-5 flex items-start gap-3 rounded-xl border border-brand/20 bg-brand/5 p-4">
                  <ArrowRight
                    className="mt-0.5 size-4 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-medium leading-relaxed text-foreground">
                    {story.result}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <SectionHeading
          eyebrow="Why organizations trust Paravyoma"
          title="Systems built with accountability from first conversation to adoption."
          description="The trust message is deliberately practical: fewer claims, more operating discipline."
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustPillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={(i % 3) * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                  <pillar.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {pillar.description}
                </p>
                <div
                  className="mt-6 h-0.5 w-8 rounded-full bg-brand/30"
                  aria-hidden="true"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
