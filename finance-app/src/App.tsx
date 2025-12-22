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
import AccountOverview from "./pages/AccountOverview";
import UpdateProfile from "./pages/UpdateProfile";
import Info from "./pages/Info";
import Submit from "./pages/Submit";
import Apply from "./pages/Apply";
import Account from "./pages/Account";
import Verification from "./pages/Verification";
import Application from "./pages/Application";
import Policy from "./pages/Policy";
import LenderDashboard from "./pages/LenderDashboard";
import Cardpayment from "./pages/Cardpayment";
import Mobilepayment from "./pages/Mobilepayment";


import Money from "./pages/Money";
import ProtectedRoute from "./pages/ProtectedRoute";


import Footer from "./pages/Footer";
import BorrowerDashboard from "./pages/BorrowerDashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />

        <div className="pt-20 pb-20"> 
          {/* Added bottom padding so content doesn't hide behind mobile navbar */}
          <Routes>

            {/* PUBLIC ROUTES */}
            <Route path="/" element={<HowItWorks />} />
            <Route path="/home" element={<Home />} />
            
            <Route path="/borrow" element={<Borrow />} />
            <Route path="/lend" element={<Lend />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/support" element={<Support />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<UpdateProfile />} />
            <Route path="/dashboard/lender" element={<LenderDashboard />} />
            {/* <Route path="/accountoverview" element={<AccountOverview />} /> */}
            <Route path="/money" element={<Money/>} />
            <Route path="/info" element={<Info />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/verify" element={<Account />} />
            <Route path="/verification" element={<Verification />} />

            <Route path="/application" element={<Application />} />
            <Route path="/policy" element={<Policy />} />
            
             <Route path="/dashboard/borrower" element={<BorrowerDashboard/>} />
            
                 <Route
                      path="/accountoverview"
                      element={
                        <ProtectedRoute >
                          <AccountOverview />
                        </ProtectedRoute>
                      }
          />

          
            
            
          

            {/* PAYMENTS */}
            <Route path="/cardpayment" element={<Cardpayment />} />
            <Route path="/mobilepayment" element={<Mobilepayment />} />
           
            
           

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
