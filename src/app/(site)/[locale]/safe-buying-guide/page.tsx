import { ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Reveal } from '@/components/motion/Reveal'
import { PageHero } from '@/components/PageHero'
import { siteConfig } from '@/config/site'
import { getDictionary, href } from '@/i18n'
import { pageMetadata, resolveLocale, type LocaleParams } from '@/lib/seo'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale).guide
  return pageMetadata({ locale, path: 'safe-buying-guide', title: dict.metaTitle, description: dict.metaDescription })
}

/** Long-form buying guide: answers "which safe / where to buy in Qatar" searches. */
export default async function SafeBuyingGuidePage({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  const t = dict.guide

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: t.metaTitle,
    description: t.metaDescription,
    inLanguage: locale,
    url: siteConfig.url + href(locale, 'safe-buying-guide'),
    image: `${siteConfig.url}/og.jpg`,
    author: { '@id': `${siteConfig.url}/#business` },
    publisher: { '@id': `${siteConfig.url}/#business` },
  }

  return (
    <>
      <PageHero title={t.title} subtitle={t.subtitle} crumbs={[{ label: dict.nav.home, href: href(locale) }, { label: t.title }]} />
      <section className="bg-khatam-light py-16 sm:py-24">
        <Reveal className="container-page max-w-3xl">
          <p className="display text-xl leading-loose text-maroon-900 sm:text-2xl">{t.intro}</p>
          <div className="mt-14 divide-y divide-gold-500/25 border-y border-gold-500/25">
            {t.sections.map((section) => (
              <section key={section.title} className="py-10">
                <h2 className="display text-2xl text-maroon-900">{section.title}</h2>
                <div className="mt-4 space-y-3">
                  {section.body.map((p) => (
                    <p key={p} className="leading-loose text-ink-500">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-14 border border-gold-500/40 bg-pearl-50 p-8 text-center shadow-card sm:p-10">
            <h2 className="display text-2xl text-maroon-900 sm:text-3xl">{t.ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-ink-500">{t.ctaBody}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href={href(locale, 'products')} className="btn-maroon">
                {t.ctaProducts}
                <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" strokeWidth={1.5} aria-hidden="true" />
              </Link>
              <Link href={href(locale, 'request-quote')} className="btn-outline">
                {t.ctaQuote}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
