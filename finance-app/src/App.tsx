import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import HowItWorks from "./pages/How";
import Borrow from "./pages/Borrow";
import Lend from "./pages/Lend";
import Rates from "./pages/Rate";
import Support from "./pages/Support";
import Login from "./pages/Login";
import Apply from "./pages/Apply";
import Footer from "./pages/Footer";
import Signup from "./pages/Signup";
import Info from "./pages/Info";
import Submit from "./pages/Submit";
import Account from "./pages/Account";
import Verification from "./pages/Verification";
import Application from "./pages/Application";
import Policy from "./pages/Policy";
import Borrowdash from "./pages/Borrowdash";
import Lenderdash from "./pages/Lenderdash";
import Cardpayment from "./pages/Cardpayment";
import Mobilepayment from "./pages/Mobilepayment";
import ID from "./pages/ID"
import Up from "./pages/Up";
import Load from "./pages/Load";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/borrow" element={<Borrow />} />
          <Route path="/lend" element={<Lend />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="/support" element={<Support />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/info" element={<Info/>}/>
          <Route path = "/submit" element={<Submit/>}/>
          <Route path="/apply" element={<Apply />} />
          <Route path="/account" element={<Account/>}/>
          <Route path="/verification" element={<Verification/>}/>
          <Route path="/application" element={<Application/>}/>
          <Route path="/policy" element={<Policy/>}/>
          <Route path="/borrowdash" element={<Borrowdash/>}/>
          <Route path="/lenderdash" element={<Lenderdash/>}/>
          <Route path="/cardpayment" element={<Cardpayment/>}/>
          <Route path="/mobilepayment"
          element={<Mobilepayment/>}/>
          <Route path="/iD" element={<ID/>}/>
          <Route path="/up" element={<Up/>}/>
          <Route path="/load" element={<Load/>}/>
          
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
