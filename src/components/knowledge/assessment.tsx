"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import type { AssessmentConfig } from "@/lib/knowledge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Set NEXT_PUBLIC_ASSESSMENT_WEBHOOK_URL to your Make.com / Zapier webhook.
 * POSTs: { firstName, email, assessment, score, maxScore, tier }
 * Without it (dev), the result still reveals after a simulated delay.
 */

interface Props {
  config: AssessmentConfig;
}

type Stage = "quiz" | "capture" | "result";

export function Assessment({ config }: Props) {
  const [stage, setStage] = useState<Stage>("quiz");
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(false);
  const [lead, setLead] = useState({ firstName: "", email: "" });

  const allAnswered = config.questions.every(
    (q) => answers[q.id] !== undefined
  );
  const score = Object.values(answers).reduce((sum, v) => sum + v, 0);
  const maxScore = config.questions.length * 2;
  const tier =
    config.tiers.find((t) => score >= t.minScore) ??
    config.tiers[config.tiers.length - 1];

  function selectOption(questionId: string, optionScore: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: optionScore }));
  }

  async function handleCapture(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const webhookUrl = process.env.NEXT_PUBLIC_ASSESSMENT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: lead.firstName,
            email: lead.email,
            assessment: config.title,
            score,
            maxScore,
            tier: tier.title,
          }),
        });
      } catch {
        // Fail silently — show the result regardless.
      }
    } else {
      await new Promise((r) => setTimeout(r, 600));
    }

    setLoading(false);
    setStage("result");
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft lg:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative flex items-start gap-3">
        <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <Sparkles className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
            {config.title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
            {config.description}
          </p>
        </div>
      </div>

      {stage === "quiz" && (
        <div className="relative mt-8 space-y-7">
          {config.questions.map((q, qi) => (
            <fieldset key={q.id}>
              <legend className="text-sm font-semibold text-foreground">
                {qi + 1}. {q.prompt}
              </legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {q.options.map((opt) => {
                  const checked = answers[q.id] === opt.score;
                  return (
                    <label
                      key={opt.label}
                      className={cn(
                        "flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 text-sm transition-colors",
                        checked
                          ? "border-brand bg-brand/10 text-foreground"
                          : "border-border bg-surface text-muted-foreground hover:border-brand/40"
                      )}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        className="size-3.5 accent-brand"
                        checked={checked}
                        onChange={() => selectOption(q.id, opt.score)}
                      />
                      {opt.label}
                    </label>
                  );
                })}
              </div>
            </fieldset>
          ))}

          <Button
            type="button"
            variant="brand"
            size="lg"
            disabled={!allAnswered}
            onClick={() => setStage("capture")}
            className="w-full sm:w-auto"
          >
            See my score
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      )}

      {stage === "capture" && (
        <form
          onSubmit={handleCapture}
          className="relative mt-8 max-w-sm space-y-4"
        >
          <p className="text-sm leading-relaxed text-muted-foreground">
            Where should we send your score and a tailored next step?
          </p>
          <div>
            <label
              htmlFor="assess-name"
              className="mb-1.5 block text-xs font-semibold text-foreground"
            >
              First Name
            </label>
            <input
              id="assess-name"
              required
              value={lead.firstName}
              onChange={(e) =>
                setLead((p) => ({ ...p, firstName: e.target.value }))
              }
              placeholder="Priya"
              className="h-10 w-full rounded-lg border border-border bg-surface px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-brand/60 focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
          </div>
          <div>
            <label
              htmlFor="assess-email"
              className="mb-1.5 block text-xs font-semibold text-foreground"
            >
              Work Email
            </label>
            <input
              id="assess-email"
              type="email"
              required
              value={lead.email}
              onChange={(e) =>
                setLead((p) => ({ ...p, email: e.target.value }))
              }
              placeholder="you@company.com"
              className="h-10 w-full rounded-lg border border-border bg-surface px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-brand/60 focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
          </div>
          <Button
            type="submit"
            variant="brand"
            size="lg"
            disabled={loading}
            className="w-full sm:w-auto"
          >
            {loading ? (
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            ) : null}
            {loading ? "Calculating…" : "Get my score"}
          </Button>
          <p className="text-xs text-muted-foreground">
            No spam. Unsubscribe any time.
          </p>
        </form>
      )}

      {stage === "result" && (
        <div className="relative mt-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
              <CheckCircle2 className="size-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Your score: {score} / {maxScore}
              </p>
              <h4 className="font-display text-lg font-semibold tracking-tight text-foreground">
                {tier.title}
              </h4>
            </div>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty">
            {tier.description}
          </p>
          <Button asChild variant="brand" size="lg" className="mt-6">
            <Link href="/contact">
              Book a free consultation
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
