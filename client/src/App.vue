<template>
  <h1>Hello!</h1>
  <RouterView />
</template>

<script setup lang="ts">
import { useUser } from "./store/user";
import { useRoutes } from "./store/routes";

const { initUser } = useUser();
const { getRoutesList } = useRoutes();
initUser();
getRoutesList();
</script>

<style scoped></style>
