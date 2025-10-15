import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaLock,
  FaBolt,
  FaChartLine,
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

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* HERO SECTION */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-sm bg-purple-100 text-purple-700 font-semibold inline-block px-3 py-1 rounded-full mb-4">
            Fast & Secure Lending
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Smart Lending & Borrowing Made{" "}
            <span className="text-purple-600">Simple</span>
          </h1>

          <p className="text-gray-600 mt-4">
            Connect with trusted lenders and borrowers on <b>BANKIT</b>.  
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
              className="border border-purple-500 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Lend & Earn
            </Link>
          </div>

          <div className="flex items-center gap-6 mt-8 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <FaLock className="text-purple-600 text-lg" />
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

        {/* Image placeholder */}
        <motion.div
          className="mt-10 lg:mt-0 w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 👉 Replace this with your image path */}
          <img
            src="/image.jpg"
            alt="Loan illustration"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover"
          />
        </motion.div>
      </section>

      {/* LOAN CALCULATOR */}
      <section className="bg-white py-16 px-6 lg:px-20 text-center">
        <div className="inline-flex items-center bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold text-sm mb-3">
          <HiOutlineCalculator className="mr-2" /> Loan Calculator
        </div>

        <h2 className="text-3xl font-bold">
          Calculate Your <span className="text-purple-600">Loan</span>
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
          {/* Loan Details Box */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md w-full md:w-1/3 text-left">
            <h3 className="text-lg font-semibold mb-4">Loan Details</h3>
            <p className="text-gray-500 mb-2 flex items-center gap-2">
              <FaDollarSign className="text-purple-600" />
              Loan Amount: <b>$10,000</b>
            </p>
            <p className="text-gray-500 mb-2 flex items-center gap-2">
              <FaCalendarAlt className="text-purple-600" />
              Loan Term: <b>12 months</b>
            </p>
            <p className="text-gray-500 mb-2 flex items-center gap-2">
              <FaPercent className="text-purple-600" />
              Interest Rate: <b>8.5%</b>
            </p>
          </div>

          {/* Loan Summary Box */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md w-full md:w-1/3 text-left">
            <h3 className="text-lg font-semibold mb-4">Your Loan Summary</h3>
            <p className="text-gray-500 mb-2 flex items-center gap-2">
              <FaWallet className="text-purple-600" />
              Monthly Payment: <b>$872.20</b>
            </p>
            <p className="text-gray-500 mb-2 flex items-center gap-2">
              <FaMoneyBillWave className="text-purple-600" />
              Total Payment: <b>$10,466.40</b>
            </p>
            <p className="text-gray-500 mb-2 flex items-center gap-2">
              <FaChartLine className="text-purple-600" />
              Total Interest: <b>$466.40</b>
            </p>
          </div>
        </motion.div>

        <div className="mt-10">
          <Link
            to="/apply"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            Apply for This Loan
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE BANKIT SECTION */}
      <section className="bg-gray-50 py-20 px-6 lg:px-20 text-center">
        <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold text-sm mb-3">
          Why Choose BANKIT
        </div>

        <h2 className="text-3xl font-bold">
          Secure, Fast & <span className="text-purple-600">Transparent</span>
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          We're committed to providing the best lending and borrowing experience with top-notch security and customer service.
        </p>

        {/* Feature Cards */}
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
              <div className="text-purple-600 text-3xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <h3 className="text-3xl font-bold text-purple-600">$50M+</h3>
            <p className="text-gray-500">Loans Funded</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-purple-600">10K+</h3>
            <p className="text-gray-500">Active Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-purple-600">98%</h3>
            <p className="text-gray-500">Satisfaction Rate</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-purple-600">4.8/5</h3>
            <p className="text-gray-500">Average Rating</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-white py-20 px-6 lg:px-20 text-center">
        <div className="inline-flex items-center bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-semibold text-sm mb-3">
          <FaStar/> Testimonials
        </div>

        <h2 className="text-3xl font-bold">
          What Our <span className="text-purple-600">Users Say</span>
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Join thousands of satisfied users who trust BANKIT for their lending and borrowing needs.
        </p>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            {
              name: "Sarah Johnson",
              role: "Small Business Owner",
              initials: "SJ",
              text: `"BANKIT helped me secure funding for my business expansion in just 48 hours. The process was seamless and the rates were competitive. Highly recommended!"`,
            },
            {
              name: "Michael Chen",
              role: "Real Estate Investor",
              initials: "MC",
              text: `"As a lender, I’ve found BANKIT to be transparent and reliable. The platform makes it easy to find quality borrowers and track my investments."`,
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
                <div className="bg-purple-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
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
    </div>
  );
};

export default HomePage;
