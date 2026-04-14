<script setup lang="ts">
import { ref } from "vue";
import portfolioImg from "@/assets/projects/portafolio-v2.png";

const hoveredIndex = ref<number | null>(null);

const projects = [
  {
    number: "01",
    name: "Nexus",
    version: "v2.0",
    description:
      "Sistema web de comprobantes para estaciones de servicio. Migrado desde Visual Basic 6 a plataforma web moderna con generación masiva de documentos.",
    tags: ["Vue", "TypeScript", "Node.js", "SQL"],
    image: null,
    featured: true,
  },
  {
    number: "02",
    name: "SIAN",
    version: "v1.0",
    description:
      "Sistema de gestión para hamburguesería. Control de pedidos, cierre de caja y reportes diarios, semanales y mensuales. Actualmente en uso por el cliente.",
    tags: ["Visual Basic 6", "SQL Server"],
    image: null,
    featured: false,
  },
  {
    number: "03",
    name: "System App",
    version: "v1.0",
    description:
      "Generador de comprobantes personalizados multi-negocio. Desarrollado en entorno desktop, actualmente en uso por el cliente.",
    tags: ["Visual Basic 6", "SQL Server"],
    image: null,
    featured: false,
  },
  {
    number: "04",
    name: "Portfolio",
    version: "v2.0",
    description:
      "Portfolio personal desarrollado con tecnologías modernas. Diseño responsive con modo oscuro/claro.",
    tags: ["Vue", "TypeScript", "Tailwind"],
    image: portfolioImg,
    featured: false,
  },
];
</script>
{/* featured: true en Nexus — lo usamos para darle el tratamiento especial de
card grande. image: null en los que no tienen screenshot — los reemplazamos con
un placeholder elegante. image: portfolioImg — importamos la imagen real del
portfolio. */}

<template>
  <section class="relative bg-black py-32 px-6">
    <!-- Header -->
    <div
      data-reveal
      class="max-w-7xl mx-auto mb-16 flex items-end justify-between"
    >
      <div class="flex flex-col gap-4">
        <span class="text-xs tracking-widest uppercase text-violet-400">
          Lo que construimos
        </span>
        <h2
          class="text-5xl md:text-6xl font-black tracking-tighter text-white leading-none"
        >
          Proyectos
        </h2>
      </div>
    </div>

    <div data-reveal class="max-w-7xl mx-auto flex flex-col gap-4">
      <!-- CARD DESTACADA — Nexus -->
      <div
        class="relative overflow-hidden rounded-2xl border border-white/5 bg-white/2 p-10 cursor-pointer transition-all duration-500 group"
        :class="
          hoveredIndex === 0 ? 'border-violet-900/50 bg-violet-950/10' : ''
        "
        @mouseenter="hoveredIndex = 0"
        @mouseleave="hoveredIndex = null"
      >
        <!-- Fondo decorativo -->
        <span
          class="absolute right-10 top-1/2 -translate-y-1/2 text-[12vw] font-black text-white/2 tracking-tighter pointer-events-none select-none uppercase transition-all duration-500 group-hover:text-white/4"
        >
          {{ projects[0].name }}
        </span>

        <div
          class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8"
        >
          <!-- Info -->
          <div class="flex flex-col gap-6">
            <div class="flex items-center gap-4">
              <span class="text-sm font-mono text-violet-400">{{
                projects[0].number
              }}</span>
              <span
                class="text-xs tracking-widest uppercase text-white/20 border border-white/10 px-3 py-1 rounded-full"
              >
                {{ projects[0].version }}
              </span>
              <span
                class="text-xs tracking-widest uppercase text-violet-300 border border-violet-700/40 px-3 py-1 rounded-full"
              >
                Destacado
              </span>
            </div>

            <h3
              class="text-4xl md:text-5xl font-black tracking-tighter text-white"
            >
              {{ projects[0].name }}
            </h3>

            <p class="text-white/50 max-w-lg leading-relaxed">
              {{ projects[0].description }}
            </p>

            <!-- Tags -->
            <div class="flex items-center gap-2 flex-wrap">
              <span
                v-for="tag in projects[0].tags"
                :key="tag"
                class="text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-white/10 text-white/30 transition-all duration-300"
                :class="
                  hoveredIndex === 0
                    ? 'border-violet-700/40 text-violet-300'
                    : ''
                "
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Flecha -->
          <span
            class="text-4xl text-white/10 transition-all duration-300 shrink-0"
            :class="hoveredIndex === 0 ? 'text-violet-400 translate-x-2' : ''"
          >
            →
          </span>
        </div>
      </div>

      <!-- GRID 3 CARDS -->
      <div data-reveal class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="(project, index) in projects.slice(1)"
          :key="index"
          class="relative overflow-hidden rounded-2xl border border-white/5 bg-white/2 p-8 cursor-pointer transition-all duration-500 flex flex-col gap-6 group"
          :class="
            hoveredIndex === index + 1
              ? 'border-violet-900/50 bg-violet-950/10'
              : ''
          "
          @mouseenter="hoveredIndex = index + 1"
          @mouseleave="hoveredIndex = null"
        >
          <!-- Imagen si tiene -->
          <div
            class="rounded-xl overflow-hidden h-40 bg-white/3 border border-white/5"
          >
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.name"
              loading="lazy"
              class="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
            />
            <!-- Placeholder si no tiene imagen -->
            <div v-else class="w-full h-full flex items-center justify-center">
              <span
                class="text-4xl font-black tracking-tighter text-white/5 uppercase"
              >
                {{ project.name }}
              </span>
            </div>
          </div>

          <!-- Info -->
          <div class="flex flex-col gap-3 flex-1">
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono text-violet-400">{{
                project.number
              }}</span>
              <span
                class="text-xs tracking-widest uppercase text-white/20 border border-white/10 px-2 py-0.5 rounded-full"
              >
                {{ project.version }}
              </span>
            </div>

            <h3 class="text-xl font-bold tracking-tight text-white">
              {{ project.name }}
            </h3>

            <p class="text-sm text-white/40 leading-relaxed flex-1">
              {{ project.description }}
            </p>

            <!-- Tags -->
            <div
              class="flex items-center gap-2 flex-wrap pt-2 border-t border-white/5"
            >
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-xs tracking-widest uppercase px-2 py-0.5 rounded-full border border-white/10 text-white/30 transition-all duration-300"
                :class="
                  hoveredIndex === index + 1
                    ? 'border-violet-700/40 text-violet-300'
                    : ''
                "
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
