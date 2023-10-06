"use client";
import React, { useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Dashboard() {
  const [isBusiness, setIsBusiness] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div className="flex">
      <div className="w-1/3 h-screen ml-3 mb-3 bg-black rounded-lg border border-white">
        <div className="flex items-center justify-center mt-6">
          <UserButton/>
        </div>
        <div className="text-sm text-white font-semilight flex items-center justify-center mt-3">
          Hello {user?.firstName}! Welcome to your dashboard
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
