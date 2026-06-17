<script setup lang="ts">
import { ref, computed } from "vue";
import byAmelieImg from "@/assets/projects/byamelie.png";
import portfolioImg from "@/assets/projects/portfolioImg.png";
import nexusImg from "@/assets/projects/nexusImg.png";
import sianImg from "@/assets/projects/sianImg.jpeg";
import sappImg from "@/assets/projects/sappImg.png";

interface Project {
  id: number;
  number: string;
  name: string;
  version: string;
  year: string;
  description: string;
  tags: string[];
  category: string; // "web" | "desktop" | "mobile" | etc.
  image: string | null;
  link: string | null;
  featured: boolean;
  status: "en uso" | "en desarrollo" | "finalizado";
}

// ── Agregá todos tus proyectos acá ──
const allProjects: Project[] = [
  {
    id: 1,
    number: "01",
    name: "ByAmelie",
    version: "v1.0",
    year: "2025",
    description:
      "E-commerce completo para tienda de electrodomésticos, blanquería y bazar. Catálogo con 270+ productos, carrito, wishlist, panel admin con dashboard de ventas en tiempo real, gestión de pedidos y notificaciones por email.",
    tags: [
      "Vue",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Socket.io",
      "Cloudinary",
      "JWT",
      "Nodemailer",
      "Multer",
      "Axios",
    ],
    category: "web",
    image: byAmelieImg,
    link: "https://by-amelie.vercel.app/",
    featured: true,
    status: "en uso",
  },
  {
    id: 2,
    number: "02",
    name: "Nexus",
    version: "v2.0",
    year: "2024",
    description:
      "Sistema web de comprobantes para estaciones de servicio. Migrado desde Visual Basic 6 a plataforma moderna con generación masiva de documentos. Acceso restringido — sistema interno de uso exclusivo del cliente.",
    tags: ["Vue", "TypeScript", "Node.js", "SQL"],
    category: "web",
    image: nexusImg,
    link: null,
    featured: false,
    status: "en uso",
  },
  {
    id: 3,
    number: "03",
    name: "SIAN",
    version: "v1.0",
    year: "2023",
    description:
      "Sistema de gestión para hamburguesería. Control de pedidos, cierre de caja y reportes diarios, semanales y mensuales. Acceso restringido — sistema interno de uso exclusivo del cliente.",
    tags: ["Visual Basic 6", "SQL Server"],
    category: "desktop",
    image: sianImg,
    link: null,
    featured: false,
    status: "en uso",
  },
  {
    id: 4,
    number: "04",
    name: "System App",
    version: "v1.0",
    year: "2023",
    description:
      "Generador de comprobantes personalizados multi-negocio. Desarrollado en entorno desktop. Acceso restringido — sistema interno de uso exclusivo del cliente.",
    tags: ["Visual Basic 6", "SQL Server"],
    category: "desktop",
    image: sappImg,
    link: null,
    featured: false,
    status: "en uso",
  },
  {
    id: 5,
    number: "05",
    name: "Portfolio",
    version: "v2.0",
    year: "2024",
    description:
      "Portfolio personal desarrollado con tecnologías modernas. Diseño responsive con modo oscuro/claro.",
    tags: ["Vue", "TypeScript", "Tailwind"],
    category: "web",
    image: portfolioImg,
    link: "https://portafolio-dev-2x2w.vercel.app",
    featured: false,
    status: "en uso",
  },
  // Agregá más proyectos acá con la misma estructura ↑
];

// ── Filtros ──
const activeFilter = ref<string>("todos");

const categories = computed(() => {
  const cats = new Set(allProjects.map((p) => p.category));
  return ["todos", ...Array.from(cats)];
});

const filtered = computed(() =>
  activeFilter.value === "todos"
    ? allProjects
    : allProjects.filter((p) => p.category === activeFilter.value),
);

const hoveredId = ref<number | null>(null);

function openLink(link: string | null) {
  if (link) window.open(link, "_blank", "noopener");
}

const statusColor: Record<Project["status"], string> = {
  "en uso": "text-emerald-400 border-emerald-800/60",
  "en desarrollo": "text-amber-400 border-amber-800/60",
  finalizado: "text-white/30 border-white/10",
};

const categoryLabel: Record<string, string> = {
  todos: "Todos",
  web: "Web",
  desktop: "Desktop",
  mobile: "Mobile",
};
</script>

