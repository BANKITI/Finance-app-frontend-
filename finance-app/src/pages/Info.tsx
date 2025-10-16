import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Info: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    loanAmount: "",
    loanTerm: "",
    loanPurpose: "",
    additionalDetails: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/submit"); // next step
  };

  const handleBack = () => {
    navigate("/apply"); // back to step 1
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 py-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-8">
        {/* Step progress */}
        <div className="mb-6">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Step 2 of 3</span>
            <span className="text-sm font-medium text-gray-700">67% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "67%" }}></div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-1">Loan Details</h2>
        <p className="text-gray-500 mb-6">What are you looking for?</p>

        <form onSubmit={handleNext} className="space-y-5">
          {/* Loan Amount */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="loanAmount">
              Requested Loan Amount
            </label>
            <input
              id="loanAmount"
              name="loanAmount"
              type="number"
              value={formData.loanAmount}
              onChange={handleChange}
              placeholder="Enter amount"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Loan Term */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="loanTerm">
              Loan Term
            </label>
            <select
              id="loanTerm"
              name="loanTerm"
              value={formData.loanTerm}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Term</option>
              <option value="6 months">6 months</option>
              <option value="12 months">12 months</option>
              <option value="24 months">24 months</option>
              <option value="36 months">36 months</option>
            </select>
          </div>

          {/* Loan Purpose */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="loanPurpose">
              Loan Purpose
            </label>
            <select
              id="loanPurpose"
              name="loanPurpose"
              value={formData.loanPurpose}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Purpose</option>
              <option value="Business">Business</option>
              <option value="Education">Education</option>
              <option value="Personal">Personal</option>
              <option value="Home">Home</option>
            </select>
          </div>

          {/* Additional Details */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="additionalDetails">
              Additional Details
            </label>
            <textarea
              id="additionalDetails"
              name="additionalDetails"
              value={formData.additionalDetails}
              onChange={handleChange}
              placeholder="Tell us about your loan needs..."
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
            <button
              type="button"
              onClick={handleBack}
              className="w-full sm:w-1/2 border border-green-600 text-green-600 font-semibold py-2 rounded-lg hover:bg-green-50 transition"
            >
              Back
            </button>

            <button
              type="submit"
              className="w-full sm:w-1/2 bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition"
            >
              Continue to Financial Info
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Info;
