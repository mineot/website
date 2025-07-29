import "./style.css";

import i18next from "i18next";
import enUS from "./locales/en-US.json";
import esAR from "./locales/es-AR.json";
import ptBR from "./locales/pt-BR.json";

i18next
  .init({
    lng: navigator.language,
    fallbackLng: "en-US",
    resources: {
      "pt-BR": { translation: ptBR },
      "en-US": { translation: enUS },
      "es-AR": { translation: esAR },
    },
  })
  .then(() => {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n") || "";
      el.textContent = i18next.t(key);
    });
  });
