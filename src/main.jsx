import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
import LanguageSelector from "./Language";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <LanguageSelector />
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
