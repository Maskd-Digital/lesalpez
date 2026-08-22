"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { navLinks } from "@/lib/nav";

export function Footer() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <footer id="contact" className="bg-brand text-white">
      <div className="container-page grid gap-14 px-0 py-16 md:grid-cols-2 md:gap-16 md:py-20">
        <div>
          <Link href="/" className="relative block h-14 w-[220px] md:h-16 md:w-[250px]">
            <Image
              src="/assets/logo.png"
              alt="Les Alpes D’Azur — Holiday Accommodation"
              fill
              sizes="250px"
              className="object-contain object-left"
            />
          </Link>
          <p className="mt-6 font-display text-lg italic text-white/95">
            Your Retreat in the Heart of the Mountains.
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-on-dark">
            A peaceful alpine base in La Brigue — made for travellers who want
            comfort, nature, and a genuine sense of place.
          </p>

          <div className="mt-10">
            <p className="font-display text-xl font-medium">Quick Links</p>
            <nav
              className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/95"
              aria-label="Footer"
            >
              {navLinks.map((link, index) => (
                <span key={link.href} className="inline-flex items-center gap-3">
                  {index > 0 ? (
                    <span className="text-white/50" aria-hidden="true">
                      |
                    </span>
                  ) : null}
                  <Link
                    href={link.href}
                    className="transition-opacity hover:opacity-75"
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </nav>
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Contact Us
          </h2>
          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-2 block text-sm text-muted-on-dark">Name</span>
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                className="w-full rounded-[var(--radius-sm)] border-0 bg-surface-soft px-4 py-3 text-ink outline-none ring-0 transition focus:ring-2 focus:ring-white/70"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-muted-on-dark">Email</span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                className="w-full rounded-[var(--radius-sm)] border-0 bg-surface-soft px-4 py-3 text-ink outline-none transition focus:ring-2 focus:ring-white/70"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-muted-on-dark">
                Message
              </span>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full resize-y rounded-[var(--radius-sm)] border-0 bg-surface-soft px-4 py-3 text-ink outline-none transition focus:ring-2 focus:ring-white/70"
              />
            </label>
            <div className="flex items-center justify-end gap-4 pt-1">
              {sent ? (
                <p className="text-sm text-white/90" role="status">
                  Thank you — we’ll be in touch soon.
                </p>
              ) : null}
              <button
                type="submit"
                className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-ink px-8 py-3 text-[0.9375rem] font-medium text-white transition-colors hover:bg-ink-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <p className="pb-8 text-center text-[length:var(--text-micro,0.75rem)] text-white/75">
        Designed &amp; Developed By Mask&apos;d
      </p>
    </footer>
  );
}
