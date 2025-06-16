"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NotFoundComponent = () => {
  const router = useRouter();
  const handleBackward = () => {
    router.push("/");
  };
  return (
    <div className="flex flex-col  items-center pt-16 min-h-screen bg-black text-white">
      <h1 className="text-6xl font-bold  mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found</h2>
      <p className="text-gray-100 mb-6">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <button
        className="bg-white border text-black font-semibold px-6 py-3 rounded-lg"
        onClick={handleBackward}
      >
        Go Back Home
      </button>
      <footer className="text-center mt-5 text-gray-100">
        © Ammara Ilyas, All Rights Reserved. Designed By HTML Codex
      </footer>
    </div>
  );
};

export default NotFoundComponent;
