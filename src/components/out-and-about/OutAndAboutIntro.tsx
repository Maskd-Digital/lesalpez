import type { Dictionary } from "@/i18n/dictionaries";

export function OutAndAboutIntro({ dict }: { dict: Dictionary }) {
  const t = dict.outAndAbout.intro;

  return (
    <section className="bg-surface px-[var(--page-pad-x)] pb-8 pt-4 md:pb-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-[length:var(--text-h1)] font-semibold leading-[1.2] text-brand">
          {t.title}
        </h2>
        <div className="mt-8 space-y-5 text-ink-soft">
          {t.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
