import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Verification: React.FC = () => {
  const navigate = useNavigate();

  // Navigate to Dashboard
  const handleGoDashboard = () => {
    navigate("/dashboard"); // adjust if your dashboard route differs
  };

  // Navigate to Upload / Load page
  const handleGoUpload = () => {
    navigate("/load"); // adjust to your actual upload page route
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-3xl p-8 sm:p-10 md:p-12 text-center w-full max-w-lg border border-gray-100">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center shadow-inner">
            <FaCheckCircle className="text-green-600 text-6xl" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
          Congratulations 🎉
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Your secured account has been successfully created and verified.
          <br />
          You can now upload your ID or go directly to your dashboard.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          {/* Upload Button */}
          <button
            onClick={handleGoUpload}
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold shadow-md hover:opacity-90 transition-all duration-300"
          >
            Upload ID Now
          </button>

          {/* Dashboard Button */}
          <button
            onClick={handleGoDashboard}
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold shadow-md hover:opacity-90 transition-all duration-300"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verification;
