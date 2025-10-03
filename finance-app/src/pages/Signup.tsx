import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FullName: "",
    EmailAddress: "",
    city: "",
    NationalIDCard: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // ✅ for confirm password
  const [error, setError] = useState("");

  const ghanaCities: string[] = [
    "Accra",
    "Kumasi",
    "Takoradi",
    "Tamale",
    "Cape Coast",
    "Sunyani",
    "Ho",
    "Bolgatanga",
    "Wa",
    "Koforidua",
    "Tema",
  ];

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { FullName, password, confirmPassword, city, NationalIDCard, EmailAddress } =
      formData;

    if (!FullName || !password || !confirmPassword || !city || !EmailAddress || !NationalIDCard) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // ✅ If validation passes, navigate
    navigate("/verification");
  };

  return (
    <div className="m-5 p-7 flex gap-15 justify-center items-center lg:ml-135">
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Become a member and enjoy exclusive premium advantages.</h2>
          <br />
          <hr className="border border-black" />
          <br />

          {/* Full Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="FullName"
              value={formData.FullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border focus:ring-blue-400 focus:outline-none text-black focus:ring-2"
            />
          </div>
          <br />

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              name="EmailAddress"
              value={formData.EmailAddress}
              onChange={handleChange}
              className="w-full px-4 py-2 border focus:ring-blue-400 focus:outline-none text-black focus:ring-2"
            />
          </div>
          <br />

          {/* City */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">City</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border focus:ring-blue-400 focus:outline-none text-black focus:ring-2"
            >
              <option value="">-- Select City --</option>
              {ghanaCities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <br />

          {/* National ID */}
          <div>
            <label className="block mb-1 font-medium">National ID Card</label>
            <input
              type="text"
              name="NationalIDCard"
              value={formData.NationalIDCard}
              onChange={handleChange}
              className="w-full px-4 py-2 border focus:ring-blue-400 focus:outline-none text-black focus:ring-2"
            />
          </div>
          <br />

          {/* Password */}
          <div className="mb-4 relative">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 pr-16 border focus:ring-blue-400 focus:outline-none text-black focus:ring-2"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-9 text-sm text-blue-600 font-semibold"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="mb-4 relative">
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 pr-16 border focus:ring-blue-400 focus:outline-none text-black focus:ring-2"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-9 text-sm text-blue-600 font-semibold"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
           
           <div className="Register">
          {/* Register button */}
          <button
            type="submit"
            className="w-full text-black  font-semibold py-2 px-4 rounded-xl"
          >
            Register
          </button>
          </div>
        </form>

        <p className="mt-4 flex">
          Already have an account?
          <div className="Login">
          <button
            onClick={() => navigate("/login", { replace: true })}
            className="ml-2  font-semibold text-[rgba(139,188,0,1)]"
          >
            Login
          </button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Signup;
