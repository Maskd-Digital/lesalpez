import { HoverImage } from "@/components/HoverImage";

const aboutImages = [
  {
    src: "/assets/apartments/about-grid-1.jpg",
    alt: "Mountain valley and village seen from the east balcony",
    title: "View from the East Balcony",
    description:
      "Wake up to a sweeping living canvas. Looking out from the east balcony, your mornings are greeted by the first golden light hitting the snow-dusted ridges, framing a picturesque valley where rugged alpine cliffs meet peaceful village life. It’s the perfect backdrop for your morning espresso.",
  },
  {
    src: "/assets/apartments/about-grid-2.jpg",
    alt: "Breakfast set on the east balcony overlooking the mountains",
    title: "The East Balcony",
    description:
      "Step outside into your own private viewing gallery over the valley. Crafted for slow mornings and quiet afternoons, this sun-washed outdoor space offers a peaceful setting to sit back, feel the crisp mountain breeze, and absorb the timeless beauty of the surrounding peaks.",
  },
  {
    src: "/assets/apartments/about-grid-3.jpg",
    alt: "Guest sitting on the east balcony looking toward the mountains",
    title: "The East Balcony",
    description:
      "Step outside into your own private viewing gallery over the valley. Crafted for slow mornings and quiet afternoons, this sun-washed outdoor space offers a peaceful setting to sit back, feel the crisp mountain breeze, and absorb the timeless beauty of the surrounding peaks.",
  },
  {
    src: "/assets/apartments/about-grid-4.jpg",
    alt: "Village square and rocky peaks seen from the west balcony",
    title: "View from the West Balcony",
    description:
      "Look out from the west balcony and feel instantly connected to the pulse of the region. This vantage point overlooks the historic, sun-baked village square, framed by dramatic, towering rock faces that rise sharply into the sky. It's the perfect place to watch local life unfold against a breathtaking mountain backdrop as the afternoon transitions into evening.",
  },
];

export function ApartmentAbout() {
  return (
    <section className="bg-surface px-[var(--page-pad-x)] pb-20 md:pb-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-split font-display text-[length:var(--text-h1)] font-semibold leading-[1.2]">
            About <span className="accent">Les Alpes D’Azur</span>
          </h2>
          <p className="mt-8 text-ink-soft">
            Once an Albergo from 1882, the building still carries the quiet
            grandeur of another era. Today Les Alpes D’Azur offers a serene
            holiday apartment at Place de Nice in the heart of La Brigue —
            high above the Riviera, close to mountain trails, and steeped in
            village life.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 md:gap-6">
          {aboutImages.map((image) => (
            <li key={image.src}>
              <HoverImage
                src={image.src}
                alt={image.alt}
                title={image.title}
                description={image.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
