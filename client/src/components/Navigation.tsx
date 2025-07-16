import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import kinaLogo from "../assets/kina-long.svg";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/product", label: "Product" },
    { path: "/team", label: "Team" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src={kinaLogo} alt="Kina Health" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-neutral-600 hover:text-primary transition-colors ${
                  location === item.path ? "text-primary font-medium" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:hello@kinahealth.com"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-neutral-600 hover:text-primary"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-3 py-2 text-neutral-600 hover:text-primary ${
                  location === item.path ? "text-primary font-medium" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:hello@kinahealth.com"
              className="block px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 mx-3"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
