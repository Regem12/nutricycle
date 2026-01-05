import React from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/LOGO-Green.svg";

export default function Header({
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection,
}) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <img src={Logo} alt="NutriCycle Logo" className="h-10 w-10" />
            <h2 className="text-2xl font-bold text-green-800">NutriCycle</h2>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              "Home",
              "How It Works",
              "Features",
              "Gallery",
              "About",
              "Contact",
            ].map((item) => (
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
          {/* Action Buttons 
          <div className="flex items-center gap-4">
            <button className="hidden lg:block px-5 py-2.5 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors">
              Download Documentation
            </button>
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          */}
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            {[
              "Home",
              "About",
              "How It Works",
              "Features",
              "Impact",
              "Gallery",
              "Contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item.toLowerCase().replace(/ /g, "-"))
                }
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
