import React, {  useState } from "react";
import { FaIdCard, FaUpload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Money: React.FC = () => {
  const navigate = useNavigate();

  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [backImage, setBackImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  

  // 📤 Handle image upload
  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    side: "front" | "back"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      if (side === "front") setFrontImage(reader.result as string);
      if (side === "back") setBackImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // ✅ Submit verification
  const handleSubmit = () => {
    if (!frontImage || !backImage) {
      setError("Please upload both front and back of your Ghana Card.");
      return;
    }

    setError("");
    setLoading(true);

    // ⏳ Simulate backend verification
    setTimeout(() => {
      localStorage.setItem("bankiti_id_verified", "true");
      navigate("/verify");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-lg max-w-md w-full p-8">

        {/* HEADER */}
        <div className="text-center mb-6">
          <FaIdCard className="mx-auto text-indigo-600 mb-2" size={36} />
          <h2 className="text-2xl font-extrabold">Verify Ghana Card</h2>
          <p className="text-sm text-gray-500">
            Upload clear images of front and back
          </p>
        </div>

        {/* PREVIEW */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Preview label="Front" image={frontImage} />
          <Preview label="Back" image={backImage} />
        </div>

        {/* UPLOAD FRONT */}
        <label className="block mb-4">
          <span className="text-sm font-semibold text-gray-700">
            Upload Front Side
          </span>
          <div className="mt-2 flex items-center gap-2">
            <FaUpload className="text-gray-400" />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, "front")}
              className="w-full text-sm"
            />
          </div>
        </label>

        {/* UPLOAD BACK */}
        <label className="block mb-4">
          <span className="text-sm font-semibold text-gray-700">
            Upload Back Side
          </span>
          <div className="mt-2 flex items-center gap-2">
            <FaUpload className="text-gray-400" />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, "back")}
              className="w-full text-sm"
            />
          </div>
        </label>

        {error && (
          <p className="text-sm text-red-600 mb-4">{error}</p>
        )}

        {/* SUBMIT */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Submit Verification"}
        </button>
      </div>
    </div>
  );
};

export default Money;

/* ---------------- PREVIEW COMPONENT ---------------- */
const Preview = ({
  label,
  image,
}: {
  label: string;
  image: string | null;
}) => (
  <div className="border rounded-xl p-2 text-center">
    <p className="text-xs font-semibold mb-1">{label}</p>
    {image ? (
      <img
        src={image}
        alt={label}
        className="rounded-lg h-24 w-full object-cover"
      />
    ) : (
      <div className="h-24 flex items-center justify-center text-gray-400 text-xs">
        No Image
      </div>
    )}
  </div>
);
