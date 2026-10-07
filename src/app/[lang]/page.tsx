import type { Metadata } from "next";
import { FeatureApartment } from "@/components/FeatureApartment";
import { FeatureLaBrigue } from "@/components/FeatureLaBrigue";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MountainTransition } from "@/components/MountainTransition";
import { PlacesToVisit } from "@/components/PlacesToVisit";
import { Welcome } from "@/components/Welcome";
import { pageMetadata, resolveLocale } from "@/i18n/dictionaries";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang, dict } = await resolveLocale(params);
  return pageMetadata(lang, "/", dict.home.meta);
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang, dict } = await resolveLocale(params);

  return (
    <main className="flex-1">
      <Hero lang={lang} dict={dict} />
      <Welcome dict={dict} />
      <FeatureApartment
        lang={lang}
        content={dict.home.apartment}
        common={dict.common}
      />
      <FeatureLaBrigue lang={lang} dict={dict} />
      <PlacesToVisit lang={lang} dict={dict} />
      <MountainTransition />
      <Footer lang={lang} dict={dict} />
    </main>
  );
}
