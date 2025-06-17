"use client";

import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import SectionHeading from "./widgets/Heading";

const CaseStudies = () => {
  const cases = [
    {
      text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    {
      text: "For a B2B software company, we developed an SEO strategy that resulted in first-page rankings for key keywords and a 300% increase in organic traffic.",
    },
    {
      text: "For a national retail chain, we created a social media marketing campaign that increased followers by 35% and generated a 20% increase in online sales.",
    },
  ];

  return (
    <div>
      <SectionHeading
        heading="Case studies"
        text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />
      <div className="bg-white md:bg-[#111827] w-[90%] sm:w-[80%] md:w-[90%] lg:w-[80%] mx-auto rounded-2xl p-6 grid md:grid-cols-3 gap-6 text-white">
        {cases.map((item, index) => (
          <div
            key={index}
            className="space-y-4 border rounded-2xl md:rounded-none p-6 md:p-0 mx-auto bg-[#111827] w-[90%] sm:w-[80%] md:border-l-0 md:border-t-0 md:border-b-0 md:border-r last:border-r-0 pr-4 last:pr-0"
          >
            <p className="text-sm">{item.text}</p>
            <div className="flex items-center gap-1 text-green-400 font-medium cursor-pointer hover:underline">
              <span>Learn more</span>
              <span className=" ">
                <MdOutlineArrowOutward className=" w-4 h-4 text-[16px]" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
