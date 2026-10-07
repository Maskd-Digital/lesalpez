import { NextResponse } from "next/server";
import { defaultLocale, hasLocale, type Locale } from "@/i18n/config";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
  website?: string; // honeypot
  locale?: string;
};

type ErrorKey = "invalid" | "required" | "email" | "tooLong" | "config" | "send";

const errors: Record<Locale, Record<ErrorKey, string>> = {
  en: {
    invalid: "Invalid request.",
    required: "Name, email, and message are required.",
    email: "Enter a valid email.",
    tooLong: "Message is too long.",
    config: "Email is not configured yet.",
    send: "Could not send your message. Please try again.",
  },
  fr: {
    invalid: "Requête invalide.",
    required: "Le nom, l’e-mail et le message sont obligatoires.",
    email: "Saisissez une adresse e-mail valide.",
    tooLong: "Le message est trop long.",
    config: "L’envoi d’e-mails n’est pas encore configuré.",
    send: "Impossible d’envoyer votre message. Veuillez réessayer.",
  },
  it: {
    invalid: "Richiesta non valida.",
    required: "Nome, e-mail e messaggio sono obbligatori.",
    email: "Inserisci un indirizzo e-mail valido.",
    tooLong: "Il messaggio è troppo lungo.",
    config: "L’invio delle e-mail non è ancora configurato.",
    send: "Impossibile inviare il messaggio. Riprova.",
  },
  de: {
    invalid: "Ungültige Anfrage.",
    required: "Name, E-Mail und Nachricht sind Pflichtfelder.",
    email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    tooLong: "Die Nachricht ist zu lang.",
    config: "Der E-Mail-Versand ist noch nicht eingerichtet.",
    send: "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
  },
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { error: errors[defaultLocale].invalid },
      { status: 400 },
    );
  }

  const locale: Locale =
    body.locale && hasLocale(body.locale) ? body.locale : defaultLocale;
  const t = errors[locale];

  // Silent success for bots filling the honeypot
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: t.required },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: t.email }, { status: 400 });
  }

  if (name.length > 120 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: t.tooLong }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const fromName = process.env.CONTACT_FROM_NAME ?? "Les Alpes D’Azur";

  if (!apiKey || !toEmail || !fromEmail) {
    console.error("Missing BREVO_API_KEY, CONTACT_TO_EMAIL, or CONTACT_FROM_EMAIL");
    return NextResponse.json(
      { error: t.config },
      { status: 500 },
    );
  }

  const safeName = name.replace(/[<>&]/g, "");
  const safeEmail = email.replace(/[<>&]/g, "");
  const safeMessage = message
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: {
        name: fromName,
        email: fromEmail,
      },
      to: [{ email: toEmail }],
      replyTo: {
        email,
        name,
      },
      subject: `[${locale.toUpperCase()}] New enquiry from ${safeName}`,
      textContent: `Name: ${name}\nEmail: ${email}\nLanguage: ${locale.toUpperCase()}\n\n${message}`,
      htmlContent: `
        <h2>New enquiry from Les Alpes D’Azur</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Language:</strong> ${locale.toUpperCase()}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage.replace(/\n/g, "<br />")}</p>
      `,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Brevo error:", response.status, detail);
    return NextResponse.json(
      { error: t.send },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
