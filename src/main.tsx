import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./context/auth.tsx";
import LanguageContextProvider from "./context/language.tsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageContextProvider>
      <AuthContextProvider>
        <ToastContainer />
        <App />
      </AuthContextProvider>
    </LanguageContextProvider>
  </StrictMode>
);
