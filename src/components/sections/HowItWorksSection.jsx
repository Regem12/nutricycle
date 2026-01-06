import React from "react";
import { Package, Layers, Recycle, Sprout, Radar } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ProcessStep from "@/components/ProcessStep";

const HowItWorksSection = () => {
  return (
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
  );
};

export default HowItWorksSection;
