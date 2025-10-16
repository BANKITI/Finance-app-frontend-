import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Signup: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) navigate("/dashboard");
    else navigate("/apply");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Welcome to <span className="text-green-700">BANKITI</span>
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            {isLogin
              ? "Login to your account to continue"
              : "Create an account to get started"}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-lg mb-8 overflow-hidden">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-2 font-medium transition ${
              isLogin
                ? "bg-green-700 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-2 font-medium transition ${
              !isLogin
                ? "bg-green-700 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                required
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="text-sm font-semibold text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full mt-1 p-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500 hover:text-green-700"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
          </div>

          {/* Confirm Password (Sign Up only) */}
          {!isLogin && (
            <div className="relative">
              <label className="text-sm font-semibold text-gray-700">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full mt-1 p-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                required
              />
              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-3 top-9 text-gray-500 hover:text-green-700"
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>
          )}

          {/* Terms (Sign Up only) */}
          {!isLogin && (
            <div className="flex items-start gap-2 mt-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 text-green-700 focus:ring-green-600"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="text-green-700 font-semibold hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="text-green-700 font-semibold hover:underline"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg font-semibold transition"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>

          {/* Toggle Text */}
          <p className="text-sm text-center text-gray-600 mt-4">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="text-green-700 font-semibold hover:underline"
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
                  className="text-green-700 font-semibold hover:underline"
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
