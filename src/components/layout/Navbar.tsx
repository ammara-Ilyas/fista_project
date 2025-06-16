"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const links = [
    {
      name: "about us",
      link: "/product",
    },
    {
      name: "services",
      link: "/solution",
    },
    {
      name: "use cases",
      link: "/pricing",
    },
    {
      name: "pricing",
      link: "/learn",
    },
    {
      name: "blog",
      link: "/contact",
    },
  ];

  return (
    <nav className="flex flex-row justify-between items-center p-4 px-6 xl:px-20 bg-white ">
      <div className="flex justify-between flex-row w-full items-center space-x-3 xl:space-x-10">
        {/* Logo */}
        <div className="w-48 h-[30px] relative">
          <Image src="/images/logo.png" alt="logo" fill />
        </div>

        {/* Desktop Links */}
        <div className="flex flex-row ">
          <div className="flex gap-4 flex-row items-center text-black relative">
            {links.map((nav, i) => (
              <div key={i} className="relative">
                <button
                  className={`capitalize text-black px-2 py-1 hover:underline 
                  `}
                >
                  <span className="py-1">{nav.name}</span>
                </button>
              </div>
            ))}
          </div>
          <button className="px-6 py-2 border border-gray-300 rounded-[14px] text-black">
            Request a quote
          </button>
        </div>
      </div>
    </nav>
  );
}
