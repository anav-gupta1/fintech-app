"use client";
import React from "react";
import { ArrowRight, HelpCircle, Info, Search } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
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
        <div className="relative w-[400px]">
          <input
            type="text"
            className="w-full bg-transparent border border-gray-400 rounded-lg pl-4 pr-10 py-2"
            style={{ height: "40px" }}
            placeholder="Search for companies"
          />
          <div className="absolute top-0 right-0 flex items-center h-full pr-3">
            <Search />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mt-4 ml-4 mr-4 rounded-lg">
        <table className="min-w-full">
          <thead className="bg-gray-600">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider border-r border-gray-400">
                Company Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider border-r border-gray-400">
                Company Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider border-r border-gray-400">
                Country
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider border-r border-gray-400">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
                Industry
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 whitespace-wrap border-r border-b border-gray-400 font-semibold hover:text-decoration-line: underline;">
                Shreedhar Industries
              </td>
              <td className="px-6 py-4 whitespace-wrap border-r border-b border-gray-400 text-gray-400">
                itsshreedharraj@gmail.com
              </td>
              <td className="px-6 py-4 whitespace-wrap border-r border-b border-gray-400 text-gray-400">
                India
              </td>
              <td className="px-6 py-4 whitespace-wrap border-r border-b border-gray-400 text-gray-400">
                A small description of the company
              </td>
              <td className="px-6 py-4 whitespace-wrap border-b border-gray-400 text-gray-400">
                Educational Technology
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-wrap border-r border-b border-gray-400 font-semibold">
                Aaryan Chadha
              </td>
              <td className="px-6 py-4 whitespace-wrap border-r border-b border-gray-400 text-gray-400">
                aaryanchadha@gmail.com
              </td>
              <td className="px-6 py-4 whitespace-wrap border-r border-b border-gray-400 text-gray-400">
                India
              </td>
              <td className="px-6 py-4 whitespace-wrap border-r border-b border-gray-400 text-gray-400">
                I am here to be a prompt engineer.
              </td>
              <td className="px-6 py-4 whitespace-wrap border-b border-gray-400 text-gray-400">
                Freelance Developer
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
