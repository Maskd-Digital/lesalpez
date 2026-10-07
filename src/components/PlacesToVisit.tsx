import Image from "next/image";
import { localizedHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Button } from "./Button";

const placeImages = [
  "/assets/home/circle-1.jpg",
  "/assets/home/circle-2.jpg",
  "/assets/home/circle-3.png",
  "/assets/home/circle-4.png",
  "/assets/home/circle-5.jpg",
  "/assets/home/circle-6.png",
];

type PlacesToVisitProps = {
  lang: Locale;
  dict: Dictionary;
};

export function PlacesToVisit({ lang, dict }: PlacesToVisitProps) {
  const t = dict.home.places;

  return (
    <section
      id="out-and-about"
      className="bg-surface px-[var(--page-pad-x)] pb-16 md:pb-24"
    >
      <div className="container-page">
        <h2 className="heading-split text-center font-display text-[length:var(--text-h1)] font-semibold leading-[1.2]">
          {t.titleLead} <span className="accent">{t.titleAccent}</span>
        </h2>

        <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 md:gap-x-10 md:gap-y-14">
          {placeImages.map((src, i) => (
            <li key={src} className="flex flex-col items-center text-center">
              <div className="relative aspect-square w-full max-w-[220px] overflow-hidden rounded-full">
                <Image
                  src={src}
                  alt={t.items[i].alt}
                  fill
                  sizes="(max-width: 768px) 45vw, 220px"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-[length:var(--text-caption)] font-medium text-brand">
                {t.items[i].label}
              </p>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-14 max-w-2xl text-center">
          <p className="text-ink-soft">{t.body}</p>
          <div className="mt-8">
            <Button href={localizedHref(lang, "/out-and-about")}>
              {dict.common.viewMore}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
