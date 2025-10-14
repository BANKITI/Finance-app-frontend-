import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-purple-700 text-white font-bold px-2 py-1 rounded">B</div>
          <span className="text-purple-700 font-bold text-lg">BANKITI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-purple-700">Home</Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-purple-700">How It Works</Link>
          <Link to="/borrow" className="text-gray-700 hover:text-purple-700">Borrow</Link>
          <Link to="/lend" className="text-gray-700 hover:text-purple-700">Lend</Link>
          <Link to="/rates" className="text-gray-700 hover:text-purple-700">Rates & Fees</Link>
          <Link to="/support" className="text-gray-700 hover:text-purple-700">Support</Link>

          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-purple-700">Login</Link>
            <Link
              to="/apply"
              className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-purple-700 focus:outline-none"
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Slide Down) */}
      <div
        className={`md:hidden bg-white border-t transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-start space-y-4 px-6 py-4">
          <Link onClick={toggleMenu} to="/" className="text-gray-700 hover:text-purple-700">Home</Link>
          <Link onClick={toggleMenu} to="/how-it-works" className="text-gray-700 hover:text-purple-700">How It Works</Link>
          <Link onClick={toggleMenu} to="/borrow" className="text-gray-700 hover:text-purple-700">Borrow</Link>
          <Link onClick={toggleMenu} to="/lend" className="text-gray-700 hover:text-purple-700">Lend</Link>
          <Link onClick={toggleMenu} to="/rates" className="text-gray-700 hover:text-purple-700">Rates & Fees</Link>
          <Link onClick={toggleMenu} to="/support" className="text-gray-700 hover:text-purple-700">Support</Link>
          <Link onClick={toggleMenu} to="/login" className="text-gray-700 hover:text-purple-700">Login</Link>

          <Link
            onClick={toggleMenu}
            to="/apply"
            className="bg-orange-600 text-white w-full text-center py-2 rounded hover:bg-orange-700 transition"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
