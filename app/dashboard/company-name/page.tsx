import { DollarSign, IndianRupee, Locate, Menu, Users2 } from "lucide-react";
import React from "react";

const company = () => {
  const isProfitable = true; // Set this variable to true for "Yes" and false for "No"
  const growthRate = 15; // Set the growth rate value

  return (
    <div className="flex items-center justify-center">
      <div className="border border-white rounded-lg h-[400px] w-[700px] p-4">
        <h1 className="font-extrabold text-2xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          Maggio Industries
        </h1>
        <div className="flex items-center justify-start mt-4">
          <div className="mr-2">
            <Locate />
          </div>
          <span className="font-semibold text-sm">
            Enskede ,Sweden
          </span>
        </div>
        <div className="flex items-center justify-start mt-4">
          <div className="mr-2">
            <IndianRupee />
          </div>
          <span className="font-bold text-sm">
            Valuation:
            <span className="font-semibold text-sm ml-2">1000</span>
          </span>
        </div>
        <div className="flex items-center justify-start mt-4">
          <div className="mr-2">
            <DollarSign />
          </div>
          <span className="font-bold text-sm">
            Profitability:
            <span className="font-semibold text-sm ml-2">
              {isProfitable ? "Yes" : "No"}
            </span>
          </span>
        </div>
        <div className="flex items-center justify-start mt-4">
          <div className="mr-2">
            <DollarSign />
          </div>
          <span className="font-bold text-sm">
            Growth Rate:
            <span className="font-semibold text-sm ml-2">{growthRate}%</span>
          </span>
        </div>
        <div className="flex items-center justify-start mt-4">
          <div className="mr-2">
            <Menu />
          </div>
          <span className="font-bold text-sm">
            Contact:
            <span className="font-semibold text-sm ml-2">Letizia Leroux</span>
          </span>
          <span className="font-semibold text-sm ml-2">(lleroux1@joomla.org)</span>
        </div>
        <div className="flex items-center justify-start mt-4">
          <div className="mr-2">
            <Users2 />
          </div>
          <span className="font-bold text-sm">
            Number of Investors:
            <span className="font-semibold text-sm ml-2">3</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default company;
