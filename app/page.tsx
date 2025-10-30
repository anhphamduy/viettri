import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/sections/hero';
import { Benefits } from '@/components/sections/benefits';
import { Projects } from '@/components/sections/projects';
import { Curriculum } from '@/components/sections/curriculum';
import { WhoFor } from '@/components/sections/who-for';
import { FormatSchedule } from '@/components/sections/format-schedule';
import { Pricing } from '@/components/sections/pricing';
import { FAQ } from '@/components/sections/faq';
import { Footer } from '@/components/footer';
import { FooterCTA } from '@/components/sections/footer-cta';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Projects />
        <Curriculum />
        <WhoFor />
        <FormatSchedule />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <FooterCTA />
    </div>
  );
}
