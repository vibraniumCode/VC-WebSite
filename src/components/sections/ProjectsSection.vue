<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import byAmelieImg from "@/assets/projects/byAmelie.png";
import portfolioImg from "@/assets/projects/portfolioImg.png";
import sianImg from "@/assets/projects/sianImg.jpeg";
import barberImg from "@/assets/projects/barberImg.png";

const router = useRouter();
const hoveredIndex = ref<number | null>(null);

interface Project {
  number: string;
  name: string;
  version: string;
  description: string;
  tags: string[];
  image: string | null;
  link: string | null; // null = desktop app, no link
  featured: boolean;
}

// Los 4 proyectos que mostrás en el home.
// Reemplazá image con el import real cuando tengas los assets.
const featuredProjects: Project[] = [
  {
    number: "01",
    name: "ByAmelie",
    version: "v1.0",
    description:
      "E-commerce completo para tienda de electrodomésticos, blanquería y bazar. Catálogo con 270+ productos, carrito, wishlist, panel admin con dashboard de ventas en tiempo real, gestión de pedidos y notificaciones por email.",
    tags: [
      "Vue",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Cloudinary",
    ],
    image: byAmelieImg, // reemplazá con: byAmelieImg
    link: "https://by-amelie.vercel.app/",
    featured: true,
  },
  {
    number: "02",
    name: "Sistema de Gestión para Barberías",
    version: "v1.0",
    description:
      "Desarrollo de una aplicación web completa para la administración y gestión de barberías, diseñada para optimizar la reserva de turnos y la organización del negocio.",
    tags: [
      "Vue",
      "JavaScript",
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
    image: barberImg, // reemplazá con: barberImg
    link: "https://barber-frontend-gray.vercel.app/",
    featured: false,
  },
  {
    number: "03",
    name: "SIAN",
    version: "v1.0",
    description:
      "Sistema de gestión para hamburguesería. Control de pedidos, cierre de caja y reportes diarios, semanales y mensuales. Acceso restringido — sistema interno de uso exclusivo del cliente.",
    tags: ["Visual Basic 6", "SQL Server"],
    image: sianImg, // reemplazá con: sianImg
    link: null,
    featured: false,
  },
  {
    number: "04",
    name: "Portfolio",
    version: "v2.0",
    description:
      "Portfolio personal desarrollado con tecnologías modernas. Diseño responsive con modo oscuro/claro.",
    tags: ["Vue", "TypeScript", "Tailwind"],
    image: portfolioImg, // reemplazá con: portfolioImg
    link: "https://portafolio-dev-2x2w.vercel.app",
    featured: false,
  },
];

const featured = featuredProjects[0];
const rest = featuredProjects.slice(1);

function openLink(link: string | null) {
  if (link) window.open(link, "_blank", "noopener");
}

function goToProjects() {
  router.push("/projects");
}
</script>

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
      <!-- ── CARD DESTACADA ── -->
      <div
        class="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] cursor-pointer transition-all duration-500 group"
        :class="
          hoveredIndex === 0 ? 'border-violet-900/50 bg-violet-950/10' : ''
        "
        @mouseenter="hoveredIndex = 0"
        @mouseleave="hoveredIndex = null"
        @click="openLink(featured.link)"
      >
        <!-- Imagen de fondo si existe, si no, texto decorativo -->
        <div class="absolute inset-0 overflow-hidden">
          <img
            v-if="featured.image"
            :src="featured.image"
            :alt="featured.name"
            class="w-full h-full object-cover object-top opacity-10 group-hover:opacity-20 transition-all duration-700 scale-105 group-hover:scale-100"
          />
          <span
            v-else
            class="absolute right-8 top-1/2 -translate-y-1/2 text-[12vw] font-black text-white/[0.025] tracking-tighter pointer-events-none select-none uppercase transition-all duration-500 group-hover:text-white/[0.05]"
          >
            {{ featured.name }}
          </span>
        </div>

        <div
          class="relative z-10 p-10 flex flex-col md:flex-row md:items-center justify-between gap-8"
        >
          <!-- Info -->
          <div class="flex flex-col gap-6">
            <div class="flex items-center gap-3 flex-wrap">
              <span class="text-sm font-mono text-violet-400">{{
                featured.number
              }}</span>
              <span
                class="text-xs tracking-widest uppercase text-white/20 border border-white/10 px-3 py-1 rounded-full"
              >
                {{ featured.version }}
              </span>
              <span
                class="text-xs tracking-widest uppercase text-violet-300 border border-violet-700/40 px-3 py-1 rounded-full"
              >
                Destacado
              </span>
              <!-- Badge desktop si no tiene link -->
              <span
                v-if="!featured.link"
                class="text-xs tracking-widest uppercase text-white/30 border border-white/10 px-3 py-1 rounded-full"
              >
                Desktop
              </span>
            </div>

            <h3
              class="text-4xl md:text-5xl font-black tracking-tighter text-white"
            >
              {{ featured.name }}
            </h3>

            <p class="text-white/50 max-w-lg leading-relaxed">
              {{ featured.description }}
            </p>

            <div class="flex items-center gap-2 flex-wrap">
              <span
                v-for="tag in featured.tags"
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

          <!-- CTA -->
          <div class="flex flex-col items-center gap-2 shrink-0">
            <span
              class="text-4xl transition-all duration-300"
              :class="
                featured.link
                  ? hoveredIndex === 0
                    ? 'text-violet-400 translate-x-2'
                    : 'text-white/10'
                  : 'text-white/10'
              "
            >
              {{ featured.link ? "→" : "🖥" }}
            </span>
            <span
              v-if="featured.link"
              class="text-xs text-white/20 group-hover:text-violet-400 transition-colors duration-300 tracking-widest"
            >
              VER SITIO
            </span>
          </div>
        </div>
      </div>

      <!-- ── GRID 3 CARDS ── -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="(project, index) in rest"
          :key="project.number"
          class="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 flex flex-col gap-6 group"
          :class="[
            hoveredIndex === index + 1
              ? 'border-violet-900/50 bg-violet-950/10'
              : '',
            project.link ? 'cursor-pointer' : 'cursor-default',
          ]"
          @mouseenter="hoveredIndex = index + 1"
          @mouseleave="hoveredIndex = null"
          @click="openLink(project.link)"
        >
          <!-- Imagen / placeholder -->
          <div
            class="rounded-xl overflow-hidden h-44 bg-white/[0.03] border border-white/5 relative"
          >
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.name"
              loading="lazy"
              class="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
            />
            <div
              v-else
              class="w-full h-full flex flex-col items-center justify-center gap-2"
            >
              <span
                class="text-3xl font-black tracking-tighter text-white/[0.06] uppercase"
              >
                {{ project.name }}
              </span>
              <!-- Badge desktop visible en placeholder -->
              <span
                class="text-[10px] tracking-widest uppercase text-white/20 border border-white/10 px-2 py-0.5 rounded-full"
              >
                App de escritorio
              </span>
            </div>

            <!-- Link overlay si tiene link -->
            <div
              v-if="project.link"
              class="absolute inset-0 bg-violet-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
              <span
                class="text-xs tracking-widest uppercase text-violet-300 font-bold"
                >Ver sitio →</span
              >
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

      <!-- ── BOTÓN VER MÁS ── -->
      <div class="flex justify-center pt-8">
        <button
          @click="goToProjects"
          class="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 text-white/50 text-sm tracking-widest uppercase transition-all duration-300 hover:border-violet-700/60 hover:text-violet-300 hover:bg-violet-950/20"
        >
          <span>Ver todos los proyectos</span>
          <span
            class="transition-transform duration-300 group-hover:translate-x-1"
            >→</span
          >
        </button>
      </div>
    </div>
  </section>
</template>
