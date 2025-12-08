import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
 // Import your new AuthContext

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRole: "borrower" | "lender";
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  allowedRole,
}) => {
  const { isAuthenticated, userRole } = useAuth();
  const location = useLocation();

  // --- 1. User NOT logged in ---
  if (!isAuthenticated || !userRole) {
    // Send user to login and remember the page they wanted
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // --- 2. User logged in but role is wrong ---
  if (userRole !== allowedRole) {
    return <Navigate to={userRole === "borrower" ? "/borrowdash" : "/lenderdash"} replace />;
  }

  // --- 3. User is allowed ---
  return <>{children}</>;
};

export default ProtectedRoute;
