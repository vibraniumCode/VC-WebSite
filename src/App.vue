<script setup lang="ts">
import NavBar from "./components/layout/navbar.vue";
import FooterSection from "./components/layout/footerSection.vue";
import { RouterView } from "vue-router";
import { useCursor } from "@/composables/useCursor";

useCursor();
</script>

<template>
  <NavBar />
  <main class="pt-16">
    <RouterView />
  </main>
  <FooterSection />
</template>
