import React from "react";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Problem1 from "@/assets/problem1.jpg";
import Problem2 from "@/assets/problem2.jpg";
import Problem3 from "@/assets/problem3.jpg";

const ProblemSection = ({ scrollToSection }) => {
  return (
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
                <p className="text-white font-bold text-xl">Household Waste</p>
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
              Every day, markets, food establishments, and households produce
              massive amounts of vegetable waste. Without proper recycling, it
              ends up in landfills, contributing to environmental harm.
              Meanwhile, poultry farmers struggle with skyrocketing commercial
              feed costs, cutting into profits and sustainability.
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
  );
};

export default ProblemSection;
