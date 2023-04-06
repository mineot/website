import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const websiteTheme = {
  dark: true,
  colors: {
    background: "#000", // black
    surface: "#222", // light black
    primary: "#CDDC39", // lime
    secondary: "#BA68C8", // purple lighten-2
    error: "#E53935", // red darken-1
    info: "#2196F3", // blue
    success: "#009688", // teal
    warning: "#FF9800", // orange
  }
};

const style = createVuetify({
  theme: {
    defaultTheme: "websiteTheme",
    themes: {
      websiteTheme
    }
  },
  components,
  directives,
});

export { style };