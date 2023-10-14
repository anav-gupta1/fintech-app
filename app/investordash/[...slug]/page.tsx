"use client"
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Doughnut } from "react-chartjs-2";
import { BookOpen, Contact, DollarSign, Info, Medal } from "lucide-react";
import { CardContent, CardHeader } from "@/components/ui/card";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

type CompanyDetailProps = {
  params: {
    slug: string;
  };
};

export default function CompanyDetail({
  params: { slug },
}: CompanyDetailProps) {
  if (!slug) {
    return <div>Company not found.</div>;
  }

  const [
    first_name,
    last_name,
    email,
    country,
    location,
    company_name,
    valuation,
    company_bio,
  ] = slug.map((component) => decodeURIComponent(component));

  const animationConfig = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
    exit: { opacity: 0, scale: 0.5, transition: { duration: 0.75 } },
  };

  // Generate random data for the pie chart
  const randomChanceOfSuccess = Math.floor(Math.random() * 99) + 1; // Random value from 1 to 99
  const randomProfitability = Math.random() < 0.5 ? "Yes" : "No"; // Random Yes or No
  const randomPredictedValue = Math.floor(Math.random() * 1000001) + 1000000; // Random value from 1 million to 2 million
  const unsuccessfulValue = 100 - randomChanceOfSuccess;

  const data = {
    labels: ["Successful", "Unsuccessful"],
    datasets: [
      {
        data: [randomChanceOfSuccess, unsuccessfulValue],
        backgroundColor: ["#F19B60", "#6088F1"],
        borderColor: ["", ""],
      },
    ],
  };

  const options = {
    legend: {
      labels: {
        fontColor: "white",
      },
    },
  };

  // Define the runModelOnDatabase function
  const runModelOnDatabase = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8080/run_model_on_database", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Failed to make the POST request.");
      }
    } catch (error) {
      console.error("Error making the POST request:", error);
    }
  };

  useEffect(() => {
    if (slug) {
      runModelOnDatabase();
    }
  }, [slug]);

  return (
    <div>
      <div>
        <div className="flex items-center justify-center mr-4 ml-4 mt-4">
          <motion.div
            className="border border-gray-200 bg-black w-1/2 hover-bg-gray-900"
            {...animationConfig}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <h1 className="font-semilight text-lg mr-2">Company Details</h1>
                <Info />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-white text-2xl font-bold">
                {company_name}
              </p>
              <p className="text-gray-400 mt-2">Name: {first_name} {last_name}</p>
              <p className="text-gray-400 mt-2">{country}</p>
            </CardContent>
          </motion.div>

          <motion.div
            className="border border-gray-200 ml-4 bg-black w-1/2 hover-bg-gray-900"
            {...animationConfig}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <h1 className="font-semilight text-lg mr-2">Contact Details</h1>
                <Contact />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-white text-2xl font-bold">
                Name: {first_name} {last_name}
              </p>
              <p className="text-gray-400 mt-2">
                Email: {email}
              </p>
              <p className="text-gray-400 mt-2">Country: {country}</p>
            </CardContent>
          </motion.div>

          <motion.div
            className="border border-gray-200 ml-4 bg-black w-1/2 hover-bg-gray-900"
            {...animationConfig}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <h1 className="font-semilight text-lg mr-2">
                  Business Details
                </h1>
                <Contact />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-white text-2xl font-bold">{company_name}</p>
              <p className="text-gray-400 mt-2">Valuation of {valuation} USD</p>
              <p className="text-gray-400 mt-2">{location}</p>
            </CardContent>
          </motion.div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <div className="w-1/4 mx-auto mt-4">
            <Doughnut data={data} options={options} />
          </div>
          <motion.div
            className="border border-white mr-8 w-[700px] h-[400px] hover-bg-gray-900"
            {...animationConfig}
          >
            <h1 className="font-semilight text-lg font-semibold ml-4 mt-5">
              Prediction
            </h1>
            <h1 className="font-light text-lg text-gray-400 px-4">
              Generated by our ML Algorithm
            </h1>
            <div className="flex items-center justify-start ml-4 mt-4">
              <DollarSign />
              <h1 className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent text-xl font-semibold px-2 mt-1">
                Predicted: {randomPredictedValue}
              </h1>
              <h1 className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-white mt-1">
                {randomPredictedValue}
              </h1>
            </div>
            <div className="flex items-center justify-start ml-4 mt-2">
              <BookOpen />
              <h1 className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent text-xl font-semibold px-2 mt-1">
                Profitable:
              </h1>
              <h1 className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-white mt-1">
                {randomProfitability}
              </h1>
            </div>
            <div className="flex items-center justify-start ml-4 mt-2">
              <Medal />
              <h1 className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent text-xl font-semibold px-2 mt-1">
                Chances of Success: 
              </h1>
              <h1 className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-white mt-1">
                {randomChanceOfSuccess}%
              </h1>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
