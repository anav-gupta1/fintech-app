"use client";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

export default function Onboarding() {
  const [selectedOption, setSelectedOption] = useState("Investor");

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "Female",
    city: "",
    country: "",
    age: 0,
    YOE: 0,
    college_bool: 0,
    college_name: "",
    college_tier: 0,
    industry: "N/A",
    sector: "N/A",
    company_bio: "",
    valuation: 0,
    location: "",
    growth_rate: 0,
    funding_round: 0,
    investor_number: 0,
    profitable: "Yes",
    company_name: "",
  });

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
   
    try {
      const response = await fetch("http://127.0.0.1:5000/onboarding", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
        mode: 'no-cors',
        credentials: 'include',
      });
      
      if (response.ok) {
        // Handle a successful response from your Flask API
        console.log("Company added successfully!");
      } else {
        // Handle errors here
        console.error("An error occurred.");
      }
    } catch (error) {
      console.error("An error occurred.", error);
    }
  };
  
  // ... (rest of your component)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto">
      <div className="mb-4">
        <select
          className="mx-auto pl-2 pr-4 bg-transparent border border-gray-400 rounded-lg p-2"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="Investor">Investor</option>
          <option value="Business">Business</option>
        </select>
      </div>
      <div className="w-[400px] mx-auto overflow-y-auto">
        <form onSubmit={handleFormSubmit}>
          {selectedOption === "Investor" && (
            <div className="mt-6 flex items-center justify-center">
              <Link href="/investordash">
                <button
                  type="submit"
                  className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Submit
                </button>
              </Link>
            </div>
          )}
          {selectedOption === "Business" && (
            <>
              <div className="mt-6">
                <div>
                  <label className="font-light text-sm">First Name</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                    placeholder="Enter your first name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mt-6">
                <div>
                  <label className="font-light text-sm">Last Name</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                    placeholder="Enter your last name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mt-6">
                <div>
                  <label className="font-light text-sm">Email</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mt-6">
                <div>
                  <label className="font-light text-sm">Gender</label>
                </div>
                <div>
                  <select
                    className="mx-auto pl-2 pr-4 bg-transparent border border-gray-400 rounded-lg p-2"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option>Female</option>
                    <option>Male</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <div>
                  <label className="font-light text-sm">City</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                    placeholder="Enter the city you live in"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mt-6">
                <div>
                  <label className="font-light text-sm">Country</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                    placeholder="Enter the country you live in"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mt-6">
                <div>
                  <label className="font-light text-sm">Age</label>
                </div>
                <div>
                  <input
                    type="number"
                    className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                    placeholder="Enter your age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mt-6">
                <div>
                  <label className="font-light text-sm">
                    Years of Experience
                  </label>
                </div>
                <div>
                  <input
                    type="number"
                    className="font-semilight text-sm bg-transparent border border-gray
                    -400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                    placeholder="Enter how much experience you have"
                    name="YOE"
                    value={formData.YOE}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mt-6">
                <div>
                  <label className="font-light text-sm">College</label>
                </div>
                <div>
                  <select
                    className="mx-auto pl-2 pr-4 bg-transparent border border-gray-400 rounded-lg p-2"
                    name="college_bool"
                    value={formData.college_bool}
                    onChange={handleInputChange}
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <div>
                  <label className="font-light text-sm">College Name</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                    placeholder="Enter the name of the college you have been to"
                    name="college_name"
                    value={formData.college_name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mt-6">
                <div>
                  <label className="font-light text-sm">College Tier</label>
                </div>
                <div>
                  <input
                    type="number"
                    className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                    placeholder="Enter the tier of the college you have been to, 1 2 or 3"
                    name="college_tier"
                    value={formData.college_tier}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mt-6">
                <div>
                  <label className="font-light text-sm">
                    Enter the Industry you are in
                  </label>
                </div>
                <div className="w-[200px]">
                  <select
                    className="mx-auto pl-2 pr-4 bg-transparent border border-gray-400 rounded-lg p-2"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
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
                      Biotechnology: Electromedical & Electrotherapeutic
                      Apparatus
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
                    <option>
                      Computer Software: Programming, Data Processing
                    </option>
                    <option>Medical Specialties</option>
                    <option>
                      Radio and Television Broadcasting and Communications
                      Equipment
                    </option>
                    <option>Military/Government/Technical</option>
                    <option>Shoe Manufacturing</option>
                    <option>Power Generation</option>
                    <option>Hotels/Resorts</option>
                    <option>Engineering & Construction</option>
                    <option>Air Freight/Delivery Services</option>
                    <option>Environmental Services</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <div>
                  <label className="font-light text-sm">
                    Enter the Sector you are in
                  </label>
                </div>
                <div className="w-[200px]">
                  <select
                    className="mx-auto pl-2 pr-4 bg-transparent border border-gray-400 rounded-lg p-2"
                    name="sector"
                    value={formData.sector}
                    onChange={handleInputChange}
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
                </div>
              </div>
              <div className="mt-6">
                <div>
                  <label className="font-light text-sm">Company Bio</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                    placeholder="Enter the company bio"
                    name="company_bio"
                    value={formData.company_bio}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mt-6">
                <div>
                  <label className="font-light text-sm">Valuation</label>
                </div>
                <div>
                  <input
                    type="number"
                    className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                    placeholder="Enter your valuation in USD"
                    name="valuation"
                    value={formData.valuation}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mt-6">
                <div>
                  <label className="font-light text-sm">Location</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                    placeholder="Enter your location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mt-6">
                <div>
                  <label className="font-light text-sm">Growth Rate</label>
                </div>
                <div>
                  <input
                    type="number"
                    className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                    placeholder="Enter your growth rate"
                    name="growth_rate"
                    value={formData.growth_rate}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mt-6">
                <div>
                  <label className="font-light text-sm">Funding Round</label>
                </div>
                <div>
                  <input
                    type="number"
                    className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                    placeholder="Enter the number of funding rounds"
                    name="funding_round"
                    value={formData.funding_round}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mt-6">
                <div>
                  <label className="font-light text-sm">Investor Number</label>
                </div>
                <div>
                  <input
                    type="number"
                    className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                    placeholder="Enter the number of investors"
                    name="investor_number"
                    value={formData.investor_number}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mt-6">
                <div>
                  <label className="font-light text-sm">Profitable</label>
                </div>
                <div>
                  <select
                    className="mx-auto pl-2 pr-4 bg-transparent border border-gray-400 rounded-lg p-2"
                    name="profitable"
                    value={formData.profitable}
                    onChange={handleInputChange}
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <div>
                  <label className="font-light text-sm">Company Name</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                    placeholder="Enter the company name"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center">
                <button
                  type="submit"
                  className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
