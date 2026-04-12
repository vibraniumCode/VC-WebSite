<script setup lang="ts">
import AboutSection from "@/components/sections/AboutSection.vue";

const timeline = [
  {
    year: "2018",
    title: "Primeros pasos",
    description:
      "Comienzo en el desarrollo con Visual Basic 6. Primeros sistemas de gestión para clientes reales.",
  },
  {
    year: "2020",
    title: "Expansión tecnológica",
    description:
      "Adopción de tecnologías web modernas. HTML, CSS, JavaScript y primeros proyectos frontend.",
  },
  {
    year: "2022",
    title: "Stack moderno",
    description:
      "Vue, TypeScript, Node.js y Tailwind. Desarrollo de aplicaciones web completas.",
  },
  {
    year: "2024",
    title: "VibraniumCode",
    description:
      "Nace VibraniumCode. Soluciones digitales profesionales para empresas y emprendedores.",
  },
];
</script>

<template>
  <!-- Hero -->
  <section class="bg-black pt-40 pb-16 px-6">
    <div class="max-w-7xl mx-auto flex flex-col gap-4">
      <span class="text-xs tracking-widest uppercase text-violet-400">
        Nosotros
      </span>
      <h1
        class="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none"
      >
        Quiénes<br />somos.
      </h1>
      <p class="text-white/40 text-lg max-w-lg leading-relaxed">
        Una empresa de desarrollo de software enfocada en soluciones digitales
        reales.
      </p>
    </div>
  </section>

  <div class="border-t border-white/5" />

  <!-- Sección sobre mí reutilizada -->
  <AboutSection />

  <div class="border-t border-white/5" />

  <!-- Timeline -->
  <section class="bg-black py-32 px-6">
    <div class="max-w-7xl mx-auto flex flex-col gap-16">
      <!-- Header -->
      <div class="flex flex-col gap-4">
        <span class="text-xs tracking-widest uppercase text-violet-400">
          Trayectoria
        </span>
        <h2
          class="text-5xl md:text-6xl font-black tracking-tighter text-white leading-none"
        >
          El camino.
        </h2>
      </div>

      <!-- Items -->
      <div class="flex flex-col">
        <div
          v-for="(item, index) in timeline"
          :key="index"
          class="flex flex-col md:flex-row gap-6 md:gap-16 py-8 border-t border-white/5 group"
        >
          <!-- Año -->
          <span class="text-sm font-mono text-violet-400 md:w-24 shrink-0">
            {{ item.year }}
          </span>

          <!-- Contenido -->
          <div class="flex flex-col gap-2">
            <h3 class="text-xl font-bold text-white tracking-tight">
              {{ item.title }}
            </h3>
            <p class="text-white/40 leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>

        <div class="border-t border-white/5" />
      </div>
    </div>
  </section>
</template>
