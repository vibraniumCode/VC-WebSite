<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isScrolled = ref(false);

function onScroll() {
  isScrolled.value = window.scrollY > 50;
}

onMounted(() => window.addEventListener("scroll", onScroll));
onUnmounted(() => window.removeEventListener("scroll", onScroll));

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

const links = [
  { label: "Servicios", to: "/services" },
  { label: "Proyectos", to: "/projects" },
  { label: "Nosotros", to: "/about" },
  { label: "Blog", to: "/blog" },
];
</script>

<template>
  <header
    :class="[
      'fixed top-4 z-50 transition-all duration-500 rounded-2xl',
      'w-[calc(100%-2rem)] md:w-auto md:min-w-250',
      'left-1/2 -translate-x-1/2',
      isScrolled
        ? 'bg-black/80 backdrop-blur-md border border-white/10'
        : 'bg-black border border-white/5',
    ]"
  >
    <nav class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-3">
        <img
          src="../../assets/VC_icon.png"
          alt="VibraniumCode"
          loading="eager"
          class="h-12 w-auto"
        />
      </RouterLink>
      <!-- Links centro (solo desktop) -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            :class="[
              'text-sm tracking-widest uppercase transition-colors duration-200',
              route.path === link.to
                ? 'text-white'
                : 'text-white/40 hover:text-white',
            ]"
          >
            {{ link.label }}
            <span
              v-if="route.path === link.to"
              class="block h-px w-full bg-violet-500 mt-0.5"
            />
          </RouterLink>
        </li>
      </ul>
      <!-- CTA (solo desktop) -->
      <RouterLink
        to="/contact"
        class="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm tracking-widest uppercase text-violet-300 rounded-full transition-all duration-300 hover:bg-violet-700 hover:text-white hover:border-violet-700"
      >
        Contactanos
        <span>→</span>
      </RouterLink>
      <!-- Hamburger (mobile) -->
      <button class="md:hidden flex flex-col gap-1.5 p-2" @click="toggleMenu">
        <span
          :class="[
            'block w-6 h-px bg-white transition-all duration-300',
            menuOpen ? 'rotate-45 translate-y-2' : '',
          ]"
        />
        <span
          :class="[
            'block w-6 h-px bg-white transition-all duration-300',
            menuOpen ? 'opacity-0' : '',
          ]"
        />
        <span
          :class="[
            'block w-6 h-px bg-white transition-all duration-300',
            menuOpen ? '-rotate-45 -translate-y-2' : '',
          ]"
        />
      </button>
    </nav>
    <!-- Mobile menu -->
    <div
      v-if="menuOpen"
      class="md:hidden bg-black/95 border-t border-white/5 px-6 py-6 flex flex-col gap-6"
    >
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="text-sm tracking-widest uppercase text-white/60 hover:text-white transition-colors"
        @click="menuOpen = false"
      >
        {{ link.label }}
      </RouterLink>

      <RouterLink
        to="/contact"
        class="text-sm tracking-widest uppercase text-violet-400 border border-violet-700/60 px-5 py-2 rounded-full text-center"
        @click="menuOpen = false"
      >
        Hablemos →
      </RouterLink>
    </div>
  </header>
</template>
