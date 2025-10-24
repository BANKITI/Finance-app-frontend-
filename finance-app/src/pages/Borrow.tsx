import { motion } from "framer-motion";
import {
  FaLock,
  FaClock,
  FaHandshake,
  FaChartBar,
  FaArrowRight,
  FaHome,
  FaBriefcase,
  FaGraduationCap,
  FaTools,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Borrow: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16 text-gray-800">
      {/* HERO SECTION */}
      <motion.section
        className="text-center px-6 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
          Get the <span className="text-teal-600">Funds</span> You Need
        </h1>
        <p className="text-gray-600 mb-10">
          Simple, transparent, and fast — apply for the funds you need and move
          forward with confidence.
        </p>

        {/* FEATURES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <FaLock />, title: "Secure Process" },
            { icon: <FaClock />, title: "Fast Approval" },
            { icon: <FaHandshake />, title: "Flexible Terms" },
            { icon: <FaChartBar />, title: "Build Credit" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border border-gray-100 py-6 px-4 shadow-sm hover:shadow-md transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-teal-600 text-2xl mb-2 flex justify-center">
                {item.icon}
              </div>
              <p className="font-medium text-sm">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* BORROW OPTIONS (REPLACING CALCULATOR) */}
      <motion.section
        className="max-w-5xl mx-auto mt-20 px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-2 text-gray-900">
          Choose the Right Loan for You
        </h2>
        <p className="text-gray-600 mb-10">
          Whether it’s personal, business, or education — we’ve got you covered.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: <FaBriefcase />,
              title: "Business Loan",
              desc: "Grow your business with flexible financing.",
            },
            {
              icon: <FaGraduationCap />,
              title: "Education Loan",
              desc: "Invest in your future with competitive education rates.",
            },
            {
              icon: <FaHome />,
              title: "Home Improvement",
              desc: "Upgrade or renovate your home with ease.",
            },
            {
              icon: <FaTools />,
              title: "Personal Loan",
              desc: "Handle expenses and emergencies effortlessly.",
            },
          ].map((option, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 py-8 px-5 hover:shadow-md transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-teal-600 text-3xl mb-3 flex justify-center">
                {option.icon}
              </div>
              <h4 className="font-semibold text-lg mb-2">{option.title}</h4>
              <p className="text-sm text-gray-600">{option.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Apply Buttons */}
        <div className="text-center mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/apply"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-10 py-3 rounded-full shadow-md transition duration-300"
          >
            Apply Now
          </Link>

          <Link
            to="/borrowdash"
            className="inline-block bg-white border border-teal-600 text-teal-700 font-semibold px-10 py-3 rounded-full shadow-md hover:bg-teal-50 transition duration-300"
          >
            Go to Dashboard
          </Link>
        </div>
      </motion.section>

      {/* HOW BORROWING WORKS */}
      <motion.section
        className="max-w-4xl mx-auto mt-20 px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-2 text-gray-900">
          How Borrowing Works
        </h2>
        <p className="text-gray-600 mb-8">Get funded in 4 simple steps</p>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              num: "1",
              title: "Complete Application",
              desc: "Fill out our simple loan application form.",
            },
            {
              num: "2",
              title: "Get Approved",
              desc: "Receive approval decisions within 24 hours.",
            },
            {
              num: "3",
              title: "Review Terms",
              desc: "Review and accept your personalized loan terms.",
            },
            {
              num: "4",
              title: "Receive Funds",
              desc: "Get your funds securely deposited to your account.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-sm border border-gray-100 rounded-xl p-5"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-teal-600 text-lg font-bold mb-2">
                {step.num}
              </div>
              <h4 className="font-semibold mb-1">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SUPPORT CTA */}
      <motion.section
        className="mt-20 bg-teal-600 text-white text-center py-12 px-6 rounded-t-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-2">
          Need Help with Your Application?
        </h3>
        <p className="text-teal-100 mb-6">
          Our support team is here to guide you every step of the way.
        </p>
        <Link
          to="/support"
          className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Contact Support <FaArrowRight />
        </Link>
      </motion.section>
    </div>
  );
};

export default Borrow;
