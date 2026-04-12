<script setup lang="ts">
import NavBar from "./components/layout/navbar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <NavBar />
  <main class="pt-16">
    <RouterView />
  </main>
</template>
