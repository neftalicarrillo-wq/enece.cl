import { HeroSection } from '@/components/sections/HeroSection';
import { ServiciosSection } from '@/components/sections/ServiciosSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { NewsSection } from '@/components/sections/NewsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <div className="divider" />
      <ServiciosSection />
      <div className="divider" />
      <AboutSection />
      <div className="divider" />
      <NewsSection />
      <div className="divider" />
      <ContactSection />
    </main>
  );
}
