import React, { useState } from "react";
import Header from "@/components/Header";
import AppDownloadModal from "@/components/modals/AppDownloadModal";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import GallerySection from "@/components/sections/GallerySection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAppModal, setShowAppModal] = useState(false);

  const scrollToSection = (id) => {
    // Always close mobile menu first
    setMobileMenuOpen(false);

    // Small delay to allow re-render (header shrinks back after mobile menu closes)
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const header = document.querySelector("header");
        const headerHeight = header ? header.offsetHeight : 0;

        // Calculate top position with offset (extra 20px for breathing room)
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight - 20;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 200); // 200ms is reliable for menu close animation/re-render
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* Full-width HeroSection - moved outside the constrained main */}
      <HeroSection setShowAppModal={setShowAppModal} />

      {/* Constrained content for the rest of the page */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProblemSection scrollToSection={scrollToSection} />
        <HowItWorksSection />
        <FeaturesSection />
        <BenefitsSection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />

      <AppDownloadModal
        open={showAppModal}
        onClose={() => setShowAppModal(false)}
      />
    </div>
  );
}
