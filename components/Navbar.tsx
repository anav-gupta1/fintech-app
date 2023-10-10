import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="p-4 flex items-center justify-between">
        <Link href={"/"}>
          <div className="flex items-center justify-start">
            <img
              src='/logo.png'
              height={28}
              width={28}
            />
            <h1 className="font-bold text-2xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              VENTURELY
            </h1>
          </div>
        </Link>
        <div className="p-4 flex items-center">
          <Link href={"/dashboard"}>
            <div className="font-light bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent text-lg font-semibold">DASHBOARD</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
