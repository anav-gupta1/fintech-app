import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="p-4 flex items-center justify-between">
        <Link href={"/"}>
          <div className="flex items-center justify-start ml-6">
            <img
              src='/logo.png'
              height={32}
              width={32}
            />
            <h1 className="font-bold text-2xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent px-3">
              VENTURELY
            </h1>
          </div>
        </Link>
        <div className="p-4 flex items-center">
          <Link href={"/dashboard"}>
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent text-lg font-semibold hover:scale-110 transition-transform ease-out">DASHBOARD</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;