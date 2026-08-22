import Image from "next/image";
import { Button } from "./Button";

const places = [
  {
    src: "/assets/home/circle-1.jpg",
    label: "Train des Merveilles",
    alt: "Train arriving at Gare de La Brigue",
  },
  {
    src: "/assets/home/circle-2.jpg",
    label: "Valley Trails",
    alt: "Hiker on a mountain valley path",
  },
  {
    src: "/assets/home/circle-3.png",
    label: "Painted Chapels",
    alt: "Frescoed chapel interior near La Brigue",
  },
  {
    src: "/assets/home/circle-4.png",
    label: "Mountain Streams",
    alt: "Visitors resting by a forest stream",
  },
  {
    src: "/assets/home/circle-5.jpg",
    label: "Fête du Citron",
    alt: "Citrus festival sculptures in Menton",
  },
  {
    src: "/assets/home/circle-6.png",
    label: "Ski Resorts",
    alt: "Sunny ski slopes and chairlift in the Alps",
  },
];

export function PlacesToVisit() {
  return (
    <section
      id="out-and-about"
      className="bg-surface px-[var(--page-pad-x)] pb-16 md:pb-24"
    >
      <div className="container-page">
        <h2 className="heading-split text-center font-display text-[length:var(--text-h1)] font-semibold leading-[1.2]">
          Places to <span className="accent">Visit</span>
        </h2>

        <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 md:gap-x-10 md:gap-y-14">
          {places.map((place) => (
            <li key={place.src} className="flex flex-col items-center text-center">
              <div className="relative aspect-square w-full max-w-[220px] overflow-hidden rounded-full">
                <Image
                  src={place.src}
                  alt={place.alt}
                  fill
                  sizes="(max-width: 768px) 45vw, 220px"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-[length:var(--text-caption)] font-medium text-brand">
                {place.label}
              </p>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-14 max-w-2xl text-center">
          <p className="text-ink-soft">
            From scenic railway journeys and quiet chapel visits to coastal
            festivals and winter sports, the Alpes-Maritimes are endlessly
            worth exploring — all within easy reach of your retreat.
          </p>
          <div className="mt-8">
            <Button href="/out-and-about">View More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
