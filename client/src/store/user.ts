import { IRoute } from "@/models";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUser = defineStore("user", () => {
  const isAuth = ref<boolean>();
  const id = ref<number>();

  function initUser() {
    isAuth.value = true;
    id.value = 3;
  }

  return {
    isAuth,
    id,
    initUser,
  };
});
