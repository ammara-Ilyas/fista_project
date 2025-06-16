import React from "react";

interface SectionHeadingProps {
  heading: string;
  text: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ heading, text }) => {
  return (
    <div className="flex items-start gap-4 w-[80%] mx-auto pb-10 pt-20">
      <span className="bg-[#B9FF66] capitalize px-3 py-1 rounded-md  font-[500] text-lg text-black whitespace-nowrap">
        {heading}
      </span>
      <p className="text-sm text-gray-700 capitalize max-w-md leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export default SectionHeading;
