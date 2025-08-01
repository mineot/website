import "./main.css";

import i18next from "i18next";
import enUS from "./locales/en-US.json";
import esAR from "./locales/es-AR.json";
import ptBR from "./locales/pt-BR.json";

import { AboutMe } from "./components/about-me";
import { Footer } from "./components/semantics/footer";
import { Header } from "./components/semantics/header";
import { MainContent } from "./components/semantics/main-content";
import { Persona } from "./components/persona";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";

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

const app = document.querySelector("#app") as HTMLElement;

Header(app);
MainContent(app, [Persona(), AboutMe(), Skills(), Projects()]);
Footer(app);
