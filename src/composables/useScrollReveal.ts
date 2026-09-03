import type { DirectiveBinding } from 'vue'

interface RevealOptions {
  threshold?: number
  delay?: number
}

const observers = new WeakMap<Element, IntersectionObserver>()

function applyReveal(el: HTMLElement, options: RevealOptions = {}) {
  const { threshold = 0.1, delay = 0 } = options

  if (delay) {
    el.style.transitionDelay = `${delay}ms`
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible')
          observer.unobserve(el)
        }
      })
    },
    { threshold },
  )

  observer.observe(el)
  observers.set(el, observer)
}

export const vReveal = {
  mounted(el: HTMLElement, binding: DirectiveBinding<RevealOptions>) {
    el.classList.add('reveal')
    applyReveal(el, binding.value)
  },
  unmounted(el: HTMLElement) {
    observers.get(el)?.disconnect()
    observers.delete(el)
  },
}
