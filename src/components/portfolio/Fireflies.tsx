import { useEffect, useState } from "react";

interface Firefly {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const Fireflies = () => {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);

  useEffect(() => {
    const count = 20;
    const flies: Firefly[] = [];
    
    for (let i = 0; i < count; i++) {
      flies.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 3,
        duration: Math.random() * 10 + 12,
        delay: Math.random() * 8,
      });
    }
    
    setFireflies(flies);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {fireflies.map((fly) => (
        <div
          key={fly.id}
          className="absolute rounded-full animate-firefly"
          style={{
            left: `${fly.x}%`,
            top: `${fly.y}%`,
            width: `${fly.size}px`,
            height: `${fly.size}px`,
            background: `radial-gradient(circle, #FFD700 0%, #FFA500 50%, transparent 100%)`,
            boxShadow: `0 0 ${fly.size * 2}px ${fly.size}px rgba(255, 200, 50, 0.5), 0 0 ${fly.size * 4}px ${fly.size * 2}px rgba(255, 165, 0, 0.3)`,
            animationDuration: `${fly.duration}s`,
            animationDelay: `${fly.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Fireflies;
