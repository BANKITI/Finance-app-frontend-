import React from "react";
import { Link } from "react-router-dom";
import {
  FaWallet,
  FaMoneyBillWave,
  FaChartLine,
  FaRegCheckCircle,
  // FaPlusCircle,
  FaArrowUp,
  // FaArrowDown,
} from "react-icons/fa";

const Lenderdash: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Lender Dashboard
          </h1>

          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-100 transition">
              Borrower
            </button>
            <button className="px-4 py-2 bg-teal-600 text-white text-sm font-semibold rounded-lg shadow hover:bg-teal-700 transition">
              Lender
            </button>
          </div>
        </header>

        {/* OVERVIEW CARDS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <OverviewCard
            title="Total Invested"
            value="$35,000"
            change="+10.2%"
            icon={<FaMoneyBillWave className="text-indigo-600 text-2xl" />}
            changeColor="text-green-600"
          />
          <OverviewCard
            title="Total Returns"
            value="$901"
            change="+11.3%"
            icon={<FaRegCheckCircle className="text-indigo-600 text-2xl" />}
            changeColor="text-green-600"
          />
          <OverviewCard
            title="Active Investments"
            value="4"
            icon={<FaWallet className="text-indigo-600 text-2xl" />}
          />
          <OverviewCard
            title="Avg. Return Rate"
            value="8.3%"
            change="+0.5%"
            icon={<FaChartLine className="text-indigo-600 text-2xl" />}
            changeColor="text-green-600"
          />
        </section>

        {/* CHART PLACEHOLDER */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border mb-10">
          <h3 className="font-semibold text-gray-800 mb-3">
            Portfolio Performance
          </h3>
          <div className="w-full h-56 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm">
            [Chart Placeholder – integrate Recharts or Chart.js here]
          </div>
        </section>

        {/* FUND SUMMARY */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Risk Distribution */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Risk Distribution
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Low Risk: 45%</li>
                <li>Medium Risk: 35%</li>
                <li>High Risk: 20%</li>
              </ul>
            </div>

            {/* Balance */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Available Balance
              </h4>
              <p className="text-2xl font-bold text-gray-900">$12,450</p>
              <Link
                to="/paystack-form"
                className="inline-block mt-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
              >
                + Add Funds
              </Link>
            </div>

            {/* Expected Return */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Next Expected Return
              </h4>
              <p className="text-2xl font-bold text-gray-900">$1,128</p>
              <p className="text-green-600 text-sm font-medium mt-1">
                <FaArrowUp className="inline mr-1" /> 8.5%
              </p>
            </div>
          </div>
        </section>

        {/* ACTIVE INVESTMENTS */}
        <section className="mb-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              Active Investments
            </h3>
            <Link
              to="/borrower-dashboard"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow"
            >
              <FaChartLine /> Browse Opportunities
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <InvestmentCard
              title="Business Expansion"
              invested="$15,000"
              progress={33}
              rate="8.5%"
              term="30 mo"
              returnAmt="$472"
            />
            <InvestmentCard
              title="Debt Consolidation"
              invested="$8,000"
              progress={40}
              rate="7.2%"
              term="24 mo"
              returnAmt="$358"
            />
            <InvestmentCard
              title="Home Improvement"
              invested="$12,000"
              progress={35}
              rate="8.1%"
              term="28 mo"
              returnAmt="$472"
            />
            <InvestmentCard
              title="Health Care"
              invested="$8,000"
              progress={50}
              rate="9.0%"
              term="24 mo"
              returnAmt="$388"
            />
          </div>
        </section>

        {/* NEW OPPORTUNITIES */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border mb-10">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
            New Investment Opportunities
          </h3>
          <NewOpportunity
            title="Small Business Loan"
            amount="$25,000"
            status="High ROI"
          />
          <NewOpportunity
            title="Corporate Expansion"
            amount="$18,000"
            status="Moderate Risk"
          />
        </section>
      </div>
    </div>
  );
};

/* ---- SUBCOMPONENTS ---- */

interface OverviewCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change?: string;
  changeColor?: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  value,
  icon,
  change,
  changeColor,
}) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
    <div className="flex justify-between items-center mb-2">{icon}</div>
    <p className="text-sm text-gray-500">{title}</p>
    <h2 className="text-2xl font-bold text-gray-900">{value}</h2>
    {change && (
      <p className={`text-sm mt-1 font-semibold ${changeColor}`}>{change}</p>
    )}
  </div>
);

interface InvestmentCardProps {
  title: string;
  invested: string;
  progress: number;
  rate: string;
  term: string;
  returnAmt: string;
}

const InvestmentCard: React.FC<InvestmentCardProps> = ({
  title,
  invested,
  progress,
  rate,
  term,
  returnAmt,
}) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
    <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
    <p className="text-gray-600 text-sm mb-2">Invested: {invested}</p>
    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
      <div
        className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
    <div className="grid grid-cols-2 text-sm text-gray-600 mb-4">
      <p>
        Rate: <span className="font-medium text-gray-800">{rate}</span>
      </p>
      <p>
        Term: <span className="font-medium text-gray-800">{term}</span>
      </p>
    </div>
    <div className="flex justify-between items-center text-sm mb-4">
      <span>Monthly Return:</span>
      <span className="font-semibold text-gray-800">{returnAmt}</span>
    </div>
    <div className="flex justify-between items-center">
      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-sm font-medium">
        View Details
      </button>
    </div>
  </div>
);

interface NewOpportunityProps {
  title: string;
  amount: string;
  status: string;
}

const NewOpportunity: React.FC<NewOpportunityProps> = ({
  title,
  amount,
  status,
}) => (
  <div className="flex justify-between items-center text-sm bg-gray-50 p-4 rounded-xl mb-3 hover:bg-gray-100 transition">
    <div>
      <p className="font-semibold text-gray-800">{title}</p>
      <p className="text-gray-500 text-xs">
        {amount} • {status}
      </p>
    </div>
    <Link
      to="/paystack-form"
      className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-lg transition"
    >
      Invest
    </Link>
  </div>
);

export default Lenderdash;
