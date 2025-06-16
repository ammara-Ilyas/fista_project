"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] mt-20 w-[90%] mx-auto rounded-t-[45px] text-white px-6 pt-10  md:px-14">
      <div className=" flex flex-col gap-4">
        {/* Left Section */}

        <div className="flex flex-row justify-between ">
          <div className="w-48 h-[30px] relative">
            <Image src="/images/home/footer_log.png" alt="footer logo" fill />
          </div>

          <div className="hidden md:flex flex-row text-white items-center justify-center gap-4 text-sm">
            <Link href="#" className="underline">
              About us
            </Link>
            <Link href="#" className="underline">
              Services
            </Link>
            <Link href="#" className="underline">
              Use Cases
            </Link>
            <Link href="#" className="underline">
              Pricing
            </Link>
            <Link href="#" className="underline">
              Blog
            </Link>
          </div>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <div className="flex gap-3  text-sm">
              <a href="#" className=" p-2 rounded-full bg-white">
                <FaLinkedinIn className="text-black" />
              </a>
              <a href="#" className=" p-2 rounded-full bg-white">
                <FaFacebookF className="text-black" />
              </a>
              <a href="#" className=" p-2 rounded-full bg-white">
                <FaTwitter className="text-black" />
              </a>
            </div>
          </div>
        </div>

        <div className=" flex justify-between items-center ">
          <div className="flex flex-col gap-2  items-start">
            <button className="bg-customColor  text-black font-semibold p-[2px] rounded-md">
              Contact us;
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
          <form className="bg-[#2B2B2B] p-4 rounded-lg flex gap-4">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-2 bg-transparent border border-gray-600 rounded text-sm focus:outline-none text-white"
            />
            <button
              type="submit"
              className="bg-customColor text-black px-4 py-2 rounded text-sm font-semibold"
            >
              Subscribe to news
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-6 border-t border-gray-700 py-7 text-sm flex flex-col md:flex-row gap-4 items-center">
        <p>© 2025 Positivus. All Rights Reserved.</p>
        <p className="underline ">Privacy Policy</p>
      </div>
    </footer>
  );
}
