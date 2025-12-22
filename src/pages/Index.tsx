import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import LeadershipSection from "@/components/portfolio/LeadershipSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import SocialBar from "@/components/portfolio/SocialBar";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <LeadershipSection />
      <ProjectsSection />
      <ContactSection />
      <SocialBar />
    </main>
  );
};

export default Index;
