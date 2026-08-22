import type { Metadata } from "next";
import { ApartmentAbout } from "@/components/apartment/ApartmentAbout";
import { ApartmentDetails } from "@/components/apartment/ApartmentDetails";
import { ApartmentHero } from "@/components/apartment/ApartmentHero";
import { ApartmentInside } from "@/components/apartment/ApartmentInside";
import { Footer } from "@/components/Footer";
import { MountainTransition } from "@/components/MountainTransition";

export const metadata: Metadata = {
  title: "Apartment | Les Alpes D’Azur",
  description:
    "Discover Les Alpes D’Azur — a serene holiday apartment at Place de Nice in La Brigue, high above the coast in the French Southern Alps.",
};

export default function ApartmentPage() {
  return (
    <main className="flex-1">
      <ApartmentHero />
      <ApartmentAbout />
      <ApartmentInside />
      <ApartmentDetails />
      <MountainTransition />
      <Footer />
    </main>
  );
}
