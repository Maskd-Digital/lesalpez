import Image from "next/image";
import { localizedHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Button } from "./Button";

type FeatureLaBrigueProps = {
  lang: Locale;
  dict: Dictionary;
};

export function FeatureLaBrigue({ lang, dict }: FeatureLaBrigueProps) {
  const t = dict.home.laBrigue;

  return (
    <section
      id="la-brigue"
      className="bg-surface px-[var(--page-pad-x)] pb-20 md:pb-28"
    >
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)]">
          <Image
            src="/assets/home/living-heritage-slide-1.jpg"
            alt={t.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="heading-split font-display text-[length:var(--text-h2)] font-semibold leading-[1.25]">
            {t.titleLead} <span className="accent">{t.titleAccent}</span>
          </h2>
          <p className="mt-6 max-w-md text-ink-soft">{t.body}</p>
          <div className="mt-8">
            <Button href={localizedHref(lang, "/la-brigue")}>
              {dict.common.viewMore}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
