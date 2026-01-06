import React, { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import Prototype1 from "@/assets/img1.png";
import Prototype2 from "@/assets/img2.jpg";
import Prototype3 from "@/assets/img3.jpg";
import Prototype4 from "@/assets/img4.jpg";

const GallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
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
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
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
                  galleryImages[
                    (currentSlide - 1 + galleryImages.length) %
                      galleryImages.length
                  ].src
                }
                alt="Previous slide"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Next Peek - Compact */}
            <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-40 md:w-56 h-[300px] md:h-[400px] lg:h-[440px] translate-x-1/4 md:translate-x-1/3 scale-75 opacity-65 rounded-3xl overflow-hidden shadow-md">
              <img
                src={
                  galleryImages[(currentSlide + 1) % galleryImages.length].src
                }
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
                {galleryImages.map((image, index) => (
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
            {galleryImages.map((_, index) => (
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
  );
};

export default GallerySection;
