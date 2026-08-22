"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "./Button";

const slides = [
  {
    src: "/assets/home/our-apartment-slide-1.jpg",
    alt: "Bright living space in the Les Alpes D’Azur apartment",
  },
  {
    src: "/assets/home/our-apartment-slide-2.jpg",
    alt: "Bathroom with walk-in shower",
  },
  {
    src: "/assets/home/our-apartment-slide-3.jpg",
    alt: "Bedroom with red patterned bedspread",
  },
  {
    src: "/assets/home/our-apartment-slide-4.jpg",
    alt: "Kitchen looking through to the living space",
  },
  {
    src: "/assets/home/our-apartment-slide-5.jpg",
    alt: "Balcony looking out over La Brigue and the mountains",
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

export function FeatureApartment() {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  function goTo(next: number) {
    setIndex((next + count) % count);
  }

  return (
    <section
      id="apartment"
      className="bg-surface px-[var(--page-pad-x)] pb-20 md:pb-28"
    >
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <h2 className="heading-split font-display text-[length:var(--text-h2)] font-semibold leading-[1.25]">
            Our <span className="accent">Apartment</span>
          </h2>
          <p className="mt-6 max-w-md text-ink-soft">
            A luminous alpine flat with warm interiors, generous light, and
            everything you need for an easy stay — from leisurely breakfasts to
            evenings in after a day outdoors.
          </p>
          <div className="mt-8">
            <Button href="/apartment">View More</Button>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)]">
            {slides.map((slide, i) => (
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
              aria-label="Previous photo"
              onClick={() => goTo(index - 1)}
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              className="absolute top-1/2 right-3 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand shadow-sm transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              aria-label="Next photo"
              onClick={() => goTo(index + 1)}
            >
              <ChevronRight />
            </button>
          </div>
          <div
            className="mt-5 flex justify-center gap-2.5"
            role="tablist"
            aria-label="Apartment photos"
          >
            {slides.map((slide, i) => (
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
      </div>
    </section>
  );
}
