"use client";
import React, { useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { Banknote, Pill, School } from "lucide-react";

export default function Dashboard() {
  const [isBusiness, setIsBusiness] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div className="flex">
      <div className="w-1/3 h-screen ml-3 mb-3 bg-black rounded-lg border border-white">
        <div className="flex items-center justify-center mt-6">
          <UserButton/>
        </div>
        <div className="text-xl text-white font-bold flex items-center justify-center mt-3">
          Hello {user?.firstName}! Welcome to your dashboard!
        </div>
        <div className="flex items-center px-4 mt-8 text-xl font-bold">
          Matches
        </div>
        <div>
          <div className="flex items-center px-4 mt-6">
            <Banknote/>
            <div className="font-bold text- text-white ml-2">Growmore</div>
          </div>
            <div className="font-semilight text-xs px-4 text-gray-400">Fintech Based Company</div>
        </div>
        <div>
          <div className="flex items-center px-4 mt-4">
            <Pill/>
            <div className="font-bold text- text-white ml-2">Healthify</div>
          </div>
            <div className="font-semilight text-xs px-4 text-gray-400">Healthcare Based Company</div>
        </div>
        <div>
          <div className="flex items-center px-4 mt-4">
            <School/>
            <div className="font-bold text- text-white ml-2">Educare</div>
          </div>
            <div className="font-semilight text-xs px-4 text-gray-400">Educational Services Company</div>
        </div>
      </div>
      <div className="flex flex-col w-2/3 ml-3 mr-3">
        <div
          className="flex items-center justify-center w-full bg-black rounded-lg border border-white"
          style={{ height: "50vh" }}
        >
          Hello World Mark II
        </div>
        <div className="flex justify-between">
          <div 
            className="flex items-center justify-center w-1/2 bg-black mb-3 rounded-lg border border-white mt-3 mb-3"
            style={{ height: "48.5vh"}}
          >
            Hello World Mark III
          </div>
          <div 
            className="flex items-center justify-center w-1/2 bg-black mb-3 rounded-lg border border-white mt-3 mb-3"
            style={{ height: "48.5vh"}}
          >
            Hello World Mark IV
          </div>
        </div>
      </div>
    </div>
  );
}
