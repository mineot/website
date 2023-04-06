import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const style = createVuetify({
  theme: {
    defaultTheme: "dark"
  },
  components,
  directives,
});

export { style };