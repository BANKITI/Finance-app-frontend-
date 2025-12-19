import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Signup: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ✅ NO NAVIGATION HERE
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Welcome to <span className="text-green-700">LENBOW</span>
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            {isLogin
              ? "Login to your account to continue"
              : "Create an account to get started"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name */}
          {!isLogin && (
            <div>
              <label htmlFor="fullName" className="text-sm font-semibold">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>
          )}

          {/* National ID */}
          <div>
            <label htmlFor="nid" className="text-sm font-semibold">
              National ID Number
            </label>
            <input
              id="nid"
              name="nationalId"
              type="text"
              required
              className="w-full mt-1 p-2 border rounded-lg"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full mt-1 p-2 border rounded-lg"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="text-sm font-semibold">
              Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              required
              className="w-full mt-1 p-2 pr-10 border rounded-lg"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>

          {/* Confirm Password */}
          {!isLogin && (
            <div className="relative">
              <label htmlFor="confirmPassword" className="text-sm font-semibold">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                required
                className="w-full mt-1 p-2 pr-10 border rounded-lg"
              />
              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-3 top-9"
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </button>
            </div>
          )}

          {/* ✅ LINK-BASED SUBMIT */}
          {isLogin ? (
            <Link
              to="/"
              className="block text-center w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800"
            >
              Login
            </Link>
          ) : (
            <Link
              to="/money"
              className="block text-center w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800"
            >
              Create Account
            </Link>
          )}

          {/* Toggle */}
          <p className="text-sm text-center mt-4">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="text-green-700 font-semibold"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className="text-green-700 font-semibold"
                >
                  Login
                </button>
              </>
            )}
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
