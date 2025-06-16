// components/TestimonialCard.tsx
import { FaQuoteLeft } from "react-icons/fa";

export interface TestimonialType {
  quote: string;
  name: string;
  title: string;
}

interface Props {
  testimonial: TestimonialType;
}

const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <div className="flex flex-col  justify-center items-center text-white ">
      {/* Bordered Box */}
      <div className="relative border border-customColor rounded-xl p-6 m-5">
        {/* Quote Icon inside */}

        {/* Text */}
        <p className="text-sm leading-relaxed">{testimonial.quote}</p>

        {/* Bottom Tail (speech bubble pointer) */}
        <div className="absolute left-6   -bottom-2 w-4 h-4 bg-[#0f0f1a] border-b border-r border-customColor rotate-45"></div>
      </div>

      {/* Name and Title below border */}
      <div className="mt-6 pl-2 border-2">
        <p className="text-customColor font-semibold">{testimonial.name}</p>
        <p className="text-sm text-gray-400">{testimonial.title}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
