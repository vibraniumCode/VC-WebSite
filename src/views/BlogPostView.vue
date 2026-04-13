<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { marked } from "marked";

const route = useRoute();
const router = useRouter();

interface Frontmatter {
  title: string;
  date: string;
  category: string;
  description: string;
}

const frontmatter = ref<Frontmatter>({
  title: "",
  date: "",
  category: "",
  description: "",
});

const postContent = ref("");

function parseFrontmatter(raw: string) {
  const lines = raw.split("\n");

  // Verificar que empiece con ---
  if (lines[0].trim() !== "---") {
    return { data: {} as Record<string, string>, content: raw };
  }

  // Buscar el cierre del frontmatter
  let endIndex = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === "---") {
      endIndex = i;
      break;
    }
  }

  if (endIndex === -1) {
    return { data: {} as Record<string, string>, content: raw };
  }

  // Parsear los campos
  const data: Record<string, string> = {};
  for (let i = 1; i < endIndex; i++) {
    const colonIndex = lines[i].indexOf(":");
    if (colonIndex !== -1) {
      const key = lines[i].slice(0, colonIndex).trim();
      const value = lines[i]
        .slice(colonIndex + 1)
        .trim()
        .replace(/^"|"$/g, "");
      data[key] = value;
    }
  }

  // El contenido empieza después del segundo ---
  const content = lines
    .slice(endIndex + 1)
    .join("\n")
    .trim();

  return { data, content };
}

const posts: Record<string, () => Promise<{ default: string }>> = {
  "nexus-caso-de-estudio": () => import("@/posts/nexus-caso-de-estudio.md?raw"),
};

const htmlContent = computed(() => marked(postContent.value) as string);

onMounted(async () => {
  const slug = route.params.slug as string;

  if (!posts[slug]) {
    router.push("/blog");
    return;
  }

  const raw = await posts[slug]();
  const { data, content } = parseFrontmatter(raw.default);

  frontmatter.value = data as unknown as Frontmatter;
  postContent.value = content;
});
</script>
<template>
  <article class="bg-black min-h-screen">
    <!-- Hero del post -->
    <section class="pt-40 pb-16 px-6 border-b border-white/5">
      <div class="max-w-3xl mx-auto flex flex-col gap-6">
        <!-- Volver -->
        <RouterLink
          to="/blog"
          class="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/30 hover:text-violet-400 transition-colors duration-300 w-fit"
        >
          ← Volver al blog
        </RouterLink>

        <!-- Categoría -->
        <span
          class="text-xs tracking-widest uppercase text-violet-400 w-fit px-3 py-1 border border-violet-700/40 rounded-full"
        >
          {{ frontmatter.category }}
        </span>

        <!-- Título -->
        <h1
          class="text-4xl md:text-6xl font-black tracking-tighter text-white leading-none"
        >
          {{ frontmatter.title }}
        </h1>

        <!-- Descripción -->
        <p class="text-white/50 text-lg leading-relaxed">
          {{ frontmatter.description }}
        </p>

        <!-- Fecha -->
        <span class="text-xs tracking-widest uppercase text-white/20">
          {{ frontmatter.date }}
        </span>
      </div>
    </section>

    <!-- Contenido del post -->
    <section class="py-16 px-6">
      <div
        class="max-w-3xl mx-auto prose prose-invert prose-violet prose-headings:font-black prose-headings:tracking-tighter prose-h2:text-3xl prose-h2:text-white prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:text-white/80 prose-h3:mt-8 prose-h3:mb-3 prose-p:text-white/50 prose-p:leading-relaxed prose-p:mb-6 prose-li:text-white/50 prose-li:leading-relaxed prose-strong:text-violet-300 prose-code:text-violet-300 prose-code:bg-violet-950/30 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-white/[0.03] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-hr:border-white/10"
        v-html="htmlContent"
      />
    </section>

    <!-- CTA al final -->
    <section class="py-16 px-6 border-t border-white/5">
      <div
        class="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div class="flex flex-col gap-2">
          <span class="text-xs tracking-widest uppercase text-violet-400">
            ¿Te resultó útil?
          </span>
          <h2 class="text-3xl font-black tracking-tighter text-white">
            Hablemos de tu proyecto.
          </h2>
        </div>
        <RouterLink
          to="/contact"
          class="inline-flex items-center gap-2 px-6 py-3 bg-violet-700 hover:bg-violet-600 text-white text-sm tracking-widest uppercase rounded-full transition-all duration-300 whitespace-nowrap"
        >
          Contactanos →
        </RouterLink>
      </div>
    </section>
  </article>
</template>
