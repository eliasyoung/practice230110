import { defineStore } from "pinia";
import { ref } from "vue";
import { getUserRouteList } from "@/services";
import { useUser } from "@/store/user";
import { IRoute } from "@/models";
import { formatRouteTree } from "@/utils";

export const useRoutes = defineStore("routes", () => {
  const routesList = ref<IRoute[]>();

  async function getRoutesList() {
    const user = useUser();
    if (user.isAuth && user.id) {
      const routeList = await getUserRouteList(user.id);
      routesList.value = formatRouteTree(routeList);
    }
  }

  return {
    routesList,
    getRoutesList,
  };
});
