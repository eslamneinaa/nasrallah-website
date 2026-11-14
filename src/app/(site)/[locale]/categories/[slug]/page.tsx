import { ArrowUpRight, Plus } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Fragment } from 'react'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/CtaBand'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { PageHero } from '@/components/PageHero'
import { ProductCard } from '@/components/ProductCard'
import { siteConfig } from '@/config/site'
import { fill, getDictionary, href, pick } from '@/i18n'
import { getArticle } from '@/lib/articles'
import { categoryContent, collections } from '@/lib/category-content'
import { categoryGuides, categoryHighlights } from '@/lib/category-guides'
import { productDetails } from '@/lib/product-details'
import { getCatalog } from '@/lib/sanity/api'
import { pageMetadata, resolveLocale } from '@/lib/seo'

type Props = { params: Promise<{ locale: string; slug: string }> }

export const dynamicParams = false

export async function generateStaticParams() {
  const { categories } = await getCatalog()
  const slugs = categories.filter((c) => categoryContent[c.slug]).map((c) => c.slug)
  return [...slugs, ...Object.keys(collections)].map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const { slug } = await params
  const copy = categoryContent[slug]?.[locale]
  if (!copy) return {}
  return pageMetadata({ locale, path: `categories/${slug}`, title: copy.metaTitle, description: copy.description })
}

