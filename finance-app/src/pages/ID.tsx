import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaIdCard, FaCamera } from "react-icons/fa";

const ID: React.FC = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const cameraInputRef = useRef<HTMLInputElement | null>(null);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Go to Back Page of ID
  const handleGoToBack = () => {
    navigate("/up");
  };

  // Open phone gallery (Upload photo)
  const handleUploadPhoto = () => {
    fileInputRef.current?.click();
  };

  // Open camera (Take a photo)
  const handleTakePhoto = () => {
    cameraInputRef.current?.click();
  };

  // Handle file selection (both camera & gallery)
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-3xl p-6 sm:p-10 text-center w-full max-w-md border border-gray-100">
        {/* Top Navigation Button */}
        <div className="flex justify-start mb-4">
          <button
            onClick={handleGoToBack}
            className="text-sm font-medium text-blue-600 hover:text-blue-700 transition"
          >
            ← Back Page of ID
          </button>
        </div>

        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Front Page Of ID
        </h1>

        {/* Upload Area */}
        <div className="bg-gray-100 border border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center py-10 mb-6 overflow-hidden">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected ID"
              className="w-full h-56 object-cover rounded-lg"
            />
          ) : (
            <>
              <FaIdCard className="text-blue-500 text-6xl mb-3" />
              <p className="text-gray-500 text-sm">Upload or take a photo of your ID front page</p>
            </>
          )}
        </div>

        {/* Hidden Inputs for Camera & File */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        <input
          type="file"
          accept="image/*"
          capture="environment"
          ref={cameraInputRef}
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleTakePhoto}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-md"
          >
            <FaCamera className="text-lg" />
            Take a Photo
          </button>

          <button
            onClick={handleUploadPhoto}
            className="w-full bg-blue-100 hover:bg-blue-200 text-blue-600 font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Upload a Photo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ID;
