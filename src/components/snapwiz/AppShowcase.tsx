import shot from "@/assets/service-couple.jpg";
import shot2 from "@/assets/service-bridegroom.jpg";

export function AppShowcase() {
  return (
    <section className="relative overflow-hidden bg-ivory py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">07 — Mobile</p>
          <h2 className="mt-3 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.02] text-balance">
            The whole studio, <br />
            <span className="font-italic-serif text-foreground/70">in your pocket.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Browse portfolios at midnight. Lock a date from the elevator. Watch your gallery roll in,
            full-bleed, in beautiful resolution.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground" href="https://apps.apple.com/in/app/snapwiz/id6738880966" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M16.5 12.5c0-2.7 2.2-4 2.3-4-1.3-1.8-3.2-2-3.9-2-1.6-.2-3.2 1-4 1s-2.1-1-3.5-1c-1.8 0-3.4 1-4.3 2.7-1.8 3.2-.5 7.9 1.3 10.5.9 1.3 1.9 2.7 3.3 2.6 1.3 0 1.8-.9 3.4-.9s2 .9 3.4.8c1.4 0 2.3-1.3 3.2-2.6.7-1 1-1.5 1.5-2.6-3.9-1.5-3.7-5.4-3.7-5.5zM13.6 4.6c.7-.8 1.2-2 1.1-3.1-1 0-2.3.7-3 1.5-.7.7-1.3 1.9-1.1 3 1.2.1 2.3-.6 3-1.4z"/></svg>
              App Store
            </a>
            <a className="inline-flex items-center gap-2 rounded-full border hairline px-5 py-3 text-sm font-medium" href="https://play.google.com/store/apps/details?id=com.photographycustomer" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M3 2l13 10L3 22V2zm15 11l3-2-3-2v4z"/></svg>
              Google Play
            </a>
          </div>
        </div>

        {/* phone mock */}
        <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
          <Phone img={shot} className="rotate-[-6deg]" />
          <Phone img={shot2} className="absolute left-[55%] top-6 rotate-[6deg] scale-95 opacity-90" />
        </div>
      </div>
    </section>
  );
}

function Phone({ img, className = "" }: { img: string; className?: string }) {
  return (
    <div className={`relative w-[260px] shrink-0 rounded-[2.4rem] bg-ink p-2 shadow-elegant ${className}`}>
      <div className="relative overflow-hidden rounded-[2rem] bg-background">
        <img src={img} alt="SnapWiz app showing booked photography session" className="h-[520px] w-full object-cover" loading="lazy" />
        <div className="absolute inset-x-0 top-0 flex justify-center pt-2">
          <span className="h-5 w-24 rounded-full bg-ink" />
        </div>
        <div className="absolute inset-x-3 bottom-3 rounded-2xl glass p-3 text-xs">
          <div className="flex items-center justify-between">
            <span className="font-medium">Aanya · Sat, 3pm</span>
            <span className="rounded-full bg-foreground px-2 py-0.5 text-[10px] text-background">Booked</span>
          </div>
          <div className="mt-1 text-[11px] text-muted-foreground">Wedding · Full day · Udaipur</div>
        </div>
      </div>
    </div>
  );
}
