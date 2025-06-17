import Image from "next/image";

const logos = [
  { src: "/images/home/amazon.png", alt: "Amazon" },
  { src: "/images/home/briblle.png", alt: "Dribbble" },
  { src: "/images/home/hubspot.png", alt: "HubSpot" },
  { src: "/images/home/notion.png", alt: "Notion" },
  { src: "/images/home/netflex.png", alt: "Netflix" },
  { src: "/images/home/zoom.png", alt: "Zoom" },
];

export default function BrandLogos() {
  return (
    <div className="w-full  py-3 bg-white">
      <div className="max-w-screen-xl  mx-auto px-4 grid grid-cols-3 justify-center md:grid-cols-6 items-center md:justify-between  gap-4">
        {logos.map((item, i) => (
          <div key={i} className=" w-[120px] h-[50px] xl:w-[150px] relative ">
            <Image src={item.src} alt={item.alt} fill />
          </div>
        ))}
      </div>
    </div>
  );
}
