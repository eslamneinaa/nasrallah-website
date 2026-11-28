import { ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/CtaBand'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { PageFaq, faqJsonLd } from '@/components/PageFaq'
import { PageHero } from '@/components/PageHero'
import { ProductCard } from '@/components/ProductCard'
import { siteConfig } from '@/config/site'
import { getDictionary, href, pick } from '@/i18n'
import { getArticle } from '@/lib/articles'
import { brandPages, brandProducts } from '@/lib/brands'
import { categoryHref } from '@/lib/category-content'
import { getCatalog } from '@/lib/sanity/api'
import { pageMetadata, resolveLocale } from '@/lib/seo'

type Props = { params: Promise<{ locale: string; slug: string }> }

export const dynamicParams = false

export async function generateStaticParams() {
  return brandPages.map((b) => ({ slug: b.slug }))
}

const findBrand = (slug: string) => brandPages.find((b) => b.slug === slug)

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const brand = findBrand((await params).slug)
  if (!brand) return {}
  return pageMetadata({ locale, path: `brands/${brand.slug}`, title: brand.metaTitle[locale], description: brand.description[locale] })
}

/** A landing page per brand: what we carry from it, each model, and the questions people ask about it. */
export default async function BrandPage({ params }: Props) {
  const locale = await resolveLocale(params)
  const brand = findBrand((await params).slug)
  if (!brand) notFound()

  const dict = getDictionary(locale)
  const t = dict.brandPage
  const { products, categories } = await getCatalog()
  const items = brandProducts(brand, products)
  // The categories this brand's products are in, in catalogue order.
  const sections = categories.filter((c) => items.some((p) => p.category?.slug === c.slug))
  const others = brandPages.filter((b) => b.slug !== brand.slug)
  const compared = getArticle('uchida-sakura-godrej-compared')
  const pageUrl = siteConfig.url + href(locale, `brands/${brand.slug}`)
  const faq = brand.faq[locale]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: brand.heading[locale],
        description: brand.description[locale],
        inLanguage: locale,
        url: pageUrl,
        isPartOf: { '@id': `${siteConfig.url}/#website` },
        about: { '@type': 'Brand', name: brand.name, alternateName: brand.arabicName },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: items.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: pick(p.name, locale),
            url: siteConfig.url + href(locale, `products/${p.slug}`),
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { name: dict.nav.home, item: siteConfig.url + href(locale) },
          { name: dict.nav.products, item: siteConfig.url + href(locale, 'products') },
          { name: brand.name, item: pageUrl },
        ].map((crumb, i) => ({ '@type': 'ListItem', position: i + 1, ...crumb })),
      },
      faqJsonLd(faq),
    ],
  }

  return (
    <>
      <PageHero
        title={brand.heading[locale]}
        crumbs={[{ label: dict.nav.home, href: href(locale) }, { label: dict.nav.products, href: href(locale, 'products') }, { label: brand.name }]}
      />
      <section className="bg-khatam-light py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl space-y-4 text-center">
            {brand.intro[locale].map((p) => (
              <p key={p} className="leading-loose text-ink-500">
                {p}
              </p>
            ))}
          </Reveal>

          <h2 className="display mt-16 text-center text-[1.75rem] leading-snug text-maroon-900 sm:text-3xl">
            {t.models.replace('{brand}', brand.name)}
          </h2>
          <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <StaggerItem key={p._id}>
                <ProductCard product={p} locale={locale} cta={dict.common.viewDetails} />
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mx-auto mt-20 max-w-3xl">
            <PageFaq title={dict.common.faq} items={faq} />
          </div>

          <nav aria-label={t.sections} className="mx-auto mt-16 max-w-4xl text-center">
            <h2 className="eyebrow justify-center">{t.sections}</h2>
            <ul className="mt-6 flex flex-wrap justify-center gap-2">
              {sections.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={categoryHref(locale, c.slug)}
                    className="inline-block border border-gold-500/40 bg-pearl-50 px-4 py-2 text-sm text-maroon-900 transition hover:border-gold-500 hover:bg-pearl-100"
                  >
                    {pick(c.title, locale)}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="eyebrow mt-12 justify-center">{t.others}</h2>
            <ul className="mt-6 flex flex-wrap justify-center gap-2">
              {others.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={href(locale, `brands/${b.slug}`)}
                    className="inline-block border border-gold-500/40 bg-pearl-50 px-4 py-2 text-sm text-maroon-900 transition hover:border-gold-500 hover:bg-pearl-100"
                  >
                    {b.heading[locale]}
                  </Link>
                </li>
              ))}
              {compared && (
                <li>
                  <Link
                    href={href(locale, `articles/${compared.slug}`)}
                    className="inline-flex items-center gap-2 border border-maroon-900 px-4 py-2 text-sm text-maroon-900 transition hover:bg-maroon-900 hover:text-pearl-50"
                  >
                    {compared.title[locale]}
                    <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" strokeWidth={1.5} aria-hidden="true" />
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </section>
      <CtaBand locale={locale} dict={dict.ctaBand} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
