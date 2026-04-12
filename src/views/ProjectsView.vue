<script setup lang="ts">
import { useScrollReveal } from "@/composables/useScrollReveal";
import portafolioImg from "@/assets/projects/portafolio-v2.png";

useScrollReveal();

const projects = [
  {
    number: "01",
    name: "Nexus",
    version: "v2.0",
    featured: true,
    description:
      "Sistema web de comprobantes para estaciones de servicio. Migrado desde Visual Basic 6 a plataforma web moderna con generación masiva de documentos.",
    challenge:
      "Sistema legacy en Visual Basic 6 que necesitaba escalar. El cliente requería generar múltiples comprobantes simultáneos desde cualquier dispositivo.",
    result:
      "Plataforma web moderna con generación masiva de comprobantes, accesible desde cualquier browser, con panel de administración completo.",
    tags: ["Vue", "TypeScript", "Node.js", "SQL"],
    image: null,
  },
  {
    number: "02",
    name: "SIAN",
    version: "v1.0",
    featured: false,
    description:
      "Sistema de gestión para hamburguesería. Control de pedidos, cierre de caja y reportes diarios, semanales y mensuales.",
    challenge: null,
    result: null,
    tags: ["Visual Basic 6", "SQL Server"],
    image: null,
  },
  {
    number: "03",
    name: "System App",
    version: "v1.0",
    featured: false,
    description:
      "Generador de comprobantes personalizados multi-negocio. Desarrollado en entorno desktop, actualmente en uso por el cliente.",
    challenge: null,
    result: null,
    tags: ["Visual Basic 6", "SQL Server"],
    image: null,
  },
  {
    number: "04",
    name: "Portfolio",
    version: "v2.0",
    featured: false,
    description:
      "Portfolio personal desarrollado con tecnologías modernas. Diseño responsive con modo oscuro/claro.",
    challenge: null,
    result: null,
    tags: ["Vue", "TypeScript", "Tailwind"],
    image: portafolioImg,
  },
];
</script>
<template>
  <!-- Hero -->
  <section class="bg-black pt-40 pb-16 px-6">
    <div class="max-w-7xl mx-auto flex flex-col gap-4">
      <span class="text-xs tracking-widest uppercase text-violet-400">
        Lo que construimos
      </span>
      <h1
        class="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none"
      >
        Proyectos.
      </h1>
      <p class="text-white/40 text-lg max-w-lg leading-relaxed">
        Cada proyecto es un problema real resuelto con tecnología y criterio.
      </p>
    </div>
  </section>

  <div class="border-t border-white/5" />

  <!-- Proyectos -->
  <section class="bg-black py-32 px-6">
    <div class="max-w-7xl mx-auto flex flex-col gap-8">
      <!-- NEXUS — Card destacada -->
      <div
        data-reveal
        class="relative overflow-hidden rounded-2xl border border-violet-900/30 bg-white/[0.02] p-10"
      >
        <!-- Fondo decorativo -->
        <span
          class="absolute right-10 top-1/2 -translate-y-1/2 text-[12vw] font-black text-white/[0.02] tracking-tighter pointer-events-none select-none uppercase"
        >
          {{ projects[0].name }}
        </span>

        <div class="relative z-10 flex flex-col gap-8">
          <!-- Header -->
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

          <!-- Título -->
          <h2
            class="text-4xl md:text-6xl font-black tracking-tighter text-white"
          >
            {{ projects[0].name }}
          </h2>

          <!-- Descripción -->
          <p class="text-white/50 text-lg leading-relaxed max-w-2xl">
            {{ projects[0].description }}
          </p>

          <!-- Desafío y resultado -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              class="flex flex-col gap-3 p-6 rounded-xl border border-white/5 bg-white/[0.02]"
            >
              <span class="text-xs tracking-widest uppercase text-violet-400">
                El desafío
              </span>
              <p class="text-white/50 text-sm leading-relaxed">
                {{ projects[0].challenge }}
              </p>
            </div>

            <div
              class="flex flex-col gap-3 p-6 rounded-xl border border-white/5 bg-white/[0.02]"
            >
              <span class="text-xs tracking-widest uppercase text-violet-400">
                El resultado
              </span>
              <p class="text-white/50 text-sm leading-relaxed">
                {{ projects[0].result }}
              </p>
            </div>
          </div>

          <!-- Tags -->
          <div class="flex items-center gap-2 flex-wrap">
            <span
              v-for="tag in projects[0].tags"
              :key="tag"
              class="text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-violet-700/40 text-violet-300"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- GRID 3 cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="(project, index) in projects.slice(1)"
          :key="index"
          data-reveal
          :data-delay="index * 100"
          class="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 flex flex-col gap-6"
        >
          <!-- Imagen si tiene -->
          <div
            class="rounded-xl overflow-hidden h-40 bg-white/[0.03] border border-white/5"
          >
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.name"
              class="w-full h-full object-cover object-top opacity-70 hover:opacity-100 transition-all duration-500 hover:scale-105"
            />
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
                class="text-xs tracking-widest uppercase px-2 py-0.5 rounded-full border border-white/10 text-white/30"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-black py-32 px-6">
    <div
      class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
    >
      <h2
        class="text-4xl md:text-5xl font-black tracking-tighter text-white leading-none"
      >
        ¿Tu proyecto<br />
        <span class="text-violet-400">es el próximo?</span>
      </h2>
      <RouterLink
        to="/contact"
        class="inline-flex items-center gap-2 px-8 py-4 bg-violet-700 hover:bg-violet-600 text-white text-sm tracking-widest uppercase rounded-full transition-all duration-300 whitespace-nowrap"
      >
        Hablemos →
      </RouterLink>
    </div>
  </section>
</template>
