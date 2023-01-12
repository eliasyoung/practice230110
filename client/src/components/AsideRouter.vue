<template>
  <ul v-for="route in routes" :key="route.id">
    <li>
      <RouterLink :to="route.link ? route.link : route.path">{{
        route.title
      }}</RouterLink>
    </li>
    <AsideRouter
      v-if="route.children && route.children.length > 0"
      :routes="route.children"
    />
  </ul>
</template>

<script setup lang="ts">
import { IRoute } from "@/models";

defineProps<{ routes: IRoute[] }>();
</script>

<style scoped>
ul {
  padding-left: 20px;
  margin: 10px 0;
}

ul > li {
  list-style: none;
}

a {
  text-decoration: none;
  color: rgb(69, 69, 69)
}
</style>
