import type { Dictionary } from "@/i18n/dictionaries";

export function MonumentsHistoriques({ dict }: { dict: Dictionary }) {
  const t = dict.laBrigue.monuments;

  return (
    <section className="bg-surface px-[var(--page-pad-x)] pb-20 md:pb-28">
      <div className="container-page mx-auto max-w-3xl">
        <h2 className="heading-split text-center font-display text-[length:var(--text-h1)] font-semibold leading-[1.2]">
          {t.titleLead} <span className="accent">{t.titleAccent}</span>
        </h2>
        <div className="mt-8 space-y-5 text-ink-soft">
          {t.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <ul className="list-disc space-y-2 pl-5 marker:text-brand">
            {t.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
