import { Hero } from "@/components/sections/hero";
import { TrustBand } from "@/components/sections/trust-band";
import { Services } from "@/components/sections/services";
import { OutcomesComparison } from "@/components/sections/outcomes-comparison";
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
      {/* 5 — Why Paravyoma */}
      <Approach />
      {/* 6 — Business Systems Chain */}
      <SystemsFlow />
      {/* 7 — Interactive Process (5-step) */}
      <Process />
      {/* 8 — Industries */}
      <Industries />
      {/* 9 — CTA  (10 — Footer rendered by root layout) */}
      <ContactCta />
    </>
  );
}
