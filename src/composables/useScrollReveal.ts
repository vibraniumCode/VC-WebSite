import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            // Una vez revelado, dejamos de observarlo
            observer?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.08,    // aparece cuando el 15% del elemento es visible
        rootMargin: '0px 0px -20% 0px', // ajusta el margen para revelar un poco antes
      }
    )

    // Observa todos los elementos con atributo data-reveal
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      observer?.observe(el)
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}