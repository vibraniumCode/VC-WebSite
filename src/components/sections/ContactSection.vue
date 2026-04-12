<script setup lang="ts">
import { ref } from "vue";
import { useScrollReveal } from "@/composables/useScrollReveal";

useScrollReveal();
const form = ref({
  name: "",
  email: "",
  message: "",
});

const sending = ref(false);
const sent = ref(false);

function handleSubmit() {
  if (!form.value.name || !form.value.email || !form.value.message) return;

  sending.value = true;

  // Por ahora abre el mail con los datos del form
  const subject = encodeURIComponent(`Consulta de ${form.value.name}`);
  const body = encodeURIComponent(
    `Nombre: ${form.value.name}\nEmail: ${form.value.email}\n\nMensaje:\n${form.value.message}`,
  );

  window.open(`mailto:vibraniumcode@gmail.com?subject=${subject}&body=${body}`);

  sending.value = false;
  sent.value = true;

  // Reset después de 3 segundos
  setTimeout(() => {
    sent.value = false;
    form.value = { name: "", email: "", message: "" };
  }, 3000);
}

const contactInfo = [
  {
    label: "Email",
    value: "vibraniumcode@gmail.com",
    url: "mailto:vibraniumcode@gmail.com",
  },
  {
    label: "WhatsApp",
    value: "+54 11 5425 1100",
    url: "https://wa.me/5491154251100",
  },
];
</script>

<template>
  <section class="relative bg-black py-32 px-6">
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
    >
      <!-- COLUMNA IZQUIERDA — Info -->
      <div data-reveal class="flex flex-col gap-8">
        <!-- Badge -->
        <span class="text-xs tracking-widest uppercase text-violet-400">
          Contacto
        </span>

        <!-- Título -->
        <h2
          class="text-5xl md:text-6xl font-black tracking-tighter text-white leading-none"
        >
          ¿Tenés un<br />
          proyecto<br />
          <span class="text-violet-400">en mente?</span>
        </h2>

        <!-- Descripción -->
        <p class="text-white/50 text-lg leading-relaxed">
          Contanos tu idea y te respondemos a la brevedad. Sin vueltas, sin
          formularios infinitos.
        </p>

        <!-- Info de contacto -->
        <div class="flex flex-col gap-4">
          <a
            v-for="item in contactInfo"
            :key="item.label"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-4 py-4 border-b border-white/5 group transition-all duration-300"
          >
            <span
              class="text-xs tracking-widest uppercase text-white/20 w-24 shrink-0"
            >
              {{ item.label }}
            </span>
            <span
              class="text-white/60 group-hover:text-violet-300 transition-colors duration-300"
            >
              {{ item.value }}
            </span>
            <span
              class="ml-auto text-white/20 group-hover:text-violet-400 group-hover:translate-x-1 transition-all duration-300"
            >
              →
            </span>
          </a>
        </div>
      </div>

      <!-- COLUMNA DERECHA — Formulario -->
      <div data-reveal class="flex flex-col gap-6">
        <!-- Name -->
        <div class="flex flex-col gap-2">
          <label class="text-xs tracking-widest uppercase text-white/20">
            Nombre
          </label>
          <input
            v-model="form.name"
            type="text"
            placeholder="Tu nombre"
            class="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-violet-700/60 focus:bg-violet-950/10 transition-all duration-300"
          />
        </div>

        <!-- Email -->
        <div class="flex flex-col gap-2">
          <label class="text-xs tracking-widest uppercase text-white/20">
            Email
          </label>
          <input
            v-model="form.email"
            type="email"
            placeholder="tu@email.com"
            class="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-violet-700/60 focus:bg-violet-950/10 transition-all duration-300"
          />
        </div>

        <!-- Mensaje -->
        <div class="flex flex-col gap-2">
          <label class="text-xs tracking-widest uppercase text-white/20">
            Mensaje
          </label>
          <textarea
            v-model="form.message"
            placeholder="Contanos tu proyecto..."
            rows="5"
            class="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-violet-700/60 focus:bg-violet-950/10 transition-all duration-300 resize-none"
          />
        </div>

        <!-- Botón -->
        <button
          :disabled="sending || sent"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm tracking-widest uppercase transition-all duration-300 font-medium"
          :class="
            sent
              ? 'bg-green-700 text-white border border-green-600'
              : 'bg-violet-700 hover:bg-violet-600 text-white'
          "
          @click="handleSubmit"
        >
          <span v-if="sending">Enviando...</span>
          <span v-else-if="sent">Mensaje enviado ✓</span>
          <span v-else>Enviar mensaje →</span>
        </button>
      </div>
    </div>
  </section>
</template>
