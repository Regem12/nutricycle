import React from 'react';

export default function SectionHeader({ title, subtitle, className = "" }) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl lg:text-4xl font-bold text-green-800 mb-4">{title}</h2>
      {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
