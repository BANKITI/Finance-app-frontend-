import React from "react";
import { FaShieldAlt, FaChartLine, FaBalanceScale, FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";

const Lend: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Lend Money, <span className="text-teal-600">Earn Returns</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Invest in verified borrowers and earn attractive returns while helping others achieve their goals.
        </p>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-6 md:px-16 mb-12">
        {[
          { title: "Average Return", value: "$10,000" },
          { title: "Default Rate", value: "20%" },
          { title: "Active Lenders", value: "232,849" },
          { title: "Total Funded", value: "$5.5 Billion" },
        ].map((stat, i) => (
          <div key={i} className="bg-white shadow-md rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold text-teal-600">{stat.value}</h2>
            <p className="text-sm text-gray-500 mt-1">{stat.title}</p>
          </div>
        ))}
      </section>

      {/* Why Lend Section */}
      <section className="bg-white py-12 px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Why Lend with <span className="text-teal-600">BANKITI?</span>
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Make your money work harder while making a difference in people's lives.
        </p>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {[
            {
              icon: <FaChartLine className="text-teal-600 text-3xl mb-3" />,
              title: "Attractive Returns",
              desc: "Earn competitive returns with interest rates up to 15% per annum.",
            },
            {
              icon: <FaShieldAlt className="text-teal-600 text-3xl mb-3" />,
              title: "Risk Management",
              desc: "Advanced credit scoring ensures borrower authenticity and reduces risk.",
            },
            {
              icon: <FaBalanceScale className="text-teal-600 text-3xl mb-3" />,
              title: "Diversification",
              desc: "Spread your investment across multiple borrowers to reduce risk.",
            },
            {
              icon: <FaWallet className="text-teal-600 text-3xl mb-3" />,
              title: "Flexible Investment",
              desc: "Start lending with as low as $100 and manage your risk on your dashboard.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 border rounded-xl p-6 text-center hover:shadow-md transition">
              {item.icon}
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Browse Loan Requests */}
      <section className="py-14 px-6 md:px-16 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Browse Loan Requests
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Choose from verified borrowers with transparent credit profiles and clear terms.
        </p>

        <div className="space-y-4">
          {[
            {
              name: "Sarah M.",
              loan: "$10,000",
              term: "12 months",
              rate: "12.5%",
              score: "720",
              purpose: "Business Expansion",
              status: "Low Risk",
            },
            {
              name: "David C.",
              loan: "$67,000",
              term: "42 months",
              rate: "29.5%",
              score: "900",
              purpose: "Education",
              status: "Low Risk",
            },
            {
              name: "Maria R.",
              loan: "$3,000",
              term: "6 months",
              rate: "9.5%",
              score: "420",
              purpose: "Home Improvement",
              status: "Low Risk",
            },
            {
              name: "James K.",
              loan: "$11,000",
              term: "12 months",
              rate: "14.5%",
              score: "676",
              purpose: "Debt Consolidation",
              status: "Low Risk",
            },
          ].map((borrower, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border flex flex-col md:flex-row justify-between items-start md:items-center p-5 hover:shadow-md transition"
            >
              <div>
                <h3 className="font-bold text-lg">{borrower.name}</h3>
                <p className="text-sm text-gray-500">{borrower.purpose}</p>
                <p className="text-xs text-teal-600 mt-1">Verified</p>
              </div>

              <div className="flex flex-wrap gap-6 mt-4 md:mt-0 text-sm">
                <div>
                  <p className="font-semibold">{borrower.loan}</p>
                  <p className="text-gray-500">Loan Amount</p>
                </div>
                <div>
                  <p className="font-semibold">{borrower.term}</p>
                  <p className="text-gray-500">Term</p>
                </div>
                <div>
                  <p className="font-semibold">{borrower.rate}</p>
                  <p className="text-gray-500">Interest Rate</p>
                </div>
                <div>
                  <p className="font-semibold">{borrower.score}</p>
                  <p className="text-gray-500">Credit Score</p>
                </div>
              </div>

              <div className="mt-4 md:mt-0">
                <span className="text-sm font-semibold text-teal-600 bg-teal-100 px-3 py-1 rounded-full">
                  {borrower.status}
                </span>
                <Link
                  to="/lenderdash"
                  className="block mt-3 text-center bg-teal-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-teal-700 transition"
                >
                  Fund this Loan
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="px-6 py-2 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-600 hover:text-white transition">
            View all Loan Requests
          </button>
        </div>
      </section>

      {/* How Lending Works */}
      <section className="bg-white py-14 px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          How Lending Works
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Start earning returns in 4 simple steps.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Create Account", desc: "Sign up and verify your identity to start lending." },
            { title: "Browse Borrowers", desc: "Review verified borrower profiles and loan requests." },
            { title: "Fund Loans", desc: "Choose loans that match your investment goals." },
            { title: "Earn Returns", desc: "Receive monthly repayments directly to your account." },
          ].map((step, i) => (
            <div
              key={i}
              className="bg-gray-50 border rounded-xl p-6 text-center hover:shadow-md transition"
            >
              <div className="w-10 h-10 flex items-center justify-center mx-auto mb-3 bg-teal-600 text-white rounded-full font-bold">
                {i + 1}
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Lend;
