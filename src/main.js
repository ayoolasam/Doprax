import "maz-ui/styles";
import "./assets/main.css";
import router from "./router/router";
import { createPinia } from "pinia";
import { createApp } from "vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { installToaster } from "maz-ui";
import App from "./App.vue";

const toasterOptions = {
  position: "top-right",
  timeout: 10_000,
  persistent: false,
};

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);

app.use(installToaster, toasterOptions);
app.use(pinia);
app.use(router);
app.mount("#app");
