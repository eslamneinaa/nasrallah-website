'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { OrnamentRule } from '@/components/ornaments'
import ar from '@/i18n/dictionaries/ar'
import en from '@/i18n/dictionaries/en'

/** Shown when a page inside /ar or /en calls notFound(). */
export default function LocaleNotFound() {
  const locale = usePathname()?.startsWith('/en') ? 'en' : 'ar'
  const t = (locale === 'en' ? en : ar).notFound

  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-maroon-950 pt-32 pb-16 text-pearl-50">
      <div className="bg-khatam pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" aria-hidden="true" />
      <div className="container-page text-center">
        <p className="font-[family-name:var(--font-bodoni)] text-8xl text-gold-300 italic sm:text-9xl">404</p>
        <OrnamentRule className="mt-6" />
        <h1 className="display mt-6 text-3xl sm:text-4xl">{t.title}</h1>
        <p className="mx-auto mt-4 max-w-md text-pearl-200/70">{t.text}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href={`/${locale}/`} className="btn-gold">
            {t.home}
          </Link>
          <Link href={`/${locale}/products/`} className="btn-outline-light">
            {t.products}
          </Link>
        </div>
      </div>
    </section>
  )
}
