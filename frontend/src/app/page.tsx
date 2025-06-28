import ProjectsSection from "@/components/sections/ProjectSection";
import Navigation from "../components/layout/Navigation";
import AboutSection from "../components/sections/AboutSection";
import EducationSection from "../components/sections/EducationSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import HeroSection from "../components/sections/HeroSection";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
    </div>
  );
}
