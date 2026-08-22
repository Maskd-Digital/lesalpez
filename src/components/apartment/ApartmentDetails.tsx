const additionalItems = [
  "Access is via stairs — please note there is no lift in the building.",
  "Pets may be welcome on request; let us know when you enquire.",
  "Local village events such as the Fête de la Brebis bring seasonal life to La Brigue.",
  "Check-in from 16:00 · Check-out by 10:00 (flexible times may be possible).",
  "The apartment is non-smoking throughout.",
  "Parking is available nearby; the village is also reachable by regional train.",
];

export function ApartmentDetails() {
  return (
    <section className="bg-surface px-[var(--page-pad-x)] pb-16 md:pb-24">
      <div className="container-page grid gap-14 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="font-display text-[length:var(--text-h2)] font-semibold text-ink">
            Additional Information
          </h2>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-ink-soft marker:text-brand">
            {additionalItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-[length:var(--text-h2)] font-semibold text-ink">
            Prices &amp; availability
          </h2>
          <p className="mt-6 text-ink-soft">
            Current rates and open dates are listed on Airbnb and Booking.com.
            Prefer a personal reply? Use the contact form below and we’ll help
            you plan your stay in La Brigue.
          </p>
        </div>
      </div>
    </section>
  );
}
