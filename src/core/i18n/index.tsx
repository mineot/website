import { initReactI18next } from "react-i18next";
import en from "./en";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pt from "./pt";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en,
      pt,
      "pt-BR": pt,
      "en-US": en,
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
