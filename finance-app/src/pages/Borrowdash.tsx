import React from "react";
import { Link } from "react-router-dom";
import {
  FaMoneyBillWave,
  FaRegCheckCircle,
  FaWallet,
  FaChartLine,
  FaPlusCircle,
  FaCalendarAlt,
} from "react-icons/fa";

const Borrowdash: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Borrower Dashboard
          </h1>

          {/* NAV BUTTONS */}
          <div className="flex gap-3">
            <Link
              to="/borrowdash"
              className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg shadow hover:bg-indigo-700 transition-all duration-200"
            >
              Borrower
            </Link>

            <Link
              to="/lenderdash"
              className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-100 transition-all duration-200"
            >
              Lender
            </Link>
          </div>
        </header>

        {/* OVERVIEW CARDS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <OverviewCard
            title="Total Borrowed"
            value="$23,000"
            change="+12%"
            icon={<FaMoneyBillWave className="text-indigo-600 text-2xl" />}
            changeColor="text-green-600"
          />
          <OverviewCard
            title="Total Repaid"
            value="$8,200"
            change="+$3,830"
            icon={<FaRegCheckCircle className="text-indigo-600 text-2xl" />}
            changeColor="text-green-600"
          />
          <OverviewCard
            title="Active Loans"
            value="2"
            icon={<FaWallet className="text-indigo-600 text-2xl" />}
          />
          <OverviewCard
            title="Credit Score"
            value="742"
            change="+18 pts"
            icon={<FaChartLine className="text-indigo-600 text-2xl" />}
            changeColor="text-green-600"
          />
        </section>

        {/* CREDIT UTILIZATION */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border mb-10">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-800">Credit Utilization</h3>
            <span className="text-indigo-600 font-semibold">65%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
              style={{ width: "65%" }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <p>Used: $14,800</p>
            <p>Available: $35,200</p>
          </div>
        </section>

        {/* ACTIVE LOANS */}
        <section className="mb-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              Active Loans
            </h3>
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow"
            >
              <FaPlusCircle /> Apply For New Loan
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <LoanCard
              title="Business Expansion"
              amount="$15,000"
              progress={33}
              rate="8.5%"
              term="30 mo"
              payment="$472"
            />
            <LoanCard
              title="Debt Consolidation"
              amount="$8,000"
              progress={40}
              rate="7.2%"
              term="24 mo"
              payment="$358"
            />
          </div>
        </section>

        {/* UPCOMING PAYMENTS */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border mb-10">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FaCalendarAlt className="text-indigo-600" /> Upcoming Payments
          </h3>
          <div className="space-y-4">
            <PaymentRow
              title="Business Expansion"
              date="2025-11-15"
              amount="$358"
            />
            <PaymentRow
              title="Debt Consolidation"
              date="2025-11-20"
              amount="$472"
            />
          </div>
        </section>

        {/* LOAN APPLICATIONS */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FaWallet className="text-indigo-600" /> Loan Applications
          </h3>
          <ApplicationRow
            title="Home Renovation Loan"
            subtitle="$25,000 • Submitted 2 days ago"
            status="Under Review"
            statusColor="bg-yellow-100 text-yellow-800"
          />
          <ApplicationRow
            title="Auto Loan"
            subtitle="$13,000 • Submitted 5 days ago"
            status="Approved"
            statusColor="bg-green-100 text-green-800"
          />
        </section>
      </div>
    </div>
  );
};

/* --- SUBCOMPONENTS --- */

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

interface LoanCardProps {
  title: string;
  amount: string;
  progress: number;
  rate: string;
  term: string;
  payment: string;
}

const LoanCard: React.FC<LoanCardProps> = ({
  title,
  amount,
  progress,
  rate,
  term,
  payment,
}) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
    <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
    <p className="text-gray-600 text-sm mb-2">{amount}</p>
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
      <span>Monthly Payment:</span>
      <span className="font-semibold text-gray-800">{payment}</span>
    </div>
    <div className="flex justify-between items-center">
      {/* <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-sm font-medium">
        View Details
      </button> */}
      <Link
        to="/cardpayment"
        className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition"
      >
        Make Payment
      </Link>
    </div>
  </div>
);

interface PaymentRowProps {
  title: string;
  date: string;
  amount: string;
}

const PaymentRow: React.FC<PaymentRowProps> = ({ title, date, amount }) => (
  <div className="flex justify-between items-center text-sm bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition">
    <div>
      <p className="font-semibold text-gray-800">{title}</p>
      <p className="text-gray-500">{date}</p>
    </div>
    <div className="text-right">
      <p className="font-semibold text-gray-800">{amount}</p>
      <Link
        to="/cardpayment"
        className="text-indigo-600 hover:underline text-sm font-medium"
      >
        Pay Now
      </Link>
    </div>
  </div>
);

interface ApplicationRowProps {
  title: string;
  subtitle: string;
  status: string;
  statusColor: string;
}

const ApplicationRow: React.FC<ApplicationRowProps> = ({
  title,
  subtitle,
  status,
  statusColor,
}) => (
  <div className="flex justify-between items-center text-sm bg-gray-50 p-4 rounded-xl mb-3 hover:bg-gray-100 transition">
    <div>
      <p className="font-semibold text-gray-800">{title}</p>
      <p className="text-gray-500 text-xs">{subtitle}</p>
    </div>
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}>
      {status}
    </span>
  </div>
);

export default Borrowdash;
