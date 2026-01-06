import React from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/LOGO-Green.svg";

export default function Header({
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection,
}) {
  const navItems = [
    "Home",
    "How It Works",
    "Features",
    "Gallery",
    "About",
    "Contact",
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <img src={Logo} alt="NutriCycle Logo" className="h-10 w-10" />
            <h2 className="text-2xl font-bold text-green-800">NutriCycle</h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item.toLowerCase().replace(/ /g, "-"))
                }
                className="text-sm font-medium hover:text-green-600 transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase().replace(/ /g, "-"));
                  setMobileMenuOpen(false); // Close menu after selection
                }}
                className="text-left py-2 text-sm font-medium hover:text-green-600 transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
