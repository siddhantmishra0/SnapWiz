import { useState } from "react";

const faqs = [
  { q: "How do I book a photographer?", a: "Pick a service, browse portfolios with live availability, and confirm with a single tap. Most users book in under 90 seconds." },
  { q: "Can I choose a specific photographer?", a: "Always. Every photographer has a public profile with portfolio, reviews, and packages — choose the one whose work moves you." },
  { q: "What if my photographer cancels?", a: "We guarantee a replacement of equal or higher tier within 4 hours, or a full refund — no questions asked." },
  { q: "Do you offer video and reels?", a: "Yes. Cinematic 30–90 second reels and full-length wedding films, delivered within 48–72 hours." },
  { q: "How are photographers verified?", a: "Portfolio review by our editorial team, ID verification, two reference checks, and continuous quality scoring after every shoot." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-ivory py-28 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">09 — Answers</p>
          <h2 className="mt-3 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.02] text-balance">
            Quietly, <br />
            <span className="font-italic-serif text-foreground/70">we've thought of it.</span>
          </h2>
        </div>

        <div className="divide-y hairline border-y hairline">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={f.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full flex-col py-6 text-left transition"
              >
                <div className="flex items-center justify-between gap-6">
                  <span className="font-display text-lg md:text-xl">{f.q}</span>
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border hairline transition ${isOpen ? "rotate-45 bg-foreground text-background" : ""}`}>
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </div>
                <div
                  className="grid overflow-hidden text-sm text-muted-foreground transition-[grid-template-rows,opacity,margin] duration-500"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0, marginTop: isOpen ? "1rem" : 0 }}
                >
                  <div className="min-h-0 max-w-prose leading-relaxed">{f.a}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
