import "@/assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { style } from "@/style";
import { router } from "@/router";
import { i18n } from "@/locale";

import document from "@/doc/getDocument";
import App from "@/App.vue";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(style);
app.use(i18n);
app.provide("document", document);
app.mount("#app");
