import logo from "@/assets/logo.png";

export function Footer() {
  const cols = [
    { h: "Services", l: ["Weddings", "Maternity", "Corporate", "Festivals", "Reels", "All services"] },
    { h: "Company", l: ["About", "Photographers", "Press", "Careers", "Contact"] },
    { h: "Resources", l: ["Help center", "Pricing", "Gift cards", "Privacy", "Terms"] },
  ];
  return (
    <footer className="bg-background pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 border-t hairline pt-16 md:grid-cols-[1.5fr_2fr_1.5fr]">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="SnapWiz Logo" className="h-10 w-auto" />
              <span className="font-display text-xl">SnapWiz</span>
            </div>
            <p className="mt-6 max-w-xs text-sm text-muted-foreground">
              The easiest way to book a photographer for every moment worth keeping.
            </p>
            <div className="mt-6 flex gap-3">
              {["IG", "TW", "YT", "PIN"].map((s) => (
                <a key={s} href="#" className="grid h-9 w-9 place-items-center rounded-full border hairline text-[10px] uppercase tracking-wider text-foreground/70 transition hover:bg-foreground hover:text-background">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.h}>
                <div className="mb-4 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{c.h}</div>
                <ul className="space-y-2.5 text-sm">
                  {c.l.map((x) => (
                    <li key={x}>
                      <a href="#" className="text-foreground/80 transition hover:text-foreground">{x}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <div className="mb-4 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Newsletter</div>
            <p className="mb-4 text-sm text-muted-foreground">
              Curated shoots, photographer features, and quiet stories — once a month.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex overflow-hidden rounded-full border hairline">
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button className="bg-foreground px-5 text-sm font-medium text-background">Join</button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-3 border-t hairline py-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} SnapWiz Studios Pvt. Ltd. Crafted in India.</span>
          <span>Photographs for life, not for the scroll.</span>
        </div>
      </div>
    </footer>
  );
}
