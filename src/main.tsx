import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./context/auth.tsx";
import LanguageContextProvider from "./context/language.tsx";
import { ToastContainer } from "react-toastify";
import StoreProvider from "./redux/store/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageContextProvider>
      <AuthContextProvider>
        <StoreProvider>
          <ToastContainer />
          <App />
        </StoreProvider>
      </AuthContextProvider>
    </LanguageContextProvider>
  </StrictMode>
);
