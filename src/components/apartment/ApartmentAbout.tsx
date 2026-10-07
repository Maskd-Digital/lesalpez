import { HoverImage } from "@/components/HoverImage";
import type { Dictionary } from "@/i18n/dictionaries";

const aboutImages = [
  "/assets/apartments/about-grid-1.jpg",
  "/assets/apartments/about-grid-2.jpg",
  "/assets/apartments/about-grid-3.jpg",
  "/assets/apartments/about-grid-4.jpg",
];

export function ApartmentAbout({ dict }: { dict: Dictionary }) {
  const t = dict.apartment.about;

  return (
    <section className="bg-surface px-[var(--page-pad-x)] pb-20 md:pb-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-split font-display text-[length:var(--text-h1)] font-semibold leading-[1.2]">
            {t.titleLead} <span className="accent">{t.titleAccent}</span>
          </h2>
          <p className="mt-8 text-ink-soft">{t.body}</p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 md:gap-6">
          {aboutImages.map((src, i) => (
            <li key={src}>
              <HoverImage
                src={src}
                alt={t.images[i].alt}
                title={t.images[i].title}
                description={t.images[i].description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
