import type { Dictionary } from "@/i18n/dictionaries";

export function ApartmentDetails({ dict }: { dict: Dictionary }) {
  const t = dict.apartment.details;

  return (
    <section className="bg-surface px-[var(--page-pad-x)] pb-16 md:pb-24">
      <div className="container-page grid gap-14 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="font-display text-[length:var(--text-h2)] font-semibold text-ink">
            {t.additionalTitle}
          </h2>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-ink-soft marker:text-brand">
            {t.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-[length:var(--text-h2)] font-semibold text-ink">
            {t.pricesTitle}
          </h2>
          <p className="mt-6 text-ink-soft">{t.pricesBody}</p>
        </div>
      </div>
    </section>
  );
}
