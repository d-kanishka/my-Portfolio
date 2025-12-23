import { Users, Briefcase, Presentation } from "lucide-react";
import SparkleDecoration from "./SparkleDecoration";
import { cn } from "@/lib/utils";
import Fireflies from "./Fireflies";
import SocialBar from "./SocialBar";

interface LeadershipRole {
  icon: React.ReactNode;
  title: string;
  period?: string;
  description: string;
}

const leadershipRoles: LeadershipRole[] = [
  {
    icon: <Users size={32} className="text-primary" />,
    title: "Class Representative",
    period: "2023 - 2024",
    description: "Managing faculty arrangements and student communication to ensure smooth academic coordination.",
  },
  {
    icon: <Briefcase size={32} className="text-accent" />,
    title: "Student Placement Coordinator",
    period: "Present",
    description: "Coordinating communication between students and the placement cell.",
  },
  {
    icon: <Presentation size={32} className="text-primary" />,
    title: "Course Presentation Coordinator",
    period: "2025",
    description: "Coordinated course presentations, ensuring smooth scheduling and readiness.",
  },
];

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-24 px-4 md:px-8 relative">
      {/* Fireflies Background */}
      <Fireflies />
      <div className="max-w-6xl mx-auto"></div>
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <SparkleDecoration size={24} />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Leadership</h2>
        </div>

        {/* Leadership Roles */}
        <div className="space-y-6">
          {leadershipRoles.map((role, index) => (
            <div
              key={role.title}
              className={cn(
                "flex gap-6 p-6 bg-card border border-border rounded-2xl card-hover",
                "opacity-0 animate-slide-up"
              )}
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 p-4 bg-secondary rounded-2xl">
                {role.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{role.title}</h3>
                  {role.period && (
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {role.period}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed">{role.description}</p>
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

export default LeadershipSection;
