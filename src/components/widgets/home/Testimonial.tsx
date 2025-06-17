"use client";
import { useState, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "./widgets/TeastimonialCard";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
const testimonials = [
  {
    quote:
      "Positivus transformed our online marketing strategy. We've seen a 40% rise in conversion rates and our customer engagement has doubled. Their team is insightful and always goes the extra mile.",
    name: "Emily Johnson",
    title: "CEO at GreenTech Solutions",
  },
  {
    quote:
      "Working with Positivus has been a game-changer. They helped us streamline our SEO and paid ads, leading to consistent month-over-month growth. Highly professional and creative team!",
    name: "Michael Lee",
    title: "Head of Growth at FreshMart",
  },
  {
    quote:
      "The dedication and strategic thinking from Positivus are unmatched. We've launched multiple successful campaigns with them that brought measurable ROI. Excellent collaboration!",
    name: "Sara Williams",
    title: "CMO at BrightPath Education",
  },
  {
    quote:
      "From the very beginning, Positivus demonstrated a clear understanding of our brand and market. Their work has not only improved our digital visibility but also increased client trust.",
    name: "David Chen",
    title: "Founder of UrbanSpace Interiors",
  },
];

// Custom Dot Component
interface CustomDotProps {
  active: boolean;
  onClick: () => void;
}

const CustomDot = ({ active, onClick }: CustomDotProps) => (
  <button
    onClick={onClick}
    className="w-4 relative h-4 mx-1 flex items-center justify-center"
  >
    <Image
      src={
        active
          ? "/images/home/custom_active_dot.png"
          : "/images/home/custom_dot.png"
      }
      fill
      alt="custom dot"
      className="w-5 h-5 transition-transform duration-300 transform hover:scale-110"
    />
  </button>
);

const TestimonialSlider = () => {
  const carouselRef = useRef<Carousel | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isMobile = useMediaQuery("(max-width: 639px)");

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: 1,
    },
  };

  const goToPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous(1);
    }
  };

  const goToNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next(1);
    }
  };

  const goToSlide = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.goToSlide(index);
    }
    setActiveIndex(index);
  };

  return (
    <div className="my-20 w-full sm:w-[85%] mx-auto px-4">
      <div className="w-full mx-auto relative bg-[#0f0f1a] rounded-[45px] py-5 px-6">
        <Carousel
          ref={carouselRef}
          arrows={false}
          showDots={false}
          autoPlay
          autoPlaySpeed={3000}
          infinite
          swipeable
          draggable
          responsive={responsive}
          centerMode={!isMobile} // ✅ disables centerMode on mobile
          slidesToSlide={1}
          itemClass="carousel-item-padding-10-px"
          afterChange={(nextSlideIndex) => setActiveIndex(nextSlideIndex)}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#0f0f1a] rounded-xl h-full">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </Carousel>

        {/* Controls */}
        <div className="mt-6 flex w-[95%] sm:w-[75%] lg:w-[45%] mx-auto justify-between px-5 items-center space-x-4">
          {/* Left Arrow */}
          <button
            onClick={goToPrev}
            className="text-gray-200 p-2 rounded-full shadow-md"
          >
            <IoMdArrowBack className="text-xl" />
          </button>

          {/* Dots */}
          <div className="flex items-center space-x-2">
            {testimonials.map((_, index) => (
              <CustomDot
                key={index}
                active={index === activeIndex}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="text-gray-300 p-2 rounded-full shadow-md"
          >
            <IoMdArrowForward className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
