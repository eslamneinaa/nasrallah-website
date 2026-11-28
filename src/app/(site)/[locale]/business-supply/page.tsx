import { ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { CtaBand } from '@/components/CtaBand'
import { ClientMarquee } from '@/components/home/ClientMarquee'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { PageFaq, faqJsonLd } from '@/components/PageFaq'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { siteConfig } from '@/config/site'
import { getDictionary, href, pick } from '@/i18n'
import { businessSupply } from '@/lib/business-supply'
import { categoryHref } from '@/lib/category-content'
import { getCatalog, getClientLogos } from '@/lib/sanity/api'
import { pageMetadata, resolveLocale, type LocaleParams } from '@/lib/seo'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = businessSupply[locale]
  return pageMetadata({ locale, path: 'business-supply', title: t.metaTitle, description: t.description })
}

/** Supply for companies, government bodies and projects: which products suit each sector, and how a bulk order works. */
export default async function BusinessSupplyPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  const t = businessSupply[locale]
  const [{ categories }, clients] = await Promise.all([getCatalog(), getClientLogos()])
  const categoryName = (slug: string) => pick(categories.find((c) => c.slug === slug)?.title, locale)
  const pageUrl = siteConfig.url + href(locale, 'business-supply')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: t.heading,
        description: t.description,
        serviceType: t.metaTitle,
        areaServed: { '@type': 'Country', name: locale === 'ar' ? 'قطر' : 'Qatar' },
        provider: { '@id': `${siteConfig.url}/#business` },
        url: pageUrl,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { name: dict.nav.home, item: siteConfig.url + href(locale) },
          { name: dict.nav.supply, item: pageUrl },
        ].map((crumb, i) => ({ '@type': 'ListItem', position: i + 1, ...crumb })),
      },
      faqJsonLd(t.faq),
    ],
  }

  return (
    <>
      <PageHero title={t.heading} subtitle={t.subtitle} crumbs={[{ label: dict.nav.home, href: href(locale) }, { label: dict.nav.supply }]} />
      <section className="bg-khatam-light py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl space-y-4 text-center">
            {t.intro.map((p) => (
              <p key={p} className="leading-loose text-ink-500">
                {p}
              </p>
            ))}
          </Reveal>

          <h2 className="display mt-16 text-center text-[1.75rem] leading-snug text-maroon-900 sm:text-3xl">{t.sectorsTitle}</h2>
          <Stagger className="mx-auto mt-10 grid max-w-6xl gap-px border border-gold-500/30 bg-gold-500/30 sm:grid-cols-2 lg:grid-cols-3">
            {t.sectors.map((sector) => (
              <StaggerItem key={sector.title} className="flex flex-col bg-pearl-50 p-7">
                <h3 className="display text-xl leading-snug text-maroon-900">{sector.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink-500">{sector.body}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {sector.categories.map((slug) => (
                    <li key={slug}>
                      <Link
                        href={categoryHref(locale, slug)}
                        className="inline-block border border-gold-500/40 px-3 py-1.5 text-sm text-maroon-900 transition hover:border-gold-500 hover:bg-pearl-100"
                      >
                        {categoryName(slug)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mx-auto mt-20 max-w-3xl">
            <h2 className="display text-[1.75rem] leading-snug text-maroon-900 sm:text-3xl">{t.stepsTitle}</h2>
            <ol className="mt-6 space-y-4">
              {t.steps.map((step, i) => (
                <li key={step} className="flex gap-4 leading-loose text-ink-500">
                  <span className="display mt-0.5 text-xl text-gold-600">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
            <Link href={href(locale, 'request-quote')} className="btn-maroon mt-8">
              {t.cta}
              <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" strokeWidth={1.5} aria-hidden="true" />
            </Link>

            <PageFaq title={dict.common.faq} items={t.faq} className="mt-16" />
          </div>
        </div>
      </section>
      {clients.length > 0 && (
        <section className="py-20">
          <div className="container-page">
            <SectionHeading eyebrow={dict.clients.eyebrow} title={t.clientsTitle} align="center" />
          </div>
          <div className="mt-12">
            <ClientMarquee clients={clients} />
          </div>
        </section>
      )}
      <CtaBand locale={locale} dict={dict.ctaBand} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
