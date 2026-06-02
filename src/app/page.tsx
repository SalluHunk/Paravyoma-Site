import { Hero } from "@/components/sections/hero";
import { TrustBand } from "@/components/sections/trust-band";
import { Services } from "@/components/sections/services";
import { Approach } from "@/components/sections/approach";
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
      {/* 4 — Why Paravyoma */}
      <Approach />
      {/* 5 — Process */}
      <Process />
      {/* 6 — Industries */}
      <Industries />
      {/* 7 — CTA  (8 — Footer is rendered by the root layout) */}
      <ContactCta />
    </>
  );
}
