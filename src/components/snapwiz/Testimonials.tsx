import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const items = [
  {
    q: "Gifted a maternity shoot to my sister-in-law through the SNAPWIZ app. She was emotional seeing the pictures and video reel. Best surprise ever – thank you!",
    n: "Ramesh Soni",
    r: "Maternity",
  },
  {
    q: "Booked my Bride-To-Be shoot through the SNAPWIZ app – super easy and fast! The photographer was amazing and came out like a dream. Highly satisfied!",
    n: "Riya Z. Malhotra",
    r: "Bride-To-Be",
  },
  {
    q: "Flawless photography and cinematic reels. The editing was top-notch, and the delivery was quick. My client was extremely happy – will definitely book again!",
    n: "Pooja L. Verma",
    r: "Commercial",
  },
  {
    q: "I got a killer workout video reel! The transitions, lighting, and overall quality are outstanding. Exactly what I needed for my Instagram content.",
    n: "Vikram Y. Joshi",
    r: "Fitness",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-28 md:py-40 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="mb-16 flex items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">06 — Stories</p>
              <h2 className="mt-3 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] text-balance">
                What clients <span className="font-italic-serif text-foreground/70">remember.</span>
              </h2>
            </div>
            <div className="hidden md:flex gap-4">
              <CarouselPrevious className="static translate-y-0 translate-x-0" />
              <CarouselNext className="static translate-y-0 translate-x-0" />
            </div>
          </div>
          <CarouselContent className="-ml-6">
            {items.map((t, idx) => (
              <CarouselItem key={idx} className="pl-6 md:basis-1/2 lg:basis-1/3">
                <figure className="h-full rounded-3xl bg-card p-8 ring-hairline shadow-soft flex flex-col">
                  <svg className="h-6 w-6 text-gold shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 7h4v4H8.5c0 2 1 3 2.5 3v2c-3 0-5-2-5-5V7zm9 0h4v4h-2.5c0 2 1 3 2.5 3v2c-3 0-5-2-5-5V7z" />
                  </svg>
                  <blockquote className="mt-6 font-display text-xl leading-snug text-balance flex-1">
                    "{t.q}"
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-3 border-t hairline pt-5 shrink-0">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-gold to-amber-200 font-display text-ink">
                      {t.n.charAt(0)}
                    </span>
                    <div>
                      <div className="text-sm font-medium">{t.n}</div>
                      <div className="text-xs text-muted-foreground">{t.r}</div>
                    </div>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
