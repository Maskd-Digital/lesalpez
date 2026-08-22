import { FeatureApartment } from "@/components/FeatureApartment";
import { FeatureLaBrigue } from "@/components/FeatureLaBrigue";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MountainTransition } from "@/components/MountainTransition";
import { PlacesToVisit } from "@/components/PlacesToVisit";
import { Welcome } from "@/components/Welcome";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <Welcome />
      <FeatureApartment />
      <FeatureLaBrigue />
      <PlacesToVisit />
      <MountainTransition />
      <Footer />
    </main>
  );
}
