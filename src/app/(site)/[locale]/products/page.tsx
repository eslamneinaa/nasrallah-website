import { ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { ProductsExplorer } from '@/components/products/ProductsExplorer'
import { getDictionary, href } from '@/i18n'
import { categoryHref, collections } from '@/lib/category-content'
import { getCatalog } from '@/lib/sanity/api'
import { pageMetadata, resolveLocale, type LocaleParams } from '@/lib/seo'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale).products
  return pageMetadata({ locale, path: 'products', title: dict.metaTitle, description: dict.metaDescription })
}

export default async function ProductsPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  const { products, categories } = await getCatalog()

  // Lets a search for «خزنة للبيت» or "home safe" find the home-safes collection.
  const tags: Record<string, string> = {}
  for (const collection of Object.values(collections))
    for (const slug of collection.products) tags[slug] = `${tags[slug] ?? ''} ${collection.label.ar} ${collection.label.en}`

  return (
    <>
      <PageHero
        title={dict.products.title}
        subtitle={dict.products.subtitle}
        crumbs={[{ label: dict.nav.home, href: href(locale) }, { label: dict.nav.products }]}
      />
      <section className="bg-pearl-100 py-12 sm:py-16">
        <div className="container-page">
          {/* Keeps the outline H1 → H2 → H3 (product names) for crawlers and screen readers. */}
          <h2 className="sr-only">{dict.nav.products}</h2>
          <p className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 border border-gold-500/40 bg-pearl-50 px-5 py-4 text-ink-700">
            <span>{dict.products.homeSafesPrompt}</span>
            <Link href={categoryHref(locale, 'home-safes')} className="inline-flex items-center gap-2 text-maroon-800 underline decoration-gold-500/60 underline-offset-4 hover:decoration-maroon-800">
              {dict.products.homeSafesLink}
              <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </p>
          <ProductsExplorer
            locale={locale}
            products={products}
            categories={categories}
            dict={dict.products}
            cardCta={dict.common.viewDetails}
            tags={tags}
          />
        </div>
      </section>
    </>
  )
}
