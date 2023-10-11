import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-fuchsia-900 to-gray-900 min-h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4">
        <h1 className="text-9xl font-extrabold mb-4">Venturely</h1>
      </div>
      <div className="text-xl font-bold text-white text-center tracking-widest transition-transform hover:scale-110 duration-500">
        THE ULTIMATE FINTECH DATA ENGINE
      </div>

      <Link href='/onboarding'>
        <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:shadow-xl font-light text-lg rounded-lg focus:ring-2 px-10 py-3 text-center mr-2 hover:scale-110 transition-transform ease-out mb-2 mt-10">
          GO TO ONBOARDING
        </button>
      </Link>
    </div>
  );
};

export default Home;