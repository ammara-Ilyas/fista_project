import Image from "next/image";

// components/Hero.jsx
export default function Hero() {
  return (
    <section className=" text-black w-[90%] mx-auto  py-16 px-6  text-center md:text-left">
      <div className=" px-6  mx-auto flex  flex-col-reverse  md:flex-row-reverse  items-center justify-between gap-10">
        {/* Text */}
        <div className="w-[85%] md:w-[40%] space-y-6 flex flex-col items-start font-sans ">
          <h2 className="text-4xl md:text-4xl text-left font-semibold tracking-wide font-sans ">
            Navigating the digital landscape for success{" "}
          </h2>
          <p className=" text-black text-left tracking-wide ">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className=" bg-[#191A23] text-white rounded-[14px] px-6 py-3 tracking-wide  transition">
            Request a demo
          </button>
        </div>

        {/* Illustration */}
        <div className=" w-[80%] mx-auto md:w-1/2  h-full ">
          <Image
            src="/images/hero.png"
            alt="Marketing Illustration"
            className="w-full lg:w-[80%] mx-auto"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
