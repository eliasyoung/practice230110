import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "@/router";
import "@/assets/main.css";
import App from "./App.vue";
import { routerBeforeEach } from "./router/route";
import { useUser } from "@/store/user";
import { useRoutes } from "@/store/routes";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

app.use(router);

app.mount("#app");

const user = useUser();
const routes = useRoutes();

routerBeforeEach(router, user, routes);
