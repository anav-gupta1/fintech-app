"use client"
import React, { useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ArrowRight } from "lucide-react";

export default function Dashboard() {
  const [isBusiness, setIsBusiness] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div>
      <div
        className="w-1/3 ml-3 mb-4 bg-black rounded-lg bg-gradient-to-r from-violet-600 to-violet-500"
        style={{ height: "35vh" }}
      >
        <div className="flex items-center justify-center">
          <div className="mt-3">
            <UserButton
              appearance={{
                baseTheme: dark,
              }}
            />
          </div>
          <div className="text-2xl text-white font-extrabold mt-3 py-4 ml-4">
            Hello {user?.firstName}
          </div>
        </div>
        <div>
          <div className="mt-3 flex items-center justify-start">
            <img
              src="/match.png"
              className="h-[175px] w-[175px]"
              alt="Match"
            />
            <div>
              <span className="font-semibold text-xl text-white px-4 flex items-center">
                Look for Companies Around You
              </span>
              <div className="mt-3 flex px-4">
                <button className="bg-black border border-gray-600 rounded-lg w-[100px] h-[40px]">
                  <div className="flex items-center justify-between">
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
      <div className="w-1/3 ml-3 mb-3 bg-black rounded-lg bg-gradient-to-r from-violet-600 to-violet-500 mt-4" style={{ height: "65vh" }}>

      </div>
    </div>
  );
}
