import { HoverImage } from "@/components/HoverImage";

const insideImages = [
  {
    src: "/assets/apartments/inside-grid-1.jpg",
    alt: "Bedroom with warm alpine bedding",
    title: "The Bedroom",
    description:
      "Step into a peaceful sanctuary that effortlessly blends classic mountain warmth with an intimate, inviting atmosphere. Flooded with natural light from three sides and anchored by authentic local mélèze wood floors, this sun drenched second floor retreat is thoughtfully designed as a quiet haven to completely unwind. From your choice of private balconies, you can watch the morning sun rise over the eastern peaks or look down upon the historic architecture and lively energy of the village square below. It offers an exquisite balance of rich historic character, modern lifestyle amenities, and cozy, wood fired comfort providing the ultimate space to rest your head and recharge after a day spent exploring the alpine peaks.",
  },
  {
    src: "/assets/apartments/inside-grid-2.jpg",
    alt: "Living room seating area",
    title: "The Living Room",
    description:
      "Designed with open, shared moments in mind, the central living area on the second floor seamlessly brings together historic charm and modern functionality. Flooded with natural light from the south and west through three large windows, this airy lounge and dining space features authentic local mélèze wood floors and a cozy wood fire to keep you warm on chilly Alpine nights. Whether you’re preparing a home cooked meal in the fully equipped kitchen complete with a hob, oven, microwave, and fridge/freezer or stepping out onto the west facing balcony to look over the bustling markets and festivals of Place de Nice and the historic Chapelle Saint-Michel, this sun drenched layout provides a warm, convivial heart for your mountain stay within this historic 1882 former staging post.",
  },
  {
    src: "/assets/apartments/inside-grid-3.jpg",
    alt: "Living space with fireplace",
    title: "The Living Room",
    description:
      "Designed with open, shared moments in mind, the central living area on the second floor seamlessly brings together historic charm and modern functionality. Flooded with natural light from the south and west through three large windows, this airy lounge and dining space features authentic local mélèze wood floors and a cozy wood fire to keep you warm on chilly Alpine nights. Whether you’re preparing a home cooked meal in the fully equipped kitchen complete with a hob, oven, microwave, and fridge/freezer or stepping out onto the west facing balcony to look over the bustling markets and festivals of Place de Nice and the historic Chapelle Saint-Michel, this sun drenched layout provides a warm, convivial heart for your mountain stay within this historic 1882 former staging post.",
  },
  {
    src: "/assets/apartments/inside-grid-4.jpg",
    alt: "Kitchen and dining area",
    title: "The Kitchen",
    description:
      "Fully equipped and thoughtfully designed for effortless holiday cooking, the kitchen serves as a functional extension of the sun-drenched central living area. Whether you are whipping up a fresh breakfast with ingredients from the local village markets or preparing a hearty dinner after a long day on the trails, the space provides everything you need, including a hob, oven, microwave, kettle, toaster, and a full fridge-freezer. It comes generously stocked with ample crockery, glassware, and cooking equipment, allowing you to host with ease. Positioned just steps away from the dining table and the west-facing balcony, it allows you to stay connected to the conversation and the beautiful views over Place de Nice while you cook.",
  },
  {
    src: "/assets/apartments/inside-grid-5.jpg",
    alt: "Bathroom details",
    title: "The Bathroom",
    description:
      "Designed as a crisp and refreshing space to wash away the day's adventures, the bathroom seamlessly combines modern functionality with classic village charm. This well appointed room features a spacious walk-in shower, washbasin, WC, and a traditional bidet. A small, east-facing window invites the soft morning light inside, creating a bright and airy atmosphere as you prepare for a day exploring the peaks. Fully stocked with fresh towels and essential comforts, it offers a clean, private sanctuary to refresh and recharge in the heart of this historic building.",
  },
  {
    src: "/assets/apartments/inside-grid-6.jpg",
    alt: "Dining area beside the living space",
    title: "The Dining Room",
    description:
      "Perfectly positioned within the sun-drenched, open-plan heart of the apartment, the dining area is designed with shared moments and convivial hosting in mind. Flooded with natural light from large south- and west-facing windows, the space offers an inviting setting to gather over home-cooked meals prepared in the adjacent fully equipped kitchen. With authentic local mélèze wood floors underfoot and the warmth of the crackling wood fire nearby, it creates a cozy, intimate atmosphere for planning your day's adventures. After dinner, you can step directly onto the west-facing balcony to watch the evening light fade over the historic Chapelle Saint-Michel and the mountain peaks beyond.",
  },
];

export function ApartmentInside() {
  return (
    <section className="bg-surface px-[var(--page-pad-x)] pb-20 md:pb-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-split font-display text-[length:var(--text-h1)] font-semibold leading-[1.2]">
            Inside <span className="accent">Les Alpes D’Azur</span>
          </h2>
          <p className="mt-8 text-ink-soft">
            The apartment opens into a bright living and kitchen space with a
            welcoming fireplace, a comfortable double bedroom, and a thoughtfully
            arranged bathroom. Every corner is prepared for slow mornings, quiet
            evenings, and easy days between adventures.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 md:gap-6">
          {insideImages.map((image) => (
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
