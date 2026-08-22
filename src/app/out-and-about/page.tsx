import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { MountainTransition } from "@/components/MountainTransition";
import { OutAndAboutCards } from "@/components/out-and-about/OutAndAboutCards";
import { OutAndAboutHero } from "@/components/out-and-about/OutAndAboutHero";
import { OutAndAboutIntro } from "@/components/out-and-about/OutAndAboutIntro";

export const metadata: Metadata = {
  title: "Out & About | Les Alpes D’Azur",
  description:
    "Explore beyond La Brigue — valleys, chapels, scenic railways, mountain passes, ski resorts, and the Mediterranean coast.",
};

export default function OutAndAboutPage() {
  return (
    <main className="flex-1">
      <OutAndAboutHero />
      <OutAndAboutIntro />
      <OutAndAboutCards />
      <MountainTransition />
      <Footer />
    </main>
  );
}
