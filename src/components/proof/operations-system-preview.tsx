import * as React from "react";
import { Activity, ArrowRight, CheckCircle2, Database, Network } from "lucide-react";

import { cn } from "@/lib/utils";

interface PreviewMetric {
  label: string;
  value: string;
  change?: string;
}

interface PreviewRecord {
  name: string;
  meta: string;
  status: string;
}

interface PreviewStep {
  label: string;
  detail: string;
  tone?: "muted" | "active" | "done";
}

interface OperationsSystemPreviewProps {
  eyebrow: string;
  title: string;
  description: string;
  modules: readonly string[];
  metrics: readonly PreviewMetric[];
  records: readonly PreviewRecord[];
  workflow: readonly PreviewStep[];
  integrations?: readonly string[];
  highlight?: string;
  className?: string;
}

export function OperationsSystemPreview({
  eyebrow,
  title,
  description,
  modules,
  metrics,
  records,
  workflow,
  integrations = [],
  highlight,
  className,
}: OperationsSystemPreviewProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl border border-border bg-card shadow-lift",
        className
      )}
    >
      <div className="border-b border-border bg-surface/80 px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-red-400/80" />
            <span className="size-2.5 rounded-full bg-amber-400/80" />
            <span className="size-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="hidden rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium text-muted-foreground sm:block">
            Paravyoma operations preview
          </div>
        </div>
      </div>

      <div className="grid min-h-[560px] lg:grid-cols-[230px_1fr]">
        <aside className="border-b border-border bg-primary p-5 text-primary-foreground lg:border-b-0 lg:border-r">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand text-brand-foreground shadow-soft">
              <Network className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                System
              </p>
              <p className="text-sm font-semibold">Connected workspace</p>
            </div>
          </div>

          <nav className="mt-8 space-y-1" aria-label="Preview modules">
            {modules.map((module, index) => (
              <div
                key={module}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
                  index === 0
                    ? "bg-white/10 text-primary-foreground"
                    : "text-primary-foreground/60"
                )}
              >
                <span
                  className={cn(
                    "size-1.5 rounded-full",
                    index === 0 ? "bg-brand" : "bg-primary-foreground/25"
                  )}
                  aria-hidden="true"
                />
                {module}
              </div>
            ))}
          </nav>

          {highlight ? (
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                Live insight
              </p>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                {highlight}
              </p>
            </div>
          ) : null}
        </aside>

        <div className="p-5 sm:p-6 lg:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                {eyebrow}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground text-balance">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                {description}
              </p>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1.5 text-xs font-semibold text-brand">
              <Activity className="size-3.5" aria-hidden="true" />
              Live operating view
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-border bg-background p-4 shadow-soft"
              >
                <p className="text-xs font-medium text-muted-foreground">
                  {metric.label}
                </p>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <p className="font-display text-2xl font-semibold tracking-tight text-foreground">
                    {metric.value}
                  </p>
                  {metric.change ? (
                    <span className="rounded-full bg-brand/10 px-2 py-1 text-[11px] font-semibold text-brand">
                      {metric.change}
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-border bg-background p-5 shadow-soft">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Active work queue
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Real records, owners and next actions in one place.
                  </p>
                </div>
                <Database className="size-5 text-brand" aria-hidden="true" />
              </div>

              <div className="mt-5 overflow-hidden rounded-xl border border-border">
                {records.map((record, index) => (
                  <div
                    key={record.name}
                    className={cn(
                      "grid gap-3 px-4 py-3 text-sm sm:grid-cols-[1fr_auto]",
                      index > 0 && "border-t border-border"
                    )}
                  >
                    <div>
                      <p className="font-medium text-foreground">{record.name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {record.meta}
                      </p>
                    </div>
                    <span className="h-fit rounded-full border border-brand/20 bg-brand/10 px-2.5 py-1 text-[11px] font-semibold text-brand">
                      {record.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background p-5 shadow-soft">
              <p className="text-sm font-semibold text-foreground">
                Workflow automation
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                The system moves routine work without losing oversight.
              </p>

              <div className="mt-5 space-y-3">
                {workflow.map((step, index) => (
                  <div key={step.label} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <span
                        className={cn(
                          "inline-flex size-8 items-center justify-center rounded-full border text-xs font-semibold",
                          step.tone === "done" &&
                            "border-brand/20 bg-brand text-brand-foreground",
                          step.tone === "active" &&
                            "border-brand/30 bg-brand/10 text-brand",
                          (!step.tone || step.tone === "muted") &&
                            "border-border bg-surface text-muted-foreground"
                        )}
                      >
                        {step.tone === "done" ? (
                          <CheckCircle2 className="size-4" aria-hidden="true" />
                        ) : (
                          index + 1
                        )}
                      </span>
                      {index < workflow.length - 1 ? (
                        <span className="h-8 w-px bg-border" aria-hidden="true" />
                      ) : null}
                    </div>
                    <div className="pb-3">
                      <p className="text-sm font-medium text-foreground">
                        {step.label}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {integrations.length > 0 ? (
            <div className="mt-6 rounded-2xl border border-border bg-surface p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Connected inputs
                </p>
                <ArrowRight
                  className="hidden size-4 text-brand sm:block"
                  aria-hidden="true"
                />
                <div className="flex flex-wrap gap-2">
                  {integrations.map((integration) => (
                    <span
                      key={integration}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
