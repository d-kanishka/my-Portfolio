import { cn } from "@/lib/utils";

interface FloatingIconProps {
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

const FloatingIcon = ({ icon, className, delay = 0 }: FloatingIconProps) => {
  return (
    <div
      className={cn(
        "absolute p-3 bg-card rounded-xl shadow-lg border border-border/50 backdrop-blur-sm",
        "transition-transform duration-300 hover:scale-110",
        className
      )}
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {icon}
    </div>
  );
};

export default FloatingIcon;
