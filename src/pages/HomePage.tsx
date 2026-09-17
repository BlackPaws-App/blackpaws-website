import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '@/components/sections/HeroSection';
import LogosSection from '@/components/sections/LogosSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import VerbatimsSection from '@/components/sections/VerbatimsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ApproachSection from '@/components/sections/ApproachSection';
import TeamSection from '@/components/sections/TeamSection';
import Footer from '@/components/Footer';
import { scrollToSection } from '@/utils/scrollToSection';

export default function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    // Wait for the page to finish rendering before scrolling
    const id = setTimeout(() => scrollToSection(hash, 50), 80);
    return () => clearTimeout(id);
  }, [hash]);

  return (
    <div className="bg-white w-full min-h-screen">
      <HeroSection />
      <main className="flex flex-col gap-[52px] items-center py-[52px] w-full">
        <LogosSection />
        <ProjectsSection />
        <VerbatimsSection />
        <ServicesSection />
        <ApproachSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
