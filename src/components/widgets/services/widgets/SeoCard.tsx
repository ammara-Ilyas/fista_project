"use client";

import { FaArrowLeft } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import React from "react";

const SeoCard: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl">
        {/* Back Button */}
        <div className="flex items-center mb-4 text-black cursor-pointer">
          <FaArrowLeft className="mr-2" />
          <span className="text-sm font-medium">Back</span>
        </div>

        {/* Card */}
        <div className="bg-[#0F0F1C] text-white p-6 rounded-3xl flex items-start gap-4">
          {/* Star Icon */}
          <div className="mt-1">
            <BsStars className="text-lime-400 text-2xl" />
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Badge */}
            <span className="inline-block bg-lime-400 text-black text-sm font-semibold px-2 py-1 rounded-md mb-2">
              Search engine optimization
            </span>

            {/* Description */}
            <p className="text-sm text-gray-300 mb-4">
              SEO is the process of improving your website’s visibility on
              search engines like Google. By optimizing your content and site
              structure, we help your business rank higher in search results,
              driving more organic traffic and potential customers.
            </p>

            {/* Button */}
            <button className="bg-white text-black font-medium px-6 py-2 rounded-lg hover:bg-gray-100 transition">
              Boost My Rankings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoCard;
