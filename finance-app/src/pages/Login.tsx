import React, { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    /**
     * 🔒 BACKEND (later):
     * response = { token }
     */
    const fakeToken = "sample_token";

    login(null, fakeToken); // ✅ no roles

    // 🔁 Redirect back or go to account overview
    const from = (location.state as { from?: { pathname: string } })?.from
      ?.pathname;

    if (from) {
      navigate(from, { replace: true });
    } else {
      navigate("/accountoverview", { replace: true });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome to <span className="text-teal-600">LENBOW</span>
        </h1>

        <p className="text-center text-sm text-gray-500 mb-6">
          Login to continue
        </p>

        <form className="space-y-4" onSubmit={handleLogin}>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="example@gmail.com"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-semibold mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
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

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-teal-600 font-semibold hover:underline">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
