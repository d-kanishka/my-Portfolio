import { cn } from "@/lib/utils";

interface CloudDecorationProps {
  className?: string;
}

const CloudDecoration = ({ className }: CloudDecorationProps) => {
  return (
    <div className={cn("absolute pointer-events-none", className)}>
      <svg
        viewBox="0 0 200 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <ellipse
          cx="100"
          cy="50"
          rx="80"
          ry="25"
          className="fill-cloud"
        />
        <ellipse
          cx="60"
          cy="40"
          rx="40"
          ry="20"
          className="fill-cloud"
        />
        <ellipse
          cx="140"
          cy="45"
          rx="35"
          ry="18"
          className="fill-cloud"
        />
        <ellipse
          cx="80"
          cy="30"
          rx="30"
          ry="15"
          className="fill-cloud"
        />
        <ellipse
          cx="120"
          cy="35"
          rx="25"
          ry="12"
          className="fill-cloud"
        />
      </svg>
    </div>
  );
};

export default CloudDecoration;
