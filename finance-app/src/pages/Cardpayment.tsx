import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCreditCard, FaMobileAlt, FaLock } from "react-icons/fa";

const Cardpayment: React.FC = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");

  // Validate form input before enabling Pay button
  useEffect(() => {
    const valid =
      email.includes("@") &&
      cardNumber.length >= 12 &&
      expiry.length >= 4 &&
      cvv.length >= 3 &&
      amount > 0;
    setIsValid(valid);
    if (valid) setError("");
  }, [email, cardNumber, expiry, cvv, amount]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValid) {
      setError("Please fill in all card details correctly before paying.");
      return;
    }

    alert(`Processing payment of GHS ${amount.toFixed(2)} for ${email}`);
    // 🔗 Integrate Paystack API or redirect here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2 border border-gray-100">
        {/* Left: Payment Method Switcher */}
        <div className="bg-gray-100 p-8 flex flex-col justify-center">
          <h2 className="text-sm font-semibold text-gray-700 uppercase mb-3 tracking-wide">
            Pay With
          </h2>

          <div className="space-y-3">
            <Link
              to="/mobile-money"
              className="flex items-center justify-between w-full bg-white hover:bg-teal-50 border border-gray-200 rounded-lg px-4 py-3 transition-all"
            >
              <div className="flex items-center gap-3">
                <FaMobileAlt className="text-teal-600 text-lg" />
                <span className="font-medium text-gray-700">Mobile Money</span>
              </div>
              <span className="text-gray-400">›</span>
            </Link>

            <div className="flex items-center justify-between w-full bg-teal-600 text-white border border-teal-600 rounded-lg px-4 py-3">
              <div className="flex items-center gap-3">
                <FaCreditCard className="text-white text-lg" />
                <span className="font-medium">Card</span>
              </div>
              <span>✓</span>
            </div>
          </div>

          <p className="mt-10 text-sm text-gray-500">
            Secure payments powered by{" "}
            <span className="text-teal-600 font-semibold">Paystack</span>.
          </p>
        </div>

        {/* Right: Card Payment Form */}
        <div className="p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Enter your card details to pay
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
                required
              />
            </div>

            {/* Amount */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Amount (GHS)
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                value={amount || ""}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
                required
              />
            </div>

            {/* Card Number */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Card Number
              </label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                maxLength={19}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
                required
              />
            </div>

            {/* Expiry & CVV */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Expiry Date
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  maxLength={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  CVV
                </label>
                <input
                  type="text"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  maxLength={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
                  required
                />
              </div>
            </div>

            {/* Validation Error */}
            {error && (
              <p className="text-red-600 text-sm font-medium">{error}</p>
            )}

            {/* Pay Button */}
            <button
              type="submit"
              className={`w-full py-3 rounded-lg font-semibold text-base shadow-md transition-all duration-200 ${
                isValid
                  ? "bg-teal-600 hover:bg-teal-700 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-600"
              }`}
            >
              {isValid ? `Pay GHS ${amount.toFixed(2)}` : "Enter Details to Pay"}
            </button>
          </form>

          {/* Secure Section */}
          <div className="mt-6 text-center text-xs text-gray-500 flex flex-col items-center gap-1">
            <FaLock className="text-gray-400" />
            <p>Secured by Paystack</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardpayment;
