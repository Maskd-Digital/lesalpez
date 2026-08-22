"use client";

import Image from "next/image";
import { useState } from "react";

const feteSlides = [
  {
    src: "/assets/la-brigue/slider-1.jpg",
    alt: "Festival scenes during La Fête de la Brebis Brigasque",
  },
  {
    src: "/assets/la-brigue/slider-2.jpg",
    alt: "Village celebration at La Fête de la Brebis Brigasque",
  },
  {
    src: "/assets/la-brigue/slider-3.jpg",
    alt: "Crowds and festivities in La Brigue",
  },
];

const otherFeatures = [
  {
    id: "chateau-lascaris",
    title: "Château des Lascaris",
    image: "/assets/la-brigue/chateau-lascaris.png",
    alt: "Stone remains of the Château des Lascaris above La Brigue",
    imageFirst: false,
    body: "Rising above the village, the ruins of the Château des Lascaris recall centuries of regional power and defence. From the heights, stone walls and towers open onto sweeping valley views — a reminder of La Brigue’s strategic place between alpine routes and the Mediterranean.",
  },
  {
    id: "abeille-geante",
    title: "L’Abeille Géante de La Brigue",
    image: "/assets/la-brigue/abeille-geante.png",
    alt: "Giant bee sculpture overlooking the valley near La Brigue",
    imageFirst: true,
    body: "This striking contemporary sculpture watches over the valley as a modern emblem of the region. Set against cliffs and alpine light, L’Abeille Géante offers a memorable stop for walkers and visitors exploring the landscapes around La Brigue.",
  },
];

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

function FeteSlider() {
  const [index, setIndex] = useState(0);
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
          aria-label="Previous festival photo"
          onClick={() => goTo(index - 1)}
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          className="absolute top-1/2 right-3 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand shadow-sm transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          aria-label="Next festival photo"
          onClick={() => goTo(index + 1)}
        >
          <ChevronRight />
        </button>
      </div>
      <div
        className="mt-5 flex justify-center gap-2.5"
        role="tablist"
        aria-label="Festival photos"
      >
        {feteSlides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show photo ${i + 1}`}
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

export function LaBrigueFeatures() {
  return (
    <section className="bg-surface px-[var(--page-pad-x)] pb-12 md:pb-20">
      <div className="container-page space-y-20 md:space-y-28">
        <article
          id="fete-brebis"
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <FeteSlider />
          <div>
            <h2 className="font-display text-[length:var(--text-h2)] font-semibold leading-[1.25] text-ink">
              La Fête de la Brebis Brigasque
            </h2>
            <p className="mt-6 max-w-md text-ink-soft">
              Each year the village celebrates the Brigasque sheep with music,
              food, and community gatherings that fill the streets of La Brigue.
              It is a joyful expression of local identity — connecting pasture
              traditions with the living culture of the Roya Valley.
            </p>
          </div>
        </article>

        {otherFeatures.map((feature) => (
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
                alt={feature.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className={feature.imageFirst ? "" : "lg:order-1"}>
              <h2 className="font-display text-[length:var(--text-h2)] font-semibold leading-[1.25] text-ink">
                {feature.title}
              </h2>
              <p className="mt-6 max-w-md text-ink-soft">{feature.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
