import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { registerSW } from "virtual:pwa-register";
import { AuthProvider } from "./context/AuthContext"; // ✅ IMPORT AUTH CONTEXT

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>   {/* ✅ WRAP YOUR APP HERE */}
      <App />
    </AuthProvider>
  </StrictMode>
);

// PWA registration
registerSW({
  immediate: true,
});
