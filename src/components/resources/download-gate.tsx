"use client";

import { useState, useEffect, useRef } from "react";
import {
  X,
  Lock,
  CheckCircle2,
  ArrowDownToLine,
  Loader2,
  Mail,
} from "lucide-react";
import type { Resource } from "@/lib/resources";

interface GateFormData {
  firstName: string;
  email: string;
  company: string;
  role: string;
}

interface Props {
  resource: Resource;
  /** Override label on the trigger button */
  triggerLabel?: string;
  /** Override classNames on the trigger button */
  triggerClassName?: string;
}

export function DownloadGate({ resource, triggerLabel, triggerClassName }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [form, setForm] = useState<GateFormData>({
    firstName: "",
    email: "",
    company: "",
    role: "",
  });
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const webhookUrl = process.env.NEXT_PUBLIC_RESOURCES_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: form.firstName,
            email: form.email,
            company: form.company,
            role: form.role,
            resourceId: resource.id,
            resourceTitle: resource.title,
            resourceType: resource.type,
          }),
        });
      } catch {
        // Fail silently — show success state regardless
      }
    } else {
      // Dev: simulate network latency
      await new Promise((r) => setTimeout(r, 700));
    }

    setSubmittedEmail(form.email);
    setSubmitted(true);
    setLoading(false);
  }

  const defaultTriggerClass =
    "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90";

  const label =
    triggerLabel ?? (resource.gated ? "Get Free Access" : "Download Free");

  return (
    <>
      {/* ── Trigger ── */}
      <button
        onClick={() => setIsOpen(true)}
        className={triggerClassName ?? defaultTriggerClass}
      >
        <ArrowDownToLine className="size-4" aria-hidden="true" />
        {label}
      </button>

      {/* ── Modal ── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gate-modal-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div
            ref={panelRef}
            className="relative z-10 w-full max-w-md rounded-2xl border border-border bg-background p-8 shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              aria-label="Close"
            >
              <X className="size-4" />
            </button>

            {/* ── Form ── */}
            {!submitted ? (
              <>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Lock className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2
                      id="gate-modal-title"
                      className="font-display text-lg font-semibold tracking-tight text-foreground"
                    >
                      {resource.gated
                        ? "Unlock this resource"
                        : "Download this resource"}
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {resource.title}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {resource.gated
                    ? "Free to download. Enter your details and we’ll send the link straight to your inbox."
                    : "Enter your email and we’ll send the download link immediately."}
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Name + Role */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="gate-firstName"
                        className="mb-1.5 block text-xs font-semibold text-foreground"
                      >
                        First Name{" "}
                        <span className="text-brand" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="gate-firstName"
                        name="firstName"
                        type="text"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Priya"
                        className="h-10 w-full rounded-lg border border-border bg-surface px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-brand/60 focus:outline-none focus:ring-2 focus:ring-brand/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="gate-role"
                        className="mb-1.5 block text-xs font-semibold text-foreground"
                      >
                        Role{" "}
                        <span className="font-normal text-muted-foreground">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="gate-role"
                        name="role"
                        type="text"
                        value={form.role}
                        onChange={handleChange}
                        placeholder="Director"
                        className="h-10 w-full rounded-lg border border-border bg-surface px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-brand/60 focus:outline-none focus:ring-2 focus:ring-brand/20"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="gate-email"
                      className="mb-1.5 block text-xs font-semibold text-foreground"
                    >
                      Work Email{" "}
                      <span className="text-brand" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="gate-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="h-10 w-full rounded-lg border border-border bg-surface px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-brand/60 focus:outline-none focus:ring-2 focus:ring-brand/20"
                    />
                  </div>

                  {/* Company — gated resources only */}
                  {resource.gated && (
                    <div>
                      <label
                        htmlFor="gate-company"
                        className="mb-1.5 block text-xs font-semibold text-foreground"
                      >
                        Organisation{" "}
                        <span className="text-brand" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="gate-company"
                        name="company"
                        type="text"
                        required
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Pvt Ltd"
                        className="h-10 w-full rounded-lg border border-border bg-surface px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-brand/60 focus:outline-none focus:ring-2 focus:ring-brand/20"
                      />
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 text-sm font-semibold text-brand-foreground shadow-soft transition-opacity hover:opacity-90 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2
                          className="size-4 animate-spin"
                          aria-hidden="true"
                        />
                        Sending&hellip;
                      </>
                    ) : (
                      <>
                        <Mail className="size-4" aria-hidden="true" />
                        Send me the download
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-muted-foreground">
                    No spam. Unsubscribe any time.
                  </p>
                </form>
              </>
            ) : (
              /* ── Success ── */
              <div className="flex flex-col items-center py-4 text-center">
                <span className="inline-flex size-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <CheckCircle2 className="size-8" aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-display text-xl font-semibold tracking-tight text-foreground">
                  You&apos;re all set!
                </h2>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground text-pretty">
                  We&apos;ve sent{" "}
                  <span className="font-semibold text-foreground">
                    {resource.title}
                  </span>{" "}
                  to{" "}
                  <span className="font-semibold text-brand">
                    {submittedEmail}
                  </span>
                  . Check your inbox &mdash; it should arrive within a few
                  minutes.
                </p>

                {resource.downloadUrl ? (
                  <a
                    href={resource.downloadUrl}
                    download
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-soft hover:opacity-90"
                  >
                    <ArrowDownToLine className="size-4" aria-hidden="true" />
                    Download Now
                  </a>
                ) : null}

                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
