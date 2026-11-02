'use client'

import { SearchX } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ar from '@/i18n/dictionaries/ar'
import en from '@/i18n/dictionaries/en'

/** Shown when a page inside /ar or /en calls notFound(). */
export default function LocaleNotFound() {
  const locale = usePathname()?.startsWith('/en') ? 'en' : 'ar'
  const t = (locale === 'en' ? en : ar).notFound

  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-navy-950 pt-28 pb-16 text-white">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" aria-hidden="true" />
      <div className="container-page relative text-center">
        <SearchX className="mx-auto h-14 w-14 text-gold-400" aria-hidden="true" />
        <p className="mt-6 font-display text-8xl font-extrabold text-gold-400">404</p>
        <h1 className="mt-4 text-3xl font-extrabold">{t.title}</h1>
        <p className="mx-auto mt-3 max-w-md text-navy-200">{t.text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href={`/${locale}/`} className="btn-gold">
            {t.home}
          </Link>
          <Link href={`/${locale}/products/`} className="btn-ghost-light">
            {t.products}
          </Link>
        </div>
      </div>
    </section>
  )
}
