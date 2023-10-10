"use client";
import React, { useState } from "react";
import { ArrowRight, Info, Search } from "lucide-react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { UserButton } from "@clerk/nextjs";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

export default function Dashboard() {
  const [isBusiness, setIsBusiness] = useState(false);
  const data = {
    labels: ["Orange", "Yellow", "Pink"],
    datasets: [
      {
        data: [33, 33, 33], // 33% for each value
        backgroundColor: ["orange", "yellow", "pink"],
      },
    ],
  };

  const dataline = {
    labels: ["Investment 1", "Investment 2", "Investment 3"],
    datasets: [
      {
        label: "Investment",
        data: [0, 10, 15, 17, 18, 21, 24],
        backgroundColor: ["transparent"],
        borderColor: ["orange"],
        pointBorderColor: ["transparent"],
        pointBorderWidth: 4,
      },
    ],
  };

  return (
    <div
      className="bg-zinc-800 w-7/8 ml-6 mr-6 w-6/7 rounded-lg"
      style={{ height: "85vh" }}
    >
      <div className="flex items-center justify-start px-4">
        <h1 className="font-semibold text-2xl mt-4">Dashboard</h1>
      </div>
      <div className="flex items-center justify-start px-4 mt-4">
        <div
          className="w-[450px] rounded-lg ml-8 relative"
          style={{ height: "200px" }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            style={{
              background: "linear-gradient(to top right, transparent, #A0E5C8)",
            }}
          ></div>
          <div className="w-full h-full bg-zinc-900 rounded-lg p-4">
            <div className="flex items-center justify-center h-[150px]">
              <UserButton/>
              <div className="relative ml-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-black border border-white text-white rounded-full pl-10 pr-3 py-2"
                />
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
                  size={18}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-[450px] rounded-lg ml-8 relative"
          style={{ height: "200px" }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            style={{
              background: "linear-gradient(to top right, transparent, #D08D7B)",
            }}
          ></div>
          <div className="w-full h-full bg-zinc-900 rounded-lg p-4">
            <div className="flex items-center justify-center h-[150px]">
              <Info />
              <span className="text-lg font-light ml-2">
                Below is a list of companies which you could go through,
                generated completely by our matching algorithm
              </span>
            </div>
          </div>
        </div>
        <div
          className="w-[450px] rounded-lg ml-8 relative"
          style={{ height: "200px" }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            style={{
              background: "linear-gradient(to top right, transparent, #54349C)",
            }}
          ></div>
          <div className="w-full h-full bg-zinc-900 rounded-lg p-4">
            <div className="flex items-center justify-center h-[100px]">
              <Info />
              <span className="text-lg font-light ml-2">
                Click here to get some information about the latest stocks
              </span>
            </div>
            <div className="flex items-center justify-center">
              <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                News
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-4 overflow-x-auto">
        <table className="border border-white">
          <thead className="bg-zinc-800">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>City</th>
              <th>Country</th>
              <th>Age</th>
              <th>Years of Experience</th>
              <th>College Degree</th>
              <th>University Name</th>
              <th>University Tier</th>
              <th>Company Name</th>
              <th>Industry</th>
              <th>Sector</th>
              <th>Company Bio</th>
              <th>Location</th>
              <th>Valuation</th>
              <th>Profitable</th>
              <th>Growth Rate</th>
              <th>Funding Round</th>
              <th>Investor Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shreedhar</td>
              <td>Raj</td>
              <td>i'mshreedharraj@ilikeshiv.com</td>
              <td>Trans</td>
              <td>New Delhi</td>
              <td>India</td>
              <td>25</td>
              <td>5</td>
              <td>Yes</td>
              <td>Mahipalpur Institute of Technology</td>
              <td>10</td>
              <td>LetsLeap</td>
              <td>Technology</td>
              <td>Software</td>
              <td>Leap towards a better future</td>
              <td>Mahipalpuri Garage</td>
              <td>$100M</td>
              <td>Yes</td>
              <td>10%</td>
              <td>Series A</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
