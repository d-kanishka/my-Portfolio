import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FloatingIcon from "./FloatingIcon";
import CloudDecoration from "./CloudDecoration";
import SparkleDecoration from "./SparkleDecoration";
import Fireflies from "./Fireflies";
import SocialBar from "./SocialBar";

import { 
  Code2,
  Database, 
  Globe, 
  Laptop, 
  Smartphone, 
  Terminal, 
  Palette,
  Cpu
} from "lucide-react";

const HeroSection = () => {
  const floatingIcons = [
    { icon: <Code2 className="text-primary" size={24} />, position: "top-32 left-8 md:left-16", delay: 0 },
    { icon: <Database className="text-accent" size={24} />, position: "top-48 left-4 md:left-8", delay: 0.5 },
    { icon: <Globe className="text-primary" size={24} />, position: "top-64 left-12 md:left-24", delay: 1 },
    { icon: <Terminal className="text-accent" size={24} />, position: "top-80 left-6 md:left-12", delay: 1.5 },
    { icon: <Laptop className="text-primary" size={24} />, position: "top-96 left-16 md:left-32", delay: 2 },
    { icon: <Smartphone className="text-accent" size={24} />, position: "top-32 right-8 md:right-16", delay: 0.3 },
    { icon: <Palette className="text-primary" size={24} />, position: "top-52 right-4 md:right-8", delay: 0.8 },
    { icon: <Cpu className="text-accent" size={24} />, position: "top-72 right-12 md:right-24", delay: 1.3 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 py-30 overflow-hidden">
      {/* Fireflies Animation */}
      <Fireflies />

      {/* Cloud Decorations */}
      <CloudDecoration className="top-0 left-0 w-48 md:w-72 opacity-60" />
      <CloudDecoration className="top-0 right-0 w-40 md:w-64 opacity-60" />
      <CloudDecoration className="top-8 left-1/4 w-32 md:w-48 opacity-40" />

      {/* Floating Tech Icons */}
      <div className="hidden md:block">
        {floatingIcons.map((item, index) => (
          <FloatingIcon
            key={index}
            icon={item.icon}
            className={item.position}
            delay={item.delay}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Avatar with Location Badge */}
        <div className="relative inline-block mb-8 group">
          <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-primary/20 shadow-xl transition-transform duration-300 group-hover:scale-110 cursor-pointer">
            <AvatarImage src="/img/k2.jpg" alt="Kanishka" className="object-cover" />
            <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">K</AvatarFallback>
          </Avatar>
          <span className="absolute -bottom-2 -right-2 bg-card border border-border rounded-full px-3 py-1 text-sm font-medium shadow-md">
            📍 India
          </span>
        </div>

        {/* Greeting */}
        <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in">
          Hi, I'm Kanishka Dhanasekar
        </p>

        {/* Hero Title */}
        <div className="relative">
          <SparkleDecoration className="absolute -top-4 -left-4 md:left-8" size={20} />
          <SparkleDecoration className="absolute top-0 right-0 md:right-12" size={16} />
          <SparkleDecoration className="absolute bottom-0 left-1/4" size={14} />
          
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl">
            <span className="text-highlight">FULLSTACK</span>
            <br />
            <span className="text-foreground">DEVELOPER &</span>
            <br />
            <span className="text-highlight-secondary">CLOUD</span>
            <span className="text-foreground"> FOCUSED</span>
          </h1>

          <SparkleDecoration className="absolute bottom-4 right-1/4" size={18} />
          <SparkleDecoration className="absolute -bottom-2 right-8 md:right-16" size={12} />
        </div>

       
      </div>
      {/* Social Bar */}
      <SocialBar />
    </section>
  );
}; 

export default HeroSection;
