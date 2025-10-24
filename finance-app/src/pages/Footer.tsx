import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationDot, FaPhone, FaEnvelope, FaArrowUp } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show scroll-to-top button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 relative">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-3">
            <div className="bg-teal-600 text-white font-bold text-xl w-8 h-8 flex items-center justify-center rounded-md mr-2">
              B
            </div>
            <h2 className="font-semibold text-lg text-teal-700">BANKITI</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Smart lending and borrowing made simple. Connecting borrowers and
            lenders with transparency and security.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-teal-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className="hover:text-teal-600 transition">
                How It Works
              </Link>
            </li>
            <li>
              <Link to="/borrow" className="hover:text-teal-600 transition">
                Borrow
              </Link>
            </li>
            <li>
              <Link to="/lend" className="hover:text-teal-600 transition">
                Lend
              </Link>
            </li>
            <li>
              <Link to="/rates" className="hover:text-teal-600 transition">
                Rates & Fees
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/support" className="hover:text-teal-600 transition">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-teal-600 transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-teal-600 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/policy" className="hover:text-teal-600 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/policy" className="hover:text-teal-600 transition">
                Terms of Service
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaLocationDot className="text-teal-600" />
              <span>Ghana, KNUST</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-teal-600" />
              <span>+233 *********</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-teal-600" />
              <span>support@bankiti.com</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-6">
        <p className="text-center text-sm text-gray-500 py-4">
          © {new Date().getFullYear()}{" "}
          <span className="text-teal-600 font-medium">BANKITI</span>. All rights
          reserved.
        </p>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            key="scrollButton"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition"
          >
            <FaArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
