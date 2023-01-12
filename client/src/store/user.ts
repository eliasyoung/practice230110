import { IRoute } from "@/models";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUser = defineStore("user", () => {
  const isAuth = ref<boolean>(false);
  const id = ref<number>(3);

  function setAuth(auth: boolean) {
    isAuth.value = auth;
  }

  function setId(_id: number) {
    id.value = _id;
  }

  return {
    isAuth,
    id,
    setAuth,
    setId,
  };
});
