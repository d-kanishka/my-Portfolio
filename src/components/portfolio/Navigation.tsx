import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Leadership", href: "#leadership" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-2 bg-card/90 backdrop-blur-md border border-border rounded-full px-3 py-2 shadow-lg">
        {/* Home button */}
        <a
          href="#home"
          className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300"
        >
          Home
        </a>

        {/* Nav links */}
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300"
          >
            {item.label}
          </a>
        ))}

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>
    </header>
  );
};

export default Navigation;
