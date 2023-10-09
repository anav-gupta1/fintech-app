"use client"
import React, { useState } from "react";
import { ArrowRight, Info } from "lucide-react";
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
import { Line } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

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
      }
    ]
  };

  return (
    <div>
      <div className="flex">
        <div
          className="w-1/3 ml-3 mb-4 bg-zinc-800 rounded-lg"
          style={{ height: "35vh" }}
        >
          <div className="flex items-center between px-4">
            <div className="ml-4 font-semibold text-lg mt-4">
              Hello Anav
            </div>
          </div>
          <div>
            <div className="mt-3 flex items-center justify-start">
              <div>
                <span className="font-semibold text-xl text-white px-4 flex items-center mt-4">
                  Companies Around You
                </span>
                <div className="border border-gray-600 w-[300px] h-[75px] rounded-md ml-4 mt-2 flex items-center justify-start p-4">
                  <Info />
                  <span className="text-gray-400 text-sm font-semilight p-4">
                    This is a list of companies that matches what you're looking
                    for.
                  </span>
                </div>
                <div className="mt-3 flex px-4 flex items-center justify-start">
                  <button className="bg-gradient-to-br from-pink-500 to-orange-400 border border-gray-600 rounded-lg w-[100px] h-[40px] mt-4">
                    <div className="flex items-center justify-center">
                      <ArrowRight className="h-[20px] w-[20] ml-2" />
                      <span className="font-light text-sm text-white mr-4">
                        Matches
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-2/3 bg-zinc-800 ml-3 mr-2 rounded-lg"
          style={{ height: "35vh" }}
        >
         <div className="flex items-center justify-start">
          <div className="w-1/2 mx-auto mt-3">
              <Line data={dataline} />
            </div>
         </div>
        </div>
      </div>
      <div className="flex">
        <div
          className="w-1/3 ml-3 mb-3 bg-black rounded-lg bg-zinc-800"
          style={{ height: "65vh" }}
        >
          <div className="flex items-center justify-center p-6">
            <h1 className="font-semibold text-xl text-white px-4 flex items-center">
              Companies You have Invested In
            </h1>
          </div>
          <div className="w-1/2 mx-auto">
            <Doughnut data={data} />
          </div>
          <div className="flex items-center justify-center mt-4">
            <button className="bg-gradient-to-br from-pink-500 to-orange-400 border border-gray-600 rounded-lg w-[100px] h-[40px] mt-4">
              <div className="flex items-center justify-between">
                <ArrowRight className="h-[20px] w-[20] ml-2" />
                <span className="font-light text-sm text-white mr-4">
                  Details
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="w-1/3 ml-3 bg-zinc-800 rounded-lg mr-2 mb-3"></div>
        <div className="w-1/3 ml-1 bg-zinc-800 rounded-lg mr-2 mb-3"></div>
      </div>
    </div>
  );
}
