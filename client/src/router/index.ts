import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("@/views/Home.vue");
const NotFound = () => import("@/views/NotFound.vue");

export default createRouter({
  history: createWebHistory(),
  routes: [
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
  ],
});
