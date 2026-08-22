import Image from "next/image";

const places = [
  {
    src: "/assets/out-and-about/card-1.png",
    alt: "Stream and boulders in the Vallon de la Lévenza",
    titleLead: "Vallon de la",
    titleAccent: "Lévenza",
    body: "Follow clear mountain water through shaded rocks and woodland. A gentle walk close to the village, ideal for cooling off and lingering by the stream.",
  },
  {
    src: "/assets/out-and-about/card-2.jpg",
    alt: "Train at Gare de La Brigue",
    titleLead: "Train des",
    titleAccent: "Merveilles",
    body: "Ride the scenic railway through the Roya Valley — a memorable journey linking village life with mountain panoramas and nearby Italian towns.",
  },
  {
    src: "/assets/out-and-about/card-3.jpg",
    alt: "People in traditional dress on Pont du Coq",
    titleLead: "Pont du",
    titleAccent: "Coq",
    body: "A historic stone bridge and gathering place where local heritage comes alive — especially during festivals and village celebrations.",
  },
  {
    src: "/assets/out-and-about/card-4.png",
    alt: "Frescoes inside Notre-Dame des Fontaines",
    titleLead: "Notre-Dame des",
    titleAccent: "Fontaines",
    body: "One of the region’s great painted chapels, filled with vivid frescoes that reward a quiet visit and a slow look at Alpine sacred art.",
  },
  {
    src: "/assets/out-and-about/card-5.jpg",
    alt: "Turquoise alpine lake in the Mercantour",
    titleLead: "The",
    titleAccent: "Mercantour",
    body: "High lakes, wild ridges, and protected wilderness. The Mercantour National Park is the place for longer hikes and unforgettable alpine light.",
  },
  {
    src: "/assets/out-and-about/card-6.jpg",
    alt: "Mountain path toward the Hamlet of Castérino",
    titleLead: "The Hamlet of",
    titleAccent: "Castérino",
    body: "A peaceful mountain hamlet reached by scenic trails and valley roads — perfect for walking, nature watching, and open-air stillness.",
  },
  {
    src: "/assets/out-and-about/card-7.jpg",
    alt: "Winding mountain road at Col de Tende",
    titleLead: "Col de",
    titleAccent: "Tende",
    body: "Cross between France and Italy on one of the Alps’ historic high passes — dramatic cliffs, sweeping bends, and memorable viewpoints.",
  },
  {
    src: "/assets/out-and-about/card-8.png",
    alt: "Ski slopes at Limone Piemonte",
    titleLead: "Limone",
    titleAccent: "Piemonte",
    body: "Winter sports and mountain air just across the border. Limone offers skiing and a lively alpine day trip from La Brigue.",
  },
  {
    src: "/assets/out-and-about/card-9.jpg",
    alt: "Sunlit coastal town square on the Mediterranean",
    titleLead: "The",
    titleAccent: "Coast",
    body: "Drop down to the Mediterranean for colour, sea air, and café terraces — a bright contrast to the high valleys of the Alpes-Maritimes.",
  },
  {
    src: "/assets/out-and-about/card-10.jpg",
    alt: "Citrus sculptures at Menton’s Fête du Citron",
    titleLead: "Fête du",
    titleAccent: "Citron",
    body: "Menton’s famous citrus festival fills the coast with scent, colour, and spectacular fruit sculptures — a joyful seasonal excursion.",
  },
];

export function OutAndAboutCards() {
  return (
    <section className="bg-surface px-[var(--page-pad-x)] pb-32 pt-10 md:pb-44 md:pt-16">
      <ul className="container-page grid items-stretch gap-x-8 gap-y-20 sm:grid-cols-2">
        {places.map((place) => (
          <li key={place.src} className="relative flex h-full flex-col pt-[4.5rem]">
            <div className="absolute top-0 left-1/2 z-10 h-36 w-36 -translate-x-1/2 overflow-hidden rounded-full shadow-[0_8px_24px_rgba(0,74,83,0.12)] md:h-40 md:w-40">
              <Image
                src={place.src}
                alt={place.alt}
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>

            <article className="flex h-full flex-1 flex-col rounded-[1.25rem] bg-white px-6 pt-24 pb-8 text-center shadow-[0_10px_30px_rgba(0,74,83,0.08)] md:px-8 md:pt-28 md:pb-10">
              <h3 className="font-display text-xl font-semibold leading-snug text-ink md:text-2xl">
                {place.titleLead}{" "}
                <span className="text-brand">{place.titleAccent}</span>
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft md:text-[0.9375rem]">
                {place.body}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
