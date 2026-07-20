import { useEffect } from 'react'
import type { RefObject } from 'react'

/* Aparición al hacer scroll, escalonada entre hermanos. Con reduced
   motion (o sin JS) la clase nunca se agrega y nada queda oculto. */
export function useReveal(rootRef: RefObject<HTMLElement | null>, selector: string) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const targets = [...root.querySelectorAll<HTMLElement>(selector)]
    const siblingCount = new Map<Element | null, number>()
    targets.forEach((el) => {
      const n = siblingCount.get(el.parentElement) ?? 0
      el.style.setProperty('--reveal-delay', `${n * 90}ms`)
      siblingCount.set(el.parentElement, n + 1)
      el.classList.add('reveal')
    })

    const revealer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    targets.forEach((el) => revealer.observe(el))

    return () => {
      revealer.disconnect()
      targets.forEach((el) => {
        el.classList.remove('reveal', 'is-visible')
        el.style.removeProperty('--reveal-delay')
      })
    }
  }, [rootRef, selector])
}
