"use client";

import * as React from "react";
import {
  CalendarCheck,
  Briefcase,
  Handshake,
  MapPin,
  Mail,
  Clock,
} from "lucide-react";

import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ContactForm,
  type InquiryType,
} from "@/components/sections/contact-form";
import { cn } from "@/lib/utils";

const inquiryCards = [
  {
    type: "Schedule Consultation" as InquiryType,
    icon: CalendarCheck,
    title: "Schedule a Consultation",
    description:
      "Book a 45-minute discovery call to explore whether Paravyoma is the right fit for your challenge.",
  },
  {
    type: "Project Inquiry" as InquiryType,
    icon: Briefcase,
    title: "Project Inquiry",
    description:
      "Share details about a specific project or initiative you'd like us to scope and deliver.",
  },
  {
    type: "Partnership Inquiry" as InquiryType,
    icon: Handshake,
    title: "Partnership Inquiry",
    description:
      "Explore referral, co-delivery, or strategic partnership arrangements with Paravyoma.",
  },
];

const faqs = [
  {
    q: "How quickly do you respond to enquiries?",
    a: "We aim to respond within one business day. For time-sensitive matters, mentioning urgency in your message helps us prioritise.",
  },
  {
    q: "Do you work with clients outside your region?",
    a: "Yes. We work with clients across time zones. Most engagements are delivered remotely, with on-site presence available where required.",
  },
  {
    q: "What should I include in my first message?",
    a: "A brief description of your organisation, the problem or opportunity you're facing, and an indication of timeline or urgency is enough for us to give you a useful first response.",
  },
  {
    q: "Is there a minimum project size?",
    a: "We focus on engagements where we can drive meaningful, measurable outcomes. We're happy to discuss scope during a discovery call — we don't quote minimums upfront.",
  },
  {
    q: "Can I speak with a human before committing to anything?",
    a: "Absolutely. Our consultation calls carry zero obligation. We ask questions, you ask questions, and we both decide if it's the right fit.",
  },
];

export default function ContactPage() {
  const [selectedInquiry, setSelectedInquiry] = React.useState<InquiryType>("");
  const formRef = React.useRef<HTMLDivElement>(null);

  function selectInquiry(type: InquiryType) {
    setSelectedInquiry(type);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about what you're building"
        description="Whether you have a specific project in mind, want to explore a consultation, or are simply curious about how we work — we'd love to hear from you."
      />

      {/* Form + Business Info — two-column on desktop */}
      <Section id="contact-form">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_380px]">
            {/* Contact form */}
            <div ref={formRef}>
              <Reveal>
                <h2 className="mb-2 font-display text-2xl font-semibold tracking-tight text-foreground">
                  Send us a message
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Fields marked{" "}
                  <span className="text-destructive" aria-hidden="true">
                    *
                  </span>{" "}
                  are required.
                </p>
              </Reveal>
              <Reveal delay={60}>
                <ContactForm
                  email={siteConfig.email}
                  inquiryType={selectedInquiry}
                  onInquiryTypeChange={setSelectedInquiry}
                />
              </Reveal>
            </div>

            {/* Business info + map */}
            <div className="space-y-6">
              <Reveal delay={80}>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <h3 className="mb-5 font-semibold text-foreground">
                    Business information
                  </h3>
                  <ul className="space-y-5">
                    <InfoRow icon={MapPin} label="Location">
                      {/* TODO: Replace with actual address */}
                      <span className="text-muted-foreground">
                        Remote-first — serving clients globally
                      </span>
                    </InfoRow>
                    <InfoRow icon={Mail} label="Email">
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-brand hover:underline"
                      >
                        {siteConfig.email}
                      </a>
                    </InfoRow>
                    <InfoRow icon={Clock} label="Business hours">
                      <span className="text-muted-foreground">
                        Monday – Friday, 9 am – 6 pm IST
                      </span>
                    </InfoRow>
                  </ul>
                </div>
              </Reveal>

              {/* Map placeholder */}
              <Reveal delay={120}>
                <div
                  aria-label="Map — location coming soon"
                  className={cn(
                    "relative aspect-video w-full overflow-hidden rounded-2xl border border-border shadow-soft",
                    "flex items-center justify-center bg-surface"
                  )}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-grid-slate bg-[size:28px_28px] opacity-30"
                  />
                  <div className="relative z-10 flex flex-col items-center gap-2 text-muted-foreground/50">
                    <MapPin className="size-8" aria-hidden="true" />
                    <span className="text-sm font-medium tracking-wide">
                      Map
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Inquiry type cards */}
      <Section id="inquiry-types" surface>
        <Container>
          <Reveal>
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <span className="eyebrow justify-center">How can we help?</span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
                Choose your inquiry type
              </h2>
              <p className="mt-4 text-muted-foreground">
                Click a card to pre-fill the inquiry type in the form above.
              </p>
            </div>
          </Reveal>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
            {inquiryCards.map((card, i) => (
              <Reveal key={card.type} delay={i * 80}>
                <button
                  onClick={() => selectInquiry(card.type)}
                  className={cn(
                    "group flex h-full w-full flex-col rounded-2xl border bg-card p-6 text-left shadow-soft transition-all duration-200",
                    "hover:border-brand/40 hover:shadow-lift",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
                    selectedInquiry === card.type
                      ? "border-brand/40 ring-2 ring-brand/20"
                      : "border-border"
                  )}
                  aria-pressed={selectedInquiry === card.type}
                >
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-brand/10 transition-colors group-hover:bg-brand/15">
                    <card.icon className="size-5 text-brand" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                </button>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="mb-10 text-center">
                <span className="eyebrow justify-center">FAQ</span>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
                  Common questions
                </h2>
              </div>
            </Reveal>
            <Reveal delay={60}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                    <AccordionContent>{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand/10">
        <Icon className="size-4 text-brand" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/70">
          {label}
        </p>
        <div className="mt-0.5 text-sm">{children}</div>
      </div>
    </li>
  );
}
