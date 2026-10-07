import { HoverImage } from "@/components/HoverImage";
import type { Dictionary } from "@/i18n/dictionaries";

const heritageImages = [
  "/assets/la-brigue/chez-luca.jpg",
  "/assets/la-brigue/fete-brebis.jpg",
  "/assets/la-brigue/highland-cattle.jpg",
  "/assets/la-brigue/levense-river.jpg",
];

export function LivingHeritage({ dict }: { dict: Dictionary }) {
  const t = dict.laBrigue.heritage;

  return (
    <section className="bg-surface px-[var(--page-pad-x)] pb-20 md:pb-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-split font-display text-[length:var(--text-h1)] font-semibold leading-[1.2]">
            {t.titleLead} <span className="accent">{t.titleAccent}</span>{" "}
            {t.titleTail}
          </h2>
          <div className="mt-8 space-y-5 text-left text-ink-soft md:text-center">
            {t.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 md:gap-6">
          {heritageImages.map((src, i) => (
            <li key={src}>
              <HoverImage
                src={src}
                alt={t.images[i].alt}
                title={t.images[i].title}
                variant="banner"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
