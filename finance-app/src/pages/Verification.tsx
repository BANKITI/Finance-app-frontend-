import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Verification: React.FC = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError(""); // clear error as user types
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length === 0) {
      setError("Please enter a valid OTP."); // no input at all
    } else if (enteredOtp.length < 4) {
      setError("Please enter all 4 digits."); // incomplete OTP
    } else {
      console.log("Entered OTP:", enteredOtp);
      navigate("/successful"); // ✅ route only if valid
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 lg:ml-135">
      {/* ==== PLACEHOLDER FOR IMAGE ==== */}
      <div className="mb-6">
        <img
          src="/verify.png"
          alt="OTP Illustration"
          className="w-40 h-40 object-contain"
        />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-2 text-center">OTP Verification</h2>
      <p className="text-gray-600 mb-6 text-center">
        Enter the OTP sent to{" "}
        <span className="font-semibold">your email</span>
      </p>

      {/* OTP Inputs */}
      <div className="flex space-x-3 mb-6">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            className="w-12 h-12 text-center text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>

      {/* Error message */}
      {error && <p className="text-red-500 mb-3">{error}</p>}

      {/* Verify Button */}
      <div className="Button">
      <button
        onClick={handleVerify}
        className="w-full max-w-xs  text-black font-semibold py-3 rounded-lg shadow hover:bg-lime-500 transition"
      >
        Verify & Proceed
      </button>
      </div>

      {/* Resend Section */}
      <p className="mt-4 text-gray-500">
        Didn’t receive an OTP?{" "}
        <button className="text-red-500 font-medium hover:underline">
          Resend OTP
        </button>
      </p>
    </div>
  );
};

export default Verification;
