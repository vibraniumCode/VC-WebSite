<script setup lang="ts">
import marcosImg from "@/assets/marcos.png";
import { useScrollReveal } from "@/composables/useScrollReveal";
useScrollReveal();

const info = [
  { label: "Ubicación", value: "Buenos Aires, Argentina" },
  { label: "Disponibilidad", value: "Disponible para proyectos" },
  { label: "Experiencia", value: "+7 años" },
  { label: "Modalidad", value: "Remoto / Presencial" },
];

// ← ¿Tenés esto?
const social = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/marcos-antonio-lopez-561a69221/",
    icon: "→",
  },
  {
    label: "GitHub",
    url: "https://github.com/vibraniumCode",
    icon: "→",
  },
];
</script>
<template>
  <section class="relative bg-black py-32 px-6">
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
    >
      <!-- COLUMNA IZQUIERDA — Texto -->
      <div class="flex flex-col gap-8">
        <!-- Badge -->
        <span
          data-reveal
          class="text-xs tracking-widest uppercase text-violet-400"
        >
          Quiénes somos
        </span>

        <!-- Título -->
        <h2
          data-reveal
          class="text-5xl md:text-6xl font-black tracking-tighter text-white leading-none"
        >
          Detrás de<br />
          VibraniumCode<br />
          <span class="text-violet-400">hay una persona</span><br />
          real.
        </h2>

        <!-- Descripción -->
        <p data-reveal class="text-white/50 text-lg leading-relaxed">
          Soy Marcos López, desarrollador de software de Buenos Aires. Trabajo
          de forma independiente con colaboradores puntuales según el proyecto —
          creando soluciones digitales a medida, desde sistemas de gestión hasta
          aplicaciones web modernas. Cada proyecto lo trato como si fuera el mío
          propio.
        </p>

        <!-- Info -->
        <div class="flex flex-col gap-3">
          <div
            data-reveal
            v-for="item in info"
            :key="item.label"
            class="flex items-center gap-4 py-3 border-b border-white/5"
          >
            <span
              class="text-xs tracking-widest uppercase text-white/20 w-32 shrink-0"
            >
              {{ item.label }}
            </span>
            <span class="text-sm text-white/70">
              {{ item.value }}
            </span>
          </div>
        </div>

        <!-- Social links -->
        <div data-reveal class="flex items-center gap-4 pt-2">
          <a
            v-for="s in social"
            :key="s.label"
            :href="s.url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-5 py-2 border border-white/10 text-white/40 hover:border-violet-700/60 hover:text-violet-300 text-sm tracking-widest uppercase rounded-full transition-all duration-300"
          >
            {{ s.label }} {{ s.icon }}
          </a>
        </div>
      </div>

      <!-- COLUMNA DERECHA — Foto -->
      <div data-reveal class="flex items-center justify-center">
        <!-- Contenedor foto con efecto -->
        <div class="relative">
          <!-- Glow de fondo -->
          <div
            class="absolute inset-0 bg-violet-700/20 rounded-3xl blur-3xl scale-95"
          />

          <!-- Foto -->
          <div
            class="relative rounded-3xl overflow-hidden border border-white/10"
          >
            <img
              :src="marcosImg"
              alt="Marcos López — VibraniumCode"
              loading="lazy"
              class="w-full max-w-sm object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />

            <!-- Overlay sutil -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            />

            <!-- Badge sobre la foto -->
            <div
              class="absolute bottom-4 left-4 right-4 flex items-center justify-between"
            >
              <div class="flex flex-col">
                <span class="text-white font-bold text-sm">Marcos López</span>
                <span class="text-white/50 text-xs"
                  >Founder · VibraniumCode</span
                >
              </div>
              <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
