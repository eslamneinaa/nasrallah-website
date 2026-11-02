import type { Metadata } from 'next'
import './globals.css'
import { LogoMark } from '@/components/Logo'
import { OrnamentRule } from '@/components/ornaments'
import ar from '@/i18n/dictionaries/ar'
import en from '@/i18n/dictionaries/en'
import { fontVariables } from '@/lib/fonts'

export const metadata: Metadata = {
  title: `404 — ${en.notFound.title} | ${ar.notFound.title}`,
  robots: { index: false },
}

/**
 * Custom 404 for every unmatched URL (exported as out/404.html, which
 * Cloudflare Pages serves automatically). The locale is unknown here, so the
 * page is bilingual.
 */
export default function GlobalNotFound() {
  const blocks = [
    { locale: 'en', dir: 'ltr', t: en.notFound, body: 'font-[family-name:var(--font-jost)]', display: 'font-[family-name:var(--font-bodoni)] font-medium' },
    { locale: 'ar', dir: 'rtl', t: ar.notFound, body: 'font-[family-name:var(--font-plex-ar)]', display: 'font-[family-name:var(--font-amiri)] font-bold' },
  ] as const

  return (
    <html lang="en" className={fontVariables}>
      <body className="bg-maroon-950">
        <main className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-4 py-20 text-pearl-50">
          <div className="bg-khatam pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" aria-hidden="true" />

          <div className="mx-auto w-full max-w-4xl text-center">
            <a href="/" className="inline-block" aria-label="Nasrallah Trading Est">
              <LogoMark className="mx-auto h-16 w-16" />
            </a>
            <p className="mt-8 font-[family-name:var(--font-bodoni)] text-[7rem] leading-none text-gold-300 italic sm:text-[9rem]">404</p>
            <OrnamentRule className="mt-6" />

            <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-gold-500/25">
              {blocks.map(({ locale, dir, t, body, display }) => (
                <section key={locale} lang={locale} dir={dir} className={`${body} px-6`}>
                  <h1 className={`${display} text-3xl`}>{t.title}</h1>
                  <p className="mt-3 text-pearl-200/70">{t.text}</p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <a href={`/${locale}/`} className="btn-gold">
                      {t.home}
                    </a>
                    <a href={`/${locale}/products/`} className="btn-outline-light">
                      {t.products}
                    </a>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
