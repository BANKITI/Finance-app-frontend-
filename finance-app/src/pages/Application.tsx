import React from "react";
import { useNavigate } from "react-router-dom";
import { FaClock } from "react-icons/fa";

const Application: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/"); // redirect to home page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Main Card */}
      <div className="bg-white shadow-lg rounded-3xl p-8 md:p-12 w-full max-w-lg text-center border border-gray-100">
        
        {/* Icon Section */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center">
            <FaClock className="text-blue-500 text-6xl" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
          APPLICATION UNDER REVIEW
        </h1>

        {/* Message */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
          Your application has been received and is currently being reviewed. 
          You will be notified once a decision has been made.
        </p>

        {/* Button */}
        <button
          onClick={handleNavigateHome}
          className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out w-full md:w-auto"
        >
          View Other Pages
        </button>
      </div>

      {/* Optional footer text */}
      <p className="mt-6 text-gray-400 text-xs md:text-sm">
        © {new Date().getFullYear()} BANKITI — All Rights Reserved
      </p>
    </div>
  );
};

export default Application;
