import * as React from "react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What exactly does Paravyoma do?",
    a: "We are a solutions and technology partner. We help organizations streamline operations, automate workflows, improve customer engagement and build scalable systems — always in service of a measurable business outcome, not just a deliverable.",
  },
  {
    q: "You say you don't sell websites or apps. What do you mean?",
    a: "Websites and apps are tools we build when they serve the goal. But we scope every engagement around the outcome you actually need — lower costs, less manual work, more revenue, happier customers — and choose the technology that gets you there.",
  },
  {
    q: "What does 'AI-assisted execution, human-led strategy' mean in practice?",
    a: "Experienced people own the strategy and the important decisions. We use modern AI tooling to accelerate delivery and raise quality. You get the judgement of senior practitioners with the speed of a much larger team.",
  },
  {
    q: "Do you work with smaller organizations and institutions?",
    a: "Yes. We work with SMEs, mid-sized and growing companies, as well as temples and spiritual organizations. We scale our approach to your size, sector and budget without compromising on quality.",
  },
  {
    q: "How do engagements typically start?",
    a: "With a conversation. We learn your goals and constraints, then propose a focused path forward — discovery, strategy, execution and ongoing scale. Book a consultation and we will take it from there.",
  },
];

export function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          eyebrow="Questions"
          title="Answers to what teams ask us first"
          description="Still unsure if we are the right fit? Reach out — we are happy to talk specifics."
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.q} value={faq.q}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
