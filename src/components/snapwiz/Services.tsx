import events from "@/assets/service-events.jpg";
import gift from "@/assets/service-gift.jpg";
import family from "@/assets/service-family.jpg";
import maternity from "@/assets/service-maternity.jpg";
import matrimonial from "@/assets/service-matrimonial.jpg";
import bridegroom from "@/assets/service-bridegroom.jpg";
import personal from "@/assets/service-personal.jpg";
import corporate from "@/assets/service-corporate.jpg";
import couple from "@/assets/service-couple.jpg";
import reels from "@/assets/service-reels.jpg";
import friends from "@/assets/service-friends.jpg";
import festival from "@/assets/service-festival.jpg";
import pet from "@/assets/service-pet.png";

type Service = {
  title: string;
  blurb: string;
  img: string;
  span?: string;
  tall?: boolean;
};

const services: Service[] = [
  { title: "Bride & Groom", blurb: "The look only the two of you share.", img: bridegroom, span: "md:col-span-4 md:row-span-2", tall: true },
  { title: "Maternity", blurb: "Nine quiet months, beautifully kept.", img: maternity, span: "md:col-span-3" },
  { title: "Matrimonial", blurb: "Heritage, ritual, ceremony — uncut.", img: matrimonial, span: "md:col-span-5" },
  { title: "Family & Siblings", blurb: "Generations in one warm frame.", img: family, span: "md:col-span-4" },
  { title: "Couple Shoot", blurb: "Pre-wedding, anniversary, just because.", img: couple, span: "md:col-span-4" },
  { title: "Events", blurb: "Birthdays, launches, milestones.", img: events, span: "md:col-span-4 md:row-span-2", tall: true },
  { title: "Corporate", blurb: "Headshots, teams, brand stories.", img: corporate, span: "md:col-span-4" },
  { title: "Personal Photographer", blurb: "A day with you, documented.", img: personal, span: "md:col-span-4" },
  { title: "Festival Shoot", blurb: "Diwali, Eid, Christmas — in full bloom.", img: festival, span: "md:col-span-4" },
  { title: "Video Reels", blurb: "Cinematic 30-sec stories for socials.", img: reels, span: "md:col-span-4" },
  { title: "Friends Shoot", blurb: "The chosen family, framed.", img: friends, span: "md:col-span-4" },
  { title: "Gift a Photoshoot", blurb: "The most thoughtful present, wrapped.", img: gift, span: "md:col-span-4" },
  { title: "Pet Shoot", blurb: "Your furry best friend, timelessly captured.", img: pet, span: "md:col-span-4" },
];

export function Services() {
  return (
    <section id="services" className="relative bg-background py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">02 — Services</p>
            <h2 className="mt-3 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] text-balance">
              Every chapter of your life,
              <span className="font-italic-serif text-foreground/70"> photographed with care.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Twelve curated shoot types, hundreds of vetted photographers, one booking flow that respects
            your time and your story.
          </p>
        </div>

        <div className="grid auto-rows-[14rem] grid-cols-1 gap-3 md:grid-cols-12 md:auto-rows-[12rem]">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, blurb, img, span }: Service) {
  return (
    <a
      href="#cta"
      className={`group relative overflow-hidden rounded-3xl bg-card ring-hairline ${span ?? "md:col-span-4"}`}
    >
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
      <div className="relative flex h-full flex-col justify-end p-5 text-ivory">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h3 className="font-display text-xl leading-tight md:text-2xl">{title}</h3>
            <p className="mt-1 max-w-[20ch] text-[12.5px] text-white/75">{blurb}</p>
          </div>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur transition group-hover:bg-gold group-hover:text-ink">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
}
