"use client";

import { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import SectionHeading from "./home/widgets/Heading";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // default open first item
  const [faqs, setFaqs] = useState([
    {
      question: "Consultation",
      answer:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      question: "Research and Strategy Development",
      answer:
        "We conduct thorough research and develop a marketing strategy tailored to your business needs and audience.",
    },
    {
      question: "Implementation",
      answer:
        "We implement the marketing strategies across appropriate channels to meet your objectives.",
    },
    {
      question: "Monitoring and Optimization",
      answer:
        "We continuously monitor performance and optimize the campaigns for best results.",
    },
    {
      question: "Reporting and Communication",
      answer:
        "Regular reporting and open communication ensure you're always in the loop.",
    },
    {
      question: "Continual Improvement",
      answer:
        "We refine and improve your marketing strategies based on data and results.",
    },
  ]);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {" "}
      <SectionHeading
        heading="Our Working Process"
        text="Step-by-Step Guide to Achieving Your Business Goals"
      />
      <div className="space-y-4 w-[80%] mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={` transition-all  px-10 duration-300 shadow-md shadow-black  rounded-[16px] ${
              openIndex === index
                ? "bg-[#B9FF66] text-black"
                : "bg-gray-100 text-black"
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full  flex justify-between   items-center p-4  transition-all duration-300`}
            >
              <span className="font-medium  flex items-center justify-center rounded-full p-2">
                <span className="font-semibold text-3xl mr-2">
                  {" "}
                  0{index + 1}
                </span>
                {faq.question}
              </span>
              <span className="border-2 border-gray-200 rounded-full p-2 bg-gray-100">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>
            {openIndex === index && (
              <div
                className={`p-4 border-t border-gray-400 mx-auto text-black rounded-b-lg  ${
                  openIndex === index
                    ? "bg-[#B9FF66] text-black"
                    : "bg-gray-100 text-black"
                } `}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
