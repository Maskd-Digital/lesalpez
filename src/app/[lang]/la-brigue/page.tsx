import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { LaBrigueFeatures } from "@/components/la-brigue/LaBrigueFeatures";
import { LaBrigueHero } from "@/components/la-brigue/LaBrigueHero";
import { LivingHeritage } from "@/components/la-brigue/LivingHeritage";
import { MonumentsHistoriques } from "@/components/la-brigue/MonumentsHistoriques";
import { SportsActivities } from "@/components/la-brigue/SportsActivities";
import { MountainTransition } from "@/components/MountainTransition";
import { pageMetadata, resolveLocale } from "@/i18n/dictionaries";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/la-brigue">): Promise<Metadata> {
  const { lang, dict } = await resolveLocale(params);
  return pageMetadata(lang, "/la-brigue", dict.laBrigue.meta);
}

export default async function LaBriguePage({
  params,
}: PageProps<"/[lang]/la-brigue">) {
  const { lang, dict } = await resolveLocale(params);

  return (
    <main className="flex-1">
      <LaBrigueHero lang={lang} dict={dict} />
      <LivingHeritage dict={dict} />
      <MonumentsHistoriques dict={dict} />
      <LaBrigueFeatures
        content={dict.laBrigue.features}
        common={dict.common}
      />
      <SportsActivities dict={dict} />
      <MountainTransition />
      <Footer lang={lang} dict={dict} />
    </main>
  );
}
