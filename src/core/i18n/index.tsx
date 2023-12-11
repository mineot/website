import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import en from "./en";
import pt from "./pt";

const langs = {
  ["en" as string]: "en",
  ["en-US" as string]: "en",
  ["pt" as string]: "pt",
  ["pt-BR" as string]: "pt",
};

export function i18nInit() {
  i18n.use(initReactI18next).init({
    resources: { en, pt },
    lng: langs[navigator.language],
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
}
