"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { localizedHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { navLinks } from "@/lib/nav";
import { LanguageSwitcher } from "./LanguageSwitcher";

type HeaderProps = {
  lang: Locale;
  labels: Dictionary["nav"];
  logoAlt: string;
};

export function Header({ lang, labels, logoAlt }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = navLinks.map((link) => {
    const href = localizedHref(lang, link.href);
    return {
      href,
      label: labels[link.key],
      active: pathname === href || pathname.startsWith(`${href}/`),
    };
  });

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="container-page flex items-center justify-between py-5 md:py-7">
        <Link
          href={localizedHref(lang, "/")}
          className="relative block h-12 w-[190px] md:h-14 md:w-[220px]"
        >
          <Image
            src="/assets/logo.png"
            alt={logoAlt}
            fill
            priority
            sizes="220px"
            className="object-contain object-left"
          />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <nav className="flex items-center gap-10" aria-label={labels.primary}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.9375rem] font-normal text-white/95 transition-opacity hover:opacity-75 ${
                  link.active ? "underline decoration-1 underline-offset-8" : ""
                }`}
                aria-current={link.active ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher lang={lang} label={labels.language} />
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? labels.closeMenu : labels.openMenu}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{labels.menu}</span>
          <span className="flex w-6 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-white transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/20 bg-ink/90 px-[var(--page-pad-x)] py-4 backdrop-blur md:hidden"
        >
          <nav aria-label={labels.mobile}>
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-2 text-white ${
                      link.active ? "underline decoration-1 underline-offset-4" : ""
                    }`}
                    aria-current={link.active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-4 border-t border-white/20 pt-4">
            <p className="mb-3 text-sm text-white/70">{labels.language}</p>
            <LanguageSwitcher
              lang={lang}
              label={labels.language}
              variant="inline"
              onSelect={() => setOpen(false)}
            />
          </div>
        </div>
      ) : null}
    </header>
  );
}
