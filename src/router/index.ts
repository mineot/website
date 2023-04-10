import { createRouter, createWebHistory } from "vue-router";
import { useInfoStore } from "@/stores/info";
import ProfileView from "@/views/ProfileView.vue";

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
      component: ProfileView,
    },
  ],
});

router.beforeEach((to: any) => {
  const info = useInfoStore();
  info.changeTitle(RoutePathTitle[to.path]);
  return true;
});

export { router };
