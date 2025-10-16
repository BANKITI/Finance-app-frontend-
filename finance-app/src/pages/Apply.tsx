import React from "react";
import { useNavigate } from "react-router-dom";

const Apply: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/info"); // next step
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Step 1 of 3</span>
            <span>33% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-teal-600 h-2 rounded-full transition-all"
              style={{ width: "33%" }}
            />
          </div>
        </div>

        {/* Header */}
        <h2 className="text-2xl font-bold mb-1">Personal Information</h2>
        <p className="text-gray-500 mb-6">Tell us about yourself</p>

        {/* Form */}
        <form onSubmit={handleNext} className="space-y-5">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">First Name</label>
              <input
                type="text"
                placeholder="Joe"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Doku"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-1">Email Address</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-semibold mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="+233 ***********"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-semibold mb-1">Date of Birth</label>
            <input
              type="date"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
            />
          </div>

          {/* National ID */}
          <div>
            <label className="block text-sm font-semibold mb-1">National ID</label>
            <input
              type="text"
              placeholder="GHA-************"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
            />
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition"
            >
              Continue To Loan Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Apply;
