import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/snapwiz/Nav";
import { Hero } from "@/components/snapwiz/Hero";
import { Marquee } from "@/components/snapwiz/Marquee";
import { Stats } from "@/components/snapwiz/Stats";
import { Services } from "@/components/snapwiz/Services";
import { HowItWorks } from "@/components/snapwiz/HowItWorks";
import { Features } from "@/components/snapwiz/Features";
import { Portfolio } from "@/components/snapwiz/Portfolio";
import { Testimonials } from "@/components/snapwiz/Testimonials";
import { AppShowcase } from "@/components/snapwiz/AppShowcase";
import { Pricing } from "@/components/snapwiz/Pricing";
import { FAQ } from "@/components/snapwiz/FAQ";
import { FinalCta } from "@/components/snapwiz/FinalCta";
import { Footer } from "@/components/snapwiz/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SnapWiz | Book Top Photographers Instantly" },
      {
        name: "description",
        content:
          "Find and book verified photographers for weddings, maternity shoots, corporate events, and personal portraits. See live portfolios and availability. Book in 2 minutes.",
      },
      { name: "keywords", content: "hire photographer, book photoshoot, best wedding photographers, event photography, maternity shoot, professional portraits" },
      { property: "og:title", content: "SnapWiz | Book Top Photographers Instantly" },
      {
        property: "og:description",
        content: "Find and book India's most thoughtful photographers for your next big moment.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Stats />
      <HowItWorks />
      <Features />
      <Portfolio />
      <Testimonials />
      <AppShowcase />
      <Pricing />
      <FAQ />
      <FinalCta />
      <Footer />
    </main>
  );
}
