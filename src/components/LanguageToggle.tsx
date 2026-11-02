'use client'

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
      className={`inline-flex h-11 items-center border px-4 transition ${
        target === 'ar'
          ? 'font-[family-name:var(--font-amiri)] text-[1.05rem] font-bold'
          : 'font-[family-name:var(--font-jost)] text-[0.72rem] font-medium tracking-[0.22em] uppercase'
      } ${className}`}
    >
      {label}
    </a>
  )
}
