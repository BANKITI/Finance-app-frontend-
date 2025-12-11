import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// CONTEXT PROVIDER
import { AuthProvider } from "./context/AuthContext";

// COMPONENTS
import Navbar from "./components/Navbar";
import MobileBottomNav from "./components/MobileBottomNav";  // <-- NEW

// PAGES
import Home from "./pages/Home";
import HowItWorks from "./pages/How";
import Borrow from "./pages/Borrow";
import Lend from "./pages/Lend";
import Rates from "./pages/Rate";
import Support from "./pages/Support";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Info from "./pages/Info";
import Submit from "./pages/Submit";
import Apply from "./pages/Apply";
import Account from "./pages/Account";
import Verification from "./pages/Verification";
import Application from "./pages/Application";
import Policy from "./pages/Policy";
import Borrowdash from "./pages/Borrowdash";
import Lenderdash from "./pages/Lenderdash";
import Cardpayment from "./pages/Cardpayment";
import Mobilepayment from "./pages/Mobilepayment";
import ID from "./pages/ID";
import Up from "./pages/Up";
import Load from "./pages/Load";
import ProtectedRoute from "./pages/ProtectedRoute";
import Logout from "./pages/Logout";

import Footer from "./pages/Footer";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />

        <div className="pt-20 pb-20"> 
          {/* Added bottom padding so content doesn't hide behind mobile navbar */}
          <Routes>

            {/* PUBLIC ROUTES */}
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/borrow" element={<Borrow />} />
            <Route path="/lend" element={<Lend />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/support" element={<Support />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/logout" element={<Logout />} />
            <Route path="/info" element={<Info />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/account" element={<Account />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/application" element={<Application />} />
            <Route path="/policy" element={<Policy />} />

            {/* PROTECTED DASHBOARDS */}
            <Route
              path="/borrowdash"
              element={
                <ProtectedRoute allowedRole="borrower">
                  <Borrowdash />
                </ProtectedRoute>
              }
            />

            <Route
              path="/lenderdash"
              element={
                <ProtectedRoute allowedRole="lender">
                  <Lenderdash />
                </ProtectedRoute>
              }
            />

            {/* PAYMENTS */}
            <Route path="/cardpayment" element={<Cardpayment />} />
            <Route path="/mobilepayment" element={<Mobilepayment />} />
            <Route path="/id" element={<ID />} />
            <Route path="/up" element={<Up />} />
            <Route path="/load" element={<Load />} />

          </Routes>
        </div>

        {/* MOBILE BOTTOM NAVBAR (NEW) */}
        <MobileBottomNav />

        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
