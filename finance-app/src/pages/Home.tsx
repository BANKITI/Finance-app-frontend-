import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import PwaInstallPrompt from "../components/PwaInstallPrompt";

import {
  FaLock,
  FaBolt,
  FaChartLine,
  FaTimes,
  FaDollarSign,
  FaCalendarAlt,
  FaPercent,
  FaMoneyBillWave,
  FaWallet,
  FaUsers,
  FaBalanceScale,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";
import { HiOutlineCalculator } from "react-icons/hi";

const HomePage: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

useEffect(() => {
  const popupSeen = sessionStorage.getItem("bankiti_popup_seen");
  const lastVisit = localStorage.getItem("bankiti_last_visit");
  const now = Date.now();

  // Reset popup for a true revisit (30 minutes of inactivity)
  if (lastVisit && now - Number(lastVisit) > 30 * 60 * 1000) {
    sessionStorage.removeItem("bankiti_popup_seen");
  }

  // Update last visit timestamp
  localStorage.setItem("bankiti_last_visit", String(now));

  // If popup shown already in this browser session → stop
  if (popupSeen === "yes") return;

  // Show after 1 minute
  const timer = setTimeout(() => {
    setShowPopup(true);
    sessionStorage.setItem("bankiti_popup_seen", "yes");
  }, 60000);

  return () => clearTimeout(timer);
}, []);


  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative">

      {/* --------------------------- POPUP OVERLAY --------------------------- */}
      {showPopup && (
        <div
          className="fixed inset-0 
          bg-gradient-to-br from-blue-200/40 via-white/60 to-blue-100/40 
          backdrop-blur-sm 
          flex items-center justify-center px-4 z-40"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
            >
              <FaTimes size={24} />
            </button>

            {/* Popup Body */}
            <h2 className="text-2xl font-bold text-blue-600 text-center">
              Create an Account
            </h2>
            <p className="text-gray-600 text-center mt-2">
              Sign up to enjoy full access to all features on BANKITI.
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                to="/signup"
                className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
              >
                Sign Up
              </Link>

              <button
                onClick={() => setShowPopup(false)}
                className="w-full text-center border border-gray-400 text-gray-700 hover:bg-gray-100 font-semibold py-3 rounded-xl transition"
              >
                Continue Browsing
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* --------------------------- PAGE CONTENT ---------------------------- */}
      {/* HERO SECTION */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-sm bg-blue-100 text-blue-700 font-semibold inline-block px-3 py-1 rounded-full mb-4">
            Fast & Secure Lending
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Smart Lending & Borrowing Made{" "}
            <span className="text-blue-600">Simple</span>
          </h1>

          <p className="text-gray-600 mt-4">
            Connect with trusted lenders and borrowers on <b>BANKITI</b>.  
            Transparent rates, fast approvals, and secure transactions all in one platform.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <Link
              to="/borrow"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Borrow Now
            </Link>
            <Link
              to="/lend"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Lend & Earn
            </Link>
          </div>

          <div className="flex items-center gap-6 mt-8 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <FaLock className="text-blue-600 text-lg" />
              <span>256-bit</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBolt className="text-yellow-500 text-lg" />
              <span>24hr</span>
            </div>
            <div className="flex items-center gap-2">
              <FaChartLine className="text-green-500 text-lg" />
              <span>4.5%+</span>
            </div>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="mt-10 lg:mt-0 w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/image.jpg"
            alt="Loan illustration"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover"
          />
        </motion.div>
      </section>

      {/* ----------------------------- LOAN CALCULATOR ------------------------------ */}
      <section className="bg-white py-16 px-6 lg:px-20 text-center">
        <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold text-sm mb-3">
          <HiOutlineCalculator className="mr-2" /> Loan Calculator
        </div>

        <h2 className="text-3xl font-bold">
          Calculate Your <span className="text-blue-600">Loan</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Get an instant estimate of your monthly payments and total loan cost
        </p>

        <motion.div
          className="flex flex-col md:flex-row justify-center gap-8 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Loan Details */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md w-full md:w-1/3 text-left">
            <h3 className="text-lg font-semibold mb-4">Loan Details</h3>
            <p className="text-gray-500 mb-2 flex items-center gap-2">
              <FaDollarSign className="text-blue-600" />
              Loan Amount: <b>$10,000</b>
            </p>
            <p className="text-gray-500 mb-2 flex items-center gap-2">
              <FaCalendarAlt className="text-blue-600" />
              Loan Term: <b>12 months</b>
            </p>
            <p className="text-gray-500 mb-2 flex items-center gap-2">
              <FaPercent className="text-blue-600" />
              Interest Rate: <b>8.5%</b>
            </p>
          </div>

          {/* Loan Summary */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md w-full md:w-1/3 text-left">
            <h3 className="text-lg font-semibold mb-4">Your Loan Summary</h3>
            <p className="text-gray-500 mb-2 flex items-center gap-2">
              <FaWallet className="text-blue-600" />
              Monthly Payment: <b>$872.20</b>
            </p>
            <p className="text-gray-500 mb-2 flex items-center gap-2">
              <FaMoneyBillWave className="text-blue-600" />
              Total Payment: <b>$10,466.40</b>
            </p>
            <p className="text-gray-500 mb-2 flex items-center gap-2">
              <FaChartLine className="text-blue-600" />
              Total Interest: <b>$466.40</b>
            </p>
          </div>
        </motion.div>

        <div className="mt-10">
          <Link
            to="/apply"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            Apply for This Loan
          </Link>
        </div>
      </section>

      {/* ---------------------------- WHY CHOOSE US ---------------------------- */}
      <section className="bg-gray-50 py-20 px-6 lg:px-20 text-center">
        <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold text-sm mb-3">
          Why Choose BANKITI
        </div>

        <h2 className="text-3xl font-bold">
          Secure, Fast & <span className="text-blue-600">Transparent</span>
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          We're committed to providing the best lending and borrowing experience with top-notch security and customer service.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {[
            { icon: <FaLock />, title: "Bank-Level Security", text: "256-bit encryption protects all your transactions and personal data." },
            { icon: <FaBolt />, title: "Fast Approvals", text: "Get approved in as little as 24 hours with our automated system." },
            { icon: <FaCheckCircle />, title: "100% Transparent", text: "No hidden fees. All rates and terms clearly displayed upfront." },
            { icon: <FaUsers />, title: "Trusted Community", text: "Join thousands of satisfied borrowers and lenders nationwide." },
            { icon: <FaBalanceScale />, title: "Licensed & Regulated", text: "Fully compliant with financial regulations and best practices." },
            { icon: <FaChartLine />, title: "Competitive Rates", text: "Access the best lending rates through our marketplace." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all text-left"
            >
              <div className="text-blue-600 text-3xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">$50M+</h3>
            <p className="text-gray-500">Loans Funded</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
            <p className="text-gray-500">Active Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">98%</h3>
            <p className="text-gray-500">Satisfaction Rate</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">4.8/5</h3>
            <p className="text-gray-500">Average Rating</p>
          </div>
        </div>
      </section>

      {/* ---------------------------- TESTIMONIALS ---------------------------- */}
      <section className="bg-white py-20 px-6 lg:px-20 text-center">
        <div className="inline-flex items-center bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-semibold text-sm mb-3">
          <FaStar /> Testimonials
        </div>

        <h2 className="text-3xl font-bold">
          What Our <span className="text-blue-600">Users Say</span>
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Join thousands of satisfied users who trust BANKITI for their lending and borrowing needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            {
              name: "Sarah Johnson",
              role: "Small Business Owner",
              initials: "SJ",
              text: `"BANKITI helped me secure funding for my business expansion in just 48 hours. The process was seamless and the rates were competitive. Highly recommended!"`,
            },
            {
              name: "Michael Chen",
              role: "Real Estate Investor",
              initials: "MC",
              text: `"As a lender, I’ve found BANKITI to be transparent and reliable. The platform makes it easy to find quality borrowers and track my investments."`,
            },
            {
              name: "Emily Rodriguez",
              role: "Freelancer",
              initials: "ER",
              text: `"Got approved for a personal loan within 24 hours. The transparent, fee-free structure and easy application process made everything stress-free."`,
            },
          ].map((user, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition-all text-left"
            >
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{user.text}</p>
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
                  {user.initials}
                </div>
                <div>
                  <h4 className="font-semibold">{user.name}</h4>
                  <p className="text-sm text-gray-500">{user.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <PwaInstallPrompt/>

    </div>
  );
};

export default HomePage;
