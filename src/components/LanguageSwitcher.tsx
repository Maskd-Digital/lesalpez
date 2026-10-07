"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  localeCookie,
  localeNames,
  locales,
  swapLocale,
  type Locale,
} from "@/i18n/config";

type LanguageSwitcherProps = {
  lang: Locale;
  label: string;
  variant?: "dropdown" | "inline";
  onSelect?: () => void;
};

function rememberLocale(locale: Locale) {
  document.cookie = `${localeCookie}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path fill="currentColor" d="m7 9.5 5 5 5-5-1.4-1.4-3.6 3.6-3.6-3.6z" />
    </svg>
  );
}

export function LanguageSwitcher({
  lang,
  label,
  variant = "dropdown",
  onSelect,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function select(locale: Locale) {
    rememberLocale(locale);
    setOpen(false);
    onSelect?.();
  }

  if (variant === "inline") {
    return (
      <nav aria-label={label} className="flex flex-wrap gap-2">
        {locales.map((locale) => (
          <Link
            key={locale}
            href={swapLocale(pathname, locale)}
            hrefLang={locale}
            lang={locale}
            aria-current={locale === lang ? "true" : undefined}
            onClick={() => select(locale)}
            className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
              locale === lang
                ? "border-white bg-white text-ink"
                : "border-white/40 text-white hover:border-white"
            }`}
          >
            {localeNames[locale]}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className="inline-flex items-center gap-1.5 text-[0.9375rem] font-normal uppercase text-white/95 transition-opacity hover:opacity-75"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="language-menu"
        aria-label={`${label}: ${localeNames[lang]}`}
        onClick={() => setOpen((value) => !value)}
      >
        {lang}
        <ChevronDown open={open} />
      </button>

      {open ? (
        <ul
          id="language-menu"
          className="absolute right-0 mt-3 min-w-40 overflow-hidden rounded-[var(--radius-sm)] bg-white py-1.5 shadow-[0_10px_30px_rgba(0,74,83,0.18)]"
        >
          {locales.map((locale) => (
            <li key={locale}>
              <Link
                href={swapLocale(pathname, locale)}
                hrefLang={locale}
                lang={locale}
                aria-current={locale === lang ? "true" : undefined}
                onClick={() => select(locale)}
                className={`flex items-center justify-between gap-4 px-4 py-2 text-sm transition-colors hover:bg-surface ${
                  locale === lang ? "font-medium text-brand" : "text-ink"
                }`}
              >
                {localeNames[locale]}
                <span className="text-xs uppercase text-ink-soft/70">
                  {locale}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
