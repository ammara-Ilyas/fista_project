"use client";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(true);
  };
  const links = [
    {
      name: "about us",
      link: "/product",
    },
    {
      name: "services",
      link: "/services",
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
          <div className="md:flex hidden  gap-4 flex-row items-center text-black relative">
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
          <button className=" md:block hidden px-6 py-2 border border-gray-300 rounded-[14px] text-black">
            Request a quote
          </button>
          <div onClick={handleNav} className="block  md:hidden">
            <AiOutlineMenu size={20} className="text-black" />
          </div>
        </div>
        {/* for mobile */}
        <div
          className={`${
            nav
              ? "fixed md:hidden left-0 top-0 w-[100%] sm:w-[80%] shadow-md  h-full ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          } text-black bg-white/95 z-50  pt-8`}
        >
          {/* Mobile Logo */}
          {/* Logo */}
          <div className=" flex items-center justify-between px-10 bg-white text-black">
            <div>
              <div className="w-48 h-[30px] relative">
                <Image src="/images/logo.png" alt="logo" fill />
              </div>{" "}
            </div>
            <AiOutlineClose
              size={20}
              className="text-black"
              onClick={() => setNav(false)}
            />
          </div>
          {/* Mobile Navigation Items */}
          <div className="flex flex-col gap-2 mt-9 ml-10">
            <div className="flex gap-4 flex-col  text-black relative">
              {links.map((nav, i) => (
                <div key={i} className="relative border-b">
                  <button
                    className={`capitalize text-black px-2 py-1 hover:underline 
                  `}
                  >
                    <span className="py-1">{nav.name}</span>
                  </button>
                </div>
              ))}
            </div>
            <button className=" py-2 border w-[160px] border-gray-300 rounded-[14px] text-black">
              Request a quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
