import * as React from "react";
import { Building2 } from "lucide-react";

import { clientMarks } from "@/lib/trust";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

export function ClientProofStrip() {
  return (
    <section className="border-y border-border bg-background">
      <Container className="py-12">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                Trusted across operating models
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Paravyoma supports organizations where daily work depends on
                clear records, reliable handoffs and accountable systems.
              </p>
            </div>

            <div className="grid flex-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {clientMarks.map((mark) => (
                <div
                  key={mark}
                  className="flex min-h-16 items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3"
                >
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Building2 className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold leading-snug text-foreground">
                    {mark}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
