const logos = [
  "Vogue", "Conde Nast", "Forbes", "Tatler", "Harper's", "Elle", "WedMeGood", "Architectural Digest",
];

export function Marquee() {
  return (
    <section className="border-y hairline bg-ivory py-10 overflow-hidden">
      <div className="mx-auto mb-6 max-w-7xl px-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          Featured by editorial teams across the world
        </p>
      </div>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex shrink-0 animate-marquee gap-16 pr-16">
          {[...logos, ...logos].map((l, i) => (
            <span
              key={i}
              className="font-display text-2xl tracking-tight text-foreground/55 whitespace-nowrap"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
