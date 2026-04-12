<script setup lang="ts">
import { ref } from "vue";
import { useScrollReveal } from "@/composables/useScrollReveal";
useScrollReveal();
const hoveredTech = ref<string | null>(null);

const stack = [
  {
    category: "Frontend",
    techs: [
      "Vue",
      "React",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Sass",
      "Tailwind",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    techs: [
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "Django",
      "Reflex",
      ".NET",
    ],
  },
  {
    category: "Base de datos",
    techs: ["SQL Server", "MySQL", "MongoDB"],
  },
  {
    category: "Herramientas",
    techs: ["Git", "GitHub", "Vite", "Talend Open Studio"],
  },
];
</script>

<template>
  <section class="relative bg-black py-32 px-6">
    <!-- Header -->
    <div data-reveal class="max-w-7xl mx-auto mb-16 flex flex-col gap-4">
      <span class="text-xs tracking-widest uppercase text-violet-400">
        Con qué trabajamos
      </span>
      <h2
        class="text-5xl md:text-6xl font-black tracking-tighter text-white leading-none"
      >
        Stack
      </h2>
    </div>

    <!-- Categorías -->
    <div class="max-w-7xl mx-auto flex flex-col">
      <div
        data-reveal
        v-for="(group, index) in stack"
        :key="index"
        class="flex flex-col md:flex-row md:items-center gap-6 py-8 border-t border-white/5"
      >
        <!-- Nombre categoría -->
        <span
          class="text-xs tracking-widest uppercase text-white/20 md:w-40 shrink-0"
        >
          {{ group.category }}
        </span>

        <!-- Techs -->
        <div class="flex items-center flex-wrap gap-3">
          <span
            v-for="tech in group.techs"
            :key="tech"
            class="px-4 py-2 rounded-full border text-sm tracking-wide cursor-default transition-all duration-300"
            :class="
              hoveredTech === tech
                ? 'border-violet-600 bg-violet-950/30 text-violet-300'
                : 'border-white/10 bg-white/2 text-white/40'
            "
            @mouseenter="hoveredTech = tech"
            @mouseleave="hoveredTech = null"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Borde final -->
      <div class="border-t border-white/5" />
    </div>
  </section>
</template>
