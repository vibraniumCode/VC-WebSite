<script setup lang="ts">
import { ref } from "vue";
import { useScrollReveal } from "@/composables/useScrollReveal";

useScrollReveal();

const activeService = ref<number | null>(null);

const services = [
  {
    number: "01",
    title: "Desarrollo Web",
    description:
      "Sitios y aplicaciones web modernas, rápidas y escalables. Desde una landing page hasta un sistema complejo.",
    includes: [
      "Diseño UI/UX personalizado",
      "Desarrollo frontend moderno",
      "Responsive para todos los dispositivos",
      "Optimización de rendimiento",
      "Deployment incluido",
    ],
    tags: ["Vue", "React", "TypeScript"],
  },
  {
    number: "02",
    title: "Software a Medida",
    description:
      "Desarrollamos exactamente lo que tu negocio necesita. Sin soluciones genéricas, sin funciones de más.",
    includes: [
      "Análisis de requerimientos",
      "Diseño de base de datos",
      "Desarrollo backend y frontend",
      "Pruebas y control de calidad",
      "Soporte post-entrega",
    ],
    tags: ["Análisis", "Diseño", "Desarrollo"],
  },
  {
    number: "03",
    title: "E-commerce",
    description:
      "Tiendas online listas para vender. Diseño, desarrollo e integración con MercadoPago.",
    includes: [
      "Diseño de tienda online",
      "Catálogo de productos",
      "Integración con MercadoPago",
      "Panel de administración",
      "Responsive mobile",
    ],
    tags: ["MercadoPago", "Tienda Online", "Pagos"],
  },
  {
    number: "04",
    title: "Backend & APIs",
    description:
      "La lógica detrás de tu producto. Servicios robustos y escalables.",
    includes: [
      "Diseño de arquitectura",
      "APIs REST",
      "Integración con servicios externos",
      "Base de datos optimizada",
      "Documentación técnica",
    ],
    tags: ["Node.js", "Express", "Python"],
  },
];

{
  /* activeService — guarda el índice del servicio expandido. Al clickear una card se abre mostrando los detalles. 
Al clickear de nuevo se cierra. Es el mismo concepto del hoveredIndex pero para clicks en lugar de hover. */
}
</script>
<template>
  <!-- Hero -->
  <section class="bg-black pt-40 pb-16 px-6">
    <div class="max-w-7xl mx-auto flex flex-col gap-4">
      <span class="text-xs tracking-widest uppercase text-violet-400">
        Lo que hacemos
      </span>
      <h1
        class="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none"
      >
        Servicios.
      </h1>
      <p class="text-white/40 text-lg max-w-lg leading-relaxed">
        Soluciones digitales a medida para cada necesidad. Sin plantillas, sin
        atajos.
      </p>
    </div>
  </section>

  <div class="border-t border-white/5" />

  <!-- Servicios -->
  <section class="bg-black py-32 px-6">
    <div class="max-w-7xl mx-auto flex flex-col">
      <div
        v-for="(service, index) in services"
        :key="index"
        data-reveal
        :data-delay="index * 100"
        class="border-t border-white/5 transition-all duration-500"
      >
        <!-- Header del servicio — siempre visible -->
        <div
          class="flex items-center justify-between px-0 py-8 cursor-pointer group"
          @click="activeService = activeService === index ? null : index"
        >
          <div class="flex items-center gap-8">
            <!-- Número -->
            <span
              class="text-sm font-mono transition-colors duration-300"
              :class="
                activeService === index ? 'text-violet-400' : 'text-white/20'
              "
            >
              {{ service.number }}
            </span>

            <!-- Título -->
            <h2
              class="text-2xl md:text-4xl font-black tracking-tighter transition-colors duration-300"
              :class="
                activeService === index ? 'text-violet-400' : 'text-white'
              "
            >
              {{ service.title }}
            </h2>
          </div>

          <!-- Ícono expandir -->
          <span
            class="text-2xl text-white/20 transition-all duration-300 group-hover:text-white"
            :class="activeService === index ? 'rotate-45 text-violet-400' : ''"
          >
            +
          </span>
        </div>

        <!-- Detalle — visible solo cuando está activo -->
        <div
          v-if="activeService === index"
          class="pb-10 flex flex-col md:grid md:grid-cols-2 gap-10"
        >
          <!-- Descripción + tags -->
          <div class="flex flex-col gap-6">
            <p class="text-white/50 text-lg leading-relaxed">
              {{ service.description }}
            </p>
            <div class="flex items-center gap-2 flex-wrap">
              <span
                v-for="tag in service.tags"
                :key="tag"
                class="text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-violet-700/40 text-violet-300"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Lista de incluidos -->
          <div class="flex flex-col gap-3">
            <span class="text-xs tracking-widest uppercase text-white/20 mb-2">
              Qué incluye
            </span>
            <div
              v-for="item in service.includes"
              :key="item"
              class="flex items-center gap-3 py-3 border-b border-white/5"
            >
              <span class="text-violet-500 text-xs">✓</span>
              <span class="text-white/60 text-sm">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Borde final -->
      <div class="border-t border-white/5" />
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
        ¿Listo para<br />
        <span class="text-violet-400">empezar?</span>
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
{/* v-if="activeService === index" — el detalle solo existe en el DOM cuando
está activo. Cuando se cierra desaparece completamente. */}
