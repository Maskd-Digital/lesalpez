export const locales = ["en", "fr", "it", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeCookie = "NEXT_LOCALE";

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  it: "Italiano",
  de: "Deutsch",
};

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lesalpesdazur.com";

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localizedHref(lang: Locale, href: string) {
  if (href.startsWith("#") || /^[a-z]+:/i.test(href)) return href;
  return href === "/" ? `/${lang}` : `/${lang}${href}`;
}

export function swapLocale(pathname: string, next: Locale) {
  const segments = pathname.split("/");
  if (segments[1] && hasLocale(segments[1])) {
    segments[1] = next;
    return segments.join("/") || `/${next}`;
  }
  return localizedHref(next, pathname || "/");
}
