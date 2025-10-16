import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome to <span className="text-teal-600">BANKITI</span>
        </h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Login or create an account to get started
        </p>

        {/* Login / Signup Toggle */}
        <div className="flex mb-6 border rounded-lg overflow-hidden">
          <button className="flex-1 py-2 bg-gray-200 font-semibold">
            Login
          </button>
          <Link
            to="/signup"
            className="flex-1 py-2 text-center bg-white hover:bg-gray-100 font-semibold"
          >
            Sign Up
          </Link>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
              required
            />
          </div>

          {/* Password Input with Eye Toggle */}
          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none pr-10"
                required
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-teal-600"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember Me / Forgot Password */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-teal-600" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-teal-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
