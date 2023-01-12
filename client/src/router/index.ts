import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const Home = () => import("@/views/Home.vue");
const NotFound = () => import("@/views/NotFound.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
