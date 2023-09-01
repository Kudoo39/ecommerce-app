import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./en.json";
import fiTranslation from "./fi.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    fi: { translation: fiTranslation },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
