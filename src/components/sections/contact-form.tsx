"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type InquiryType =
  | ""
  | "General"
  | "Schedule Consultation"
  | "Project Inquiry"
  | "Partnership Inquiry";

interface ContactFormProps {
  /** Controlled inquiry type — set from the inquiry-type cards */
  inquiryType?: InquiryType;
  onInquiryTypeChange?: (type: InquiryType) => void;
  email: string;
}

interface FieldError {
  name?: string;
  email?: string;
  message?: string;
}

function validate(fields: {
  name: string;
  email: string;
  message: string;
}): FieldError {
  const errors: FieldError = {};
  if (!fields.name.trim()) errors.name = "Name is required.";
  if (!fields.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!fields.message.trim()) errors.message = "Message is required.";
  return errors;
}

export function ContactForm({
  inquiryType: externalType,
  onInquiryTypeChange,
  email,
}: ContactFormProps) {
  const [name, setName] = React.useState("");
  const [emailVal, setEmailVal] = React.useState("");
  const [org, setOrg] = React.useState("");
  const [inquiry, setInquiry] = React.useState<InquiryType>(
    externalType ?? ""
  );
  const [message, setMessage] = React.useState("");
  const [errors, setErrors] = React.useState<FieldError>({});
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (externalType !== undefined) setInquiry(externalType);
  }, [externalType]);

  function handleInquiryChange(val: InquiryType) {
    setInquiry(val);
    onInquiryTypeChange?.(val);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate({ name, email: emailVal, message });
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // TODO: wire to backend (e.g. API route, Resend, or Supabase Edge Function)
    const subject = encodeURIComponent(
      `[${inquiry || "General"}] Enquiry from ${name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${emailVal}\nOrganisation: ${org || "—"}\nInquiry type: ${inquiry || "General"}\n\n${message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-brand/20 bg-card p-10 text-center shadow-soft">
        <CheckCircle2 className="size-12 text-brand" />
        <h3 className="font-display text-xl font-semibold text-foreground">
          Your message is on its way
        </h3>
        <p className="text-muted-foreground">
          We&rsquo;ll be in touch within one business day.
        </p>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => {
            setSubmitted(false);
            setName("");
            setEmailVal("");
            setOrg("");
            setInquiry("");
            setMessage("");
            setErrors({});
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-2xl border border-border bg-card p-7 shadow-soft lg:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" required error={errors.name}>
          <Input
            id="contact-name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-describedby={errors.name ? "contact-name-err" : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name ? (
            <FieldErrorText id="contact-name-err">{errors.name}</FieldErrorText>
          ) : null}
        </Field>

        <Field label="Email" required error={errors.email}>
          <Input
            id="contact-email"
            type="email"
            placeholder="you@company.com"
            value={emailVal}
            onChange={(e) => setEmailVal(e.target.value)}
            aria-describedby={errors.email ? "contact-email-err" : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email ? (
            <FieldErrorText id="contact-email-err">
              {errors.email}
            </FieldErrorText>
          ) : null}
        </Field>
      </div>

      <Field label="Organisation">
        <Input
          id="contact-organisation"
          placeholder="Company or organisation (optional)"
          value={org}
          onChange={(e) => setOrg(e.target.value)}
        />
      </Field>

      <Field label="Inquiry type">
        <Select
          id="contact-inquiry-type"
          value={inquiry}
          onChange={(e) => handleInquiryChange(e.target.value as InquiryType)}
          aria-label="Inquiry type"
        >
          <option value="">Select an inquiry type</option>
          <option value="General">General</option>
          <option value="Schedule Consultation">Schedule Consultation</option>
          <option value="Project Inquiry">Project Inquiry</option>
          <option value="Partnership Inquiry">Partnership Inquiry</option>
        </Select>
      </Field>

      <Field label="Message" required error={errors.message}>
        <Textarea
          id="contact-message"
          placeholder="Tell us about your project, challenge, or question…"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-describedby={errors.message ? "contact-msg-err" : undefined}
          aria-invalid={!!errors.message}
        />
        {errors.message ? (
          <FieldErrorText id="contact-msg-err">{errors.message}</FieldErrorText>
        ) : null}
      </Field>

      <Button type="submit" variant="brand" size="lg" className="w-full">
        Send message
      </Button>
    </form>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className={cn(error && "text-destructive")}>
        {label}
        {required ? (
          <span className="ml-0.5 text-destructive" aria-hidden="true">
            *
          </span>
        ) : null}
      </Label>
      {children}
    </div>
  );
}

function FieldErrorText({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <p id={id} role="alert" className="text-xs font-medium text-destructive">
      {children}
    </p>
  );
}
