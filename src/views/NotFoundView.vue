<script setup lang="ts">
import { ref, onMounted } from "vue";

const loaded = ref(false);

onMounted(() => {
  setTimeout(() => {
    loaded.value = true;
  }, 100);
});
</script>

<template>
  <section
    class="relative bg-black min-h-screen flex items-center justify-center overflow-hidden px-6"
  >
    <!-- Fondo decorativo -->
    <span
      class="absolute text-[30vw] font-black tracking-tighter text-white/[0.02] uppercase leading-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
    >
      404
    </span>

    <!-- Contenido -->
    <div class="relative z-10 flex flex-col items-center text-center gap-8">
      <!-- Badge -->
      <div
        :class="[
          'inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-700/40 text-violet-300 text-xs tracking-widest uppercase transition-all duration-700',
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        ]"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
        Error 404
      </div>

      <!-- Título -->
      <h1
        :class="[
          'text-6xl md:text-8xl font-black tracking-tighter text-white leading-none transition-all duration-700 delay-150',
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        ]"
      >
        Página no<br />
        <span class="text-violet-400">encontrada.</span>
      </h1>

      <!-- Descripción -->
      <p
        :class="[
          'text-white/50 text-lg leading-relaxed max-w-md transition-all duration-700 delay-300',
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        ]"
      >
        La página que buscás no existe o fue movida. Volvé al inicio y seguí
        navegando.
      </p>

      <!-- Botones -->
      <div
        :class="[
          'flex items-center gap-4 transition-all duration-700 delay-500',
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        ]"
      >
        <RouterLink
          to="/"
          class="inline-flex items-center gap-2 px-6 py-3 bg-violet-700 hover:bg-violet-600 text-white text-sm tracking-widest uppercase rounded-full transition-all duration-300"
        >
          Volver al inicio →
        </RouterLink>
        <RouterLink
          to="/contact"
          class="inline-flex items-center gap-2 px-6 py-3 border border-violet-700/50 text-violet-300 hover:bg-violet-700/20 text-sm tracking-widest uppercase rounded-full transition-all duration-300"
        >
          Contactanos
        </RouterLink>
      </div>
    </div>
  </section>
</template>
  