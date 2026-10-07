import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";

const cardImages = [
  "/assets/out-and-about/card-1.png",
  "/assets/out-and-about/card-2.jpg",
  "/assets/out-and-about/card-3.jpg",
  "/assets/out-and-about/card-4.png",
  "/assets/out-and-about/card-5.jpg",
  "/assets/out-and-about/card-6.jpg",
  "/assets/out-and-about/card-7.jpg",
  "/assets/out-and-about/card-8.png",
  "/assets/out-and-about/card-9.jpg",
  "/assets/out-and-about/card-10.jpg",
];

export function OutAndAboutCards({ dict }: { dict: Dictionary }) {
  const cards = dict.outAndAbout.cards;

  return (
    <section className="bg-surface px-[var(--page-pad-x)] pb-32 pt-10 md:pb-44 md:pt-16">
      <ul className="container-page grid items-stretch gap-x-8 gap-y-20 sm:grid-cols-2">
        {cardImages.map((src, i) => (
          <li key={src} className="relative flex h-full flex-col pt-[4.5rem]">
            <div className="absolute top-0 left-1/2 z-10 h-36 w-36 -translate-x-1/2 overflow-hidden rounded-full shadow-[0_8px_24px_rgba(0,74,83,0.12)] md:h-40 md:w-40">
              <Image
                src={src}
                alt={cards[i].alt}
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>

            <article className="flex h-full flex-1 flex-col rounded-[1.25rem] bg-white px-6 pt-24 pb-8 text-center shadow-[0_10px_30px_rgba(0,74,83,0.08)] md:px-8 md:pt-28 md:pb-10">
              <h3 className="font-display text-xl font-semibold leading-snug text-ink md:text-2xl">
                {cards[i].titleLead}{" "}
                <span className="text-brand">{cards[i].titleAccent}</span>
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft md:text-[0.9375rem]">
                {cards[i].body}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
