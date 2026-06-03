import { Hero } from "@/components/sections/hero";
import { TrustBand } from "@/components/sections/trust-band";
import { Services } from "@/components/sections/services";
import { OutcomesComparison } from "@/components/sections/outcomes-comparison";
import { MetricsOutcomes } from "@/components/sections/metrics-outcomes";
import { Credibility } from "@/components/sections/credibility";
import { Approach } from "@/components/sections/approach";
import { SystemsFlow } from "@/components/sections/systems-flow";
import { Process } from "@/components/sections/process";
import { Industries } from "@/components/sections/industries";
import { ContactCta } from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero */}
      <Hero />
      {/* 2 — Trust: Who we help */}
      <TrustBand />
      {/* 3 — Solutions Overview */}
      <Services />
      {/* 4 — Before / After: The difference technology makes */}
      <OutcomesComparison />
      {/* 5 — Metrics: Measurable outcomes */}
      <MetricsOutcomes />
      {/* 6 — Credibility: Stats + Why Clients Trust Paravyoma */}
      <Credibility />
      {/* 7 — Why Paravyoma */}
      <Approach />
      {/* 8 — Business Systems Chain */}
      <SystemsFlow />
      {/* 9 — Interactive Process (5-step) */}
      <Process />
      {/* 10 — Industries */}
      <Industries />
      {/* 11 — CTA  (12 — Footer rendered by root layout) */}
      <ContactCta />
    </>
  );
}
