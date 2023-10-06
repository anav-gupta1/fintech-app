"use client";
import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";

export default function Onboarding() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [selectedOption, setSelectedOption] = useState("Investor");
  const [businessType, setBusinessType] = useState("PreMoney");
  const [investorType, setInvestorType] = useState("VentureCapitalist"); // Add default investor type

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleInvestorTypeChange = (e) => {
    setInvestorType(e.target.value);
  };

  const handleBusinessTypeChange = (e) => {
    setBusinessType(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen mx-auto">
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
      {selectedOption === "Investor" && (
        <form>
          <div>
            <div>
              <label className="font-light text-sm">Name</label>
            </div>
            <div>
              <input
                type="text"
                className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="mt-6">
            <div>
              <label className="font-light text-sm">Contact</label>
            </div>
            <div>
              <input
                type="text"
                className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                placeholder="Enter your phone number or email"
              />
            </div>
          </div>
          <div className="mt-6">
            <div>
              <label className="font-light text-sm">Investor Type</label>
            </div>
            <div>
              <select
                className="mx-auto pl-2 pr-4 bg-transparent border border-gray-400 rounded-lg p-2 w-[400px] mt-2"
                value={investorType}
                onChange={handleInvestorTypeChange}
              >
                <option value="VentureCapitalist">Venture Capitalist</option>
                <option value="SmallTimeInvestor">Small-Time Investor</option>
              </select>
            </div>
          </div>
          {/* Render options based on selected investor type */}
          {investorType === "VentureCapitalist" && (
            <div className="mt-6">
              <div>
                <div>
                  <label className="font-light text-sm">
                    What you're looking for
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                    placeholder="Enter what you're looking for from an investment"
                  />
                </div>
              </div>
              <div className="mt-6">
                <div>
                  <label className="font-light text-sm">
                    Expertise in Previous Investments
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                    placeholder="Enter your expertise in previous investments"
                  />
                </div>
              </div>
            </div>
          )}
          {investorType === "SmallTimeInvestor" && (
            <div className="mt-6">
              <div>
                <div>
                  <label className="font-light text-sm">
                    What you're looking for
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                    placeholder="Enter what you're looking for from an investment"
                  />
                </div>
              </div>
            </div>
          )}
          {/* Add Submit button */}
          <div className="mt-6 flex items-center justify-center">
            <button
              type="submit"
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Submit
            </button>
          </div>
        </form>
      )}
      {selectedOption === "Business" && (
        <form>
          <div>
            <div>
              <label className="font-light text-sm">Name</label>
            </div>
            <div>
              <input
                type="text"
                className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                placeholder="Enter the name of your business"
              />
            </div>
          </div>
          <div className="mt-6">
            <div>
              <label className="font-light text-sm">Contact</label>
            </div>
            <div>
              <input
                type="text"
                className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                placeholder="Enter the phone or email of your representative"
              />
            </div>
          </div>
          <div className="mt-6">
            <div>
              <label className="font-light text-sm">Business Type</label>
            </div>
            <div>
              <select
                className="mx-auto pl-2 pr-4 bg-transparent border border-gray-400 rounded-lg p-2 w-[400px] mt-2"
                value={businessType}
                onChange={handleBusinessTypeChange}
              >
                <option value="PreMoney">Pre-Money</option>
                <option value="PostMoney1to100">
                  Post-Money (1-100 crores)
                </option>
                <option value="PostMoney100+">Post-Money (100 crores +)</option>
              </select>
            </div>
          </div>
          {/* Render options based on selected business type */}
          {businessType === "PreMoney" && (
            <div>
              <div className="mt-6">
                <label className="font-light text-sm">
                  What is the type of your company
                </label>
              </div>
              <div>
                <input
                  type="text"
                  className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                  placeholder="Enter the type of your company"
                />
              </div>
              <div className="mt-6">
                <label className="font-light text-sm">What is your ask?</label>
              </div>
              <div>
                <input
                  type="text"
                  className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                  placeholder="Enter the amount you want to raise"
                />
              </div>
              <div className="mt-6">
                <label className="font-light text-sm">
                  What is your proposed valuation?
                </label>
              </div>
              <div>
                <input
                  type="text"
                  className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                  placeholder="Enter the valuation you want the ask to be at"
                />
              </div>
            </div>
          )}
          {businessType === "PostMoney1to100" && (
            <div>
              <div className="mt-6">
                <label className="font-light text-sm">
                  What is the type of your company
                </label>
              </div>
              <div>
                <input
                  type="text"
                  className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                  placeholder="Enter the type of your company"
                />
              </div>
              <div className="mt-6">
                <label className="font-light text-sm">What is your ask?</label>
              </div>
              <div>
                <input
                  type="text"
                  className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                  placeholder="Enter the amount you want to raise"
                />
              </div>
              <div className="mt-6">
                <label className="font-light text-sm">
                  What is your revenue??
                </label>
              </div>
              <div>
                <input
                  type="text"
                  className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                  placeholder="Enter the valuation you want the ask to be at"
                />
              </div>
              <div className="mt-6">
                <label className="font-light text-sm">
                  What is your proposed valuation?
                </label>
              </div>
              <div>
                <input
                  type="text"
                  className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                  placeholder="Enter the valuation you want the ask to be at"
                />
              </div>
            </div>
          )}
          {businessType === "PostMoney100+" && (
            <div>
              <div className="mt-6">
                <label className="font-light text-sm">
                  What is the type of your company
                </label>
              </div>
              <div>
                <input
                  type="text"
                  className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                  placeholder="Enter the type of your company"
                />
              </div>
              <div className="mt-6">
                <label className="font-light text-sm">What is your ask?</label>
              </div>
              <div>
                <input
                  type="text"
                  className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                  placeholder="Enter the amount you want to raise"
                />
              </div>
              <div className="mt-6">
                <label className="font-light text-sm">
                  What is your revenue??
                </label>
              </div>
              <div>
                <input
                  type="text"
                  className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                  placeholder="Enter the valuation you want the ask to be at"
                />
              </div>
              <div className="mt-6">
                <label className="font-light text-sm">
                  What is your proposed valuation?
                </label>
              </div>
              <div>
                <input
                  type="text"
                  className="font-semilight text-sm bg-transparent border border-gray-400 rounded-lg pl-2 py-2 mt-2 w-[400px]"
                  placeholder="Enter the valuation you want the ask to be at"
                />
              </div>
            </div>
          )}
          {/* Add Submit button */}
          <div className="mt-6 flex items-center justify-center">
            <button
              type="submit"
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
