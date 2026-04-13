<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
}

const posts = ref<Post[]>([]);

onMounted(async () => {
  // Por ahora los posts son manuales
  // Cuando agregues uno nuevo, agregás un objeto acá
  posts.value = [
    {
      slug: "nexus-caso-de-estudio",
      title: "Cómo migramos un sistema de Visual Basic 6 a Vue 3",
      date: "2026-04-13",
      category: "Caso de estudio",
      description:
        "La historia detrás de Nexus — cómo transformamos un sistema desktop legacy en una plataforma web moderna.",
    },
  ];
});
</script>

<template>
  <section class="bg-black min-h-screen pt-40 pb-32 px-6">
    <div class="max-w-7xl mx-auto flex flex-col gap-16">
      <!-- Header -->
      <div class="flex flex-col gap-4">
        <span class="text-xs tracking-widest uppercase text-violet-400">
          Artículos
        </span>
        <h1
          class="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none"
        >
          Blog.
        </h1>
        <p class="text-white/40 text-lg max-w-lg leading-relaxed">
          Tips, casos de estudio y novedades de VibraniumCode.
        </p>
      </div>

      <!-- Lista de posts -->
      <div class="flex flex-col">
        <RouterLink
          v-for="post in posts"
          :key="post.slug"
          :to="`/blog/${post.slug}`"
          class="group flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 border-t border-white/5 transition-all duration-300 hover:bg-violet-950/10 px-4 -mx-4 rounded-xl"
        >
          <!-- Info -->
          <div class="flex flex-col gap-2">
            <!-- Categoría + fecha -->
            <div class="flex items-center gap-4">
              <span
                class="text-xs tracking-widest uppercase text-violet-400 border border-violet-700/40 px-3 py-1 rounded-full"
              >
                {{ post.category }}
              </span>
              <span class="text-xs text-white/20">
                {{ post.date }}
              </span>
            </div>

            <!-- Título -->
            <h2
              class="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-violet-300 transition-colors duration-300"
            >
              {{ post.title }}
            </h2>

            <!-- Descripción -->
            <p class="text-white/40 text-sm leading-relaxed max-w-2xl">
              {{ post.description }}
            </p>
          </div>

          <!-- Flecha -->
          <span
            class="text-white/20 text-xl group-hover:text-violet-400 group-hover:translate-x-2 transition-all duration-300 shrink-0"
          >
            →
          </span>
        </RouterLink>

        <!-- Borde final -->
        <div class="border-t border-white/5" />
      </div>
    </div>
  </section>
</template>
