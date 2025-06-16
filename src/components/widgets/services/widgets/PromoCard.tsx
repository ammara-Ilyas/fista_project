import Image from "next/image";

const PromoCard = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 border rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 bg-white">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Ready to Elevate Your Search Rankings?
        </h2>
        <hr className="border-gray-300" />
        <p className="text-gray-700 text-sm">
          Our proven SEO strategies are designed to help your business achieve
          long-lasting success in search engines. Whether you want to boost
          organic traffic, improve keyword rankings, or increase conversions,
          we’re here to make it happen.
        </p>
        <p className="font-semibold text-gray-800">
          Let’s work together to grow your online presence.
        </p>
        <button className="bg-lime-400 text-black px-6 py-2 rounded-md font-medium hover:bg-lime-500 transition">
          Start My SEO Journey
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/robot-seo.png" // <-- Replace with your local image path
          alt="SEO Robot"
          width={250}
          height={250}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default PromoCard;
