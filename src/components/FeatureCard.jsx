import React from 'react';

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group relative flex flex-col gap-4 p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-green-300 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-2">
      {/* Icon Container with gradient background */}
      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
        <Icon className="text-green-600 w-8 h-8" />
      </div>
      
      {/* Title */}
      <h3 className="font-bold text-xl text-gray-900 group-hover:text-green-700 transition-colors">{title}</h3>
      
      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
}
