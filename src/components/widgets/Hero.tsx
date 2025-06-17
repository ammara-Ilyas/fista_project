import Image from "next/image";

// components/Hero.jsx
export default function Hero() {
  return (
    <section className=" text-black w-[90%] mx-auto  py-16 px-6  text-center md:text-left">
      <div className=" px-6  mx-auto flex  flex-col md:flex-row items-center justify-between  gap-6 md:gap-10">
        {/* Text */}
        <div className="w-full md:w-[50%] lg:w-[40%] space-y-6 flex flex-col items-start font-sans ">
          <h2 className="text-4xl md:text-4xl text-left font-semibold tracking-wide font-sans ">
            Navigating the digital landscape for success{" "}
          </h2>
          <p className="md:block hidden text-black text-left tracking-wide ">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="md:block hidden bg-[#191A23] text-white rounded-[14px] px-6 py-3 tracking-wide  transition">
            Request a demo
          </button>
        </div>

        {/* Illustration */}
        <div className="w-[80%]  md:w-[90%] lg:w-[80%] mx-auto  h-full ">
          <Image
            src="/images/hero.png"
            alt="Marketing Illustration"
            className="w-full  lg:w-[80%] mx-auto"
            width={400}
            height={400}
          />
        </div>
        <div className="block md:hidden">
          {" "}
          <p className=" text-black text-left tracking-wide ">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className=" bg-[#191A23] mt-4 text-white rounded-[14px] px-6 py-3 tracking-wide  transition">
            Request a demo
          </button>
        </div>
      </div>
    </section>
  );
}
