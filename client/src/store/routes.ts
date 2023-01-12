import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { getUserRouteList } from "@/services";
import { useUser } from "@/store/user";
import { IRoute } from "@/models";
import { formatRouteTree } from "@/utils";

export const useRoutes = defineStore("routes", () => {
  const routesList = ref<IRoute[]>();

  async function getRoutes() {
    const user = useUser();
    if (user.id) {
      const routeList = await getUserRouteList(user.id);
      routesList.value = formatRouteTree(routeList);
      user.setAuth(true);
    }
  }

  const getRoutesList = computed(() => {
    return routesList.value;
  });

  return {
    routesList,
    getRoutesList,
    getRoutes,
  };
});
