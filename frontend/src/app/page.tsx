import Navigation from "@/components/layout/Navigation";
import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
    </div>
  );
}
