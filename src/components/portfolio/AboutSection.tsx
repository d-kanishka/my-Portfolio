import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";
import SparkleDecoration from "./SparkleDecoration";
import Fireflies from "./Fireflies";
import SocialBar from "./SocialBar";

const AboutSection = () => {
  
  return (
    <section id="about" className="py-24 px-4 md:px-8 relative overflow-hidden">
    {/* Fireflies Background */}
      <Fireflies />
      <div className="max-w-6xl mx-auto"></div>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <SparkleDecoration size={24} />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">About Me</h2>
        </div>
        

        {/* Bio Content */}
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Hello! I'm <span className="text-foreground font-semibold">Kanishka</span>, a Computer Science student who enjoys building web and application solutions that users find intuitive and reliable. I like creating apps and websites with clean interfaces and strong functionality, focusing on both how the product looks and how it works behind the scenes.
          </p>
          <p>
            I have experience working across the full stack using modern technologies and believe in writing clean, maintainable code that scales well. I enjoy solving problems, improving system efficiency and turning ideas into practical, user-friendly applications.

          </p>
          <p>Currently, I am learning cloud computing and exploring how cloud platforms can be used to deploy, scale and manage applications efficiently. I am always eager to learn new technologies and continuously improve my skills to build impactful digital products.</p>
        </div>

        {/* Resume Buttons */}
        <div className="flex flex-wrap gap-4 mt-10">
          <Button 
            size="lg" 
            className="gap-2 rounded-full hover-lift bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a
  href="https://drive.google.com/uc?export=download&id=1oFPyc3wqvV9mjveNFWo-rdB_kQa84-OI"
  target="_blank"
  rel="noopener noreferrer">
  <Download size={20} />
  Download Resume
</a>

          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="gap-2 rounded-full hover-lift border-2 hover:border-primary hover:text-primary hover:bg-transparent"
            asChild
          >
            <a href="https://drive.google.com/file/d/1oFPyc3wqvV9mjveNFWo-rdB_kQa84-OI/view?usp=share_link" target="_blank" rel="noopener noreferrer">
              <Eye size={20} />
              View Resume
            </a>
          </Button>
        </div>
      </div>
      {/* Social Bar */}
      <SocialBar />
    </section>
  );
};

export default AboutSection;
