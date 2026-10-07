import { HoverImage } from "@/components/HoverImage";
import type { Dictionary } from "@/i18n/dictionaries";

const sportImages = [
  "/assets/la-brigue/sport-1.jpg",
  "/assets/la-brigue/sport-2.jpg",
  "/assets/la-brigue/sport-3.jpg",
  "/assets/la-brigue/sport-4.jpg",
  "/assets/la-brigue/sport-5.jpg",
  "/assets/la-brigue/sport-6.jpg",
];

export function SportsActivities({ dict }: { dict: Dictionary }) {
  const t = dict.laBrigue.sports;

  return (
    <section className="bg-surface px-[var(--page-pad-x)] pb-32 md:pb-44">
      <div className="container-page">
        <h2 className="text-center font-display text-[length:var(--text-h1)] font-semibold leading-[1.2] text-brand">
          {t.title}
        </h2>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 md:gap-6">
          {sportImages.map((src, i) => (
            <li key={src}>
              <HoverImage
                src={src}
                alt={t.items[i].alt}
                title={t.items[i].title}
                description={t.items[i].description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
