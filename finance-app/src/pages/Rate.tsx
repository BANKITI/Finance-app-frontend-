import React from "react";
import { FaInfoCircle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Rate: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <section className="text-center py-16 px-6 bg-white border-b">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">
          Transparent Rates & Fees
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          No hidden charges. Fair rates for both borrowers and lenders.
        </p>
      </section>

      {/* Borrower Interest Rates */}
      <section className="py-14 px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Borrower Interest Rates
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Competitive rates based on your credit profile. Better credit = better rates.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "Standard",
              score: "Credit Score: 600–680",
              rate: "Annual Interest Rate",
              features: [
                "Flexible terms",
                "Quick approval",
                "Great for new borrowers",
              ],
            },
            {
              title: "Prime",
              score: "Credit Score: 680–750",
              rate: "Annual Interest Rate",
              features: [
                "Best rate",
                "Priority processing",
                "Extended terms available",
              ],
              popular: true,
            },
            {
              title: "Elite",
              score: "Credit Score: 750+",
              rate: "Annual Interest Rate",
              features: [
                "Lowest service rate",
                "Instant approval",
                "Premium support",
              ],
            },
          ].map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition ${
                plan.popular ? "border-teal-600" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute top-3 right-3 bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{plan.score}</p>
              <p className="text-sm text-gray-600 font-medium mb-4">{plan.rate}</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>

              <Link
                to="/apply"
                className="block text-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-lg transition"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>

        {/* Go to Dashboard Button */}
        <div className="text-center mt-10">
          <Link
            to="/borrowdash"
            className="inline-block bg-white border border-teal-600 text-teal-700 font-semibold px-10 py-3 rounded-full shadow-md hover:bg-teal-50 transition duration-300"
          >
            Go to Dashboard
          </Link>
        </div>
      </section>

      {/* Lender Returns */}
      <section className="py-14 px-6 md:px-16 bg-white border-t border-b">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Lender Returns
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Earn attractive returns based on your risk tolerance.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              level: "Low Risk",
              desc: "Lend to borrowers with excellent credit scores (750+)",
              returns: "Expected Annual Returns",
            },
            {
              level: "Moderate Risk",
              desc: "Lend to borrowers with good credit scores (680–750)",
              returns: "Expected Annual Returns",
            },
            {
              level: "High Risk",
              desc: "Lend to borrowers with fair credit scores (600–680)",
              returns: "Expected Annual Returns",
            },
          ].map((tier, i) => (
            <div
              key={i}
              className="bg-gray-50 border rounded-2xl p-6 text-center hover:shadow-md transition"
            >
              <h3 className="text-teal-600 font-semibold text-lg mb-2">
                {tier.level}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{tier.returns}</p>
              <p className="text-sm text-gray-500 mb-6">{tier.desc}</p>
              <Link
                to="/lenderdash"
                className="block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-lg transition"
              >
                Start Lending
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 border border-gray-200 rounded-xl mt-10 p-5 flex items-start gap-3">
          <FaInfoCircle className="text-teal-600 mt-1 text-lg" />
          <p className="text-sm text-gray-600">
            Returns are estimates based on historical data. Actual returns may vary. Past performance does not guarantee future results. Lending carries risk of borrower default. Diversify your investments to minimize risk.
          </p>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-14 px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Fee Structure
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white border rounded-xl overflow-hidden">
            <thead className="bg-teal-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Tenure</th>
                <th className="py-3 px-4 text-left">Loan Amount</th>
                <th className="py-3 px-4 text-left">Interest Rate</th>
                <th className="py-3 px-4 text-left">Origination Fee</th>
                <th className="py-3 px-4 text-left">Origination Fee Amount</th>
                <th className="py-3 px-4 text-left">Amount Deposited</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[
                ["24", "$534", "9%", "9%", "$534", "$345"],
                ["75", "$7,832", "16%", "9%", "$7,832", "$493"],
                ["32", "$832", "12%", "9%", "$832", "$493"],
                ["45", "$345", "24%", "9%", "$345", "$493"],
                ["56", "$789", "29%", "9%", "$789", "$493"],
              ].map((row, i) => (
                <tr key={i} className="border-t hover:bg-gray-50">
                  {row.map((cell, idx) => (
                    <td key={idx} className="py-3 px-4">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-teal-600 text-white text-center py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Ready to Start Earning?
        </h2>
        <p className="text-gray-100 mb-6 max-w-xl mx-auto">
          Join thousands of lenders who are earning attractive returns while helping others achieve their financial goals.
        </p>
        <Link
          to="/signup"
          className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Create Lender Account <FaArrowRight />
        </Link>
      </section>
    </div>
  );
};

export default Rate;
