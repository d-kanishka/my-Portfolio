import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface SparkleDecorationProps {
  className?: string;
  size?: number;
}

const SparkleDecoration = ({ className, size = 16 }: SparkleDecorationProps) => {
  return (
    <Sparkles 
      size={size} 
      className={cn("text-primary animate-sparkle", className)} 
    />
  );
};

export default SparkleDecoration;
