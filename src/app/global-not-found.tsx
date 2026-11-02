import type { Metadata } from 'next'
import './globals.css'
import { LogoMark } from '@/components/Logo'
import ar from '@/i18n/dictionaries/ar'
import en from '@/i18n/dictionaries/en'
import { cairo, manrope } from '@/lib/fonts'

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
    { locale: 'en', dir: 'ltr', t: en.notFound, font: 'font-[family-name:var(--font-manrope)]' },
    { locale: 'ar', dir: 'rtl', t: ar.notFound, font: 'font-[family-name:var(--font-cairo)]' },
  ] as const

  return (
    <html lang="en" className={`${cairo.variable} ${manrope.variable}`}>
      <body className="bg-navy-950">
        <main className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-4 py-20 text-white">
          <div className="bg-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" aria-hidden="true" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/15 blur-[120px]" aria-hidden="true" />

          <div className="mx-auto w-full max-w-4xl text-center">
            <a href="/" className="inline-block" aria-label="Nasrallah Trading">
              <LogoMark className="mx-auto h-14 w-14" />
            </a>
            <p className="mt-8 bg-gradient-to-b from-gold-200 to-gold-600 bg-clip-text font-[family-name:var(--font-manrope)] text-[7rem] leading-none font-extrabold text-transparent sm:text-[10rem]">
              404
            </p>

            <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-white/10">
              {blocks.map(({ locale, dir, t, font }) => (
                <section key={locale} lang={locale} dir={dir} className={`${font} px-6`}>
                  <h1 className="text-2xl font-extrabold sm:text-3xl">{t.title}</h1>
                  <p className="mt-3 text-navy-200">{t.text}</p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <a href={`/${locale}/`} className="btn-gold">
                      {t.home}
                    </a>
                    <a href={`/${locale}/products/`} className="btn-ghost-light">
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
