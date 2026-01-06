import React from "react";
import { AlertTriangle } from "lucide-react";

const AppDownloadModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative w-full max-w-md p-6 bg-white rounded-xl shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center">
          {/* LUCIDE ICON: AlertTriangle */}
          <AlertTriangle
            className="w-16 h-16 mx-auto mb-4 text-amber-500"
            strokeWidth={2}
          />

          <h3 className="mb-2 text-xl font-bold text-gray-800">
            Application Under Development
          </h3>
          <p className="mb-4 text-sm text-gray-600">
            The NutriCycle mobile app is still being built. We’ll notify you as
            soon as it’s ready for download!
          </p>

          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadModal;
