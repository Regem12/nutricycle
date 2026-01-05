import React from 'react';

export default function ProcessStep({ icon: Icon, step, title, description }) {
  return (
    <div className="flex flex-col items-center text-center gap-4 max-w-[280px] mx-auto">
      <div className="relative">
        <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 text-green-600 shadow-lg transform hover:scale-110 transition-transform duration-300">
          <Icon className="w-10 h-10" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
          {step}
        </div>
      </div>
      <h3 className="font-bold text-xl text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
