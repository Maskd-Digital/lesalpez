import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { MountainTransition } from "@/components/MountainTransition";
import { OutAndAboutCards } from "@/components/out-and-about/OutAndAboutCards";
import { OutAndAboutHero } from "@/components/out-and-about/OutAndAboutHero";
import { OutAndAboutIntro } from "@/components/out-and-about/OutAndAboutIntro";
import { pageMetadata, resolveLocale } from "@/i18n/dictionaries";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/out-and-about">): Promise<Metadata> {
  const { lang, dict } = await resolveLocale(params);
  return pageMetadata(lang, "/out-and-about", dict.outAndAbout.meta);
}

export default async function OutAndAboutPage({
  params,
}: PageProps<"/[lang]/out-and-about">) {
  const { lang, dict } = await resolveLocale(params);

  return (
    <main className="flex-1">
      <OutAndAboutHero lang={lang} dict={dict} />
      <OutAndAboutIntro dict={dict} />
      <OutAndAboutCards dict={dict} />
      <MountainTransition />
      <Footer lang={lang} dict={dict} />
    </main>
  );
}