/** A landing page per product category or collection, so each one can rank for its own searches. */
export default async function CategoryPage({ params }: Props) {
  const locale = await resolveLocale(params)
  const { slug } = await params
  const copy = categoryContent[slug]?.[locale]
  const { products, categories } = await getCatalog()
  const category = categories.find((c) => c.slug === slug)
  const collection = collections[slug]
  if (!copy || (!category && !collection)) notFound()

  const dict = getDictionary(locale)
  const label = collection ? collection.label[locale] : (pick(category?.title, locale) ?? '')
  const article = collection?.article ? getArticle(collection.article) : undefined
  const items = collection
    ? collection.products.flatMap((s) => products.find((p) => p.slug === s) ?? [])
    : products.filter((p) => p.category?.slug === slug)
  const others = [
    ...Object.entries(collections).map(([s, c]) => ({ slug: s, label: c.label[locale] })),
    ...categories.filter((c) => categoryContent[c.slug]).map((c) => ({ slug: c.slug, label: pick(c.title, locale) ?? '' })),
  ].filter((c) => c.slug !== slug)
  const pageUrl = siteConfig.url + href(locale, `categories/${slug}`)
  const guide = categoryGuides[slug]?.[locale]
  // Side-by-side figures from the company sheet (only rows that have a model or a price).
  const compared = items.flatMap((p) => {
    const d = productDetails[p.slug]
    return d && (d.model || d.price) ? [{ p, d }] : []
  })
  const prices = compared.flatMap(({ d }) => (d.price ? [d.price] : []))
  const fmt = (n: number) => new Intl.NumberFormat('en-US').format(n)
  const highlights = (categoryHighlights[slug] ?? []).flatMap((s) => products.find((p) => p.slug === s) ?? [])
  const join = (i: number) => (i === 0 ? '' : i === highlights.length - 1 ? (locale === 'ar' ? ' و' : ' and ') : locale === 'ar' ? '، ' : ', ')

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
          { name: label, item: pageUrl },
        ].map((crumb, i) => ({ '@type': 'ListItem', position: i + 1, ...crumb })),
      },
      ...(guide
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: guide.faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
            },
          ]
        : []),
    ],
  }

  return (
    <>
      <PageHero
        title={copy.heading}
        crumbs={[
          { label: dict.nav.home, href: href(locale) },
          { label: dict.nav.products, href: href(locale, 'products') },
          { label },
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
            {highlights.length > 0 && (
              <p className="leading-loose text-ink-500">
                {dict.categoryPage.highlights}{' '}
                {highlights.map((p, i) => (
                  <Fragment key={p.slug}>
                    {join(i)}
                    <Link href={href(locale, `products/${p.slug}`)} className="text-maroon-800 underline decoration-gold-500/60 underline-offset-4 hover:decoration-maroon-800">
                      {pick(p.name, locale)}
                    </Link>
                  </Fragment>
                ))}
                .
              </p>
            )}
            {article && (
              <Link
                href={href(locale, `articles/${article.slug}`)}
                className="inline-flex items-center gap-2 font-medium text-maroon-700 underline-offset-4 hover:underline"
              >
                {article.title[locale]}
                <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" strokeWidth={1.5} aria-hidden="true" />
              </Link>
            )}
          </Reveal>

          {/* Keeps the outline H1 → H2 → H3 (product names) for crawlers and screen readers. */}
          <h2 className="sr-only">{label}</h2>
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <StaggerItem key={p._id}>
                <ProductCard product={p} locale={locale} cta={dict.common.viewDetails} />
              </StaggerItem>
            ))}
          </Stagger>

          {compared.length > 1 && (
            <section className="mx-auto mt-20 max-w-5xl">
              <h2 className="display text-[1.75rem] leading-snug text-maroon-900 sm:text-3xl">{fill(dict.categoryPage.compareTitle, { label })}</h2>
              {prices.length > 1 && (
                <p className="mt-3 text-ink-500">
                  {fill(dict.categoryPage.priceRange, { min: fmt(Math.min(...prices)), max: fmt(Math.max(...prices)) })}
                </p>
              )}
              <div className="mt-6 overflow-x-auto border border-gold-500/30 bg-pearl-50">
                <table className="w-full min-w-[40rem] text-start text-sm">
                  <thead className="bg-pearl-100 text-ink-500">
                    <tr>
                      {dict.categoryPage.compareCols.map((c) => (
                        <th key={c} scope="col" className="px-4 py-3 text-start font-medium">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {compared.map(({ p, d }) => (
                      <tr key={p.slug} className="border-t border-pearl-300">
                        <th scope="row" className="px-4 py-3 text-start font-normal">
                          <Link href={href(locale, `products/${p.slug}`)} className="text-maroon-800 underline decoration-gold-500/60 underline-offset-4 hover:decoration-maroon-800">
                            {pick(p.name, locale)}
                          </Link>
                        </th>
                        <td className="px-4 py-3 whitespace-nowrap" dir="ltr">{d.model ?? '—'}</td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          {d.fireHours ? (locale === 'ar' ? (d.fireHours === 2 ? 'ساعتان' : 'ساعة') : `${d.fireHours} h`) : '—'}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap" dir="ltr">{d.outside ? `${d.outside.join(' × ')} cm` : '—'}</td>
                        <td className="px-4 py-3 whitespace-nowrap">{d.weightKg ? `${d.weightKg} ${locale === 'ar' ? 'كجم' : 'kg'}` : '—'}</td>
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-maroon-900">
                          {d.price ? (locale === 'ar' ? `${fmt(d.price)} ر.ق` : `QAR ${fmt(d.price)}`) : dict.product.priceOnRequest}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Buying advice and FAQs: plain text and <details>, so every answer is in the HTML. */}
          {guide && (
            <div className="mx-auto mt-20 max-w-3xl">
              <Reveal>
                <h2 className="display text-[1.75rem] leading-snug text-maroon-900 sm:text-3xl">{guide.title}</h2>
                {guide.body.map((p) => (
                  <p key={p} className="mt-5 leading-loose text-ink-500">
                    {p}
                  </p>
                ))}
              </Reveal>
              <Reveal className="mt-12">
                <h2 className="eyebrow">{dict.categoryPage.faq}</h2>
                <div className="mt-4 border-t border-gold-500/30">
                  {guide.faq.map(({ q, a }) => (
                    <details key={q} className="group border-b border-gold-500/30">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-start [&::-webkit-details-marker]:hidden">
                        <h3 className="display text-lg text-maroon-900 sm:text-xl">{q}</h3>
                        <Plus className="h-5 w-5 shrink-0 text-gold-600 transition duration-300 group-open:rotate-45" strokeWidth={1.4} aria-hidden="true" />
                      </summary>
                      <p className="pb-6 leading-loose text-ink-500">{a}</p>
                    </details>
                  ))}
                </div>
              </Reveal>
            </div>
          )}

          <nav aria-label={dict.categoryPage.other} className="mx-auto mt-16 max-w-4xl text-center">
            <h2 className="eyebrow justify-center">{dict.categoryPage.other}</h2>
            <ul className="mt-6 flex flex-wrap justify-center gap-2">
              {others.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={href(locale, `categories/${c.slug}`)}
                    className="inline-block border border-gold-500/40 bg-pearl-50 px-4 py-2 text-sm text-maroon-900 transition hover:border-gold-500 hover:bg-pearl-100"
                  >
                    {c.label}
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
