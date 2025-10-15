import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

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
            className="bg-purple-700 text-white font-bold px-2 py-1 rounded"
          >
            B
          </motion.div>
          <span className="text-purple-700 font-extrabold text-xl tracking-wide">BANKITI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.div
              key={link.path}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link.path}
                className={`relative text-gray-700 hover:text-purple-700 transition font-medium ${
                  location.pathname === link.path ? "text-purple-700" : ""
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-purple-700"
                  />
                )}
              </Link>
            </motion.div>
          ))}

          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to="/login"
                className="text-gray-700 hover:text-purple-700 transition font-medium"
              >
                Login
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to="/apply"
                className="bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-orange-700 transition shadow-md"
              >
                Apply Now
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-purple-700 focus:outline-none"
        >
          {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

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
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={toggleMenu}
                  className={`text-gray-700 hover:text-purple-700 transition ${
                    location.pathname === link.path ? "font-semibold text-purple-700" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                onClick={toggleMenu}
                to="/login"
                className="text-gray-700 hover:text-purple-700 transition"
              >
                Login
              </Link>
              <Link
                onClick={toggleMenu}
                to="/apply"
                className="bg-orange-600 text-white w-full text-center py-2 rounded-full hover:bg-orange-700 transition shadow-md"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
