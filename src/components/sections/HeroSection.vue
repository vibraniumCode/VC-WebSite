<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

const loaded = ref(false);

// ── Count-up ────────────────────────────────
const displayAnio = ref(0);
const displayProyectos = ref(0);
const displayClientes = ref(0);

// ── Typewriter ──────────────────────────────
const displayedCode = ref("");
const showCursor = ref(true);

const fullCode = `const app = {
  nombre: "VibraniumCode",
  ubicacion: "Buenos Aires",
  servicios: [
    "Desarrollo Web",
    "Software a Medida",
    "Consultoría Tech",
  ],
  stack: ["Vue", "Node", "TypeScript"],
  disponible: true,
}`;

onMounted(() => {
  // Animación entrada
  setTimeout(() => {
    loaded.value = true;
  }, 100);

  // Count-up
  const duration = 2000;
  const startTime = performance.now();
  const countUp = (currentTime: number) => {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    displayAnio.value = Math.floor(progress * 7);
    displayProyectos.value = Math.floor(progress * 4);
    displayClientes.value = Math.floor(progress * 3);
    if (progress < 1) requestAnimationFrame(countUp);
    else {
      displayAnio.value = 7;
      displayProyectos.value = 4;
      displayClientes.value = 3;
    }
  };
  requestAnimationFrame(countUp);

  // Typewriter — empieza 800ms después para que se vea la entrada
  let i = 0;
  setTimeout(() => {
    const interval = setInterval(() => {
      displayedCode.value = fullCode.slice(0, i);
      i++;
      if (i > fullCode.length) clearInterval(interval);
    }, 35); // velocidad: 35ms por letra
  }, 800);

  // Cursor parpadeante
  setInterval(() => {
    showCursor.value = !showCursor.value;
  }, 500);
});

const stats = [
  { value: displayAnio, label: "Años de experiencia" },
  { value: displayProyectos, label: "Proyectos entregados" },
  { value: displayClientes, label: "Clientes satisfechos" },
];

const colorizedCode = computed(() => {
  const tokens: { text: string; color: string }[] = [];
  const code = displayedCode.value;

  // Regex para tokenizar
  const regex =
    /(".*?")|(\btrue\b|\bfalse\b)|(const|let|var)|([a-zA-ZÀ-ú_]+(?=:))|(\[|\]|\{|\})|(\d+)/g;

  let lastIndex = 0;
  let match;

  while ((match = regex.exec(code)) !== null) {
    // Texto antes del match — blanco
    if (match.index > lastIndex) {
      tokens.push({
        text: code.slice(lastIndex, match.index),
        color: "text-white/60",
      });
    }

    if (match[1])
      tokens.push({ text: match[1], color: "text-green-400/80" }); // strings
    else if (match[2])
      tokens.push({ text: match[2], color: "text-violet-400" }); // true/false
    else if (match[3])
      tokens.push({ text: match[3], color: "text-violet-300" }); // const/let
    else if (match[4])
      tokens.push({ text: match[4], color: "text-blue-300/80" }); // keys
    else if (match[5])
      tokens.push({ text: match[5], color: "text-white/30" }); // brackets
    else if (match[6])
      tokens.push({ text: match[6], color: "text-yellow-300/80" }); // números

    lastIndex = regex.lastIndex;
  }

  // Resto del texto
  if (lastIndex < code.length) {
    tokens.push({ text: code.slice(lastIndex), color: "text-white/60" });
  }

  return tokens;
});
</script>
<template>
  <section
    class="relative min-h-screen bg-black flex items-center overflow-hidden"
  >
    <!-- FONDO DECORATIVO — sin el absolute que molesta -->
    <span
      class="absolute text-[20vw] font-black tracking-tighter text-white/5 uppercase leading-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
    >
      CODE
    </span>

    <!-- GRID DOS COLUMNAS -->
    <div
      class="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
    >
      <!-- COLUMNA IZQUIERDA -->
      <div class="flex flex-col gap-8">
        <!-- Badge -->
        <div
          :class="[
            'inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-700/40 text-violet-300 text-xs tracking-widest uppercase w-fit transition-all duration-700',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          ]"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
          Desarrollo de Software · Buenos Aires
        </div>

        <!-- Título -->
        <h1
          :class="[
            'text-6xl md:text-7xl font-black tracking-tighter leading-none text-white transition-all duration-700 delay-150',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          ]"
        >
          Construimos<br />
          software que<br />
          <span class="text-violet-400">resuelve.</span>
        </h1>

        <!-- Subtítulo -->
        <p
          :class="[
            'text-white/50 text-lg leading-relaxed transition-all duration-700 delay-300',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          ]"
        >
          En VibraniumCode transformamos ideas en productos digitales reales.
          Web, software a medida y soluciones que funcionan.
        </p>

        <!-- Botones -->
        <div
          :class="[
            'flex items-center gap-4 transition-all duration-700 delay-500',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          ]"
        >
          <RouterLink
            to="/services"
            class="inline-flex items-center gap-2 px-6 py-3 bg-violet-700 hover:bg-violet-600 text-white text-sm tracking-widest uppercase rounded-full transition-all duration-300"
          >
            Ver servicios <span>→</span>
          </RouterLink>
          <RouterLink
            to="/contact"
            class="inline-flex items-center gap-2 px-6 py-3 border border-violet-700/50 text-violet-300 hover:bg-violet-700/20 text-sm tracking-widest uppercase rounded-full transition-all duration-300"
          >
            Contactanos
          </RouterLink>
        </div>

        <!-- Stats -->
        <div
          :class="[
            'flex items-center gap-10 pt-4 border-t border-white/5 transition-all duration-700 delay-700',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          ]"
        >
          <template v-for="(stat, index) in stats" :key="index">
            <div class="flex flex-col">
              <span class="text-3xl font-black tracking-tighter text-white">{{
                stat.value
              }}</span>
              <span class="text-xs tracking-widest uppercase text-white/40">{{
                stat.label
              }}</span>
            </div>
            <!-- Separador vertical entre stats -->
            <span
              v-if="index < stats.length - 1"
              class="h-8 w-px bg-white/10"
            />
          </template>
        </div>
      </div>
      <!-- FIN COLUMNA IZQUIERDA -->

      <!-- COLUMNA DERECHA — Terminal -->
      <div
        :class="[
          'transition-all duration-1000 delay-300',
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        <div
          class="rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm overflow-hidden"
        >
          <!-- Dots -->
          <div
            class="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/2"
          >
            <span class="w-3 h-3 rounded-full bg-red-500/70" />
            <span class="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span class="w-3 h-3 rounded-full bg-green-500/70" />
            <span class="ml-4 text-xs text-white/20 tracking-widest font-mono"
              >vibraniumcode.ts</span
            >
          </div>

          <!-- Código -->
          <div class="p-6 font-mono text-sm leading-relaxed min-h-80">
            <div class="p-6 font-mono text-sm leading-relaxed min-h-80">
              <div class="whitespace-pre-wrap break-words">
                <span
                  v-for="(token, i) in colorizedCode"
                  :key="i"
                  :class="token.color"
                  >{{ token.text }}</span
                >
                <span
                  :class="[
                    'inline-block w-2 h-4 bg-violet-400 align-middle ml-0.5',
                    showCursor ? 'opacity-100' : 'opacity-0',
                  ]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- FIN COLUMNA DERECHA -->
    </div>
    <!-- FIN GRID -->
  </section>
</template>
