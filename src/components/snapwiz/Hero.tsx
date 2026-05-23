import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink text-ivory">
      <img
        src={hero}
        alt="A bride caught mid-laugh in golden hour light"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_30%_40%,rgba(0,0,0,0)_0%,rgba(0,0,0,.45)_100%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-24 pt-40">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Photography, on demand
          </div>
          <h1 className="font-display text-[clamp(2.75rem,7vw,6.25rem)] leading-[0.95] text-white text-balance animate-fade-up">
            Your memories deserve more than just <span className="font-italic-serif text-gold">photos.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 md:text-lg animate-fade-up [animation-delay:120ms]">
            SnapWiz connects you with India's most thoughtful photographers — for weddings, maternity,
            corporate, festivals, and the little moments in between. Book in minutes. Remember forever.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:240ms]">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-ink transition hover:bg-gold"
            >
              Book a photographer
              <svg className="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              Explore services
            </a>
          </div>
        </div>

        {/* Floating UI cards */}
        <FloatingPhotographer />
        <FloatingStats />

        {/* Scroll indicator */}
        <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <div className="h-10 w-px overflow-hidden bg-white/20">
              <div className="h-1/2 w-full bg-white animate-scroll-hint" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingPhotographer() {
  return (
    <div className="pointer-events-none absolute right-6 top-32 hidden w-[280px] animate-float md:block">
      <div className="glass-dark rounded-2xl p-4 shadow-elegant">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white/30">
            <div className="absolute inset-0 bg-gradient-to-br from-gold via-amber-200 to-rose-200" />
            <span className="absolute inset-0 grid place-items-center font-display text-lg text-ink">A</span>
          </div>
          <div className="text-white">
            <div className="flex items-center gap-1.5 text-sm font-medium">
              Aanya Mehra
              <svg className="h-3.5 w-3.5 text-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
              </svg>
            </div>
            <div className="text-[11px] text-white/60">Mumbai · Weddings & Portraits</div>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between text-[11px] text-white/70">
          <span>★ 4.97 · 218 shoots</span>
          <span className="rounded-full bg-white/10 px-2 py-0.5">Avail. Sat</span>
        </div>
      </div>
    </div>
  );
}

function FloatingStats() {
  return (
    <div className="pointer-events-none absolute left-6 top-40 hidden animate-float [animation-delay:1.2s] md:block">
      <div className="glass-dark rounded-2xl px-5 py-4 shadow-elegant">
        <div className="text-[10px] uppercase tracking-[0.25em] text-white/60">Booked tonight</div>
        <div className="mt-1 font-display text-3xl text-white">1,284</div>
        <div className="mt-2 flex -space-x-2">
          {["#d6b88a", "#c08660", "#8aa3b8", "#1e1e1e"].map((c, i) => (
            <span key={i} className="h-6 w-6 rounded-full ring-2 ring-ink" style={{ background: c }} />
          ))}
        </div>
      </div>
    </div>
  );
}
