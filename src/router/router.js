import {
  createRouter,
  createWebHistory,
} from "vue-router";
import HomeView from "../pages/index.vue";
import deployed from "@/pages/deployed.vue";
import cloudService from "@/pages/cloudService.vue";
import editServiceConfiguration from "@/pages/editServiceConfiguration.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/deployed", component: deployed },
  { path: "/cloudService", component: cloudService },
  { path: "/editServiceConfigurations", component: editServiceConfiguration },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
