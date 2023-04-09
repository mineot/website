import { createRouter, createWebHistory } from "vue-router";
import { useInfoStore } from "@/stores/info";
import HomeView from "@/views/HomeView.vue";

const RoutePath = {
  PROFILE: "/",
};

const RoutePathTitle = {
  [RoutePath.PROFILE]: "profile",
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RoutePath.PROFILE,
      name: RoutePathTitle[RoutePath.PROFILE],
      component: HomeView,
    },
  ],
});

router.beforeEach((to: any) => {
  const info = useInfoStore();
  info.changeTitle(RoutePathTitle[to.path]);
  return true;
});

export { router };
