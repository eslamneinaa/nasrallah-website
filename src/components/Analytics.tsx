'use client'

import { useEffect } from 'react'
import { siteConfig } from '@/config/site'
import { contactEvent, gtag, track } from '@/lib/analytics'

/** Load gtag.js this long after the page has loaded if the visitor has not interacted yet. */
const FALLBACK_MS = 6000
const FIRST_INTERACTION = ['pointerdown', 'keydown', 'scroll', 'touchstart'] as const

/**
 * Google Analytics 4, loaded off the critical path: the page view is queued at
 * once, but gtag.js (about 150 KB of script) is only fetched on the visitor's
 * first tap, key press or scroll, or 6 s after load, so it never competes with
 * the page's own start-up. Also sends one event for every WhatsApp, phone,
 * email and map link tapped anywhere on the page. Renders nothing.
 */
export function Analytics() {
  const id = siteConfig.googleAnalyticsId

  useEffect(() => {
    if (!id) return
    gtag('js', new Date())
    gtag('config', id)

    let loaded = false
    let timer: ReturnType<typeof setTimeout> | undefined
    const load = () => {
      if (loaded) return
      loaded = true
      clearTimeout(timer)
      FIRST_INTERACTION.forEach((type) => window.removeEventListener(type, load))
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
      document.head.appendChild(script)
    }
    FIRST_INTERACTION.forEach((type) => window.addEventListener(type, load, { once: true, passive: true }))
    const startTimer = () => (timer = setTimeout(load, FALLBACK_MS))
    if (document.readyState === 'complete') startTimer()
    else window.addEventListener('load', startTimer, { once: true })

    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!link) return
      const name = contactEvent(link.href)
      if (name) track(name, { link_location: link.dataset.track || link.closest('header, footer, main')?.tagName.toLowerCase() || 'float' })
    }
    document.addEventListener('click', onClick, { capture: true })

    return () => {
      clearTimeout(timer)
      FIRST_INTERACTION.forEach((type) => window.removeEventListener(type, load))
      window.removeEventListener('load', startTimer)
      document.removeEventListener('click', onClick, { capture: true })
    }
  }, [id])

  return null
}
