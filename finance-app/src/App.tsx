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

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20"> {/* space for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/borrow" element={<Borrow />} />
          <Route path="/lend" element={<Lend />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="/support" element={<Support />} />
          <Route path="/login" element={<Login />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
