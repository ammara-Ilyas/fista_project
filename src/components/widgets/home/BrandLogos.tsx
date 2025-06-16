import Image from "next/image";

const logos = [
  { src: "/images/home/amazon.png", alt: "Amazon" },
  { src: "/images/home/dribbble.png", alt: "Dribbble" },
  { src: "/images/home/hubspot.png", alt: "HubSpot" },
  { src: "/images/home/notion.png", alt: "Notion" },
  { src: "/images/home/netflix.png", alt: "Netflix" },
  { src: "/images/home/zoom.png", alt: "Zoom" },
];

export default function BrandLogos() {
  return (
    <div className="w-full border-t border-b py-3 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between flex-wrap gap-4">
        {logos.map((logo) => (
          <Image
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            height={32}
            className="object-contain w-auto h-8"
          />
        ))}
      </div>
    </div>
  );
}
