const monuments = [
  "Chapelle Notre-Dame-des-Fontaines — renowned for its remarkable frescoes",
  "Collégiale Saint-Martin — the historic parish heart of the village",
  "Chapelle Saint-Michel — a landmark overlooking Place de Nice",
  "Remains of the Château des Lascaris — perched above the valley",
];

export function MonumentsHistoriques() {
  return (
    <section className="bg-surface px-[var(--page-pad-x)] pb-20 md:pb-28">
      <div className="container-page mx-auto max-w-3xl">
        <h2 className="heading-split text-center font-display text-[length:var(--text-h1)] font-semibold leading-[1.2]">
          Monuments <span className="accent">Historiques</span>
        </h2>
        <div className="mt-8 space-y-5 text-ink-soft">
          <p>
            La Brigue preserves an exceptional concentration of historic
            monuments for a village of its size. Sacred art, fortified remains,
            and centuries-old architecture mark the landscape and tell the story
            of a community shaped by faith, trade, and mountain defence.
          </p>
          <p>
            Visitors can explore chapels, collegiate churches, and castle ruins
            that remain woven into daily village life — each one offering a
            quiet encounter with the artistic and architectural heritage of the
            Roya Valley.
          </p>
          <ul className="list-disc space-y-2 pl-5 marker:text-brand">
            {monuments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
