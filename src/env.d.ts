// src/env.d.ts
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@/composables/useScrollReveal' {
  export function useScrollReveal(): void
}

declare module '@/composables/useCursor' {
  export function useCursor(): void
}