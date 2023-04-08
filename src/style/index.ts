import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

let styleConf = await fetch("./conf/style.json");
let theme = await styleConf.json();

if (Object.keys(theme).length === 0) {
  styleConf = await fetch("./conf/style.default.json");
  theme = await styleConf.json();
}

const style = createVuetify({
  theme,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: { mdi },
  },
  components,
  directives,
});

export { style };
