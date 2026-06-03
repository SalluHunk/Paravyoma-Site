import * as React from "react";
import Link from "next/link";
import { Building2, HeartHandshake, Landmark, GraduationCap } from "lucide-react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const industries = [
  {
    icon: Building2,
    title: "Business",
    description:
      "SMEs and growing companies modernising operations and scaling with confidence.",
    href: "/industries#smes",
  },
  {
    icon: HeartHandshake,
    title: "Nonprofits",
    description:
      "Mission-driven organizations doing more with lean resources and better systems.",
    href: "/industries#nonprofits",
  },
  {
    icon: Landmark,
    title: "Temples",
    description:
      "Spiritual institutions seeking a dignified presence and streamlined administration.",
    href: "/industries#temples",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Schools and learning organizations improving engagement and operational efficiency.",
    href: "/industries#education",
  },
];

export function Industries() {
  return (
    <Section id="industries" surface>
      <SectionHeading
        eyebrow="Industries"
        title="Trusted across the organizations that shape communities"
        description="We adapt our approach to your sector, scale and mission — from fast-moving businesses to institutions built to last."
        align="center"
        className="mx-auto"
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry, i) => (
          <Reveal key={industry.title} delay={i * 80}>
            <Link href={industry.href} className="block h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-card">
                <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-surface text-primary transition-colors duration-300 group-hover:border-brand/30 group-hover:bg-brand/10 group-hover:text-brand">
                  <industry.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-foreground">
                  {industry.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {industry.description}
                </p>
              </article>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
