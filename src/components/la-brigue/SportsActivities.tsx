import { HoverImage } from "@/components/HoverImage";

const sports = [
  {
    src: "/assets/la-brigue/sport-1.jpg",
    alt: "Climber on a via ferrata cliff above the valley",
    title: "Via Ferrata",
    description:
      "This unusual sport, which allows fit but untrained enthusiasts to climb mountains, can be found in La Brigue and Tende. The La Brigue via ferrata is set against an 80-metre vertical cliff overlooking the village and includes 8 monkey bridges and a 120-metre zip wire.",
  },
  {
    src: "/assets/la-brigue/sport-2.jpg",
    alt: "Skiers on a snowy ridge near Limone Piemonte",
    title: "Skiing",
    description:
      "The nearest skiing is in Limone Piemonte, 25 kms from La Brigue, accessible by road or train. The connecting tunnels through the Col de Tende between France and Italy, which were destroyed by Storm Alex in 2020, have re-opened, at present with limited accessibility.",
  },
  {
    src: "/assets/la-brigue/sport-3.jpg",
    alt: "Mountain biker on a trail toward alpine peaks",
    title: "Mountain Biking",
    description:
      "There are lots of possibilities, including a 20 km loop from La Brigue.",
  },
  {
    src: "/assets/la-brigue/sport-4.jpg",
    alt: "People training at an outdoor gym",
    title: "Outdoor Gym",
    description:
      "Nestled beneath the dramatic cliffs of La Brigue, these outdoor fitness parks offer a refreshing workout under the open sky. Fitness enthusiasts can train on bodyweight equipment while taking in panoramic Alpine and valley views. It’s the perfect, free spot to build strength and high-altitude endurance right in the heart of nature.",
  },
  {
    src: "/assets/la-brigue/sport-5.jpg",
    alt: "Tennis players on an outdoor court at sunset",
    title: "Tennis",
    description:
      "Set against the stunning Alpine landscapes of La Brigue, tennis offers a fast-paced alternative to the area's rugged mountain climbs. Players can enjoy intense rallies and sharp volleys surrounded by dramatic cliffs and historic valley views. It’s a perfect blend of high-altitude endurance and open-air sport, right in the heart of the mountains.",
  },
  {
    src: "/assets/la-brigue/sport-6.jpg",
    alt: "Pétanque boules on a terrain in La Brigue",
    title: "Other Activities",
    description:
      "Within La Brigue are outdoor recreational facilities including a fine hard surface tennis court, table tennis, gym, children’s playground and, of course, several pétanque terrains.",
  },
];

export function SportsActivities() {
  return (
    <section className="bg-surface px-[var(--page-pad-x)] pb-32 md:pb-44">
      <div className="container-page">
        <h2 className="text-center font-display text-[length:var(--text-h1)] font-semibold leading-[1.2] text-brand">
          Sports &amp; Activities
        </h2>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 md:gap-6">
          {sports.map((item) => (
            <li key={item.src}>
              <HoverImage
                src={item.src}
                alt={item.alt}
                title={item.title}
                description={item.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
