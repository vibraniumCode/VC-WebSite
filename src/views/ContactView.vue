<script setup lang="ts">
import ContactSection from "@/components/sections/ContactSection.vue";
</script>

<template>
  <!-- Hero de la página -->
  <section class="bg-black pt-40 pb-16 px-6">
    <div class="max-w-7xl mx-auto flex flex-col gap-4">
      <span class="text-xs tracking-widest uppercase text-violet-400">
        Contacto
      </span>
      <h1
        class="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none"
      >
        Hablemos.
      </h1>
      <p class="text-white/40 text-lg max-w-lg leading-relaxed">
        Contanos tu idea y te respondemos a la brevedad.
      </p>
    </div>
  </section>

  <!-- Línea separadora -->
  <div class="border-t border-white/5" />

  <!-- Sección de contacto reutilizada -->
  <ContactSection />
</template>
