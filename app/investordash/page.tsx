"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, Filter, HelpCircle, Info, Search } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Company {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  company_bio: string;
  company_name: string;
  industry: string;
  // Add other properties as needed
}

export default function Dashboard() {
  const router = useRouter();
  const [data, setData] = useState<Company[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Company[]>([]);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const [filters, setFilters] = useState({
    valuation: 100000,
    age: 10,
    hasDegree: false,
    collegeTier: "1",
    experience: 1,
    growthRate: 1,
    selectedSector: "",
    selectedIndustry: "",
    selectedSeedStage: "1",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8080/investordash", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
        setFilteredData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    const filteredResults = data.filter((company) => {
      return (
        company.first_name.toLowerCase().includes(query.toLowerCase()) ||
        company.last_name.toLowerCase().includes(query.toLowerCase()) ||
        company.company_bio.toLowerCase().includes(query.toLowerCase()) ||
        company.company_name.toLowerCase().includes(query.toLowerCase())

        // Add more properties if needed
      );
    });

    setFilteredData(filteredResults);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    handleSearch(query);
  };

  return (
    <div>
      <div className="flex items-center justify-center mt-4">
        <h1 className="font-extrabold text-3xl p-4">Dashboard</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[300px] h-[100px] border border-gray-500 mt-4 ml-4">
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
          <Link href="https://www.cnbc.com/world/?region=world">
            <button className="ml-4 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xs px-2 py-1 text-center">
              Look!
            </button>
          </Link>
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
            value={searchQuery}
            onChange={handleInputChange}
          />
          <div className="absolute top-0 right-0 flex items-center h-full pr-3">
            <div>
              <Search />
            </div>
            <button className="icon-container" onClick={openModal}>
              <Filter />
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 border flex justify-center items-center ">
          <div className="bg-black p-4 rounded-lg shadow-md border border-white">
            <h2 className="text-2xl font-semibold">Filter Your Results</h2>

            {/* Valuation Range */}
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
                  setFilters({
                    ...filters,
                    valuation: parseInt(e.target.value),
                  });
                }}
              />
              <span>50,000,000</span>
            </div>

            {/* Founder's Age */}
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
                  setFilters({ ...filters, age: parseInt(e.target.value) });
                }}
              />
              <span>100</span>
            </div>

            {/* College Degree */}
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
                  setFilters({ ...filters, hasDegree: e.target.checked });
                }}
              />
            </div>

            {/* College Tier */}
            <label className="block text-gray-600 font-medium mt-4">
              College Tier
            </label>
            <select
              className="bg-black"
              onChange={(e) => {
                setFilters({ ...filters, collegeTier: e.target.value });
              }}
            >
              <option value="1">Tier 1</option>
              <option value="2">Tier 2</option>
              <option value="3">Tier 3</option>
            </select>

            {/* Founder's Years of Experience */}
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
                  setFilters({
                    ...filters,
                    experience: parseInt(e.target.value),
                  });
                }}
              />
              <span>50</span>
            </div>

            {/* Growth Rate (%) */}
            <label className="block text-gray-600 font-medium mt-4">
              Growth Rate (%)
            </label>
            <input
              className="bg-black border rounded-lg"
              type="number"
              min="1"
              max="100"
              step="1"
              onChange={(e) => {
                setFilters({
                  ...filters,
                  growthRate: parseInt(e.target.value),
                });
              }}
            />

            {/* Industrial Sectors */}
            <label className="block text-gray-600 font-medium mt-4">
              Industrial Sectors
            </label>
            <select
              className="mx-auto pl-2 pr-4 bg-transparent border border-gray-400 rounded-lg p-2"
              onChange={(e) => {
                setFilters({ ...filters, selectedSector: e.target.value });
              }}
            >
              <option></option>
              <option>Energy</option>
              <option>Health Care</option>
              {/* Add more sectors */}
            </select>

            {/* Industries */}
            <label className="block text-gray-600 font-medium mt-4">
              Industries
            </label>
            <select
              className="mx-auto pl-2 pr-4 bg-transparent border border-gray-400 rounded-lg p-2"
              onChange={(e) => {
                setFilters({ ...filters, selectedIndustry: e.target.value });
              }}
            >
              <option></option>
              <option>Oil & Gas Production</option>
              <option>Major Pharmaceuticals</option>
              {/* Add more industries */}
            </select>

            {/* Seed Stage */}
            <label className="block text-gray-600 font-medium mt-4">
              Seed Stage
            </label>
            <select
              className="bg-black"
              onChange={(e) => {
                setFilters({ ...filters, selectedSeedStage: e.target.value });
              }}
            >
              <option value="1">Seed</option>
              <option value="2">Series A</option>
              <option value="3">Series B</option>
              <option value="4">Series C</option>
            </select>

            <div className="flex justify-between mt-4">
              <button
                className="bg-green-500 text-white rounded px-3 py-2"
                onClick={() => {
                  console.log("Applied filters:", filters);
                  closeModal();
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
      )}

      <div className="overflow-x-auto mt-20 ml-4 mr-4 rounded-lg">
        <table className="min-w-full">
          <thead className="bg-gray-800 border border-gray-400">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent uppercase tracking-wider border-r border-gray-400">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent uppercase tracking-wider border-r border-gray-400">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent tracking-wider border-r border-gray-400">
                Country
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent tracking-wider border-r border-gray-400">
                Company Bio
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent tracking-wider border-r border-gray-400">
                Valuation
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent tracking-wider">
                Age
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent tracking-wider">
                Location
              </th>
            </tr>
          </thead>
          <tbody className="bg-black divide-y divide-gray-300">
            {filteredData.map((company, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-wrap border-b border-gray-400 font-semibold hover:text-decoration-line: underline bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  {/* Create a link with dynamic slug */}
                  <Link
                    href={`/investordash/${company.first_name}/${company.last_name}/${company.email}/${company.country}/${company.name}/${company.location}/${company.valuation}/${company.company_bio}`}
                  >
                    {company.first_name} {company.last_name}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-wrap border-b border-gray-400 text-gray-400">
                  {company.email}
                </td>
                <td className="px-6 py-4 whitespace-wrap border-b border-gray-400 text-gray-400">
                  {company.country}
                </td>
                <td className="px-6 py-4 whitespace-wrap border-b border-gray-400 text-gray-400">
                  {company.company_bio}
                </td>
                <td className="px-6 py-4 whitespace-wrap border-b border-gray-400 text-gray-400">
                  {company.valuation}
                </td>
                <td className="px-6 py-4 whitespace-wrap border-b border-gray-400 text-gray-400">
                  {company.company_name}
                </td>
                <td className="px-6 py-4 whitespace-wrap border-b border-gray-400 text-gray-400">
                  {company.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
