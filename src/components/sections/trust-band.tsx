import * as React from "react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

const audiences = [
  "SMEs",
  "Mid-sized companies",
  "Growing organizations",
  "Nonprofits",
  "Temples & community institutions",
  "Education",
];

export function TrustBand() {
  return (
    <section
      id="who-we-help"
      className="border-y border-border bg-surface"
    >
      <Container className="py-12">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Who we help
          </p>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:gap-x-4">
            {audiences.map((audience, i) => (
              <React.Fragment key={audience}>
                {i > 0 ? (
                  <li
                    aria-hidden="true"
                    className="hidden size-1 rounded-full bg-border sm:block"
                  />
                ) : null}
                <li className="font-display text-sm font-medium tracking-tight text-foreground sm:text-base">
                  {audience}
                </li>
              </React.Fragment>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
