import bg from "@/assets/service-bridegroom.jpg";

export function FinalCta() {
  return (
    <section id="cta" className="relative overflow-hidden bg-ink py-32 text-ivory md:py-44">
      <img
        src={bg}
        alt="A bride and groom sharing a beautiful candid moment"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-white/50">10 — Begin</p>
        <h2 className="mt-4 font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[1] text-white text-balance">
          Your best moments deserve <br />
          <span className="font-italic-serif text-gold">timeless photography.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base text-white/75">
          Find your photographer in under two minutes. Tomorrow's heirloom starts tonight.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-medium text-ink transition hover:bg-white"
          >
            Book your photographer
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center rounded-full border border-white/25 px-7 py-4 text-sm font-medium text-white/90 transition hover:bg-white/10"
          >
            See the work
          </a>
        </div>
      </div>
    </section>
  );
}
