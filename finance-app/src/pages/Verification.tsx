import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Verification: React.FC = () => {
  const navigate = useNavigate();

  // Handle navigation to home/dashboard
  const handleGoHome = () => {
    navigate("/"); // redirects to home page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Container Card */}
      <div className="bg-white shadow-lg rounded-3xl p-8 md:p-12 text-center w-full max-w-lg">
        
        {/* Placeholder for Illustration */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
            <FaCheckCircle className="text-blue-500 text-6xl" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
          Congratulations
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          You have successfully created your secured account.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <button
            onClick={handleGoHome}
            className="w-full md:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition duration-300"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verification;
