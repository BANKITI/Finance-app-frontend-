import React, { useRef, useState } from "react";
import { FaCamera, FaIdCard } from "react-icons/fa";
import { Link } from "react-router-dom";

const Up: React.FC = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  // Handle image upload or capture
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => fileInputRef.current?.click();
  const handleCameraClick = () => cameraInputRef.current?.click();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Top navigation link */}
      <div className="w-full max-w-lg flex justify-start mb-4">
        <Link
          to="/iD"
          className="text-blue-600 font-semibold text-sm hover:underline"
        >
          ← Go to Front Page
        </Link>
      </div>

      {/* Main card */}
      <div className="bg-white shadow-lg rounded-3xl p-8 w-full max-w-lg text-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Back Page Of ID
        </h1>

        {/* Preview area */}
        <div className="w-full h-56 bg-gray-100 rounded-xl flex items-center justify-center mb-6 overflow-hidden">
          {preview ? (
            <img
              src={preview}
              alt="ID Back Preview"
              className="object-cover w-full h-full"
            />
          ) : (
            <FaIdCard className="text-blue-500 text-6xl" />
          )}
        </div>

        {/* Take a Photo */}
        <button
          onClick={handleCameraClick}
          className="w-full py-3 bg-blue-600 text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition duration-300"
        >
          <FaCamera className="text-lg" />
          <span>Take a Photo</span>
        </button>
        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={handleFileUpload}
        />

        {/* Upload a Photo */}
        <button
          onClick={handleUploadClick}
          className="w-full py-3 mt-3 bg-blue-100 text-blue-600 font-medium rounded-lg hover:bg-blue-200 transition duration-300"
        >
          Upload a Photo
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>
    </div>
  );
};

export default Up;
