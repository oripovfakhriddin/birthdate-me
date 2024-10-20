import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AuthContextProvider from "./context/auth.tsx";
import LanguageContextProvider from "./context/language.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </LanguageContextProvider>
  </StrictMode>
);
