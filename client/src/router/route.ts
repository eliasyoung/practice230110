import { IRoute } from "@/models";
import { Router, RouteRecordRaw } from "vue-router";

// vite 动态导入
const modules = import.meta.glob("../views/*.vue");

function generateRouter(routeTree: IRoute[]) {
  const newRoutes: RouteRecordRaw[] = routeTree.map((route) => {
    const _route: RouteRecordRaw = {
      path: route.path,
      name: route.name,
      //   component: () =>
      //     import(`/* webpackChunkName: "${route.name}" */@/views/${route.name}`),
      component: modules[`../views/${route.name}.vue`],
      children: [],
    };

    if (route.children) {
      _route.children = generateRouter(route.children);
    }
    return _route;
  });
  return newRoutes;
}

export function routerBeforeEach(router: Router, user: any, routes: any) {
  router.beforeEach(async (to, from, next) => {
    if (!user.isAuth) {
      await routes.getRoutes();
      if (routes.getRoutesList) {
        const newRoutes = generateRouter(routes.getRoutesList);
        console.log(newRoutes);

        newRoutes.forEach((route) => {
          router.addRoute(route);
        });
        next({ path: to.path });
      } else {
        next();
      }
    } else next();
  });
}
