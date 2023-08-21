import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

import en from "./_en.json";
import pt from "./_pt.json";

const availableLanguages = {
  ["en" as string]: "en",
  ["pt" as string]: "pt",
  ["en-us" as string]: "en",
  ["pt-br" as string]: "pt",
};

const currentLanguage = navigator.language.toLocaleLowerCase();

i18n.use(initReactI18next).init({
  resources: {
    en,
    pt,
  },
  lng: availableLanguages[currentLanguage],
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export { useTranslation };
