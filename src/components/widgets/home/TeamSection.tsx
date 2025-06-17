"use client";

import Image from "next/image";
import { FC } from "react";
import SectionHeading from "./widgets/Heading";
import { FaLinkedinIn } from "react-icons/fa";

type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    description:
      "13+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
    image: "/images/home/team.png",
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills.",
    image: "/images/home/team.png",
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.",
    image: "/images/home/team.png",
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    description:
      "3+ years of experience in paid search advertising. Skilled in keyword management and performance analysis.",
    image: "/images/home/team.png",
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    description:
      "4+ years of experience in social media marketing. Proficient in creating engaging content, analyzing metrics, and building engagement.",
    image: "/images/home/team.png",
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    description:
      "2+ years of experience in writing and blogging. Skilled in creating compelling, SEO-optimized content for various industries.",
    image: "/images/home/team.png",
  },
];

const TeamSection: FC = () => {
  return (
    <section className="py-12 px-4 md:px-12 bg-white">
      <SectionHeading
        heading="team"
        text="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />
      <div className="grid grid-cols-1 w-[90%] sm:w-[80%] pb-6 mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative bg-white rounded-[45px]  border border-gray-200 shadow-md px-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <div className="flex flex-row justify-between pt-2 h-full w-full">
              <div className="relative pt-6 w-[60px] h-[60px]">
                <Image src={member.image} alt={member.name} fill />
              </div>
              <div className=" h-full w-[70%] pt-2 flex justify-between items-end flex-col  ">
                <span className="rounded-full p-1  bg-black ">
                  <FaLinkedinIn className=" w-4 h-4 text-[#B9FF66] " />
                </span>
                <div className="text-left w-full">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                </div>
              </div>
            </div>
            <p className="text-sm border-t py-6 text-gray-600">
              {member.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-right mt-10">
        <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
          See all team
        </button>
      </div>
    </section>
  );
};

export default TeamSection;
