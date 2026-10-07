"use client";

import Image from "next/image";
import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

type Features = Dictionary["laBrigue"]["features"];

const feteImages = [
  "/assets/la-brigue/slider-1.jpg",
  "/assets/la-brigue/slider-2.jpg",
  "/assets/la-brigue/slider-3.jpg",
];

const otherFeatures = [
  {
    id: "chateau-lascaris",
    key: "chateau",
    image: "/assets/la-brigue/chateau-lascaris.png",
    imageFirst: false,
  },
  {
    id: "abeille-geante",
    key: "abeille",
    image: "/assets/la-brigue/abeille-geante.png",
    imageFirst: true,
  },
] as const;

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M15.5 4.5 8 12l7.5 7.5 1.4-1.4L10.8 12l6.1-6.1z"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="m8.5 4.5 7.5 7.5-7.5 7.5-1.4-1.4 6.1-6.1-6.1-6.1z"
      />
    </svg>
  );
}

function FeteSlider({
  fete,
  showPhoto,
}: {
  fete: Features["fete"];
  showPhoto: string;
}) {
  const [index, setIndex] = useState(0);
  const feteSlides = feteImages.map((src, i) => ({ src, alt: fete.slides[i] }));
  const count = feteSlides.length;

  function goTo(next: number) {
    setIndex((next + count) % count);
  }

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)]">
        {feteSlides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`object-cover transition-opacity duration-500 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <button
          type="button"
          className="absolute top-1/2 left-3 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand shadow-sm transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          aria-label={fete.previous}
          onClick={() => goTo(index - 1)}
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          className="absolute top-1/2 right-3 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand shadow-sm transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          aria-label={fete.next}
          onClick={() => goTo(index + 1)}
        >
          <ChevronRight />
        </button>
      </div>
      <div
        className="mt-5 flex justify-center gap-2.5"
        role="tablist"
        aria-label={fete.photosLabel}
      >
        {feteSlides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={showPhoto.replace("{n}", String(i + 1))}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i === index ? "bg-brand" : "bg-dot-inactive"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

type LaBrigueFeaturesProps = {
  content: Features;
  common: Dictionary["common"];
};

export function LaBrigueFeatures({ content, common }: LaBrigueFeaturesProps) {
  return (
    <section className="bg-surface px-[var(--page-pad-x)] pb-12 md:pb-20">
      <div className="container-page space-y-20 md:space-y-28">
        <article
          id="fete-brebis"
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <FeteSlider fete={content.fete} showPhoto={common.showPhoto} />
          <div>
            <h2 className="font-display text-[length:var(--text-h2)] font-semibold leading-[1.25] text-ink">
              {content.fete.title}
            </h2>
            <p className="mt-6 max-w-md text-ink-soft">{content.fete.body}</p>
          </div>
        </article>

        {otherFeatures.map((feature) => {
          const text = content[feature.key];
          return (
          <article
            key={feature.id}
            id={feature.id}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <div
              className={`relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)] ${
                feature.imageFirst ? "" : "lg:order-2"
              }`}
            >
              <Image
                src={feature.image}
                alt={text.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className={feature.imageFirst ? "" : "lg:order-1"}>
              <h2 className="font-display text-[length:var(--text-h2)] font-semibold leading-[1.25] text-ink">
                {text.title}
              </h2>
              <p className="mt-6 max-w-md text-ink-soft">{text.body}</p>
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
}
