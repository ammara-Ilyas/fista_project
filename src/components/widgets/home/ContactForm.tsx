"use client";

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
    // You can now send this data to an API or backend
  };

  return (
    <section className="bg-gray-50 p-8 rounded-xl shadow-md flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg flex flex-col gap-4"
      >
        {/* Radio Group */}
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
            <input
              type="radio"
              name="type"
              value="Say Hi"
              checked={formData.type === "Say Hi"}
              onChange={handleRadioChange}
              className="text-lime-500 focus:ring-lime-400"
            />
            Say Hi
          </label>
          <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
            <input
              type="radio"
              name="type"
              value="Get a Quote"
              checked={formData.type === "Get a Quote"}
              onChange={handleRadioChange}
              className="text-lime-500 focus:ring-lime-400"
            />
            Get a Quote
          </label>
        </div>

        {/* Inputs */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-lime-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-lime-400"
        />

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="p-3 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-lime-400"
        />

        <button
          type="submit"
          className="bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>

      {/* Right Side Illustration (Optional - Example Only) */}
      <div className="hidden lg:flex flex-col items-center justify-center w-1/2 relative">
        <div className="absolute w-40 h-40 border rotate-[20deg] border-black rounded-full" />
        <div className="w-12 h-12 bg-black rotate-45 z-10" />
        <div className="w-10 h-10 bg-lime-400 rotate-45 mt-6" />
      </div>
    </section>
  );
}
