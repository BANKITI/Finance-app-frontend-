import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaTimes } from "react-icons/fa";

const PwaInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);

      // Delay showing install modal slightly
      setTimeout(() => setShow(true), 2000);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const installPwa = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    // const choice = await deferredPrompt.userChoice;

    // setDeferredPrompt(null);
    // setShow(false);
    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === "accepted") {
  console.log("User accepted the PWA install");
    } else {
    console.log("User dismissed the PWA install");
    }
      setDeferredPrompt(null);
    setShow(false);

   };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-50">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="bg-white shadow-xl rounded-2xl p-5 relative border border-blue-100"
      >
        {/* Close button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <FaTimes size={20} />
        </button>

        <div className="flex items-center gap-4">
          <img
            src="pwa-192x192.png"
            className="w-12 h-12 rounded-lg"
            alt="App icon"
          />

          <div>
            <h3 className="font-bold text-lg">Install BANKITI</h3>
            <p className="text-sm text-gray-500">
              Access your dashboard faster, offline & fullscreen.
            </p>
          </div>
        </div>

        <button
          onClick={installPwa}
          className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
        >
          <FaDownload />
          Install App
        </button>
      </motion.div>
    </div>
  );
};

export default PwaInstallPrompt;
