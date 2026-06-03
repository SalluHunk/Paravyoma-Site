import Link from "next/link";
import { ArrowRight, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CaseStudy } from "@/lib/case-studies";

interface FeaturedCaseStudyProps {
  caseStudy: CaseStudy;
}

export function FeaturedCaseStudy({ caseStudy }: FeaturedCaseStudyProps) {
  const topMetrics = caseStudy.results.metrics.slice(0, 3);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-brand/20 bg-primary shadow-lift">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-brand/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
      >
        <div className="absolute inset-0 bg-grid-slate bg-[size:40px_40px] invert" />
      </div>

      <div className="relative grid gap-0 lg:grid-cols-[1fr_auto]">
        {/* Content */}
        <div className="p-8 sm:p-10 lg:p-12">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/20 px-3 py-1 text-xs font-semibold text-brand">
              <Star className="size-3 fill-current" aria-hidden="true" />
              Featured Case Study
            </span>
            <span className="text-xs text-primary-foreground/50">
              {caseStudy.industry}
            </span>
          </div>

          <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-primary-foreground text-pretty sm:text-3xl lg:text-[2rem] lg:leading-[1.2]">
            {caseStudy.title}
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-primary-foreground/70 text-pretty">
            {caseStudy.summary}
          </p>

          <div className="mt-4 flex items-center gap-4 text-sm text-primary-foreground/50">
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5" aria-hidden="true" />
              {caseStudy.duration}
            </span>
            <span>·</span>
            <span>{caseStudy.client}</span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {caseStudy.services.map((service) => (
              <span
                key={service}
                className="inline-flex items-center rounded-md border border-white/10 bg-white/10 px-2.5 py-1 text-xs font-medium text-primary-foreground/80"
              >
                {service}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <Button asChild variant="brand" size="lg">
              <Link href={`/case-studies/${caseStudy.slug}`}>
                Read full case study
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Metrics panel */}
        <div className="flex flex-row gap-px border-t border-white/10 lg:flex-col lg:border-l lg:border-t-0">
          {topMetrics.map((metric, i) => (
            <div
              key={i}
              className="flex flex-1 flex-col items-center justify-center p-6 text-center lg:items-start lg:text-left lg:p-8"
            >
              <span className="font-display text-3xl font-bold tracking-tight text-brand lg:text-4xl">
                {metric.value}
              </span>
              <span className="mt-1.5 text-xs leading-snug text-primary-foreground/60 text-pretty max-w-[140px]">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
