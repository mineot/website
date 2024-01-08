import { createI18n } from "vue-i18n";
import { detectLanguage } from "./_detectLanguage";
import { en } from "./_en";
import { pt } from "./_pt";

const i18n = createI18n({
  locale: detectLanguage(),
  fallbackLocale: "en",
  messages: {
    en,
    pt,
    "en-US": en,
    "pt-BR": pt,
  },
});

export { i18n };
