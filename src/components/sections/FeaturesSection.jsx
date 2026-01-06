import React from "react";
import { Radar, Activity, Zap, BarChart3 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";

const FeaturesSection = () => {
  return (
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
  );
};

export default FeaturesSection;
