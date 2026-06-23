import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import schoolLogo from "@/assets/school-logo.png";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About Us",
    path: "/about",
    children: [
      { label: "Our History", path: "/about#history" },
      { label: "Mission & Vision", path: "/about#mission" },
      { label: "Leadership", path: "/about#leadership" },
      { label: "Infrastructure", path: "/about#infrastructure" },
    ],
  },
  {
    label: "Academics",
    path: "/academics",
    children: [
      { label: "Curriculum", path: "/academics#curriculum" },
      { label: "Departments", path: "/academics#departments" },
      { label: "Faculty", path: "/academics#faculty" },
    ],
  },
  { label: "Admissions", path: "/admissions" },
  { label: "Facilities", path: "/facilities" },
  { label: "Gallery", path: "/gallery" },
  { label: "News & Events", path: "/news" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card shadow-md">
      {/* Top bar */}
      <div className="hero-gradient">
        <div className="container flex items-center justify-between py-2 text-sm text-primary-foreground">
          <div className="flex gap-4">
            <span>📞 +91 8707340075</span>
            <span className="hidden sm:inline">✉ info@shripalpubliccollege.com</span>
          </div>
          <Link to="/admin" className="hover:underline text-primary-foreground/80 text-xs">
            Admin Login
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={schoolLogo} alt="Shripal Public Inter College Logo" className="h-12 w-12" />
          <div>
            <h1 className="text-lg font-bold font-heading text-primary leading-tight">Shripal Public Inter College</h1>
            <p className="text-xs text-muted-foreground">Inter College</p>
          </div>
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.path}
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary ${
                  location.pathname === item.path ? "text-primary bg-primary/5" : "text-foreground"
                }`}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3 w-3" />}
              </Link>
              {item.children && openDropdown === item.label && (
                <ul className="absolute top-full left-0 bg-card shadow-lg rounded-md border py-2 min-w-[200px] animate-fade-in">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        to={child.path}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-card animate-fade-in">
          <ul className="container py-4 space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors hover:bg-primary/10 ${
                    location.pathname === item.path ? "text-primary bg-primary/5" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
