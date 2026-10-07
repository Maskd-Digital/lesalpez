"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/i18n/config";

type ContactFormProps = {
  lang: Locale;
  labels: {
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    sent: string;
    error: string;
  };
};

export function ContactForm({ lang, labels }: ContactFormProps) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setPending(true);

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          website: data.get("website"),
          locale: lang,
        }),
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok) {
        setError(result.error ?? labels.error);
        return;
      }

      setSent(true);
      form.reset();
    } catch {
      setError(labels.error);
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="relative mt-8 space-y-5" onSubmit={handleSubmit}>
      {/* Honeypot — leave empty; bots often fill it */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0"
      >
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-sm text-muted-on-dark">{labels.name}</span>
        <input
          type="text"
          name="name"
          required
          autoComplete="name"
          disabled={pending || sent}
          className="w-full rounded-[var(--radius-sm)] border-0 bg-surface-soft px-4 py-3 text-ink outline-none ring-0 transition focus:ring-2 focus:ring-white/70 disabled:opacity-70"
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm text-muted-on-dark">{labels.email}</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          disabled={pending || sent}
          className="w-full rounded-[var(--radius-sm)] border-0 bg-surface-soft px-4 py-3 text-ink outline-none transition focus:ring-2 focus:ring-white/70 disabled:opacity-70"
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm text-muted-on-dark">
          {labels.message}
        </span>
        <textarea
          name="message"
          required
          rows={5}
          disabled={pending || sent}
          className="w-full resize-y rounded-[var(--radius-sm)] border-0 bg-surface-soft px-4 py-3 text-ink outline-none transition focus:ring-2 focus:ring-white/70 disabled:opacity-70"
        />
      </label>
      <div className="flex items-center justify-end gap-4 pt-1">
        {error ? (
          <p className="text-sm text-white/90" role="alert">
            {error}
          </p>
        ) : null}
        {sent ? (
          <p className="text-sm text-white/90" role="status">
            {labels.sent}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={pending || sent}
          className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-ink px-8 py-3 text-[0.9375rem] font-medium text-white transition-colors hover:bg-ink-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? labels.sending : labels.send}
        </button>
      </div>
    </form>
  );
}
