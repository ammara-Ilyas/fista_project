"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    type: "Say Hi",
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, type: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    // <section className="bg-gray-50 py-12  border-green-700">
    <div className=" mx-auto  flex flex-col lg:flex-row bg-[#F3F3F3] items-center justify-between gap-12 w-[80%]  py-8 rounded-xl ">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-[400px] justify-center ml-16 gap-2 py-2  lg:w-[450px] flex flex-col h-full "
      >
        {/* Radio Group */}
        <div className="flex items-center mx-5 gap-4">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <input
              type="radio"
              name="type"
              value="Say Hi"
              checked={formData.type === "Say Hi"}
              onChange={handleRadioChange}
              className="w-5 h-5 border-none accent-customColor"
            />
            Say Hi
          </label>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <input
              type="radio"
              name="type"
              value="Get a Quote"
              checked={formData.type === "Get a Quote"}
              onChange={handleRadioChange}
              className="w-5 h-5 border-none accent-customColor"
            />
            Get a Quote
          </label>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-1  m-2">
          <label
            htmlFor="name"
            className="flex items-center ml-1 gap-2 text-sm font-medium text-gray-700"
          >
            Name
          </label>

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 border border-black rounded-md bg-white focus:outline-none  focus:ring-none"
          />
        </div>
        <div className="flex flex-col gap-1  m-2">
          <label
            htmlFor="email"
            className="flex items-center ml-1 gap-2 text-sm font-medium text-gray-700"
          >
            Email*
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border border-black rounded-md bg-white focus:outline-none  focus:ring-none"
          />
        </div>
        <div className="flex flex-col gap-1  m-2">
          <label
            htmlFor="message"
            className="flex items-center ml-1 gap-2 text-sm font-medium text-gray-700"
          >
            Message*
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="p-3 border border-black rounded-md bg-white focus:outline-none  focus:ring-none"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>

      {/* Image */}
      <div className="relative w-[400px] h-[400px] lg:w-[280px] lg:h-[450px]">
        <Image
          src="/images/home/Illustration.png"
          alt="contact_form"
          layout="fill"
          fill
          objectFit="contain"
          className=""
          priority
        />
      </div>
    </div>
  );
}
