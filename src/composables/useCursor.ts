import { onMounted, onUnmounted } from 'vue'

export function useCursor() {
  let dot: HTMLElement | null = null
  let ring: HTMLElement | null = null

  let mouseX = 0
  let mouseY = 0
  let ringX = 0
  let ringY = 0
  let animationId: number

  function onMouseMove(e: MouseEvent) {
    mouseX = e.clientX
    mouseY = e.clientY

    // El punto sigue instantáneo
    if (dot) {
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
    }
  }

  function animate() {
    // El anillo sigue con delay suave
    ringX += (mouseX - ringX) * 0.12
    ringY += (mouseY - ringY) * 0.12

    if (ring) {
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
    }

    animationId = requestAnimationFrame(animate)
  }

  function onMouseEnterInteractive() {
    if (dot) {
      dot.style.width = '14px'
      dot.style.height = '14px'
      dot.style.background = 'white'
    }
    if (ring) {
      ring.style.width = '54px'
      ring.style.height = '54px'
      ring.style.borderColor = 'rgba(139, 92, 246, 0.8)'
    }
  }

  function onMouseLeaveInteractive() {
    if (dot) {
      dot.style.width = '8px'
      dot.style.height = '8px'
      dot.style.background = '#8B5CF6'
    }
    if (ring) {
      ring.style.width = '36px'
      ring.style.height = '36px'
      ring.style.borderColor = 'rgba(109, 40, 217, 0.5)'
    }
  }

  onMounted(() => {
    // No aplicar en mobile
    if (window.matchMedia('(hover: none)').matches) return

    // Crear elementos del cursor
    dot = document.createElement('div')
    dot.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 8px; height: 8px;
      background: #8B5CF6;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: width 0.3s ease, height 0.3s ease, background 0.3s ease;
      will-change: transform;
    `

    ring = document.createElement('div')
    ring.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 36px; height: 36px;
      border: 1.5px solid rgba(109, 40, 217, 0.5);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
      will-change: transform;
    `

    document.body.appendChild(dot)
    document.body.appendChild(ring)

    // Escuchar movimiento
    window.addEventListener('mousemove', onMouseMove)

    // Escuchar hover en elementos interactivos
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterInteractive)
      el.addEventListener('mouseleave', onMouseLeaveInteractive)
    })

    // Arrancar animación
    animate()

    // Ocultar cursor nativo
    document.body.style.cursor = 'none'
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove)
    cancelAnimationFrame(animationId)
    dot?.remove()
    ring?.remove()
    document.body.style.cursor = 'auto'
  })
}