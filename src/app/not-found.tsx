import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center px-4">
      <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
      <p className="text-xl text-gray-300 mb-6">
        This page is still under construction 🛠️
      </p>
      <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin mb-6" />
      <Link href="/" passHref>
        <button className="px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
          Return Home
        </button>
      </Link>
    </div>
  );
};

export default Custom404;
