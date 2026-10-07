import type { Dictionary } from "@/i18n/dictionaries";

export function Welcome({ dict }: { dict: Dictionary }) {
  const t = dict.home.welcome;

  return (
    <section className="bg-surface px-[var(--page-pad-x)] py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="heading-split font-display text-[length:var(--text-h1)] font-semibold leading-[1.2]">
          {t.titleLead} <span className="accent">{t.titleAccent}</span>
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
