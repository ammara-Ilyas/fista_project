"use client";

import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white px-6 py-10 md:px-20">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-white text-xl font-bold mb-4">🚀 Positivus</h2>
          <button className="bg-[#B9FF66] text-black font-semibold px-4 py-1 rounded-full mb-4">
            Contact us
          </button>
          <ul className="text-sm space-y-2">
            <li>Email: info@positivus.com</li>
            <li>Phone: 925-587-9801</li>
            <li>
              Address: 1234 Main St
              <br />
              Moonstone City, StarDust State 12345
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex flex-col gap-2 text-sm">
          <a href="#" className="hover:underline">
            About us
          </a>
          <a href="#" className="hover:underline">
            Services
          </a>
          <a href="#" className="hover:underline">
            Use Cases
          </a>
          <a href="#" className="hover:underline">
            Pricing
          </a>
          <a href="#" className="hover:underline">
            Blog
          </a>
        </div>

        {/* Newsletter */}
        <div className="flex-1">
          <form className="bg-[#2B2B2B] p-4 rounded-lg flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-3 py-2 bg-transparent border border-gray-600 rounded text-sm focus:outline-none text-white"
            />
            <button
              type="submit"
              className="bg-lime-400 text-black px-4 py-2 rounded text-sm font-semibold"
            >
              Subscribe to news
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 Positivus. All Rights Reserved.</p>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Blog
          </a>
          <div className="flex gap-3 text-white text-lg">
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
