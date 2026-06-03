import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/lib/case-studies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  className?: string;
}

export function CaseStudyCard({ caseStudy, className }: CaseStudyCardProps) {
  const publishedYear = new Date(caseStudy.publishedAt).getFullYear();

  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-border bg-card shadow-soft",
        "transition-all duration-300 hover:shadow-lift hover:-translate-y-0.5",
        className
      )}
    >
      {/* Cover image — placeholder gradient until CMS images are available */}
      <div className="relative h-48 overflow-hidden rounded-t-2xl bg-gradient-to-br from-primary/80 to-primary">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"
        >
          <div className="absolute inset-0 bg-grid-slate bg-[size:32px_32px]" />
        </div>
        <div className="absolute inset-0 flex items-end p-6">
          <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand/20 px-3 py-1 text-xs font-semibold text-brand backdrop-blur-sm">
            {caseStudy.industry}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <h3 className="font-display text-base font-semibold leading-snug tracking-tight text-foreground group-hover:text-brand transition-colors duration-200 text-pretty">
          {caseStudy.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty line-clamp-3">
          {caseStudy.tagline}
        </p>

        {/* Services */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {caseStudy.services.map((service) => (
            <span
              key={service}
              className="inline-flex items-center rounded-md border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {service}
            </span>
          ))}
        </div>

        {/* Meta row */}
        <div className="mt-5 flex items-center justify-between border-t border-border pt-5">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5" aria-hidden="true" />
              {caseStudy.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="size-3.5" aria-hidden="true" />
              {publishedYear}
            </span>
          </div>
          <span className="flex items-center gap-1 text-xs font-semibold text-brand opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Read more
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
