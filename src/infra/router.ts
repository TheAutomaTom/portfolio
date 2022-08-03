import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Test from "../views/Test.vue";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/Test",
    component: Test,
  },
  {
    path: "/ThePerfectNumberInput",
    name: "ThePerfectNumberInput",
    component: () => import("../views/PerfectNumberInput.vue"),
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
