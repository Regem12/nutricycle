import React from 'react';

export default function Card({ icon: Icon, title, children, className = "" }) {
  return (
    <div className={`bg-white rounded-2xl shadow-xl p-10 text-center border-2 border-gray-100 hover:shadow-2xl hover:border-green-200 transition-all duration-300 transform hover:-translate-y-2 ${className}`}>
      {Icon && (
        <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
          <Icon className="w-10 h-10 text-green-600" />
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>
      <div className="text-gray-600 leading-relaxed text-base">
        {children}
      </div>
    </div>
  );
}
