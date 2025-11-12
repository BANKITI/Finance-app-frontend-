import React from "react";
import { FaIdCard } from "react-icons/fa";
import { Link } from "react-router-dom";

const load: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 max-w-md w-full p-8 sm:p-10 text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
          Choose A Document
        </h2>
        <p className="text-gray-500 mb-8 text-sm sm:text-base">
          It must be an official photo ID
        </p>

        {/* Ghana Card Option */}
        <Link
          to="/iD"
          className="flex items-center justify-between bg-gray-50 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-200 rounded-2xl px-5 py-4 transition-all duration-300 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="bg-indigo-100 text-indigo-600 p-3 rounded-xl">
              <FaIdCard className="text-lg sm:text-xl" />
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">
                Ghana Card
              </p>
              <p className="text-xs text-gray-500">Front and Back Page</p>
            </div>
          </div>
          <span className="text-gray-400 text-lg sm:text-xl">→</span>
        </Link>
      </div>
    </div>
  );
};

export default load;


