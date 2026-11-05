import { ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/CtaBand'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { PageHero } from '@/components/PageHero'
import { ProductCard } from '@/components/ProductCard'
import { siteConfig } from '@/config/site'
import { getDictionary, href, pick } from '@/i18n'
import { categoryContent } from '@/lib/category-content'
import { getCatalog } from '@/lib/sanity/api'
import { pageMetadata, resolveLocale } from '@/lib/seo'

type Props = { params: Promise<{ locale: string; slug: string }> }

export const dynamicParams = false

export async function generateStaticParams() {
  const { categories } = await getCatalog()
  return categories.filter((c) => categoryContent[c.slug]).map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const { slug } = await params
  const copy = categoryContent[slug]?.[locale]
  if (!copy) return {}
  return pageMetadata({ locale, path: `categories/${slug}`, title: copy.metaTitle, description: copy.description })
}

/** A landing page per product category, so each one can rank for its own searches. */
export default async function CategoryPage({ params }: Props) {
  const locale = await resolveLocale(params)
  const { slug } = await params
  const copy = categoryContent[slug]?.[locale]
  const { products, categories } = await getCatalog()
  const category = categories.find((c) => c.slug === slug)
  if (!copy || !category) notFound()

  const dict = getDictionary(locale)
  const items = products.filter((p) => p.category?.slug === slug)
  const others = categories.filter((c) => c.slug !== slug && categoryContent[c.slug])
  const pageUrl = siteConfig.url + href(locale, `categories/${slug}`)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: copy.heading,
        description: copy.description,
        inLanguage: locale,
        url: pageUrl,
        isPartOf: { '@id': `${siteConfig.url}/#website` },
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
          { name: pick(category.title, locale), item: pageUrl },
        ].map((crumb, i) => ({ '@type': 'ListItem', position: i + 1, ...crumb })),
      },
    ],
  }

  return (
    <>
      <PageHero
        title={copy.heading}
        crumbs={[
          { label: dict.nav.home, href: href(locale) },
          { label: dict.nav.products, href: href(locale, 'products') },
          { label: pick(category.title, locale) ?? '' },
        ]}
      />
      <section className="bg-khatam-light py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl space-y-4 text-center">
            {copy.intro.map((p) => (
              <p key={p} className="leading-loose text-ink-500">
                {p}
              </p>
            ))}
          </Reveal>

          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <StaggerItem key={p._id}>
                <ProductCard product={p} locale={locale} cta={dict.common.viewDetails} />
              </StaggerItem>
            ))}
          </Stagger>

          <nav aria-label={dict.categoryPage.other} className="mx-auto mt-16 max-w-4xl text-center">
            <h2 className="eyebrow justify-center">{dict.categoryPage.other}</h2>
            <ul className="mt-6 flex flex-wrap justify-center gap-2">
              {others.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={href(locale, `categories/${c.slug}`)}
                    className="inline-block border border-gold-500/40 bg-pearl-50 px-4 py-2 text-sm text-maroon-900 transition hover:border-gold-500 hover:bg-pearl-100"
                  >
                    {pick(c.title, locale)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={href(locale, 'products')}
                  className="inline-flex items-center gap-2 border border-maroon-900 px-4 py-2 text-sm text-maroon-900 transition hover:bg-maroon-900 hover:text-pearl-50"
                >
                  {dict.categoryPage.all}
                  <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" strokeWidth={1.5} aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <CtaBand locale={locale} dict={dict.ctaBand} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
