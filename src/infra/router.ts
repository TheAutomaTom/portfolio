import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/DemoNumbersInput",
    name: "DemoNumbersInput",
    component: () => import("../views/DemoNumbersInput.vue"),
  },
  {
    path: "/DemoInputFocus",
    name: "DemoInputFocus",
    component: () => import("../views/DemoInputFocus.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  //
  history:
    createWebHistory(/*import.meta.env.BASE_URL for deployment from subfolder*/),
  routes,
});

export default router;
