import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const UpdateProfile: React.FC = () => {
  const navigate = useNavigate();

  // TEMP USER DATA (BACKEND WILL REPLACE)
  const user = {
    fullName: "Ankomah Daniel",
    email: "ankomahdaniel995@gmail.com",
    nationalId: "567809834",
  };

  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [success, setSuccess] = useState(false);
  const [countdown, setCountdown] = useState(10);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone || !role) {
      alert("Please complete all fields");
      return;
    }

    // BACKEND SAVE WILL GO HERE

    setSuccess(true);
  };

  // HANDLE REDIRECT COUNTDOWN
  useEffect(() => {
    if (!success) return;

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      if (role === "lender") {
        navigate("/dashboard/lender");
      } else {
        navigate("/dashboard/borrower");
      }
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [success, role, navigate]);

  // SUCCESS SCREEN
  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center"
        >
          <FaCheckCircle className="text-teal-600 text-5xl mx-auto mb-4" />

          <h2 className="text-2xl font-bold text-gray-900">
            Profile Updated Successfully
          </h2>

          <p className="text-gray-600 mt-2">
            Your account details have been saved.
          </p>

          <p className="text-sm text-gray-500 mt-4">
            Redirecting to your dashboard in{" "}
            <span className="font-semibold text-teal-600">
              {countdown}
            </span>{" "}
            seconds...
          </p>
        </motion.div>
      </div>
    );
  }

  // UPDATE PROFILE FORM
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Profile Settings
          </h1>
          <p className="text-gray-500 mt-1">
            Manage your account information and preferences
          </p>
        </div>

        {/* ACCOUNT INFO */}
        <div className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900">
            Account Information
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Your basic account details (read-only)
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-medium text-gray-900">{user.fullName}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium text-gray-900">{user.email}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">National ID</p>
              <p className="font-medium text-gray-900">{user.nationalId}</p>
            </div>
          </div>
        </div>

        {/* UPDATE PROFILE */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Update Profile
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Add your phone number and select your role
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            {/* PHONE */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+233541234567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-600 outline-none"
                required
              />
            </div>

            {/* ROLE */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-1 w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-600 outline-none"
                required
              >
                <option value="">Select your role</option>
                <option value="lender">Lender</option>
                <option value="borrower">Borrower</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                Choose "Lender" if you want to lend money, or "Borrower" if you need to borrow
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Update Profile
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default UpdateProfile;
