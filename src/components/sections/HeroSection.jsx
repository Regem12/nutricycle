import React from "react";
import Hero3 from "@/assets/hero3.jpg";

const HeroSection = ({ setShowAppModal }) => {
  return (
    <section
      id="home"
      className="relative min-h-[500px] h-screen max-h-[800px] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-amber-50 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url(${Hero3})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-green-500/30 to-transparent" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto w-full">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left max-w-2xl px-4 lg:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-green-800">
            Turning Vegetable Waste into Growth
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
            NutriCycle: An IoT-Based Waste-to-Value Machine for Converting
            Vegetable Waste into Poultry Feed Meal and Compost.
          </p>
          <button
            onClick={() => setShowAppModal(true)}
            className="mt-6 px-6 py-3 sm:px-8 sm:py-4 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors text-sm sm:text-base"
          >
            Download the Application
          </button>
        </div>

        {/* Responsive Video */}
        <div className="flex-1 max-w-lg w-full px-4 lg:px-0">
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
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

      {/* Trusted By Section */}
      <div className="absolute bottom-0 left-0 right-0 text-center py-4 bg-gradient-to-t from-green-100/50 to-transparent text-xs sm:text-sm">
        <p className="text-gray-700 mb-2">
          Trusted by over 39,000 forward-thinking companies
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          {/* Add logos here if needed */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
