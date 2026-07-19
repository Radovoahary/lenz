import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { AuthProvider } from "./contexts/AuthProvider";

import "./index.css";

// Point d'entrée de l'application
createRoot(document.getElementById("root")!).render(
  <StrictMode>

    {/* Active la navigation React */}
    <BrowserRouter>

      {/* Rend l'authentification disponible partout */}
      <AuthProvider>

        <App />

      </AuthProvider>

    </BrowserRouter>

  </StrictMode>
);