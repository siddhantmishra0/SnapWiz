const features = [
  { t: "Verified professionals", d: "Every photographer is portfolio-reviewed and ID-verified." },
  { t: "Real-time availability", d: "See open dates the moment they appear in a calendar." },
  { t: "Smart matching", d: "Our AI suggests photographers who fit your aesthetic and budget." },
  { t: "Secure payments", d: "Pay safely with bank-grade protection. Refund if it rains." },
  { t: "Location-based search", d: "Browse local talent in 42+ cities across India." },
  { t: "Flexible packages", d: "Hourly, half-day, full event — priced transparently." },
  { t: "Reel & video booking", d: "Cinematic 30-second edits delivered in 48 hours." },
  { t: "Personal moodboards", d: "Share Pinterest boards and references in one click." },
];

export function Features() {
  return (
    <section className="bg-background py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid items-end gap-8 md:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">04 — Platform</p>
            <h2 className="mt-3 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] text-balance">
              Built like a studio. <br />
              <span className="font-italic-serif text-foreground/70">Feels like a friend.</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground md:max-w-md md:justify-self-end">
            The little details that turn a transaction into a treasured experience — engineered into every
            corner of the SnapWiz app.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.t}
              className="group relative bg-card p-7 transition hover:bg-ivory"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className="mb-10 grid h-10 w-10 place-items-center rounded-full border hairline text-foreground/70 transition group-hover:border-gold group-hover:text-gold">
                <span className="font-display text-sm">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-display text-lg leading-tight">{f.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
