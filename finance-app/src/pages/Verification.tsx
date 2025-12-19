import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const Verification: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-3xl shadow-lg p-10 text-center max-w-md w-full">

        <FaCheckCircle className="text-green-600 mx-auto mb-4" size={60} />

        <h2 className="text-2xl font-extrabold mb-2">
          Account Created Successfully
        </h2>

        <p className="text-gray-500 text-sm mb-4">
          Your identity has been verified. You’ll be redirected to login.
        </p>

        <p className="text-xs text-gray-400">
          Please wait...
        </p>
      </div>
    </div>
  );
};

export default Verification;
