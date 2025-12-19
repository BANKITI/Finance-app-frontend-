import React from "react";
import { Link } from "react-router-dom";

const AccountOverview: React.FC = () => {
  // TEMP DATA (will come from backend later)
  const user = {
    name: "Ankomah Daniel",
    email: "ankomahdaniel995@gmail.com",
    nationalId: "567809834",
    phone: null,
    role: null,
    status: "Active",
    transactions: 0,
    memberSince: "2025",
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user.name.split(" ")[0]}!
          </h1>
          <p className="text-gray-500 mt-1">
            Here's an overview of your account
          </p>
        </div>

        {/* Account Details */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Account Details
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Your personal information and account status
          </p>

          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-gray-500">Full Name</p>
              <p className="font-medium">{user.name}</p>
            </div>

            <div>
              <p className="text-gray-500">Email</p>
              <p className="font-medium">{user.email}</p>
            </div>

            <div>
              <p className="text-gray-500">National ID</p>
              <p className="font-medium">{user.nationalId}</p>
            </div>

            <div>
              <p className="text-gray-500">Phone Number</p>
              <p className="font-medium">
                {user.phone ?? "Not provided"}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Account Role</p>
              <span className="inline-block mt-1 px-3 py-1 rounded-full text-xs bg-gray-100">
                {user.role ?? "Not set"}
              </span>
            </div>
          </div>

          {/* Alert */}
          {!user.role && (
            <div className="mt-6 bg-green-50 border border-green-200 text-green-800 text-sm p-4 rounded-xl">
              Complete your profile by adding your phone number and selecting
              your role (lender or borrower).{" "}
              <Link
                to="/profile"
                className="font-semibold underline ml-1"
              >
                Update profile
              </Link>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500 text-sm">Account Status</p>
            <p className="text-xl font-bold mt-2">{user.status}</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500 text-sm">Total Transactions</p>
            <p className="text-xl font-bold mt-2">
              {user.transactions}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500 text-sm">Member Since</p>
            <p className="text-xl font-bold mt-2">
              {user.memberSince}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AccountOverview;
