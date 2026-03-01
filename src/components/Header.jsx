import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/LOGO-Green.svg";
import logo1 from "../assets/logo1.png";

export default function Header({
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection,
  user,
}) {
  const navigate = useNavigate();
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
            <img src={logo1} alt="NutriCycle Logo" className="h-15 w-10" />
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
            {user ? (
              <button
                onClick={() => navigate("/admin/dashboard")}
                className="ml-4 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                Go to Dashboard
              </button>
            ) : (
              <Link
                to="/admin/login"
                className="ml-4 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                Login
              </Link>
            )}
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
            {user ? (
              <button
                onClick={() => {
                  navigate("/admin/dashboard");
                  setMobileMenuOpen(false);
                }}
                className="block py-2 px-4 mt-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors text-center"
              >
                Go to Dashboard
              </button>
            ) : (
              <Link
                to="/admin/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-4 mt-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors text-center"
              >
                Admin Login
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
