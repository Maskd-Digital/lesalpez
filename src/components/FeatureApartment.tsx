"use client";

import Image from "next/image";
import { useState } from "react";
import { localizedHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Button } from "./Button";

const slideImages = [
  "/assets/home/our-apartment-slide-1.jpg",
  "/assets/home/our-apartment-slide-2.jpg",
  "/assets/home/our-apartment-slide-3.jpg",
  "/assets/home/our-apartment-slide-4.jpg",
  "/assets/home/our-apartment-slide-5.jpg",
];

type FeatureApartmentProps = {
  lang: Locale;
  content: Dictionary["home"]["apartment"];
  common: Dictionary["common"];
};

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

export function FeatureApartment({
  lang,
  content,
  common,
}: FeatureApartmentProps) {
  const [index, setIndex] = useState(0);
  const slides = slideImages.map((src, i) => ({ src, alt: content.slides[i] }));
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
            {content.titleLead} <span className="accent">{content.titleAccent}</span>
          </h2>
          <p className="mt-6 max-w-md text-ink-soft">{content.body}</p>
          <div className="mt-8">
            <Button href={localizedHref(lang, "/apartment")}>
              {common.viewMore}
            </Button>
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
              aria-label={common.previousPhoto}
              onClick={() => goTo(index - 1)}
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              className="absolute top-1/2 right-3 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand shadow-sm transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              aria-label={common.nextPhoto}
              onClick={() => goTo(index + 1)}
            >
              <ChevronRight />
            </button>
          </div>
          <div
            className="mt-5 flex justify-center gap-2.5"
            role="tablist"
            aria-label={content.photosLabel}
          >
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={common.showPhoto.replace("{n}", String(i + 1))}
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
