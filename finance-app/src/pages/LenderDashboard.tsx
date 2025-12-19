import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------- TYPES ---------- */

type Loan = {
  id: string;
  amount: number;
  interest: number;
  duration: number;
  createdAt: string;
  status: "available" | "taken";
};

type Application = {
  id: string;
  loanId: string;
  borrowerName: string;
  amount: number;
  appliedAt: string;
};

/* ---------- MAIN COMPONENT ---------- */

const LenderDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"loans" | "applications">("loans");
  const [showModal, setShowModal] = useState(false);

  const [loans, setLoans] = useState<Loan[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);

  // Form state
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [duration, setDuration] = useState("");

  /* ---------- Handle Create Loan ---------- */
  const handleCreateLoan = () => {
    if (!amount || !interest || !duration) return alert("All fields are required.");
    if (Number(amount) <= 0 || Number(interest) <= 0 || Number(duration) <= 0)
      return alert("Values must be positive numbers.");

    const newLoan: Loan = {
      id: crypto.randomUUID(),
      amount: Number(amount),
      interest: Number(interest),
      duration: Number(duration),
      createdAt: new Date().toISOString(),
      status: "available",
    };

    setLoans(prev => [newLoan, ...prev]);
    setAmount(""); setInterest(""); setDuration(""); setShowModal(false);
  };

  /* ---------- Simulate Borrower Apply ---------- */
  const simulateBorrowerApply = (loanId: string) => {
    // Find loan BEFORE updating state
    const loan = loans.find(l => l.id === loanId);
    if (!loan || loan.status === "taken") return;

    const newApplication: Application = {
      id: crypto.randomUUID(),
      loanId,
      borrowerName: "John Doe", // placeholder; replace with backend data later
      amount: loan.amount,
      appliedAt: new Date().toISOString(),
    };

    setLoans(prev =>
      prev.map(l => (l.id === loanId ? { ...l, status: "taken" } : l))
    );

    setApplications(prev => [newApplication, ...prev]);
  };

  /* ---------- Dynamic Average Interest ---------- */
  const avgInterest =
    loans.length > 0
      ? (loans.reduce((acc, l) => acc + l.interest, 0) / loans.length).toFixed(2)
      : "0";

  /* ---------- Modal Keyboard Close ---------- */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Lender Dashboard</h1>
          <p className="text-gray-500">Manage your loans and applications</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-teal-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-teal-700"
        >
          $ Create Loan
        </button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Stat title="Total Loans" value={loans.length} />
        <Stat title="Total Amount" value={`$${loans.reduce((a, b) => a + b.amount, 0)}`} />
        <Stat title="Applications" value={applications.length} />
        <Stat title="Avg Interest" value={`${avgInterest}%`} />
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-4">
        <Tab active={activeTab === "loans"} onClick={() => setActiveTab("loans")} label="My Loans" />
        <Tab active={activeTab === "applications"} onClick={() => setActiveTab("applications")} label="Applications" />
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl shadow p-6 min-h-[260px]">
        {activeTab === "loans" ? (
          loans.length === 0 ? <Empty text="No loans created yet" /> : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {loans.map(loan => (
                <LoanCard key={loan.id} loan={loan} onApply={() => simulateBorrowerApply(loan.id)} />
              ))}
            </div>
          )
        ) : applications.length === 0 ? (
          <Empty text="No applications yet" />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map(app => (
              <ApplicationCard key={app.id} application={app} />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl w-full max-w-md p-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Create New Loan</h2>
                <button onClick={() => setShowModal(false)}>✕</button>
              </div>
              <div className="space-y-4">
                <Input label="Loan Amount" value={amount} onChange={setAmount} />
                <Input label="Interest Rate (%)" value={interest} onChange={setInterest} />
                <Input label="Duration (months)" value={duration} onChange={setDuration} />
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-lg border">
                  Cancel
                </button>
                <button onClick={handleCreateLoan} className="px-4 py-2 rounded-lg bg-teal-600 text-white font-semibold">
                  Create Loan
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LenderDashboard;

/* ---------- SUBCOMPONENTS ---------- */

const LoanCard = ({ loan, onApply }: { loan: Loan; onApply: () => void }) => (
  <div className="bg-white rounded-xl border shadow p-5 flex flex-col justify-between hover:shadow-lg transition">
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-2xl font-bold">${loan.amount.toLocaleString()}</h2>
      <span
        className={`px-3 py-1 text-xs font-semibold rounded-full ${
          loan.status === "available" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        }`}
      >
        {loan.status.toUpperCase()}
      </span>
    </div>
    <hr className="my-3" />
    <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600">
      <span>Interest</span>
      <span className="text-right font-semibold">{loan.interest}%</span>
      <span>Duration</span>
      <span className="text-right font-semibold">{loan.duration} months</span>
      <span>Created</span>
      <span className="text-right font-semibold">{new Date(loan.createdAt).toLocaleDateString()}</span>
    </div>
    {loan.status === "available" ? (
      <button onClick={onApply} className="mt-4 w-full py-2 bg-teal-600 text-white rounded-lg text-sm font-semibold hover:bg-teal-700 transition">
        Simulate Borrower Application
      </button>
    ) : (
      <button disabled className="mt-4 w-full py-2 bg-gray-200 text-gray-500 rounded-lg text-sm font-semibold cursor-not-allowed">
        Loan Taken
      </button>
    )}
  </div>
);

const ApplicationCard = ({ application }: { application: Application }) => (
  <div className="bg-white rounded-xl border shadow p-5 flex flex-col gap-2 hover:shadow-lg transition">
    <p><span className="font-semibold">Borrower:</span> {application.borrowerName}</p>
    <p><span className="font-semibold">Amount:</span> ${application.amount}</p>
    <p><span className="font-semibold">Applied:</span> {new Date(application.appliedAt).toLocaleDateString()}</p>
  </div>
);

const Stat = ({ title, value }: { title: string; value: any }) => (
  <div className="bg-white rounded-xl shadow p-4">
    <p className="text-gray-500 text-sm">{title}</p>
    <p className="text-xl font-bold mt-1">{value}</p>
  </div>
);

const Tab = ({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) => (
  <button onClick={onClick} className={`px-4 py-2 rounded-lg transition ${active ? "bg-white shadow font-semibold" : "bg-gray-100"}`}>
    {label}
  </button>
);

const Empty = ({ text }: { text: string }) => (
  <div className="flex flex-col items-center justify-center h-full text-gray-400">
    <p className="font-semibold">{text}</p>
  </div>
);

const Input = ({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) => (
  <div>
    <label className="block text-sm font-semibold mb-1">{label}</label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-600 outline-none"
    />
  </div>
);
