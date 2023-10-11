import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-fuchsia-900 to-gray-900 min-h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4">
        <h1 className="text-8xl font-extrabold">Venturely</h1>
      </div>
      <div className="text-xl font-light text-white text-center">
        The Ultimate Data Engine 🤖
      </div>
      <Link href='/onboarding'>
        <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover.bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark.focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-6">
          Go to Onboarding
        </button>
      </Link>
    </div>
  );
};

export default Home;
