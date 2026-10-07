import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, locales, siteUrl, type Locale } from "./config";
import type en from "./dictionaries/en.json";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  fr: () => import("./dictionaries/fr.json").then((m) => m.default),
  it: () => import("./dictionaries/it.json").then((m) => m.default),
  de: () => import("./dictionaries/de.json").then((m) => m.default),
};

export async function getDictionary(lang: Locale) {
  return dictionaries[lang]();
}

export async function resolveLocale(params: Promise<{ lang: string }>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return { lang, dict: await getDictionary(lang) };
}

export function pageMetadata(
  lang: Locale,
  path: string,
  meta: { title: string; description: string },
): Metadata {
  const suffix = path === "/" ? "" : path;
  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${lang}${suffix}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `/${l}${suffix}`])),
        "x-default": `/en${suffix}`,
      },
    },
  };
}
