import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { LaBrigueFeatures } from "@/components/la-brigue/LaBrigueFeatures";
import { LaBrigueHero } from "@/components/la-brigue/LaBrigueHero";
import { LivingHeritage } from "@/components/la-brigue/LivingHeritage";
import { MonumentsHistoriques } from "@/components/la-brigue/MonumentsHistoriques";
import { SportsActivities } from "@/components/la-brigue/SportsActivities";
import { MountainTransition } from "@/components/MountainTransition";

export const metadata: Metadata = {
  title: "La Brigue | Les Alpes D’Azur",
  description:
    "Discover La Brigue — living alpine heritage, historic monuments, festivals, and outdoor activities in the French Southern Alps.",
};

export default function LaBriguePage() {
  return (
    <main className="flex-1">
      <LaBrigueHero />
      <LivingHeritage />
      <MonumentsHistoriques />
      <LaBrigueFeatures />
      <SportsActivities />
      <MountainTransition />
      <Footer />
    </main>
  );
}
