"use client";

import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="bg-gray-50 px-6 md:px-12 w-[80%] mx-auto rounded-3xl  flex flex-col md:flex-row justify-between items-center gap-8 ">
      {/* Text Section */}
      <div className="max-w-md text-center md:text-left">
        <h2 className="text-2xl font-semibold mb-2">
          Let's make things happen
        </h2>
        <p className="text-gray-600 mb-4">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition">
          Get your free proposal
        </button>
      </div>

      <div className="relative py-2 h-[200px] w-[200px]">
        <Image
          src="/images/home/call_to_action.png"
          alt="call to action"
          fill
        />
      </div>
    </section>
  );
}
