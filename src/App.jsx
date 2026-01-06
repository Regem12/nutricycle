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

// Note: Unused imports like HeroBg, Placeholder, etc., removed since they're now in sections.

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAppModal, setShowAppModal] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      <main className="max-w-7xl mx-auto px-4">
        <HeroSection setShowAppModal={setShowAppModal} />
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
