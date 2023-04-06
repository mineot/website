import "@/assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { style } from "@/style";
import { router } from "@/router";

import App from "@/App.vue";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(style);
app.mount("#app");
