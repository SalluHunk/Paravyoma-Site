import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

interface ContactPayload {
  name: string;
  email: string;
  organisation?: string;
  inquiryType?: string;
  message: string;
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as ContactPayload;
  const { name, email, organisation, inquiryType, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const webhookUrl = process.env.MAKE_WEBHOOK_URL;

  if (!webhookUrl) {
    // No webhook configured yet — client falls back to mailto
    return NextResponse.json({ ok: true, fallback: true });
  }

  const subject = `Inquiry/Support — ${inquiryType || "General"}`;

  const payload = {
    subject,
    to: process.env.CONTACT_EMAIL ?? "paravyomatech@gmail.com",
    name,
    email,
    organisation: organisation || "",
    inquiryType: inquiryType || "General",
    message,
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Upstream webhook failed." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Could not reach webhook." }, { status: 500 });
  }
}
