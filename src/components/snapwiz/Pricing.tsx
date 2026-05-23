const tiers = [
  {
    n: "Essence",
    p: "4,999",
    s: "Per session",
    f: ["2-hour shoot", "1 photographer", "60+ edited photos", "48-hour delivery"],
  },
  {
    n: "Signature",
    p: "12,499",
    s: "Per event",
    f: ["Full day coverage", "Lead + assistant", "200+ edited photos", "Cinematic reel (30s)", "Premium album mockup"],
    hl: true,
  },
  {
    n: "Heirloom",
    p: "29,999",
    s: "Per event",
    f: ["Multi-day coverage", "Crew of 3", "500+ photos · 4K video", "Drone & gimbal", "Hand-bound album"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-background py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">08 — Packages</p>
          <h2 className="mt-3 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] text-balance">
            Transparent pricing. <br />
            <span className="font-italic-serif text-foreground/70">No surprises, ever.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.n}
              className={`relative flex flex-col rounded-3xl p-8 transition ${
                t.hl
                  ? "bg-ink text-ivory shadow-elegant"
                  : "bg-card ring-hairline hover:shadow-soft"
              }`}
            >
              {t.hl && (
                <span className="absolute -top-3 right-6 rounded-full bg-gold px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink">
                  Most loved
                </span>
              )}
              <div className="font-display text-2xl">{t.n}</div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-sm opacity-70">₹</span>
                <span className="font-display text-5xl">{t.p}</span>
              </div>
              <div className={`text-xs uppercase tracking-[0.25em] ${t.hl ? "text-white/55" : "text-muted-foreground"}`}>
                {t.s}
              </div>
              <ul className={`mt-8 space-y-3 text-sm ${t.hl ? "text-white/85" : "text-foreground/85"}`}>
                {t.f.map((x) => (
                  <li key={x} className="flex items-start gap-2.5">
                    <span className={`mt-1 h-1 w-1 shrink-0 rounded-full ${t.hl ? "bg-gold" : "bg-foreground"}`} />
                    {x}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-10 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition ${
                  t.hl
                    ? "bg-gold text-ink hover:opacity-90"
                    : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                Choose {t.n}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
