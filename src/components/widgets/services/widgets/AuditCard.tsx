"use client";

import React from "react";

const AuditCard: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl">
        <div className="bg-gray-100 border-2 border-red-600 rounded-3xl flex items-start gap-5 p-6">
          {/* Star with Number */}
          <div className="bg-[#0F0F1C] border-2 border-red-800 text-lime-400 rounded-full w-24 h-20 flex items-center justify-center text-2xl font-bold relative star-shape">
            <span>01</span>
            <svg
              viewBox="0 0 100 100"
              className="absolute w-full h-full top-0 left-0 z-[-1]"
            >
              <polygon
                points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35"
                fill="#0F0F1C"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="border-2 border-red-600">
            <h2 className="text-lg font-semibold text-black mb-2">
              Website Audit & Analysis
            </h2>
            <p className="text-sm text-gray-700">
              We begin by conducting a comprehensive audit to identify areas for
              improvement, including technical issues, content quality, and
              keyword opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditCard;
