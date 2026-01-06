import React from "react";
import Hero3 from "@/assets/hero3.jpg";

const HeroSection = ({ setShowAppModal }) => {
  return (
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
  );
};

export default HeroSection;
