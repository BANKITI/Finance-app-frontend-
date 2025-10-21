import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Account: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  // Handle input change and auto-focus next field
  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return; // ✅ Only digits 0–9 allowed
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // ✅ Auto-focus next input
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // ✅ Auto-submit when all digits are filled
    if (newOtp.every((digit) => digit !== "")) {
      handleVerifyAuto(newOtp);
    }
  };

  // Handle backspace to go to previous field
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Manual Verify button
  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (/^[0-9]{4}$/.test(enteredOtp)) {
      navigate("/verification"); // Go to next page if OTP is valid
    } else {
      alert("Please enter a valid 4-digit OTP.");
    }
  };

  // Auto verify when all fields are filled
  const handleVerifyAuto = (newOtp: string[]) => {
    const enteredOtp = newOtp.join("");
    if (/^[0-9]{4}$/.test(enteredOtp)) {
      navigate("/verification");
    }
  };

  // Resend OTP button (ready for backend)
  const handleResend = () => {
    console.log("Resending OTP...");
    alert("A new OTP has been sent to your phone.");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 w-full max-w-md text-center">
        {/* Placeholder for Image */}
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center">
            {/* Replace this with your SVG or illustration */}
            <img
              src="./account.png"
              alt="account verification"
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          OTP Verification
        </h1>
        <p className="text-gray-500 mb-6">
          Enter the OTP sent to{" "}
          <span className="font-semibold text-gray-700">your email</span>
        </p>

        {/* OTP Inputs */}
        <form onSubmit={handleVerify}>
          <div className="flex justify-center gap-3 mb-8">
            {otp.map((digit, i) => (
              <input
                key={i}
                type="text"
                value={digit}
                maxLength={1}
                inputMode="numeric"
                className="w-12 h-12 text-center text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none"
                onChange={(e) => handleChange(e.target.value, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                ref={(el) => {
                  inputRefs.current[i] = el as HTMLInputElement | null;
                }}
              />
            ))}
          </div>

          {/* Verify Button */}
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Verify & Proceed
          </button>
        </form>

        {/* Resend Section */}
        <div className="mt-6 text-sm text-gray-600">
          Didn’t receive an OTP?{" "}
          <button
            onClick={handleResend}
            className="text-red-600 font-semibold hover:underline"
            type="button"
          >
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
