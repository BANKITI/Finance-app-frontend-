import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Submit: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    employmentStatus: "",
    employerName: "",
    monthlyIncome: "",
    monthlyExpenses: "",
    homeAddress: "",
    city: "",
    state: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Simulate API submission delay
    setTimeout(() => {
      navigate("/application");
    }, 2000);
  };

  const handleBack = () => {
    navigate("/info"); // Go back to Step 2
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 py-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-8">
        {/* Step progress */}
        <div className="mb-6">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Step 3 of 3</span>
            <span className="text-sm font-medium text-gray-700">100% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-1">Financial Information</h2>
        <p className="text-gray-500 mb-6">Help us verify your application</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Employment Status */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="employmentStatus">
              Employment Status
            </label>
            <select
              id="employmentStatus"
              name="employmentStatus"
              value={formData.employmentStatus}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Status</option>
              <option value="Employed">Employed</option>
              <option value="Self-employed">Self-employed</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Student">Student</option>
            </select>
          </div>

          {/* Employer Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="employerName">
              Employer Name
            </label>
            <input
              id="employerName"
              name="employerName"
              type="text"
              value={formData.employerName}
              onChange={handleChange}
              placeholder="Company name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Monthly Income */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="monthlyIncome">
              Monthly Income
            </label>
            <select
              id="monthlyIncome"
              name="monthlyIncome"
              value={formData.monthlyIncome}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Income</option>
              <option value="2000">2000</option>
              <option value="5000">5000</option>
              <option value="10000">10000</option>
              <option value="20000">20000</option>
            </select>
          </div>

          {/* Monthly Expenses */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="monthlyExpenses">
              Monthly Expenses
            </label>
            <select
              id="monthlyExpenses"
              name="monthlyExpenses"
              value={formData.monthlyExpenses}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Expenses</option>
              <option value="1000">1000</option>
              <option value="2000">2000</option>
              <option value="3000">3000</option>
              <option value="5000">5000</option>
            </select>
          </div>

          {/* Home Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="homeAddress">
              Home Address
            </label>
            <input
              id="homeAddress"
              name="homeAddress"
              type="text"
              value={formData.homeAddress}
              onChange={handleChange}
              placeholder="Street, City"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* City & State */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="city">
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="state">
                State / Region
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Region</option>
                <option value="Ashanti">Ashanti</option>
                <option value="Greater Accra">Greater Accra</option>
                <option value="Western">Western</option>
                <option value="Eastern">Eastern</option>
              </select>
            </div>
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
              Submit Application
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center pt-3">
            By submitting, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>

        {/* Success message */}
        {submitted && (
          <div className="mt-6 bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-sm">
            ✅ Your application has been submitted. <br />
            Our team will review it within 24 hours.
          </div>
        )}
      </div>
    </div>
  );
};

export default Submit;
