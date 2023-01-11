<template>
  <div>
    <h1>This is Home!</h1>
    <button @click="upgradeName">upgrade yourself! {{ test.name }}</button>
  </div>
</template>

<script setup lang="ts">
import { useTest } from "@/store/test";

const test = useTest();
const { upgradeName } = test;
</script>

<style scoped></style>
