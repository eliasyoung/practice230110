<template>
  <div class="aside-menu">
    <AsideRouter v-if="routes.getRoutesList" :routes="routes.getRoutesList" />
  </div>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { useRoutes } from "@/store/routes";
import AsideRouter from "./components/AsideRouter.vue";

const routes = useRoutes();
</script>

<style scoped>
.aside-menu {
  float: left;
  width: 200px;
  height: 100%;
  background-color: rgb(242, 242, 242);
  padding: 20px;
}

main {
  display: inline-block;
  background-color: white;
  padding: 20px;
}
</style>
