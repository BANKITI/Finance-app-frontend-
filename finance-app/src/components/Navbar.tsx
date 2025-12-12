import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext"; // <-- IMPORTANT

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth(); // <-- NEW

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Borrow", path: "/borrow" },
    { name: "Lend", path: "/lend" },
    { name: "Rates & Fees", path: "/rates" },
    { name: "Support", path: "/support" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
            className="bg-teal-600 text-white font-bold px-2 py-1 rounded"
          >
            B
          </motion.div>
          <span className="text-teal-700 font-extrabold text-xl tracking-wide">
            BANKITI
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.div key={link.path} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={link.path}
                className={`relative text-gray-700 hover:text-teal-700 transition font-medium ${
                  location.pathname === link.path ? "text-teal-700" : ""
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-teal-700"
                  />
                )}
              </Link>
            </motion.div>
          ))}

          {/* Login / Logout Button */}
          <motion.div whileHover={{ scale: 1.1 }}>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition shadow-md"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-orange-700 transition shadow-md"
              >
                Login
              </Link>
            )}
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-teal-700 focus:outline-none"
        >
          {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="md:hidden bg-white border-t shadow-sm"
    >
      <div className="flex flex-col space-y-4 px-6 py-4">

        {/* --- MOBILE LINKS: ONLY Borrow & Lend --- */}
        <Link
          to="/borrow"
          onClick={toggleMenu}
          className={`text-gray-700 hover:text-teal-700 transition ${
            location.pathname === "/borrow" ? "font-semibold text-teal-700" : ""
          }`}
        >
          Borrow
        </Link>

        <Link
          to="/lend"
          onClick={toggleMenu}
          className={`text-gray-700 hover:text-teal-700 transition ${
            location.pathname === "/lend" ? "font-semibold text-teal-700" : ""
          }`}
        >
          Lend
        </Link>

        {/* --- Login / Logout for Mobile --- */}
        {isAuthenticated ? (
          <button
            onClick={() => {
              handleLogout();
              toggleMenu();
            }}
            className="bg-red-600 text-white w-full text-center py-2 rounded-full hover:bg-red-700 transition shadow-md"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            onClick={toggleMenu}
            className="bg-orange-600 text-white w-full text-center py-2 rounded-full hover:bg-orange-700 transition shadow-md"
          >
            Login
          </Link>
        )}
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </nav>
  );
};

export default Navbar;
