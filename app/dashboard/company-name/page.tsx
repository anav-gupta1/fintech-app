import { DollarSign, IndianRupee, Locate, Menu, Users2 } from "lucide-react";
import React from "react";

const company = () => {
  return (
      <div className="flex items-center justify-center">
        <div className="border border-white rounded-lg h-[400px] w-[700px]">
          <div className=" flex items-center justify-center mt-4">
            <h1 className="font-extrabold text-2xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Shreedhar Industries</h1>
          </div>
          <div className="flex items-center justify-start ml-4 mt-4">
            <div>
                <Locate/>
            </div>
            <span className="font-semibold text-sm ml-2">New Delhi, India</span>
          </div>
          <div className="flex items-center justify-start ml-4 mt-4">
            <IndianRupee/>
            <span className="font-bold text-sm ml-2">Valuation:
                <span className="font-semibold text-sm ml-2">1000</span>
            </span>
          </div>
          <div className="flex items-center justify-start ml-4 mt-4">
            <Users2/>
            <span className="font-bold text-sm ml-2">Number of Investors:
                <span className="font-semibold text-sm ml-2">3</span>
            </span>
          </div>
        </div>
      </div>
  );
};

export default company;
