import a from "@/assets/service-bridegroom.jpg";
import b from "@/assets/service-family.jpg";
import c from "@/assets/service-couple.jpg";
import d from "@/assets/service-festival.jpg";
import e from "@/assets/service-maternity.jpg";
import f from "@/assets/portfolio-1.jpg";
import g from "@/assets/portfolio-2.jpg";
import h from "@/assets/service-events.jpg";
import i from "@/assets/service-matrimonial.jpg";

const cats = ["All", "Weddings", "Maternity", "Corporate", "Festivals", "Reels"];

const tiles = [
  { src: a, h: "row-span-2" },
  { src: b, h: "" },
  { src: c, h: "" },
  { src: d, h: "row-span-2" },
  { src: e, h: "row-span-2" },
  { src: f, h: "" },
  { src: g, h: "" },
  { src: h, h: "" },
  { src: i, h: "" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-ink py-28 text-ivory md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/50">05 — Portfolio</p>
            <h2 className="mt-3 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] text-white text-balance">
              A gallery of <span className="font-italic-serif text-gold">moments,</span>
              <br /> told beautifully.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c, idx) => (
              <button
                key={c}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-wider transition ${
                  idx === 0
                    ? "border-gold bg-gold text-ink"
                    : "border-white/20 text-white/70 hover:border-white/50 hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid auto-rows-[12rem] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[11rem]">
          {tiles.map((t, idx) => (
            <figure
              key={idx}
              className={`group relative overflow-hidden rounded-2xl bg-white/5 ${t.h}`}
            >
              <img
                src={t.src}
                alt={`SnapWiz photography portfolio sample ${idx + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 transition group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
