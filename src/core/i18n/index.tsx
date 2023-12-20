import { initReactI18next } from "react-i18next";
import { I18NKeys } from "./keys";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import en from "./en";
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

const loadAdditionalResource = async () => {
  try {
    const resEN = await fetch("/doc/en.json");
    const resPT = await fetch("/doc/pt.json");
    const en = await resEN.json();
    const pt = await resPT.json();
    i18n.addResourceBundle("en", "document", en, true, true);
    i18n.addResourceBundle("pt", "document", pt, true, true);
    i18n.addResourceBundle("en-US", "document", en, true, true);
    i18n.addResourceBundle("pt-BR", "document", pt, true, true);
  } catch (error) {
    console.error("Error load document:", error);
  }
};

export { I18NKeys, loadAdditionalResource };