<template>
  <main class="min-h-screen bg-black">
    <!-- ── Hero ── -->
    <section class="pt-40 pb-20 px-6">
      <div class="max-w-7xl mx-auto">
        <span
          class="text-xs tracking-widest uppercase text-violet-400 block mb-4"
        >
          Vibranium Code
        </span>
        <h1
          class="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none mb-6"
        >
          Proyectos
        </h1>
        <p class="text-white/40 text-lg max-w-xl leading-relaxed">
          Sistemas reales construidos para clientes reales. Desde apps de
          escritorio hasta plataformas web modernas.
        </p>
      </div>
    </section>

    <!-- ── Filtros ── -->
    <section class="px-6 pb-12">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-center gap-2 flex-wrap">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="activeFilter = cat"
            class="text-xs tracking-widest uppercase px-4 py-2 rounded-full border transition-all duration-300"
            :class="
              activeFilter === cat
                ? 'border-violet-700/60 text-violet-300 bg-violet-950/30'
                : 'border-white/10 text-white/30 hover:border-white/20 hover:text-white/50'
            "
          >
            {{ categoryLabel[cat] ?? cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- ── Grid de proyectos ── -->
    <section class="px-6 pb-32">
      <div class="max-w-7xl mx-auto">
        <!-- Contador -->
        <p class="text-xs text-white/20 tracking-widest uppercase mb-8">
          {{ filtered.length }} proyecto{{ filtered.length !== 1 ? "s" : "" }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div
            v-for="project in filtered"
            :key="project.id"
            class="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col transition-all duration-500 group"
            :class="[
              hoveredId === project.id
                ? 'border-violet-900/50 bg-violet-950/10'
                : '',
              project.link ? 'cursor-pointer' : 'cursor-default',
            ]"
            @mouseenter="hoveredId = project.id"
            @mouseleave="hoveredId = null"
            @click="openLink(project.link)"
          >
            <!-- Imagen / Placeholder -->
            <div
              class="h-52 overflow-hidden relative bg-white/[0.02] border-b border-white/5"
            >
              <img
                v-if="project.image"
                :src="project.image"
                :alt="project.name"
                loading="lazy"
                class="w-full h-full object-cover object-top opacity-60 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105"
              />
              <div
                v-else
                class="w-full h-full flex flex-col items-center justify-center gap-3 select-none"
              >
                <!-- Grid de puntos decorativo -->
                <div
                  class="absolute inset-0 opacity-20"
                  style="
                    background-image: radial-gradient(
                      circle,
                      rgba(139, 92, 246, 0.15) 1px,
                      transparent 1px
                    );
                    background-size: 24px 24px;
                  "
                />
                <span
                  class="relative text-5xl font-black tracking-tighter text-white/[0.07] uppercase z-10"
                >
                  {{ project.name.charAt(0) }}
                </span>
                <span
                  class="relative text-[10px] tracking-widest uppercase text-white/20 border border-white/10 px-3 py-1 rounded-full z-10"
                >
                  {{
                    project.category === "desktop"
                      ? "App de escritorio"
                      : "Sin captura"
                  }}
                </span>
              </div>

              <!-- Link hover overlay -->
              <div
                v-if="project.link"
                class="absolute inset-0 bg-violet-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20"
              >
                <span
                  class="text-xs tracking-widest uppercase text-violet-300 font-bold"
                >
                  Ver sitio →
                </span>
              </div>

              <!-- Badge featured -->
              <div
                v-if="project.featured"
                class="absolute top-3 left-3 z-10 text-xs tracking-widest uppercase text-violet-300 border border-violet-700/40 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm"
              >
                Destacado
              </div>
            </div>

            <!-- Content -->
            <div class="p-7 flex flex-col gap-4 flex-1">
              <!-- Meta row -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="text-xs font-mono text-violet-400">{{
                    project.number
                  }}</span>
                  <span class="text-white/20 text-xs">·</span>
                  <span class="text-xs text-white/20">{{ project.year }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <span
                    class="text-[10px] tracking-widest uppercase border px-2 py-0.5 rounded-full"
                    :class="statusColor[project.status]"
                  >
                    {{ project.status }}
                  </span>
                  <span
                    class="text-[10px] tracking-widest uppercase text-white/20 border border-white/10 px-2 py-0.5 rounded-full"
                  >
                    {{ project.version }}
                  </span>
                </div>
              </div>

              <!-- Title -->
              <h3 class="text-2xl font-bold tracking-tight text-white">
                {{ project.name }}
              </h3>

              <!-- Description -->
              <p class="text-sm text-white/40 leading-relaxed flex-1">
                {{ project.description }}
              </p>

              <!-- Tags -->
              <div
                class="flex items-center gap-2 flex-wrap pt-3 border-t border-white/5"
              >
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full border border-white/10 text-white/30 transition-all duration-300"
                  :class="
                    hoveredId === project.id
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

        <!-- Empty state -->
        <div v-if="filtered.length === 0" class="text-center py-24">
          <p class="text-white/20 text-sm tracking-widest uppercase">
            No hay proyectos en esta categoría
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
