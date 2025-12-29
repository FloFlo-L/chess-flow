import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en";
import translationFR from "./locales/fr";

const resources = {
  fr: {
    translation: translationFR,
  },
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr", // language by default
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false, // React échappe déjà les valeurs
  },
});

export default i18n;
