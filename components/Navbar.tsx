import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="p-4 flex items-center justify-between">
        <Link href={"/"}>
          <div>
            <h1 className="font-bold text-2xl">
              Fintech<span className="font-light">Tracker</span>
            </h1>
          </div>
        </Link>
        <div className="p-4 flex items-center">
          <Link href={"/dashboard"}>
            <div className="font-light text-xl mr-8">Dashboard</div>
          </Link>
          <Link href={"/onboarding"}>
            <div className="font-light text-xl mr-4">Onboarding</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
