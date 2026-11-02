'use client'

import { Languages } from 'lucide-react'
import { usePathname } from 'next/navigation'
import type { MouseEvent } from 'react'
import { otherLocale } from '@/i18n/config'
import type { Locale } from '@/lib/types'

type Props = {
  locale: Locale
  label: string
  ariaLabel: string
  className?: string
}

/**
 * Switches between /ar/... and /en/... for the current page, keeping the
 * query string (e.g. ?product=...) and hash. A full navigation is used on
 * purpose: <html lang/dir> and fonts belong to the locale's root layout.
 */
export function LanguageToggle({ locale, label, ariaLabel, className = '' }: Props) {
  const pathname = usePathname() || `/${locale}/`
  const target = otherLocale(locale)
  const targetPath = pathname.replace(/^\/(ar|en)(?=\/|$)/, `/${target}`)

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    try {
      localStorage.setItem('preferred-locale', target)
    } catch {}
    window.location.assign(targetPath + window.location.search + window.location.hash)
  }

  return (
    <a
      href={targetPath}
      hrefLang={target}
      lang={target}
      aria-label={ariaLabel}
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-semibold transition ${className}`}
    >
      <Languages className="h-4 w-4" aria-hidden="true" />
      <span className={target === 'ar' ? 'font-[family-name:var(--font-cairo)]' : 'font-[family-name:var(--font-manrope)]'}>
        {label}
      </span>
    </a>
  )
}
