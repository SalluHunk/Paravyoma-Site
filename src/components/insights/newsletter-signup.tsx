"use client";

import { useState } from "react";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // CMS/ESP integration point — wire to Mailchimp, ConvertKit, etc.
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-brand/20 bg-primary p-7 sm:p-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand/15 blur-3xl"
      />

      <div className="relative flex items-start gap-4">
        <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand/20 text-brand">
          <Mail className="size-4" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-display text-sm font-semibold text-primary-foreground">
            No-hype insights, straight to your inbox
          </p>
          <p className="mt-1 text-xs leading-relaxed text-primary-foreground/60">
            Practical articles on operations, AI and digital transformation — written
            for organisations that want outcomes, not theory. No spam. Unsubscribe any time.
          </p>

          {submitted ? (
            <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-brand">
              <CheckCircle2 className="size-4" aria-hidden="true" />
              You&apos;re in — we&apos;ll be in touch.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="h-9 min-w-0 flex-1 rounded-lg border border-white/15 bg-white/10 px-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-brand/60"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-brand px-4 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {loading ? "…" : (
                  <>
                    Subscribe{" "}
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
