export function Welcome() {
  return (
    <section className="bg-surface px-[var(--page-pad-x)] py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="heading-split font-display text-[length:var(--text-h1)] font-semibold leading-[1.2]">
          Welcome to <span className="accent">Les Alpes D’Azur</span>
        </h2>
        <div className="mt-8 space-y-5 text-ink-soft">
          <p>
            Nestled in the picturesque village of La Brigue, our holiday
            apartment invites you to slow down and breathe the mountain air.
            Wake to alpine light, wander heritage lanes, and return to a calm,
            thoughtfully prepared home base.
          </p>
          <p>
            Whether you come for hiking trails, historic chapels, winter
            slopes, or simply a quiet terrace evening, Les Alpes D’Azur is your
            retreat in the heart of the French Southern Alps.
          </p>
        </div>
      </div>
    </section>
  );
}
