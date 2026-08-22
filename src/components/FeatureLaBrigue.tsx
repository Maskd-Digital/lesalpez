import Image from "next/image";
import { Button } from "./Button";

export function FeatureLaBrigue() {
  return (
    <section
      id="la-brigue"
      className="bg-surface px-[var(--page-pad-x)] pb-20 md:pb-28"
    >
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)]">
          <Image
            src="/assets/home/living-heritage-slide-1.jpg"
            alt="Historic stone tower and architecture in La Brigue"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="heading-split font-display text-[length:var(--text-h2)] font-semibold leading-[1.25]">
            La Brigue :{" "}
            <span className="accent">The Living Heritage of the Alps</span>
          </h2>
          <p className="mt-6 max-w-md text-ink-soft">
            Stone lanes, painted chapels, and mountain silence — La Brigue
            keeps centuries of Alpine culture alive. Stroll the village, visit
            nearby valleys, and feel the rhythm of a place shaped by tradition
            and landscape.
          </p>
          <div className="mt-8">
            <Button href="/la-brigue">View More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
