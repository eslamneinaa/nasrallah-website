import { ArrowUpRight, FileDown, Phone } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { WhatsAppIcon } from '@/components/icons'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { Diamond } from '@/components/ornaments'
import { PageHero } from '@/components/PageHero'
import { ProductCard } from '@/components/ProductCard'
import { ProductGallery } from '@/components/products/ProductGallery'
import { RichText } from '@/components/RichText'
import { SectionHeading } from '@/components/SectionHeading'
import { siteConfig, telHref, whatsappLink } from '@/config/site'
import { fill, getDictionary, href, pick } from '@/i18n'
import { getCatalog, getProduct, getRelatedProducts } from '@/lib/sanity/api'
import { pageMetadata, resolveLocale } from '@/lib/seo'

type Props = { params: Promise<{ locale: string; slug: string }> }

export const dynamicParams = false

export async function generateStaticParams() {
  const { products } = await getCatalog()
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const { slug } = await params
  const product = await getProduct(slug)
  if (!product) return {}
  const image = product.images[0]?.url
  return pageMetadata({
    locale,
    path: `products/${slug}`,
    title: pick(product.name, locale),
    description: pick(product.shortDesc, locale),
    image: image?.startsWith('https://') ? `${image}?w=1200&h=630&fit=crop&auto=format` : undefined,
  })
}

export default async function ProductPage({ params }: Props) {
  const locale = await resolveLocale(params)
  const { slug } = await params
  const product = await getProduct(slug)
  if (!product) notFound()

  const dict = getDictionary(locale)
  const t = dict.product
  const name = pick(product.name, locale) ?? ''
  const category = pick(product.category?.title, locale)
  const related = await getRelatedProducts(product)
  const quoteHref = `${href(locale, 'request-quote')}?product=${encodeURIComponent(name)}`
  const whatsapp = whatsappLink(fill(t.whatsappText, { product: name }))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description: pick(product.shortDesc, locale),
    image: product.images.map((i) => (i.url.startsWith('http') ? i.url : siteConfig.url + i.url)),
    category,
    brand: { '@type': 'Brand', name: siteConfig.name[locale] },
    url: siteConfig.url + href(locale, `products/${slug}`),
  }

  return (
    <>
      <PageHero
        title={name}
        subtitle={pick(product.shortDesc, locale)}
        crumbs={[
          { label: t.home, href: href(locale) },
          { label: t.products, href: href(locale, 'products') },
          ...(category && product.category ? [{ label: category, href: `${href(locale, 'products')}?category=${product.category.slug}` }] : []),
          { label: name },
        ]}
      />

      <section className="bg-khatam-light py-16 sm:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <ProductGallery images={product.images} name={name} labels={t} rtl={locale === 'ar'} />
            </Reveal>

            {pick(product.fullDesc, locale)?.length ? (
              <Reveal className="mt-16">
                <p className="eyebrow">{t.description}</p>
                <div className="mt-6 border-t border-gold-500/30 pt-8">
                  <RichText value={pick(product.fullDesc, locale)} />
                </div>
              </Reveal>
            ) : null}
          </div>

          <aside className="lg:col-span-5">
            <div className="space-y-8 lg:sticky lg:top-28">
              <Reveal delay={0.1} className="border border-gold-500/40 bg-pearl-50 p-7 shadow-card sm:p-9">
                {category && <p className="eyebrow">{category}</p>}
                <p className="display mt-3 text-3xl leading-snug text-maroon-900">{name}</p>

                <div className="mt-8 flex flex-col gap-3">
                  <Link href={quoteHref} className="btn-maroon w-full py-4">
                    {t.requestQuote}
                    <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" strokeWidth={1.5} aria-hidden="true" />
                  </Link>
                  {product.pdfUrl && (
                    <a href={`${product.pdfUrl}?dl=`} download className="btn-gold w-full py-4" rel="noopener">
                      <FileDown className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                      {t.downloadPdf}
                    </a>
                  )}
                  {whatsapp ? (
                    <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline w-full py-4">
                      <WhatsAppIcon className="h-4 w-4" />
                      {t.whatsapp}
                    </a>
                  ) : (
                    <a href={telHref(siteConfig.phones[0].tel)} className="btn-outline w-full py-4">
                      <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                      {t.call}
                    </a>
                  )}
                </div>

                <ul className="mt-8 grid gap-3 border-t border-pearl-300 pt-6">
                  {t.assurances.map((a) => (
                    <li key={a} className="flex items-center gap-3 text-sm text-ink-700">
                      <Diamond />
                      {a}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {product.specTable.length > 0 && (
                <Reveal delay={0.2}>
                  <h2 className="eyebrow">{t.specs}</h2>
                  <table className="mt-5 w-full border-t border-gold-500/40 text-start">
                    <thead className="sr-only">
                      <tr>
                        <th scope="col">{t.specLabel}</th>
                        <th scope="col">{t.specValue}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.specTable.map((row, i) => (
                        <tr key={i} className="border-b border-pearl-300">
                          <th scope="row" className="w-2/5 py-4 pe-4 text-start align-top text-sm font-normal text-ink-500">
                            {pick(row.label, locale)}
                          </th>
                          <td className="py-4 text-ink-900">{pick(row.value, locale)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Reveal>
              )}
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-pearl-100 py-20 sm:py-28">
          <div className="container-page">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading title={t.related} />
              <Link href={href(locale, 'products')} className="btn-outline shrink-0">
                {t.backToProducts}
              </Link>
            </div>
            <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <StaggerItem key={p._id}>
                  <ProductCard product={p} locale={locale} cta={dict.common.viewDetails} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
