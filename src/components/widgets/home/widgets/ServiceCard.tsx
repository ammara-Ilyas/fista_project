"use client";

import { FC } from "react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

import Image from "next/image";

interface ServiceCardProps {
  title: string;
  bgColor: "white" | "green" | "black";
  img: string;
  bgText: string;
}

const bgClasses = {
  white: "bg-white text-black",
  green: "bg-lime-300 text-black",
  black: "bg-black text-white",
};

const ServiceCard: FC<ServiceCardProps> = ({ title, bgColor, bgText, img }) => {
  return (
    <div
      className={`rounded-[45px] h-[210px]  border flex justify-around items-center px-6 py-4 shadow-md transition-transform hover:scale-105 ${bgClasses[bgColor]}`}
    >
      <div className=" h-[80%] flex flex-col justify-between">
        <div className="mb-6">
          <h3
            className={`inline-block ${bgText} rounded-sm p-[1px] text-[24px] font-normal text-black`}
          >
            {title}
          </h3>
        </div>
        <Link
          href="#"
          className="flex items-center gap-2 font-medium hover:underline"
        >
          <span className="rounded-full p-1  ">
            <MdOutlineArrowOutward className=" w-4 h-4" />
          </span>
          Learn more
        </Link>
      </div>
      <div className="relative py-2 h-[100px] w-[100px]">
        <Image src={img} alt={title} fill />
      </div>
    </div>
  );
};

export default ServiceCard;
