import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Leadership", href: "/leadership" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Navigation = () => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-2 bg-card/90 backdrop-blur-md border border-border rounded-full px-3 py-2 shadow-lg">
        {/* Nav links */}
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navigation;