import { HoverImage } from "@/components/HoverImage";

const heritageImages = [
  {
    src: "/assets/la-brigue/chez-luca.jpg",
    alt: "Chez Luca Pizza & Cucina in La Brigue",
    title: "Chez Luca Pizzeria",
  },
  {
    src: "/assets/la-brigue/fete-brebis.jpg",
    alt: "Sheep crossing the road during La Fête de la Brebis Brigasque",
    title: "La Fête de la Brebis Brigasque",
  },
  {
    src: "/assets/la-brigue/highland-cattle.jpg",
    alt: "Highland cattle in the meadows near La Brigue",
    title: "Highland Cattle",
  },
  {
    src: "/assets/la-brigue/levense-river.jpg",
    alt: "Stone bridge over the La Levense river",
    title: "La Levense River",
  },
];

export function LivingHeritage() {
  return (
    <section className="bg-surface px-[var(--page-pad-x)] pb-20 md:pb-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-split font-display text-[length:var(--text-h1)] font-semibold leading-[1.2]">
            The <span className="accent">Living Heritage</span> of the Alps
          </h2>
          <div className="mt-8 space-y-5 text-left text-ink-soft md:text-center">
            <p>
              Nestled in the Roya Valley of the Alpes-Maritimes, La Brigue is a
              village shaped by centuries of mountain life. Stone façades,
              painted chapels, and quiet lanes still carry the rhythm of a place
              where tradition and landscape remain closely intertwined.
            </p>
            <p>
              From seasonal festivals and alpine pastures to riverside walks and
              village gatherings, everyday life here stays rooted in heritage —
              offering visitors a rare sense of continuity in the heart of the
              French Southern Alps.
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 md:gap-6">
          {heritageImages.map((image) => (
            <li key={image.src}>
              <HoverImage
                src={image.src}
                alt={image.alt}
                title={image.title}
                variant="banner"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
