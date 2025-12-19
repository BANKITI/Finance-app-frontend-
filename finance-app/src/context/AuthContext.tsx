import React, { createContext, useContext, useState } from "react";

type Role = "borrower" | "lender" | null;

interface AuthContextType {
  isAuthenticated: boolean;
  role: Role;
  login: (role: Role, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem("bankiti_token"))
  );
  const [role, setRole] = useState<Role>(
    (localStorage.getItem("bankiti_role") as Role) || null
  );

  const login = (userRole: Role, token: string) => {
    localStorage.setItem("bankiti_token", token);
    localStorage.setItem("bankiti_role", userRole || "");
    setIsAuthenticated(true);
    setRole(userRole);
  };

  const logout = () => {
    localStorage.removeItem("bankiti_token");
    localStorage.removeItem("bankiti_role");
    setIsAuthenticated(false);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
