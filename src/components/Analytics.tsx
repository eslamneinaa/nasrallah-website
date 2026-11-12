'use client'

import { GoogleAnalytics } from '@next/third-parties/google'
import { useEffect } from 'react'
import { siteConfig } from '@/config/site'
import { contactEvent, track } from '@/lib/analytics'

/**
 * Google Analytics 4, plus one event for every WhatsApp, phone, email and map
 * link the visitor taps, wherever it sits on the page. Renders nothing until a
 * measurement ID is configured.
 */
export function Analytics() {
  const id = siteConfig.googleAnalyticsId

  useEffect(() => {
    if (!id) return
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!link) return
      const name = contactEvent(link.href)
      if (name) track(name, { link_location: link.dataset.track || link.closest('header, footer, main')?.tagName.toLowerCase() || 'float' })
    }
    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true })
  }, [id])

  return id ? <GoogleAnalytics gaId={id} /> : null
}
