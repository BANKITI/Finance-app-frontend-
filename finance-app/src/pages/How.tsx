import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaSearchDollar,
  FaCheckCircle,
  FaMoneyBillWave,
  FaMoneyCheckAlt,
  FaHandshake,
} from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";

const steps = [
  {
    id: 1,
    icon: <FaUserPlus className="text-teal-600 text-3xl" />,
    title: "Create Your Account",
    desc: "Sign up in minutes with just your email. Complete identity verification for enhanced security and better rates.",
  },
  {
    id: 2,
    icon: <FaSearchDollar className="text-teal-600 text-3xl" />,
    title: "Browse or Apply",
    desc: "Explore lending options or apply for a loan that fits your needs — all in one simple platform.",
  },
  {
    id: 3,
    icon: <FaCheckCircle className="text-teal-600 text-3xl" />,
    title: "Get Approved",
    desc: "Our smart matching system connects borrowers with suitable lenders. Fast approval within 24–48 hours.",
  },
  {
    id: 4,
    icon: <FaMoneyBillWave className="text-teal-600 text-3xl" />,
    title: "Receive Funds",
    desc: "Once approved, funds are transferred securely to your account. Start your loan or earning returns immediately.",
  },
];

const How = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-28 pb-16">
      {/* Header Section */}
      <motion.div
        className="text-center max-w-3xl mx-auto px-6 mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          How <span className="text-teal-600">BANKITI</span> Works
        </h1>
        <p className="text-gray-600 mt-3">
          Our platform makes lending and borrowing simple, secure, and transparent.  
          Here’s how you can get started in four easy steps.
        </p>
      </motion.div>

      {/* Steps Section */}
      <div className="max-w-5xl mx-auto px-6 grid gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="bg-white shadow-md rounded-xl p-6 flex items-start space-x-4 border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex-shrink-0 bg-teal-50 p-4 rounded-full">
              {step.icon}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-1 flex items-center">
                <span className="text-teal-600 font-bold text-xl mr-2">
                  {`0${step.id}`}
                </span>
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Borrowers & Lenders Section */}
      <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-8 px-6">
        {/* Borrowers */}
        <motion.div
          className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-3">
            <div className="bg-teal-600 text-white p-2 rounded-md mr-2">
              <FaMoneyCheckAlt />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg">
              For Borrowers
            </h3>
          </div>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-teal-600" /> Quick application
              process with minimal paperwork
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-teal-600" /> Competitive interest
              rates from multiple lenders
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-teal-600" /> Transparent fees with
              no hidden charges
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-teal-600" /> Fast disbursement once
              approved
            </li>
          </ul>
        </motion.div>

        {/* Lenders */}
        <motion.div
          className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center mb-3">
            <div className="bg-teal-600 text-white p-2 rounded-md mr-2">
              <FaHandshake />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg">
              For Lenders
            </h3>
          </div>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-center gap-2">
              <BsShieldCheck className="text-teal-600" /> Browse verified
              borrower profiles and credit scores
            </li>
            <li className="flex items-center gap-2">
              <BsShieldCheck className="text-teal-600" /> Diversify your
              portfolio with multiple investments
            </li>
            <li className="flex items-center gap-2">
              <BsShieldCheck className="text-teal-600" /> Earn attractive
              returns on your capital
            </li>
            <li className="flex items-center gap-2">
              <BsShieldCheck className="text-teal-600" /> Secure platform with
              payment protection
            </li>
          </ul>
        </motion.div>
      </div>

      {/* CTA Button */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <a
          href="/login"
          className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300"
        >
          Get Started
        </a>
      </motion.div>
    </div>
  );
};

export default How;
