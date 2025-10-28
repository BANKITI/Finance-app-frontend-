import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMobileAlt, FaCreditCard, FaLock } from "react-icons/fa";

const Mobilepayment: React.FC = () => {
  // ✅ Blank initial states
  const [email, setEmail] = useState<string>("");
  const [amount, setAmount] = useState<number | string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [provider, setProvider] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // ✅ Validate form inputs dynamically
  useEffect(() => {
    const valid =
      mobileNumber.length >= 10 &&
      (provider === "MTN" || provider === "Vodafone" || provider === "AirtelTigo") &&
      email.includes("@") &&
      amount !== "";
    setIsValid(valid);
    if (valid) setError("");
  }, [mobileNumber, provider, email, amount]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) {
      setError("Please fill in all fields correctly before proceeding.");
      return;
    }

    alert(`Processing ${provider} Mobile Money payment of GHS ${amount}`);
    // 🔗 Integrate Paystack Mobile Money logic here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden grid md:grid-cols-2 border border-gray-100">
        {/* ✅ Left Section - Payment Options */}
        <div className="bg-gray-100 p-8 flex flex-col justify-center">
          <h2 className="text-sm font-semibold text-gray-700 uppercase mb-3 tracking-wide">
            Pay With
          </h2>

          <div className="space-y-3">
            {/* Active Option: Mobile Money */}
            <div className="flex items-center justify-between w-full bg-teal-600 text-white border border-teal-600 rounded-lg px-4 py-3">
              <div className="flex items-center gap-3">
                <FaMobileAlt className="text-white text-lg" />
                <span className="font-medium">Mobile Money</span>
              </div>
              <span>✓</span>
            </div>

            {/* Inactive Option: Card */}
            <Link
              to="/cardpayment"
              className="flex items-center justify-between w-full bg-white hover:bg-teal-50 border border-gray-200 rounded-lg px-4 py-3 transition-all"
            >
              <div className="flex items-center gap-3">
                <FaCreditCard className="text-teal-600 text-lg" />
                <span className="font-medium text-gray-700">Card</span>
              </div>
              <span className="text-gray-400">›</span>
            </Link>
          </div>

          <p className="mt-10 text-sm text-gray-500">
            Secure payments powered by{" "}
            <span className="text-teal-600 font-semibold">Paystack</span>.
          </p>
        </div>

        {/* ✅ Right Section - Mobile Money Form */}
        <div className="p-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-5 text-center md:text-left">
            Enter your details to start payment
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
                required
              />
            </div>

            {/* Amount Input */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Amount (GHS)
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
                required
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="e.g. 050 003 0090"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
                required
              />
            </div>

            {/* Provider */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Choose Provider
              </label>
              <select
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
                required
              >
                <option value="">Select Provider</option>
                <option value="MTN">MTN</option>
                <option value="Vodafone">Vodafone</option>
                <option value="AirtelTigo">AirtelTigo</option>
              </select>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-3 rounded-lg font-semibold text-base shadow-md transition-all duration-200 ${
                isValid
                  ? "bg-teal-600 hover:bg-teal-700 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-600"
              }`}
            >
              {isValid ? "Confirm Payment" : "Enter Details to Confirm"}
            </button>
          </form>

          {/* ✅ Back to Card Payment Button */}
          <div className="mt-6 text-center">
            <Link
              to="/cardpayment"
              className="inline-block mt-4 bg-gray-100 hover:bg-gray-200 text-teal-700 font-semibold px-6 py-2 rounded-lg transition"
            >
              Back to Card Payment
            </Link>
          </div>

          {/* Secure Footer */}
          <div className="mt-6 text-center text-xs text-gray-500 flex flex-col items-center gap-1">
            <FaLock className="text-gray-400" />
            <p>Secured by Paystack</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobilepayment;
