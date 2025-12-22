import { Mail, Github, Linkedin, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

const SocialBar = () => {
  const { theme, toggleTheme } = useTheme();

  const socialLinks = [
    { icon: Mail, href: "mailto:kanishkad1210@gmail.com", label: "Email" },
    { icon: Github, href: "https://github.com/d-kanishka", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/kanishka-dhansekar/", label: "LinkedIn" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 bg-card/80 backdrop-blur-md border border-border rounded-full px-4 py-2 shadow-lg">
        {socialLinks.map((link) => (
          <Button
            key={link.label}
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
            asChild
          >
            <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
              <link.icon size={20} />
            </a>
          </Button>
        ))}
        <div className="w-px h-6 bg-border mx-1" />
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
      </div>
    </div>
  );
};

export default SocialBar;
