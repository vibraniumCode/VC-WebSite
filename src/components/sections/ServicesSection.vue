<script setup lang="ts">
import { ref } from "vue";

const hoveredIndex = ref<number | null>(null);

const services = [
  {
    number: "01",
    title: "Desarrollo Web",
    description:
      "Sitios y aplicaciones web modernas, rápidas y escalables. Desde una landing page hasta un sistema complejo.",
    tags: ["Vue", "React", "TypeScript"],
  },
  {
    number: "02",
    title: "Software a Medida",
    description:
      "Desarrollamos exactamente lo que tu negocio necesita. Sin soluciones genéricas, sin funciones de más.",
    tags: ["Análisis", "Diseño", "Desarrollo"],
  },
  {
    number: "03",
    title: "E-commerce",
    description:
      "Tiendas online listas para vender. Diseño, desarrollo e integración con MercadoPago.",
    tags: ["MercadoPago", "Tienda Online", "Pagos"],
  },
  {
    number: "04",
    title: "Backend & APIs",
    description:
      "La lógica detrás de tu producto. Servicios robustos y escalables.",
    tags: ["Node.js", "Express", "Python"],
  },
];

//hoveredIndex — guarda el índice de la card sobre la que está el mouse. Arranca en null porque ninguna está hovered al inicio. Lo usamos para aplicar estilos al hover de cada card individualmente.
//ref<number | null> — esto es TypeScript diciéndole al ref que puede ser un número o null. Si ponés solo ref(null) TypeScript no sabe que después va a guardar números.
//services — array con los 4 servicios. Cada uno tiene number, title, description y tags. Los tags son las tecnologías o conceptos clave de cada servicio.
{
  /* 
@mouseenter y @mouseleave — cuando el mouse entra a una card guarda su índice en hoveredIndex, cuando sale lo resetea a null.
La línea izquierda violeta:
opacity-0 por defecto
opacity-100 cuando está hovered
Es ese detalle sutil que hace que se sienta premium.
translate-x-2 en la flecha — cuando hover, la flecha se mueve 8px a la derecha. Pequeño detalle que da vida.
Los tags cambian de border-white/10 text-white/30 a border-violet-700/40 text-violet-300 al hover — todo el color de la card se sincroniza. */
}
</script>
<template>
  <section class="relative bg-black py-32 px-6">
    <!-- Header de sección -->
    <div class="max-w-7xl mx-auto mb-16 flex items-end justify-between">
      <div class="flex flex-col gap-4">
        <!-- Badge -->
        <span class="text-xs tracking-widest uppercase text-violet-400">
          Lo que hacemos
        </span>
        <!-- Título -->
        <h2
          class="text-5xl md:text-6xl font-black tracking-tighter text-white leading-none"
        >
          Servicios
        </h2>
      </div>

      <!-- Link ver todos -->
      <RouterLink
        to="/services"
        class="hidden md:inline-flex items-center gap-2 text-sm tracking-widest uppercase text-white/40 hover:text-white transition-colors duration-300"
      >
        Ver todos <span>→</span>
      </RouterLink>
    </div>

    <!-- Cards -->
    <div class="max-w-7xl mx-auto flex flex-col">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="group relative flex items-center justify-between px-8 py-8 border-t border-white/5 cursor-pointer transition-all duration-300"
        :class="hoveredIndex === index ? 'bg-violet-950/20' : ''"
        @mouseenter="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
      >
        <!-- Línea izquierda activa -->
        <span
          class="absolute left-0 top-0 h-full w-px bg-violet-500 transition-all duration-300"
          :class="hoveredIndex === index ? 'opacity-100' : 'opacity-0'"
        />

        <!-- Número + Título + Tags -->
        <div class="flex items-center gap-8">
          <!-- Número -->
          <span
            class="text-sm font-mono transition-colors duration-300"
            :class="
              hoveredIndex === index ? 'text-violet-400' : 'text-white/20'
            "
          >
            {{ service.number }}
          </span>

          <!-- Título y descripción -->
          <div class="flex flex-col gap-1">
            <h3 class="text-xl md:text-2xl font-bold tracking-tight text-white">
              {{ service.title }}
            </h3>
            <p
              class="text-sm text-white/40 max-w-md transition-all duration-300"
              :class="hoveredIndex === index ? 'text-white/60' : ''"
            >
              {{ service.description }}
            </p>
          </div>
        </div>

        <!-- Tags + Flecha -->
        <div class="hidden md:flex items-center gap-6">
          <!-- Tags -->
          <div class="flex items-center gap-2">
            <span
              v-for="tag in service.tags"
              :key="tag"
              class="text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-white/10 text-white/30 transition-all duration-300"
              :class="
                hoveredIndex === index
                  ? 'border-violet-700/40 text-violet-300'
                  : ''
              "
            >
              {{ tag }}
            </span>
          </div>

          <!-- Flecha -->
          <span
            class="text-white/20 text-xl transition-all duration-300"
            :class="
              hoveredIndex === index ? 'text-violet-400 translate-x-2' : ''
            "
          >
            →
          </span>
        </div>
      </div>

      <!-- Borde final -->
      <div class="border-t border-white/5" />
    </div>
  </section>
</template>
