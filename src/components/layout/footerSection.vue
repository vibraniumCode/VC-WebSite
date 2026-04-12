<script setup lang="ts">
import vcLogo from "@/assets/VC_icon.png";

const links = [
  { label: "Servicios", to: "/services" },
  { label: "Proyectos", to: "/projects" },
  { label: "Nosotros", to: "/about" },
  { label: "Contacto", to: "/contact" },
];

const social = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/marcos-antonio-lopez-561a69221/",
  },
  { label: "GitHub", url: "https://github.com/vibraniumCode" },
];

const year = new Date().getFullYear();
</script>

<template>
  <footer class="bg-black border-t border-white/5 px-6 py-16">
    <div class="max-w-7xl mx-auto flex flex-col gap-12">
      <!-- TOP — Logo + links -->
      <div
        class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
      >
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-3">
          <img :src="vcLogo" alt="VibraniumCode" class="h-8 w-auto" />
          <div class="flex flex-col">
            <span class="text-white font-bold tracking-tight text-sm"
              >VibraniumCode</span
            >
            <span class="text-white/30 text-xs"
              >Desarrollo de Software · Buenos Aires</span
            >
          </div>
        </RouterLink>

        <!-- Links -->
        <ul class="flex flex-wrap items-center gap-4 md:gap-8">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="text-xs tracking-widest uppercase text-white/30 hover:text-white transition-colors duration-300"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- BOTTOM — Copyright + social -->
      <div
        class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-white/5"
      >
        <!-- Copyright -->
        <span class="text-xs text-white/20 tracking-wide">
          © {{ year }} VibraniumCode. Todos los derechos reservados.
        </span>

        <!-- Social -->
        <div class="flex items-center gap-6">
          <a
            v-for="s in social"
            :key="s.label"
            :href="s.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs tracking-widest uppercase text-white/30 hover:text-violet-400 transition-colors duration-300"
          >
            {{ s.label }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
