import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./en.json";
import fiTranslation from "./fi.json";

i18n
  .use(initReactI18next)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      fi: { translation: fiTranslation },
    },
    lng: "fi",
    fallbackLng: "fi",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
