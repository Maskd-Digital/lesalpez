import Image from "next/image";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";

export function ApartmentHero() {
  return (
    <section className="relative min-h-[120svh] overflow-hidden text-white">
      <Image
        src="/assets/apartments/hero.jpg"
        alt="Historic blue façade of the apartment building in La Brigue"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-transparent" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[22%] bg-gradient-to-b from-transparent via-surface/35 to-surface"
        aria-hidden="true"
      />

      <Header />

      <div className="relative z-10 flex min-h-[120svh] flex-col items-center justify-center px-[var(--page-pad-x)] pb-44 pt-28 text-center md:pb-52">
        <h1 className="animate-fade-up font-display text-[length:var(--text-hero)] font-semibold leading-[1.15] tracking-tight">
          High Above the Coast:
          <br />
          An Apartment Closer to the Sky.
        </h1>
        <div className="animate-fade-up-delay mt-10">
          <Button href="#contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
