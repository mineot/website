import "@/styles/index.scss";
import "bootstrap";
import { createApp } from "vue";
import { i18n } from "@/core/i18n";
import App from "@/App.vue";

const vue = createApp(App);
vue.use(i18n);
vue.mount("#app");
