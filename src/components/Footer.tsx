import Image from "next/image";
import Link from "next/link";
import { localizedHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { navLinks } from "@/lib/nav";
import { ContactForm } from "./ContactForm";

type FooterProps = {
  lang: Locale;
  dict: Dictionary;
};

export function Footer({ lang, dict }: FooterProps) {
  const t = dict.footer;

  return (
    <footer id="contact" className="relative z-20 bg-brand text-white">
      <div className="container-page grid gap-14 px-0 py-16 md:grid-cols-2 md:gap-16 md:py-20">
        <div>
          <Link
            href={localizedHref(lang, "/")}
            className="relative block h-14 w-[220px] md:h-16 md:w-[250px]"
          >
            <Image
              src="/assets/logo.png"
              alt={dict.meta.logoAlt}
              fill
              sizes="250px"
              className="object-contain object-left"
            />
          </Link>
          <p className="mt-6 font-display text-lg italic text-white/95">
            {t.tagline}
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-on-dark">
            {t.description}
          </p>

          <div className="mt-10">
            <p className="font-display text-xl font-medium">{t.quickLinks}</p>
            <nav
              className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/95"
              aria-label={t.footerNav}
            >
              {navLinks.map((link, index) => (
                <span key={link.href} className="inline-flex items-center gap-3">
                  {index > 0 ? (
                    <span className="text-white/50" aria-hidden="true">
                      |
                    </span>
                  ) : null}
                  <Link
                    href={localizedHref(lang, link.href)}
                    className="transition-opacity hover:opacity-75"
                  >
                    {dict.nav[link.key]}
                  </Link>
                </span>
              ))}
            </nav>
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            {t.contactTitle}
          </h2>
          <ContactForm
            lang={lang}
            labels={{
              name: t.name,
              email: t.email,
              message: t.message,
              send: t.send,
              sending: t.sending,
              sent: t.sent,
              error: t.error,
            }}
          />
        </div>
      </div>

      <p className="pb-8 text-center text-[length:var(--text-micro,0.75rem)] text-white/75">
        {t.credit}
      </p>
    </footer>
  );
}
