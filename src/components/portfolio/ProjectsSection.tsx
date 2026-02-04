import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import SparkleDecoration from "./SparkleDecoration";
import { cn } from "@/lib/utils";
import Fireflies from "./Fireflies";
import SocialBar from "./SocialBar";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Pika-s-Puzzle-Volt ",
    description: "PikaMath is a child-friendly educational web app that combines a colorful calculator with fast-paced math puzzle games for kids aged 6–12. It uses gamification, Pokémon-themed rewards, animations and sound effects to make learning math fun, engaging and interactive.",
    tags: ["React", "TypeScript", "Tailwind CSS","shadcn/ui","Radix UI"],
    image: "/img/BadgePreview.png",
    liveUrl: "https://pika-s-puzzle-volt.vercel.app",
    githubUrl: "https://github.com/d-kanishka/Pika-s-Puzzle-Volt",
  },
  {
    id: 2,
    title: "Event Insider",
    description: "A simple and interactive event management and movie booking web application developed as an academic project. The platform allows users to explore events, view movie schedules, select seats and manage bookings through an intuitive interface.",
    tags: ["HTML", "CSS", "JS"],
    image: "/img/Event Insider.mp4",
    githubUrl: "https://github.com/d-kanishka/Event-Insider",
  },
  {
    id: 3,
    title: "Campus E-Voting",
    description: "A secure, token-based campus voting system with role-based access for voters, admins and auditors. Includes multi-factor authentication (password + TOTP), one-time voting tokens, hybrid encryption for vote confidentiality and audit logging for transparency.",
    tags: ["Python", "Flask", "React", "MongoDB", "JWT", "AES-GCM", "RSA", "bcrypt", "TOTP"],
    image: "/img/e-voting.png",
    githubUrl: "https://github.com/d-kanishka/Secure_Voting_System",
  },
  
  {
    id: 4,
    title: "raspi5-camera-gpt-caption",
    description: "Raspberry Pi Camera Module Setup and Image Captioning with GPT-4o Mini demonstrates end-to-end image capture on Raspberry Pi and AI-based image caption generation. The project integrates camera hardware, Python scripting and a multimodal LLM to produce detailed, human-like image descriptions.",
    tags: ["Raspberry Pi5", "Python", "OpenAI GPT-4o Mini","Pillow","VNC Viewer"],
    image: "/img/rasp.jpeg",
    githubUrl: "https://github.com/d-kanishka/raspi5-camera-gpt-caption",
  },
  {
    id: 5,
    title: "Indoor Tracking System",
    description: "Software Simulation of a BLE/WiFi-based Indoor Tracking System models an edge–cloud indoor localization system using real-world Wi-Fi RSSI data. It performs coarse edge-level positioning and highly accurate cloud-based localization using KNN, with visualization for performance analysis.",
    tags: ["Edge–Cloud","Flask", "ML(KNN)", "Matplotlib"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/d-kanishka/EdgeCloud-IndoorTracking/tree/main",
  },
  
  {
    id: 6,
    title: "Bluetooth Text-to-Speech – Raspberry Pi 5",
    description: "Implemented a Bluetooth-based text-to-speech system on Raspberry Pi 5 with a strong focus on audio stability and system reliability. The project demonstrates hands-on experience with embedded Linux audio stacks, Bluetooth profiles and real-world troubleshooting.",
    tags: ["Raspberry Pi 5", "BlueZ", "pygame","PipeWire","PulseAudio"],
    image: "https://raspi.tv/wp-content/uploads/2014/08/PiHut-speaker_1500.jpg",
    githubUrl: "https://github.com/d-kanishka/raspi5-text-to-speech-bluetooth",
  },
  {
    id: 6,
    title: "Campus Resource Manager",
    description: "A campus-wide resource allocation system to manage halls, classrooms and shared facilities efficiently. Implements role-based access control and AI-based demand forecasting for data-driven allocation and conflict resolution.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Python", "REST APIs"],
    image: "/img/resource-manager.png",
    githubUrl: "https://github.com/d-kanishka/Campus-Resource-Manager",
  },
  
  {
    id: 7,
    title: "Little Leaf Learning",
    description: "A sensory-friendly educational web app for children aged 4–10 with ASD. Features touch-based learning games across Animals, Plants, Seasons and Weather, with gentle audio, minimal animations and positive reinforcement to reduce sensory overload.",
    tags: ["React", "Tailwind CSS", "React Router", "Web Audio API", "React Context API"],
    image: "/img/littleleaf.png",
    githubUrl: "https://github.com/d-kanishka/Little-Leaf-Learning",
  },
   {
    id: 8,
    title: "iOS-calculator-flutter",
    description: "It is a cross-platform calculator app built with Flutter that replicates the iOS calculator experience. It supports basic and scientific calculations, unit conversions, BMI analysis and calculation history, all within a clean, responsive iOS-style interface.",
    tags: ["Dart", "Flutter", "Objective-C "],
    image: "/img/conversion.png",
    githubUrl: "https://github.com/d-kanishka/iOS-calculator-flutter/tree/main",
  },
  
  {
    id: 9,
    title: "Disk Manager",
    description: "It is an embedded systems project that simulates disk scheduling algorithms, RAID levels and file allocation strategies on Raspberry Pi Pico using FreeRTOS and SD card storage.",
    tags: ["C/C++", "Arduino IDE", "Raspberry Pi Pico","FreeRTOS","SD Card","Serial Monitor"],
    image: "/img/dm.jpg",
    githubUrl: "https://github.com/d-kanishka/Disk-Manager",
  },
  {
  id: 10,
  title: "Paper Scrape Tool (UI Development)",
  description: "Built the frontend UI for a research paper scraping platform with login, search and interactive knowledge graph pages featuring dynamic SVG nodes and tooltips.",
  tags: ["Figma","React", "JavaScript", "React Router", "SVG", "UI/UX"],
  image: "/img/paper-scrape-ui.png", 
  githubUrl: "https://github.com/citeweb/frontend",
}

];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 pt-32 md:px-8 bg-card/50 relative overflow-hidden">
      {/* Fireflies Background */}
      <Fireflies />
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <SparkleDecoration size={24} />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {projects.map((project, index) => {
  const itemsInLastRow = projects.length % 3;
  const isLastRow = itemsInLastRow > 0 && index >= projects.length - itemsInLastRow;
  
  return (
    <div
      key={project.id}
      className={cn(
        "group bg-card border border-border rounded-2xl overflow-hidden card-hover",
        "opacity-0 animate-slide-up",
        "col-span-1 md:col-span-1",

        !isLastRow && "lg:col-span-2",
        
        isLastRow && itemsInLastRow === 1 && "lg:col-span-2 lg:col-start-3",

        isLastRow && itemsInLastRow === 2 && index === projects.length - 2 && "lg:col-span-2 lg:col-start-2",
        isLastRow && itemsInLastRow === 2 && index === projects.length - 1 && "lg:col-span-2 lg:col-start-4"
      )}
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
    >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Actions */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {project.liveUrl && (
                    <Button size="sm" className="gap-1 rounded-full" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} />
                        Live
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="secondary" className="gap-1 rounded-full" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={14} />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 ">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
      {/* Social Bar */}
      <SocialBar />
    </section>
  );
};

export default ProjectsSection;
