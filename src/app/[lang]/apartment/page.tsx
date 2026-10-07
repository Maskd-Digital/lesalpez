import type { Metadata } from "next";
import { ApartmentAbout } from "@/components/apartment/ApartmentAbout";
import { ApartmentDetails } from "@/components/apartment/ApartmentDetails";
import { ApartmentHero } from "@/components/apartment/ApartmentHero";
import { ApartmentInside } from "@/components/apartment/ApartmentInside";
import { Footer } from "@/components/Footer";
import { MountainTransition } from "@/components/MountainTransition";
import { pageMetadata, resolveLocale } from "@/i18n/dictionaries";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/apartment">): Promise<Metadata> {
  const { lang, dict } = await resolveLocale(params);
  return pageMetadata(lang, "/apartment", dict.apartment.meta);
}

export default async function ApartmentPage({
  params,
}: PageProps<"/[lang]/apartment">) {
  const { lang, dict } = await resolveLocale(params);

  return (
    <main className="flex-1">
      <ApartmentHero lang={lang} dict={dict} />
      <ApartmentAbout dict={dict} />
      <ApartmentInside dict={dict} />
      <ApartmentDetails dict={dict} />
      <MountainTransition />
      <Footer lang={lang} dict={dict} />
    </main>
  );
}
