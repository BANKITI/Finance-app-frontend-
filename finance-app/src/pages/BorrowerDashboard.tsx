import React, { useState } from "react";

/* ---------- TYPES ---------- */

type Loan = {
  id: string;
  amount: number;
  interest: number;
  duration: number;
  createdAt: string;
};

type Application = {
  id: string;
  loanId: string;
  amount: number;
  status: "pending" | "approved";
  appliedAt: string;
};

/* ---------- MAIN COMPONENT ---------- */

const BorrowerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"available" | "applications">(
    "available"
  );

  const [availableLoans, setAvailableLoans] = useState<Loan[]>([
    {
      id: "1",
      amount: 200,
      interest: 3,
      duration: 4,
      createdAt: new Date().toISOString(),
    },
  ]);

  const [applications, setApplications] = useState<Application[]>([]);

  const applyForLoan = (loan: Loan) => {
    setApplications((prev) => [
      {
        id: crypto.randomUUID(),
        loanId: loan.id,
        amount: loan.amount,
        status: "pending",
        appliedAt: new Date().toISOString(),
      },
      ...prev,
    ]);

    setAvailableLoans((prev) => prev.filter((l) => l.id !== loan.id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Borrower Dashboard</h1>
        <p className="text-gray-500">
          Browse available loans and track your applications
        </p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Stat title="Available Loans" value={availableLoans.length} />
        <Stat title="My Applications" value={applications.length} />
        <Stat
          title="Pending"
          value={applications.filter((a) => a.status === "pending").length}
        />
        <Stat
          title="Approved"
          value={applications.filter((a) => a.status === "approved").length}
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-4">
        <Tab
          active={activeTab === "available"}
          onClick={() => setActiveTab("available")}
          label="Available Loans"
        />
        <Tab
          active={activeTab === "applications"}
          onClick={() => setActiveTab("applications")}
          label="My Applications"
        />
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl shadow p-6 min-h-[260px]">
        {activeTab === "available" ? (
          availableLoans.length === 0 ? (
            <Empty text="No available loans at the moment" />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {availableLoans.map((loan) => (
                <AvailableLoanCard
                  key={loan.id}
                  loan={loan}
                  onApply={() => applyForLoan(loan)}
                />
              ))}
            </div>
          )
        ) : applications.length === 0 ? (
          <Empty text="You have not applied for any loans yet" />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((app) => (
              <ApplicationCard key={app.id} application={app} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BorrowerDashboard;

/* ---------- COMPONENTS ---------- */

const Stat = ({ title, value }: { title: string; value: number }) => (
  <div className="bg-white rounded-xl shadow p-4">
    <p className="text-gray-500 text-sm">{title}</p>
    <p className="text-xl font-bold mt-1">{value}</p>
  </div>
);

const Tab = ({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg transition ${
      active ? "bg-white shadow font-semibold" : "bg-gray-100"
    }`}
  >
    {label}
  </button>
);

const Empty = ({ text }: { text: string }) => (
  <div className="flex items-center justify-center h-full text-gray-400">
    <p className="font-semibold">{text}</p>
  </div>
);

const AvailableLoanCard = ({
  loan,
  onApply,
}: {
  loan: Loan;
  onApply: () => void;
}) => {
  const totalRepayment =
    loan.amount + loan.amount * (loan.interest / 100);

  return (
    <div className="bg-white rounded-xl border shadow-sm p-5 space-y-4">
      <h2 className="text-2xl font-bold">${loan.amount}</h2>

      <div className="grid grid-cols-2 gap-y-3 text-sm">
        <span className="text-gray-500">Interest Rate</span>
        <span className="text-right font-semibold">
          {loan.interest}%
        </span>

        <span className="text-gray-500">Duration</span>
        <span className="text-right font-semibold">
          {loan.duration} months
        </span>

        <span className="text-gray-500">Total Repayment</span>
        <span className="text-right font-semibold text-teal-600">
          ${totalRepayment.toFixed(0)}
        </span>
      </div>

      <button
        onClick={onApply}
        className="w-full mt-4 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition"
      >
        Apply for Loan
      </button>
    </div>
  );
};

const ApplicationCard = ({
  application,
}: {
  application: Application;
}) => (
  <div className="bg-white rounded-xl border shadow-sm p-5 space-y-3">
    <h2 className="text-xl font-bold">${application.amount}</h2>

    <span
      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
        application.status === "pending"
          ? "bg-yellow-100 text-yellow-700"
          : "bg-green-100 text-green-700"
      }`}
    >
      {application.status.toUpperCase()}
    </span>

    <p className="text-sm text-gray-500">
      Applied on{" "}
      {new Date(application.appliedAt).toLocaleDateString()}
    </p>
  </div>
);
