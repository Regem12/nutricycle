import React from "react";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title + Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-start">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 leading-tight">
            Key Benefits of NutriCycle
          </h2>
          <p className="text-lg text-gray-700 max-w-xl">
            NutriCycle delivers practical, real-world advantages for backyard
            farmers, markets, and the environment through smart waste upcycling
            and automation.
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
                Made from upcycled leafy vegetables for strong, healthy birds.
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
                Helps backyard farmers, reduces waste in landfills, and supports
                eco-friendly practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
