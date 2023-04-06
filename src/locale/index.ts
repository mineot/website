import { createI18n } from "vue-i18n";

import en from "./en.json";
import pt from "./pt.json";

const messages = {
  en,
  pt,
  "en-us": en,
  "pt-br": pt,
};

const fallbackLocale = "en";
const locale = navigator.language.toLowerCase();

const i18n = createI18n({
  fallbackLocale,
  locale,
  messages,
});

export { i18n };