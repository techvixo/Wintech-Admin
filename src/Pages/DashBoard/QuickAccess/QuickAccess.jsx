import React from "react";
import { Link } from "react-router-dom";

const QuickAccess = () => {
  return (
    <div>
      <div className="pt-2">
        {/* Welcome Message */}
        <div className="flex gap-4 pb-4">
          <div className="flex items-center justify-center w-1/3 bg-white p-4 shadow-md rounded-md">
            <h4 className="text-xl font-bold text-gray-800">
              {" "}
              Welcome Sultan,
            </h4>
          </div>
          {/* Quick Access Section */}
          <div className="w-2/3 bg-white p-4 shadow-md rounded-md">
            <div className="ll">
              <h4 className="text-xl font-bold text-gray-800">Quick Access</h4>
              <p className="text-[#7B809A]">You can change from there </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm pt-3">
              <button className="bg-green-500 text-white py-1 px-2 rounded-md hover:bg-green-600">
                Change Banner
              </button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Edit Products
              </button>
              <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600">
                Add New Blog Post
              </button>
              <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
                Portfolio
              </button>
            </div>
          </div>
        </div>
{/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-5">
          <div className="bg-white rounded-md shadow-md p-4 flex flex-col items-center justify-center gap-2">
            <p className="text-4xl font-bold text-[#4179B6]">21</p>
            <p className="text-gray-600 font-semibold text-sm">Total Website Visit</p>
            <p className="text-xs text-gray-400">Past 30 Days</p>
          </div>
          <div className="bg-white rounded-md shadow-md p-4 flex flex-col items-center justify-center gap-2">
            <p className="text-4xl font-bold text-[#4179B6]">44</p>
            <p className="text-gray-600 font-semibold text-sm">New Products Added</p>
            <p className="text-xs text-gray-400">Past 30 Days</p>
          </div>
          <div className="bg-white rounded-md shadow-md p-4 flex flex-col items-center justify-center gap-2">
            <p className="text-4xl font-bold text-[#4179B6]">87</p>
            <p className="text-gray-600 font-semibold text-sm">Recent Blog Post</p>
            <p className="text-xs text-gray-400">Past 30 Days</p>
          </div>
          <div className="bg-white rounded-md shadow-md p-4 flex flex-col items-center justify-center gap-2">
            <p className="text-4xl font-bold text-[#4179B6]">417</p>
            <p className="text-gray-600 font-semibold text-sm">Portfolio</p>
            <p className="text-xs text-gray-400">Review Project</p>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-500 rounded-lg shadow-md p-6 text-white flex flex-col items-center">
            <div className="text-4xl mb-4">👜</div>
            <h3 className="font-semibold">ADD NEW PRODUCT</h3>
            <p className="text-sm mb-4">
              A more detailed chart of website traffic
            </p>
            <p className="text-xs text-gray-200">📅 campaign sent 2 days ago</p>
          </div>

          <div className="bg-green-500 rounded-lg shadow-md p-6 text-white flex flex-col items-center">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="font-semibold">CHANGE BANNER</h3>
            <p className="text-sm mb-4">Change Your Banner</p>
            <p className="text-xs text-gray-200">📅 updated 4 min ago</p>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-md p-6 text-white flex flex-col items-center">
            <div className="text-4xl mb-4">✏️</div>
            <h3 className="font-semibold">EDIT PORTFOLIO</h3>
            <p className="text-sm mb-4">
              A line chart showing the number of views or comments on blog
              posts.
            </p>
            <p className="text-xs text-gray-400">📅 just updated</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAccess;
