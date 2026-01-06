import React from "react";
import { Recycle, Zap, Users } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 scroll-mt-20">
      <SectionHeader title="About the Project" />

      {/* Description Card */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="bg-white rounded-xl shadow-lg p-8 lg:p-10 border border-gray-200">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <span className="font-semibold text-green-600">NutriCycle</span> is
            an innovative solution designed to address the growing issue of
            vegetable waste from farms and wet markets. In the Philippines, tons
            of green leafy residues are discarded daily due to oversupply,
            spoilage, and poor post-harvest handling; leading to wasted
            resources and environmental harm.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            NutriCycle introduces an{" "}
            <span className="font-semibold text-green-600">
              IoT- and AI-powered system
            </span>{" "}
            that automatically identifies, classifies, and processes vegetable
            waste into poultry feed or organic compost, depending on its
            freshness and quality. Equipped with computer vision and weight
            sensors, the system ensures accurate sorting and efficient upcycling
            through a dual-chamber processing unit.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        <Card icon={Recycle} title="Our Mission">
          <p>
            To create eco-friendly technologies that upcycle vegetable waste
            into useful products such as poultry feed and compost, empowering
            farms and wet markets to reduce waste, conserve resources, and
            support a circular economy.
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
  );
};

export default AboutSection;
