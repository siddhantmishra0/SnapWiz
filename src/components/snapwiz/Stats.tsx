const stats = [
  { k: "50,000+", l: "Memories captured" },
  { k: "5,000+", l: "Verified photographers" },
  { k: "42", l: "Cities, and counting" },
  { k: "4.96★", l: "Average rating" },
];

export function Stats() {
  return (
    <section className="bg-ink text-ivory">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="bg-ink p-8 md:p-12">
            <div className="font-display text-4xl md:text-5xl">{s.k}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.25em] text-white/55">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
