import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Navigation from "./components/portfolio/Navigation";
import AboutSection from "./components/portfolio/AboutSection";
import SkillsSection from "./components/portfolio/SkillsSection";
import LeadershipSection from "./components/portfolio/LeadershipSection";
import ProjectsSection from "./components/portfolio/ProjectsSection";
import ContactSection from "./components/portfolio/ContactSection";
import HeroSection from "./components/portfolio/HeroSection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<><Navigation /><HeroSection /></>} />
          <Route path="/about" element={<><Navigation /><AboutSection /></>} />
          <Route path="/skills" element={<><Navigation /><SkillsSection /></>} />
          <Route path="/leadership" element={<><Navigation /><LeadershipSection /></>} />
          <Route path="/projects" element={<><Navigation /><ProjectsSection /></>} />
          <Route path="/contact" element={<><Navigation /><ContactSection /></>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;