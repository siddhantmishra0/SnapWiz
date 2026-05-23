const steps = [
  {
    n: "01",
    title: "Choose your service",
    text: "Tell us what you're celebrating. Pick from twelve curated shoot types — from maternity to corporate.",
  },
  {
    n: "02",
    title: "Browse photographers",
    text: "Compare portfolios, packages, real reviews, and live availability across your city.",
  },
  {
    n: "03",
    title: "Book in a tap",
    text: "Confirm date, pay securely, and meet your photographer. The day becomes a story you'll keep forever.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">03 — How it works</p>
          <h2 className="mt-3 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] text-balance">
            Three steps between you and your <span className="font-italic-serif text-foreground/70">forever frame.</span>
          </h2>
        </div>

        <div className="relative grid gap-10 md:grid-cols-3">
          {/* connector */}
          <div className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent md:block" />
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="relative z-10 mb-6 grid h-[6.5rem] w-[6.5rem] place-items-center rounded-full bg-background ring-hairline">
                <span className="font-display text-3xl text-foreground/80">{s.n}</span>
                {i < steps.length - 1 && (
                  <span className="absolute -right-1 top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-gold md:block" />
                )}
              </div>
              <h3 className="font-display text-2xl">{s.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
