import ServiceCard from "./widgets/ServiceCard";
import {
  FaSearch,
  FaMousePointer,
  FaEnvelope,
  FaChartLine,
  FaFileAlt,
} from "react-icons/fa";
import { FaRobot } from "react-icons/fa6";
import SectionHeading from "./widgets/Heading";

export default function Services() {
  return (
    <div>
      <SectionHeading
        heading="Services"
        text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
      <main className="min-h-screen w-full sm:w-[90%] lg:w-[80%] mx-auto  pb-10 grid grid-cols-1 sm:grid-cols-2  gap-6">
        <ServiceCard
          title="Search engine optimization"
          bgColor="white"
          bgText="bg-[#B9FF66]"
          img="/images/home/search_engine.png"
        />
        <ServiceCard
          title="Pay-per-click advertising"
          bgColor="green"
          bgText="bg-white"
          img="/images/home/pay_per_click.png"
        />
        <ServiceCard
          title="Social Media Marketing"
          bgColor="black"
          bgText="bg-white"
          img="/images/home/social_media.png"
        />
        <ServiceCard
          title="Email Marketing"
          bgColor="white"
          bgText="bg-[#B9FF66]"
          img="/images/home/email_marketer.png"
        />
        <ServiceCard
          title="Content Creation"
          bgColor="green"
          bgText="bg-white"
          img="/images/home/content_creation.png"
        />
        <ServiceCard
          title="Analytics and Tracking"
          bgColor="black"
          bgText="bg-[#B9FF66]"
          img="/images/home/advertising.png"
        />
      </main>
    </div>
  );
}
