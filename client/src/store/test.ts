import { defineStore } from "pinia";
import { ref } from "vue";

export const useTest = defineStore("test", () => {
  const name = ref("Clearlove");
  function upgradeName() {
    name.value += "7";
  }

  return {
    name,
    upgradeName,
  };
});
