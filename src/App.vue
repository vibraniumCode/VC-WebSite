<script setup lang="ts">
import NavBar from "./components/layout/navbar.vue";
import FooterSection from "./components/layout/footerSection.vue";
import { RouterView } from "vue-router";
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>

<template>
  <SpeedInsights />
  <NavBar />
  <main class="pt-16">
    <RouterView />
  </main>
  <FooterSection />
</template>
