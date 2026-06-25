"use client";

import { useState } from "react";
import { Mail, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function ProductNewsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");

    const webhookUrl = process.env.NEXT_PUBLIC_PRODUCTS_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            source: "products-early-access",
          }),
        });
        setStatus("success");
      } catch {
        setStatus("error");
      }
    } else {
      // dev fallback
      await new Promise((r) => setTimeout(r, 700));
      setStatus("success");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-brand/30 bg-brand/10 px-5 py-4">
        <CheckCircle2 className="size-5 shrink-0 text-brand" aria-hidden="true" />
        <p className="text-sm font-semibold text-foreground">
          You&apos;re on the list — we&apos;ll reach out as products reach early access.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row"
      aria-label="Product early access sign-up"
    >
      <label htmlFor="product-newsletter-name" className="sr-only">
        Your name
      </label>
      <input
        id="product-newsletter-name"
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="h-11 flex-1 rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/40"
      />
      <label htmlFor="product-newsletter-email" className="sr-only">
        Work email
      </label>
      <input
        id="product-newsletter-email"
        type="email"
        required
        placeholder="Work email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-11 flex-1 rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/40"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-brand px-5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "loading" ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <>
            <Mail className="size-4" aria-hidden="true" />
            Request Early Access
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
