import React, { useState } from "react";
import {
  Package,
  ArrowRight,
  Layers,
  Recycle,
  Sprout,
  Radar,
  Activity,
  Zap,
  BarChart3,
  Users,
  AlertTriangle,
} from "lucide-react";
import HeroBg from "./assets/Hero-BG.png";
import Hero1 from "./assets/hero1.jpg";
import Hero2 from "./assets/hero2.jpg";
import Hero3 from "./assets/hero3.jpg";
import Hero4 from "./assets/hero4.jpg";
import Hero5 from "./assets/hero5.jpg";
import Hero6 from "./assets/hero6.jpg";
import Placeholder from "./assets/Placeholder.png";
import Header from "./components/Header";
import Card from "./components/Card";
import SectionHeader from "./components/SectionHeader";
import FeatureCard from "./components/FeatureCard";
import ProcessStep from "./components/ProcessStep";

import Problem1 from "./assets/problem1.jpg";
import Problem2 from "./assets/problem2.jpg";
import Problem3 from "./assets/problem3.jpg";
import Prototype1 from "./assets/img1.png";
import Prototype2 from "./assets/img2.jpg";
import Prototype3 from "./assets/img3.jpg";
import Prototype4 from "./assets/img4.jpg";
import ThesisPDF from "./assets/nutricycle-final-paper.pdf";
// Placeholder logos - replace with actual paths or external URLs

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showAppModal, setShowAppModal] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is a demo - no actual submission)");
    setFormData({ name: "", email: "", message: "" });
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: Prototype1,
      title: "IoT Device Setup",
      desc: "Advanced sensors and monitoring hardware",
    },
    {
      src: Prototype2,
      title: "Mobile Monitoring",
      desc: "Real-time data visualization and control",
    },
    {
      src: Prototype3,
      title: "Composting System",
      desc: "Efficient organic waste processing",
    },
    {
      src: Prototype4,
      title: "Our Team",
      desc: "Collaborative development and testing",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 4); // 4 images
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 4) % 4);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  // Modal Component
  const AppDownloadModal = ({ open, onClose }) => {
    if (!open) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
        <div className="relative w-full max-w-md p-6 bg-white rounded-xl shadow-2xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Content */}
          <div className="text-center">
            {/* LUCIDE ICON: AlertTriangle */}
            <AlertTriangle
              className="w-16 h-16 mx-auto mb-4 text-amber-500"
              strokeWidth={2}
            />

            <h3 className="mb-2 text-xl font-bold text-gray-800">
              Application Under Development
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              The NutriCycle mobile app is still being built. We’ll notify you
              as soon as it’s ready for download!
            </p>

            <button
              onClick={onClose}
              className="px-5 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* Updated Hero Section */}
      <section
        id="home"
        className="relative h-screen max-h-[800px] min-h-[500px] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-amber-50 overflow-hidden"
      >
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url(${Hero3})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundAttachment: "scroll",
          }}
        />
        {/* Green gradient overlay at bottom to match reference */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-green-500/30 to-transparent"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto w-full">
          {/* Left: Text and Button */}
          <div className="flex-1 text-left max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-relaxed text-green-800">
              Turning Vegetable Waste into Growth
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-700">
              NutriCycle: An IoT-Based Waste-to-Value Machine for Converting
              Vegetable Waste into Poultry Feed Meal and Compost.
            </p>
            <button
              onClick={() => setShowAppModal(true)}
              className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors"
            >
              Download the Application
            </button>
          </div>

          {/* Right: Video Card */}
          <div className="flex-1 max-w-lg">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/XWt3u7y7dx0?autoplay=1&mute=1&loop=1&playlist=XWt3u7y7dx0"
                title="Upcycling Kitchen Waste into Chicken Feed"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom: Trusted By */}
        <div className="absolute bottom-0 left-0 right-0 text-center py-4 bg-gradient-to-t from-green-100/50 to-transparent">
          <p className="text-sm text-gray-700 mb-2">
            Trusted by over 39,000 forward-thinking companies
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {/* Placeholder logos */}
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4">
        {/* Problem Section - Clean, no background color */}
        <section id="problem" className="py-20 scroll-mt-20 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader
              title="The Challenge We Face"
              subtitle="Understanding the vegetable waste crisis in the Philippines"
              className="text-left mb-16"
            />

            <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
              <div className="flex-1 flex flex-col md:flex-row gap-8 justify-center items-center">
                {/* Image 1 */}
                <div className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-700 hover:shadow-2xl rotate-[-6deg] hover:rotate-0">
                  <img
                    src={Problem1}
                    alt="Market vendors handling vegetable waste"
                    className="w-72 h-72 md:w-80 md:h-80 object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                    <p className="text-white font-semibold text-lg">
                      Markets Overflowing
                    </p>
                  </div>
                </div>

                {/* Image 2 */}
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-700 hover:shadow-3xl z-10">
                  <img
                    src={Problem2}
                    alt="Household producing vegetable scraps"
                    className="w-80 h-80 md:w-96 md:h-96 object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white font-bold text-xl">
                      Household Waste
                    </p>
                  </div>
                </div>

                {/* Image 3 */}
                <div className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-700 hover:shadow-2xl rotate-[6deg] hover:rotate-0">
                  <img
                    src={Problem3}
                    alt="Poultry farmers dealing with high feed costs"
                    className="w-72 h-72 md:w-80 md:h-80 object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                    <p className="text-white font-semibold text-lg">
                      Farmers' Struggle
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 max-w-xl bg-white rounded-3xl p-10 shadow-2xl border-l-8 border-green-600">
                <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed mb-10">
                  Every day, markets, food establishments, and households
                  produce massive amounts of vegetable waste. Without proper
                  recycling, it ends up in landfills, contributing to
                  environmental harm. Meanwhile, poultry farmers struggle with
                  skyrocketing commercial feed costs, cutting into profits and
                  sustainability.
                </p>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="inline-flex items-center gap-4 px-8 py-4 bg-green-600 text-white rounded-2xl font-bold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  See Our Solution
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section - 5 Aligned Steps, Starting with Vegetable Waste Input as Step 1 */}
        <section
          id="how-it-works"
          className="py-20 scroll-mt-20 bg-gradient-to-b from-white to-green-50"
        >
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader
              title="How NutriCycle Works"
              subtitle="A simple five-step process transforming waste into valuable resources"
            />

            {/* Desktop View - Horizontal Flow (5 aligned steps) */}
            <div className="hidden md:grid md:grid-cols-5 gap-8 relative mt-16">
              {/* Connection Line */}
              <div
                className="absolute top-10 left-[10%] right-[10%] h-1 bg-gradient-to-r from-green-200 via-green-400 to-green-600"
                style={{ zIndex: 0 }}
              ></div>

              {/* Step 1: Vegetable Waste Input */}
              <div className="relative z-10">
                <ProcessStep
                  icon={Package}
                  step="1"
                  title="Waste Input"
                  description="Collect leafy vegetables and other organic waste from markets, farms, or households."
                />
              </div>

              {/* Step 2: Recognition */}
              <div className="relative z-10">
                <ProcessStep
                  icon={Radar}
                  step="2"
                  title="Recognition"
                  description="AI-powered sensors identify and classify the freshness and type of vegetable waste."
                />
              </div>

              {/* Step 3: Sorting */}
              <div className="relative z-10">
                <ProcessStep
                  icon={Layers}
                  step="3"
                  title="Sorting"
                  description="IoT system automatically routes waste to the correct processing chamber."
                />
              </div>

              {/* Step 4: Upcycling */}
              <div className="relative z-10">
                <ProcessStep
                  icon={Recycle}
                  step="4"
                  title="Upcycling"
                  description="Drying, grinding, and processing into poultry feed meal or compost."
                />
              </div>

              {/* Step 5: Output */}
              <div className="relative z-10">
                <ProcessStep
                  icon={Sprout}
                  step="5"
                  title="Output"
                  description="Ready-to-use poultry feed or organic fertilizer is produced and collected."
                />
              </div>
            </div>

            {/* Mobile View - Vertical Flow */}
            <div className="flex md:hidden flex-col gap-12 mt-12">
              {/* Step 1 */}
              <ProcessStep
                icon={Package}
                step="1"
                title="Vegetable Waste Input"
                description="Collect leafy vegetables and other organic waste from markets, farms, or households."
              />
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-green-400 to-green-600"></div>
              </div>

              {/* Step 2 */}
              <ProcessStep
                icon={Radar}
                step="2"
                title="Recognition"
                description="AI-powered sensors identify and classify the freshness and type of vegetable waste."
              />
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-green-400 to-green-600"></div>
              </div>

              {/* Step 3 */}
              <ProcessStep
                icon={Layers}
                step="3"
                title="Sorting"
                description="IoT system automatically routes waste to the correct processing chamber."
              />
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-green-400 to-green-600"></div>
              </div>

              {/* Step 4 */}
              <ProcessStep
                icon={Recycle}
                step="4"
                title="Upcycling"
                description="Drying, grinding, and processing into poultry feed meal or compost."
              />
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-green-400 to-green-600"></div>
              </div>

              {/* Step 5 */}
              <ProcessStep
                icon={Sprout}
                step="5"
                title="Output"
                description="Ready-to-use poultry feed or organic fertilizer is produced and collected."
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-16 scroll-mt-20 bg-gradient-to-b from-green-50 to-white"
        >
          <SectionHeader
            title="Key Features"
            subtitle="Advanced technology for efficient waste management and upcycling"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Radar}
              title="Vegetable Waste Recognition"
              description="Automated sensors identify and categorize vegetable waste."
            />
            <FeatureCard
              icon={Activity}
              title="IoT Monitoring"
              description="Real-time data on processing status and output production."
            />
            <FeatureCard
              icon={Zap}
              title="Eco-Friendly Upcycling"
              description="Transforms waste into valuable resources."
            />
            <FeatureCard
              icon={BarChart3}
              title="Analytics"
              description="Tracks and reports on conversion metrics."
            />
          </div>
        </section>

        {/* Benefits Section - Clean layout inspired by the reference image, no background */}
        <section id="benefits" className="py-20 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4">
            {/* Title + Intro */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-start">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 leading-tight">
                Key Benefits of NutriCycle
              </h2>
              <p className="text-lg text-gray-700 max-w-xl">
                NutriCycle delivers practical, real-world advantages for
                backyard farmers, markets, and the environment through smart
                waste upcycling and automation.
              </p>
            </div>

            {/* Main 3 Benefits - Large cards with rounded top images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
              {/* Cost Savings */}
              <div className="group">
                <div className="overflow-hidden rounded-3xl shadow-xl mb-6">
                  <img
                    src="https://thumbs.dreamstime.com/b/stacks-coins-grow-higher-small-plants-sprouting-top-green-upward-arrow-visually-represents-financial-growth-image-350808538.jpg"
                    alt="Cost Savings"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-3">
                  Cost Savings
                </h3>
                <p className="text-gray-700">
                  Reduces reliance on expensive commercial feeds.
                </p>
              </div>

              {/* Sustainability */}
              <div className="group">
                <div className="overflow-hidden rounded-3xl shadow-xl mb-6">
                  <img
                    src="https://www.epa.gov/sites/default/files/2015-09/lifecycle.jpg"
                    alt="Sustainability"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-3">
                  Sustainability
                </h3>
                <p className="text-gray-700">
                  Converts waste into a valuable resource.
                </p>
              </div>

              {/* Automation */}
              <div className="group">
                <div className="overflow-hidden rounded-3xl shadow-xl mb-6">
                  <img
                    src="https://i0.wp.com/primority.com/wp-content/uploads/2025/09/image-5.png?fit=1536%2C1024&ssl=1"
                    alt="Automation"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-3">
                  Automation
                </h3>
                <p className="text-gray-700">
                  Less labor required due to the machine's automated sorting and
                  processing.
                </p>
              </div>
            </div>

            {/* Remaining 2 Benefits - Smaller, side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Nutrition */}
              <div className="group flex flex-col md:flex-row gap-8 items-start">
                <div className="overflow-hidden rounded-3xl shadow-xl flex-shrink-0">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0039/4647/9689/files/What-Do-Chickens-Eat_-A-Chicken-Treat-Chart-_940x540-01.jpg"
                    alt="Nutrition"
                    className="w-64 h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-3">
                    Nutrition
                  </h3>
                  <p className="text-gray-700">
                    Made from upcycled leafy vegetables for strong, healthy
                    birds.
                  </p>
                </div>
              </div>

              {/* Community Impact */}
              <div className="group flex flex-col md:flex-row gap-8 items-start md:items-end md:text-right">
                <div className="overflow-hidden rounded-3xl shadow-xl flex-shrink-0 order-2 md:order-1">
                  <img
                    src="https://thecounter.org/wp-content/uploads/2021/04/lead-header-regenerative-agriculture-april-2021.jpg"
                    alt="Community Impact"
                    className="w-64 h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold text-green-800 mb-3">
                    Community Impact
                  </h3>
                  <p className="text-gray-700">
                    Helps backyard farmers, reduces waste in landfills, and
                    supports eco-friendly practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section - Compact Carousel: All Slides Smaller & Balanced */}
        <section
          id="gallery"
          className="py-20 scroll-mt-20 bg-gradient-to-b from-white to-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader
              title="Gallery and Prototype"
              subtitle="Visual showcase of our innovative waste management system"
              className="text-center mb-16"
            />

            {/* Carousel Wrapper */}
            <div className="relative">
              {/* Very Subtle & Small Side Peeks */}
              <div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 right-0 z-10">
                {/* Previous Peek - Compact */}
                <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-40 md:w-56 h-[300px] md:h-[400px] lg:h-[440px] -translate-x-1/4 md:-translate-x-1/3 scale-75 opacity-65 rounded-3xl overflow-hidden shadow-md">
                  <img
                    src={
                      images[(currentSlide - 1 + images.length) % images.length]
                        .src
                    }
                    alt="Previous slide"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Next Peek - Compact */}
                <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-40 md:w-56 h-[300px] md:h-[400px] lg:h-[440px] translate-x-1/4 md:translate-x-1/3 scale-75 opacity-65 rounded-3xl overflow-hidden shadow-md">
                  <img
                    src={images[(currentSlide + 1) % images.length].src}
                    alt="Next slide"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>

              {/* Main Slide - Smaller & Centered */}
              <div className="relative z-20 mx-auto max-w-5xl">
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {images.map((image, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="relative">
                          <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-[420px] md:h-[520px] lg:h-[600px] object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3">
                                {image.title}
                              </h3>
                              <p className="text-lg md:text-xl lg:text-2xl opacity-95 max-w-3xl">
                                {image.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ENHANCED Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 
                   bg-black/50 hover:bg-green-600 
                   border-2 border-white/20 
                   backdrop-blur-sm 
                   rounded-full p-4 md:p-6 
                   shadow-2xl transition-all duration-300 z-30 
                   group hover:scale-110 hover:border-green-400"
                aria-label="Previous slide"
              >
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 
                   bg-black/50 hover:bg-green-600 
                   border-2 border-white/20 
                   backdrop-blur-sm 
                   rounded-full p-4 md:p-6 
                   shadow-2xl transition-all duration-300 z-30 
                   group hover:scale-110 hover:border-green-400"
                aria-label="Next slide"
              >
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-3 mt-10 z-30 relative">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 ${
                      currentSlide === index
                        ? "w-12 h-3 bg-green-600 rounded-full shadow-md"
                        : "w-3 h-3 bg-gray-400 hover:bg-gray-600 rounded-full"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 scroll-mt-20">
          <SectionHeader title="About the Project" />

          {/* Description Card */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-white rounded-xl shadow-lg p-8 lg:p-10 border border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <span className="font-semibold text-green-600">NutriCycle</span>{" "}
                is an innovative solution designed to address the growing issue
                of vegetable waste from farms and wet markets. In the
                Philippines, tons of green leafy residues are discarded daily
                due to oversupply, spoilage, and poor post-harvest handling;
                leading to wasted resources and environmental harm.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                NutriCycle introduces an{" "}
                <span className="font-semibold text-green-600">
                  IoT- and AI-powered system
                </span>{" "}
                that automatically identifies, classifies, and processes
                vegetable waste into poultry feed or organic compost, depending
                on its freshness and quality. Equipped with computer vision and
                weight sensors, the system ensures accurate sorting and
                efficient upcycling through a dual-chamber processing unit.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <Card icon={Recycle} title="Our Mission">
              <p>
                To create eco-friendly technologies that upcycle vegetable waste
                into useful products such as poultry feed and compost,
                empowering farms and wet markets to reduce waste, conserve
                resources, and support a circular economy.
              </p>
            </Card>

            <Card icon={Zap} title="Our Vision">
              <p>
                A cleaner, greener community powered by smart innovation, where
                waste becomes a valuable resource for sustainable development.
              </p>
            </Card>

            <Card icon={Users} title="Our Team">
              <div className="space-y-1">
                <p>Bacolcol, Regem Y.</p>
                <p>Cabreros, James Viencent M.</p>
                <p>Cruz, Aeon Sebastian</p>
                <p>Dalugdog, Ervhyne</p>
                <p>Dela Cruz, Jazzy Mikelson</p>
                <p>Mentes, John Alphonsus</p>
                <p>Saldo, Ma. Caroline O.</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 scroll-mt-20">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-800">
              Get in Touch
            </h2>
            <p className="text-gray-700">
              Interested in learning more about NutriCycle or our research?
              Reach out via email or download our thesis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Email Button with Gmail Pre-fill */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nutricycle.bscs4a.2025@gmail.com&su=Inquiry%20about%20NutriCycle&body=Hello%20NutriCycle%20Team%2C%0A%0AI%20am%20interested%20in%20learning%20more%20about%20your%20project.%0A%0ABest%20regards%2C%0A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm3.5 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5h-11zm0 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-7z" />
                </svg>
                Let's have a talk!
              </a>

              {/* Download Thesis Button */}
              <button
                type="button"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = ThesisPDF;
                  link.download = "NutriCycle_Thesis.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-green-600 text-green-600 rounded-lg font-bold hover:bg-green-600 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Thesis
              </button>
            </div>

            {/* Optional: Direct email display */}
            <p className="text-sm text-gray-500">
              Or email us directly at:{" "}
              <a
                href="mailto:nutricycle.bscs4a.2025@gmail.com"
                className="text-green-600 font-medium hover:underline"
              >
                nutricycle.bscs4a.2025@gmail.com
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-amber-50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm">
          <p>
            © 2025 NutriCycle Project - University of Caloocan City, Computer
            Studies Department
          </p>
        </div>
      </footer>

      {/* MODAL RENDER */}
      <AppDownloadModal
        open={showAppModal}
        onClose={() => setShowAppModal(false)}
      />
    </div>
  );
}
