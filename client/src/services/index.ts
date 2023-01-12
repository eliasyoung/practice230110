import { http } from "@/utils";
import { ResType, IRoute } from "@/models";

function getUserRouteList(uid: number) {
  return http
    .post<ResType<IRoute[]>>("/user_router_list", { uid })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
}

export { getUserRouteList };
