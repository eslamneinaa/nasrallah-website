import { Info } from 'lucide-react'
import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { ProductsExplorer } from '@/components/products/ProductsExplorer'
import { getDictionary, href } from '@/i18n'
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
  const { products, categories, isSample } = await getCatalog()

  return (
    <>
      <PageHero
        title={dict.products.title}
        subtitle={dict.products.subtitle}
        crumbs={[{ label: dict.nav.home, href: href(locale) }, { label: dict.nav.products }]}
      />
      <section className="py-12 sm:py-16">
        <div className="container-page">
          {isSample && (
            <p className="mb-8 flex items-center gap-2 rounded-2xl bg-gold-50 px-4 py-3 text-sm font-medium text-gold-700 ring-1 ring-gold-200">
              <Info className="h-4 w-4 shrink-0" aria-hidden="true" />
              {dict.common.sampleNotice}
            </p>
          )}
          <ProductsExplorer
            locale={locale}
            products={products}
            categories={categories}
            dict={dict.products}
            cardCta={dict.common.viewDetails}
          />
        </div>
      </section>
    </>
  )
}
