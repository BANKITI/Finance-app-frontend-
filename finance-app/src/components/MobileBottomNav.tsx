import { Link, useLocation } from "react-router-dom";
import {
  HiHome,
  HiQuestionMarkCircle,
  HiCash,
  HiSupport
} from "react-icons/hi";

const MobileBottomNav = () => {
  const location = useLocation();

  const navItems = [
    { label: "How It Works", icon: <HiQuestionMarkCircle size={24} />, path: "/" },
    { label: "Home", icon: <HiHome size={24} />, path: "/home" },
    
    { label: "Rates & Fees", icon: <HiCash size={24} />, path: "/rates" },
    { label: "Support", icon: <HiSupport size={24} />, path: "/support" },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg border-t z-50 flex justify-around py-2">
      {navItems.map((item) => {
        const active = location.pathname === item.path;

        return (
          <Link
            key={item.path}
            to={item.path}
            className="flex flex-col items-center"
          >
            <div
              className={`${
                active ? "text-teal-600" : "text-gray-500"
              } transition`}
            >
              {item.icon}
            </div>
            <span
              className={`text-xs ${
                active ? "text-teal-700 font-semibold" : "text-gray-500"
              }`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default MobileBottomNav;
