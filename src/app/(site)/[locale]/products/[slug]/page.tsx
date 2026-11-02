import { ArrowUpRight, CheckCircle2, FileDown } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { WhatsAppIcon } from '@/components/icons'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { PageHero } from '@/components/PageHero'
import { ProductCard } from '@/components/ProductCard'
import { ProductGallery } from '@/components/products/ProductGallery'
import { RichText } from '@/components/RichText'
import { SectionHeading } from '@/components/SectionHeading'
import { siteConfig, whatsappLink } from '@/config/site'
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
          ...(category && product.category
            ? [{ label: category, href: `${href(locale, 'products')}?category=${product.category.slug}` }]
            : []),
          { label: name },
        ]}
      />

      <section className="py-14 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <ProductGallery images={product.images} name={name} labels={t} rtl={locale === 'ar'} />
            </Reveal>

            {pick(product.fullDesc, locale)?.length ? (
              <Reveal className="mt-14">
                <h2 className="mb-6 font-display text-2xl font-extrabold text-navy-950">{t.description}</h2>
                <RichText value={pick(product.fullDesc, locale)} />
              </Reveal>
            ) : null}
          </div>

          <aside className="lg:col-span-5">
            <div className="space-y-6 lg:sticky lg:top-28">
              <Reveal delay={0.1} className="rounded-[2rem] bg-white p-7 shadow-card ring-1 ring-navy-100 sm:p-8">
                {category && (
                  <span className="inline-flex rounded-full bg-gold-50 px-3 py-1 text-xs font-bold text-gold-700 ring-1 ring-gold-200">
                    {category}
                  </span>
                )}
                <p className="mt-4 text-2xl font-extrabold text-navy-950">{name}</p>

                <div className="mt-6 flex flex-col gap-3">
                  <Link href={quoteHref} className="btn-gold w-full py-4 text-base">
                    {t.requestQuote}
                    <ArrowUpRight className="h-5 w-5 rtl:-scale-x-100" aria-hidden="true" />
                  </Link>
                  {product.pdfUrl && (
                    <a href={`${product.pdfUrl}?dl=`} download className="btn-navy w-full py-4 text-base" rel="noopener">
                      <FileDown className="h-5 w-5" aria-hidden="true" />
                      {t.downloadPdf}
                    </a>
                  )}
                  <a
                    href={whatsappLink(fill(t.whatsappText, { product: name }))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost w-full py-4 text-base"
                  >
                    <WhatsAppIcon className="h-5 w-5 text-[#25d366]" />
                    {t.whatsapp}
                  </a>
                </div>

                <ul className="mt-6 grid gap-2 border-t border-navy-100 pt-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {t.assurances.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-sm font-semibold text-navy-700">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
                      {a}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {product.specTable.length > 0 && (
                <Reveal delay={0.2} className="overflow-hidden rounded-[2rem] ring-1 ring-navy-100">
                  <h2 className="bg-navy-950 px-7 py-5 text-lg font-bold text-white">{t.specs}</h2>
                  <table className="w-full text-start text-sm">
                    <thead className="sr-only">
                      <tr>
                        <th scope="col">{t.specLabel}</th>
                        <th scope="col">{t.specValue}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.specTable.map((row, i) => (
                        <tr key={i} className="border-b border-navy-100 last:border-0 odd:bg-navy-50/50">
                          <th scope="row" className="w-2/5 px-7 py-4 text-start align-top font-semibold text-navy-500">
                            {pick(row.label, locale)}
                          </th>
                          <td className="px-7 py-4 font-semibold text-navy-950">{pick(row.value, locale)}</td>
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
        <section className="bg-navy-50/60 py-20 sm:py-28">
          <div className="container-page">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading title={t.related} />
              <Link href={href(locale, 'products')} className="inline-flex items-center gap-2 font-bold text-navy-900 hover:text-gold-700">
                {t.backToProducts}
                <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />
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
