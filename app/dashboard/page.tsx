"use client";
import React, { useState } from "react";
import { ArrowRight, Filter, HelpCircle, Info, Search } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";


export default function Dashboard() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const dummyData = [
    {
      name: "Shreedhar Industries",
      email: "itsshreedharraj@gmail.com",
      country: "India",
      description: "A small description of the company",
      industry: "Educational Technology",
    },
    {
      name: "Aaryan Chadha",
      email: "aaryanchadha@gmail.com",
      country: "India",
      description: "I am here to be a prompt engineer.",
      industry: "Freelance Developer",
    },
    // Add more dummy data as needed
  ];

  return (
    <div>
      <div className="flex items-center justify-center mt-4">
        <h1 className="font-extrabold text-3xl p-4">Dashboard</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[300px] h-[100px] border border-gray-500 rounded-lg mt-4 ml-4">
          <h1 className="text-sm font-light px-4 mt-2">User Profile</h1>
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold px-4 mt-2">Hello Anav!</h1>
            <div className="mr-4">
              <UserButton />
            </div>
          </div>
          <h1 className="text-sm font-extralight px-4 text-gray-400">
            Manage your profile
          </h1>
        </div>
        <div className="w-[300px] h-[100px] border border-gray-500 rounded-lg mt-4 ml-4">
          <h1 className="text-sm font-light px-4 mt-2">News Search</h1>
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold px-4 mt-2">Look for articles!</h1>
            <div className="mr-4">
              <Search />
            </div>
          </div>
          <button className="ml-4 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xs px-2 py-1 text-center">
            Look!
          </button>
        </div>
        <div className="w-[300px] h-[100px] border border-gray-500 rounded-lg mt-4 ml-4">
          <h1 className="text-sm font-light px-4 mt-2">Need help?</h1>
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold px-4 mt-2">Contact Us!</h1>
            <div className="mr-4">
              <HelpCircle />
            </div>
          </div>
          <h1 className="text-sm font-extralight px-4 text-gray-400">
            venturely@gmail.com
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="relative w-[400px] mt-4">
          <input
            type="text"
            className="w-full bg-transparent border border-gray-400 rounded-lg pl-4 pr-10 py-2"
            style={{ height: "40px" }}
            placeholder="Search for companies"
          />
          <div className="absolute top-0 right-0 flex items-center h-full pr-3">
            <Search />
            <button className="bg-transparent" onClick={openModal}>
              <Filter />
            </button>
          </div>
        </div>
      </div>

      {isModalOpen ? (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center">
          <div className="bg-black p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Filter Your Results</h2>

            {/* Valuation Range filter */}
            <label className="block text-gray-600 font-medium mt-4">
              Valuation Range
            </label>
            <div className="flex items-center justify-between mt-2">
              <span>100,000</span>
              <input
                type="range"
                min="100000"
                max="50000000"
                step="100000"
                onChange={(e) => {
                  // Handle the slider value change here
                  const valuation = e.target.value;
                  console.log(valuation);
                }}
              />
              <span>50,000,000</span>
            </div>

            {/* Founder's Age filter */}
            <label className="block text-gray-600 font-medium mt-4">
              Founder's Age
            </label>
            <div className="flex items-center justify-between mt-2">
              <span>10</span>
              <input
                type="range"
                min="10"
                max="100"
                step="1"
                onChange={(e) => {
                  // Handle the slider value change here
                  const age = e.target.value;
                  console.log(age);
                }}
              />
              <span>100</span>
            </div>

            {/* Add more filter options here, such as years of experience, college degree, etc. */}

            {/* College Degree filter */}
            <label className="block text-gray-600 font-medium mt-4">
              College Degree
            </label>
            <div className="flex items-center mt-2">
              <label htmlFor="college-degree" className="mr-2">
                Has Degree
              </label>
              <input
                type="checkbox"
                id="college-degree"
                onChange={(e) => {
                  // Handle the checkbox value change here
                  const hasDegree = e.target.checked;
                  console.log(hasDegree);
                }}
              />
            </div>

            {/* College Tier filter */}
            <label className="block text-gray-600 font-medium mt-4">
              College Tier
            </label>
            <select
              className="bg-black"
              onChange={(e) => {
                // Handle the selected college tier here
                const collegeTier = e.target.value;
                console.log(collegeTier);
              }}
            >
              <option value="1">Tier 1</option>
              <option value="2">Tier 2</option>
              <option value="3">Tier 3</option>
            </select>

            <label className="block text-gray-600 font-medium mt-4">
              Founder's Years of Experience
            </label>
            <div className="flex items-center justify-between mt-2">
              <span>1</span>
              <input
                className=""
                type="range"
                min="1"
                max="50"
                step="1"
                onChange={(e) => {
                  // Handle the founder's years of experience value change here
                  const experience = e.target.value;
                  console.log(experience);
                }}
              />
              <span>50</span>
            </div>

            <label className="block text-gray-600 font-medium mt-4">
              Growth Rate (%)
            </label>
            <input
              className="bg-black border rounded-lg" // Add the "border" class here
              type="number"
              min="1"
              max="100"
              step="1"
              onChange={(e) => {
                // Handle the growth rate value change here
                const growthRate = e.target.value;
                console.log(growthRate);
              }}
            />

            {/* Industrial Sectors filter */}
            <label className="block text-gray-600 font-medium mt-4">
              Industrial Sectors
            </label>
            <select
              className="mx-auto pl-2 pr-4 bg-transparent border border-gray-400 rounded-lg p-2"
              onChange={(e) => {
                // Handle the selected industrial sector here
                const selectedSector = e.target.value;
                console.log(selectedSector);
              }}
            >
              <option></option>
              <option>Energy</option>
              <option>Health Care</option>
              <option>Finance</option>
              <option>Technology</option>
              <option>Capital Goods</option>
              <option>Public Utilities</option>
              <option>Consumer Services</option>
              <option>Consumer Non-Durables</option>
              <option>Consumer Durables</option>
              <option>Basic Industries</option>
              <option>Miscellaneous</option>
              <option>Transportation</option>
            </select>

            {/* Industries filter */}
            <label className="block text-gray-600 font-medium mt-4">
              Industries
            </label>
            <select
              className="mx-auto pl-2 pr-4 bg-transparent border border-gray-400 rounded-lg p-2"
              onChange={(e) => {
                // Handle the selected industry here
                const selectedIndustry = e.target.value;
                console.log(selectedIndustry);
              }}
            >
              <option></option>
              <option>Oil & Gas Production</option>
              <option>Major Pharmaceuticals</option>
              <option>Property-Casualty Insurers</option>
              <option>Computer Software: Prepackaged Software</option>
              <option>Auto Parts: O.E.M.</option>
              <option>Fluid Controls</option>
              <option>Real Estate Investment Trusts</option>
              <option>Apparel</option>
              <option>Commercial Banks</option>
              <option>Business Services</option>
              <option>Auto Manufacturing</option>
              <option>Investment Bankers/Brokers/Service</option>
              <option>Integrated Oil Companies</option>
              <option>Recreational Products/Toys</option>
              <option>Major Chemicals</option>
              <option>Telecommunications Equipment</option>
              <option>Medical/Nursing Services</option>
              <option>Television Services</option>
              <option>
                Biotechnology: Commercial Physical & Biological Research
              </option>
              <option>Military/Government/Technical</option>
              <option>Savings Institutions</option>
              <option>Power Generation</option>
              <option>Professional Services</option>
              <option>Life Insurance</option>
              <option>Precious Metals</option>
              <option>Medical/Dental Instruments</option>
              <option>Diversified Commercial Services</option>
              <option>Containers/Packaging</option>
              <option>Water Supply</option>
              <option>Major Banks</option>
              <option>Coal Mining</option>
              <option>Meat/Poultry/Fish</option>
              <option>Oilfield Services/Equipment</option>
              <option>Industrial Machinery/Components</option>
              <option>Electrical Products</option>
              <option>Plastic Products</option>
              <option>Restaurants</option>
              <option>Department/Specialty Retail Stores</option>
              <option>Office Equipment/Supplies/Services</option>
              <option>Oil Refining/Marketing</option>
              <option>Hospital/Nursing Management</option>
              <option>Real Estate</option>
              <option>
                Biotechnology: In Vitro & In Vivo Diagnostic Substances
              </option>
              <option>Finance: Consumer Services</option>
              <option>EDP Services</option>
              <option>Commercial Banks</option>
              <option>Automotive Aftermarket</option>
              <option>Electronic Components</option>
              <option>Computer Manufacturing</option>
              <option>Books</option>
              <option>Finance Companies</option>
              <option>
                Biotechnology: Electromedical & Electrotherapeutic Apparatus
              </option>
              <option>Computer Manufacturing</option>
              <option>Oil Refining/Marketing</option>
              <option>Other Consumer Services</option>
              <option>Food Distributors</option>
              <option>Broadcasting</option>
              <option>Department/Specialty Retail Stores</option>
              <option>Homebuilding</option>
              <option>Computer Peripheral Equipment</option>
              <option>Consumer Electronics/Appliances</option>
              <option>Real Estate</option>
              <option>Finance Companies</option>
              <option>Farming/Seeds/Milling</option>
              <option>Marine Transportation</option>
              <option>Packaged Foods</option>
              <option>Food Distributors</option>
              <option>Tobacco</option>
              <option>Medical Electronics</option>
              <option>Building Operators</option>
              <option>Textiles</option>
              <option>Advertising</option>
              <option>Food Chains</option>
              <option>Catalog/Specialty Distribution</option>
              <option>Rental/Leasing Companies</option>
              <option>Newspapers/Magazines</option>
              <option>Railroads</option>
              <option>Steel/Iron Ore</option>
              <option>Trucking Freight/Courier Services</option>
              <option>Industrial Specialties</option>
              <option>Building Materials</option>
              <option>Aerospace</option>
              <option>Computer Communications Equipment</option>
              <option>Specialty Foods</option>
              <option>Pollution Control Equipment</option>
              <option>Miscellaneous Manufacturing Industries</option>
              <option>Computer Software: Programming, Data Processing</option>
              <option>Medical Specialties</option>
              <option>
                Radio and Television Broadcasting and Communications Equipment
              </option>
              <option>Military/Government/Technical</option>
              <option>Shoe Manufacturing</option>
              <option>Power Generation</option>
              <option>Hotels/Resorts</option>
              <option>Engineering & Construction</option>
              <option>Air Freight/Delivery Services</option>
              <option>Environmental Services</option>
            </select>

            <label className="block text-gray-600 font-medium mt-4">
              Seed Stage
            </label>
            <select
              className="bg-black"
              onChange={(e) => {
                // Handle the selected seed stage here
                const selectedSeedStage = e.target.value;
                console.log(selectedSeedStage);
              }}
            >
              <option value="1">Seed</option>
              <option value="2">Series A</option>
              <option value="3">Series B</option>
              <option value="4">Series C</option>
            </select>

            {/* Filter and Close Buttons */}
            <div className="flex justify-between mt-4">
              <button
                className="bg-green-500 text-white rounded px-3 py-2"
                onClick={() => {
                  // Handle filter button click here
                }}
              >
                Filter
              </button>
              <button
                className="bg-red-500 text-white rounded px-3 py-2"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="overflow-x-auto mt-20 ml-4 mr-4 rounded-lg">
        <table className="min-w-full">
          <thead className="bg-gray-800 border border-gray-400">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent uppercase tracking-wider border-r border-gray-400">
                Company Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent tracking-wider border-r border-gray-400">
                Company Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent tracking-wider border-r border-gray-400">
                Country
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent tracking-wider border-r border-gray-400">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent tracking-wider">
                Industry
              </th>
            </tr>
          </thead>
          <tbody>
        {dummyData.map((company, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-wrap border-r border-b border-gray-400 font-semibold hover:text-decoration-line: underline bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                <Link href='/dashboard/company-name'>
                  {company.name}
                </Link>
            </td>
            <td className="px-6 py-4 whitespace-wrap border-r border-b border-gray-400 text-gray-400">
              {company.email}
            </td>
            <td className="px-6 py-4 whitespace-wrap border-r border-b border-gray-400 text-gray-400">
              {company.country}
            </td>
            <td className="px-6 py-4 whitespace-wrap border-r border-b border-gray-400 text-gray-400">
              {company.description}
            </td>
            <td className="px-6 py-4 whitespace-wrap border-b border-gray-400 text-gray-400">
              {company.industry}
            </td>
          </tr>
        ))}
        </tbody>

        </table>
      </div>
    </div>
  );
}
