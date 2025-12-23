import SocialBar from "./SocialBar";
import { 
  Code2, 
  Layers, 
  Database, 
  Wrench, 
  Monitor, 
  Cloud 
} from "lucide-react";
import SparkleDecoration from "./SparkleDecoration";
import { cn } from "@/lib/utils";
import Fireflies from "./Fireflies";

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Code2 size={28} />,
    title: "Languages",
    skills: ["Python", "C", "Java", "Dart", "JavaScript", "TypeScript"],
    color: "text-primary",
  },
  {
    icon: <Layers size={28} />,
    title: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Express.js", "Tailwind CSS"],
    color: "text-accent",
  },
  {
    icon: <Database size={28} />,
    title: "Database",
    skills: ["MySQL", "MongoDB"],
    color: "text-primary",
  },
  {
    icon: <Wrench size={28} />,
    title: "Tools & Platforms",
    skills: ["GitHub", "VS Code", "Eclipse", "Figma", "Firebase", "Anaconda"],
    color: "text-accent",
  },
  {
    icon: <Monitor size={28} />,
    title: "Systems & Hardware",
    skills: ["macOS", "Windows", "Linux", "Raspberry Pi"],
    color: "text-primary",
  },
  {
    icon: <Cloud size={28} />,
    title: "Cloud",
    skills: ["AWS"],
    color: "text-accent",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen py-20 px-4 pt-32 pb-24 md:px-8 bg-card/50 relative overflow-hidden">
      {/* Fireflies Background */}
      <Fireflies />
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <SparkleDecoration size={24} />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Skills</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={cn(
                "bg-card border border-border rounded-2xl p-6 card-hover",
                "opacity-0 animate-slide-up"
              )}
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={cn("p-2 rounded-xl bg-secondary", category.color)}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Social Bar */}
      <SocialBar />
    </section>
  );
};

export default SkillsSection;
