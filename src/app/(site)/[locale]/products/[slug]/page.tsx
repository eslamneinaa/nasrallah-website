import { ArrowUpRight, FileDown, Phone, Plus } from 'lucide-react'
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
import { ShowcaseVideo } from '@/components/ShowcaseVideo'
import { productGuides } from '@/lib/product-guides'
import { imageAlt } from '@/lib/types'
import { siteConfig, telHref, whatsappLink } from '@/config/site'
import { fill, getDictionary, href, inBothLanguages, pick } from '@/i18n'
import { categoryHref } from '@/lib/category-content'
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
  // Bundled photos get a 1200×630 JPG share card (scripts/og-images.mjs): WhatsApp
  // shows it when a product link is shared. Sanity's CDN crops its own.
  const shareImage = image?.startsWith('https://')
    ? `${image}?w=1200&h=630&fit=fill&bg=fff&fm=jpg`
    : image?.match(/^\/products\/([\w-]+)\.webp$/)
      ? `/og${image.replace(/\.webp$/, '.jpg')}`
      : undefined
  // Local searches name the country, so the title does too unless it already does.
  const base = pick(product.seoTitle, locale) ?? pick(product.name, locale)
  const title = base && !/قطر|Qatar/.test(base) ? `${base} ${locale === 'ar' ? 'في قطر' : 'in Qatar'}` : base
  return pageMetadata({
    locale,
    path: `products/${slug}`,
    title,
    description: pick(product.shortDesc, locale),
    image: shareImage,
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
  const guide = productGuides[product.slug]?.[locale]
  const faqs = guide ? [guide.faq, { q: fill(t.orderFaq.q, { product: name }), a: t.orderFaq.a }] : []
  const quoteHref = `${href(locale, 'request-quote')}?product=${encodeURIComponent(name)}`
  const whatsapp = whatsappLink(
    inBothLanguages(locale, (d, lang) => fill(d.product.whatsappText, { product: pick(product.name, lang) || name })),
  )

  // The maker (UCHIDA, SAKURA…) comes from the product's own "Brand" spec row.
  const brandName = product.specTable.find((row) => row.label.en === 'Brand')?.value.en
  const pageUrl = siteConfig.url + href(locale, `products/${slug}`)
  const images = product.images.map((i) => (i.url.startsWith('http') ? i.url : siteConfig.url + i.url))
  // Google's product snippets need a price (or reviews), so only priced products
  // are marked up as Product; the rest are described as a plain item page.
  const item = product.price
    ? {
        '@type': 'Product',
        name,
        description: pick(product.shortDesc, locale),
        image: images,
        category,
        ...(brandName ? { brand: { '@type': 'Brand', name: brandName } } : {}),
        url: pageUrl,
        offers: {
          '@type': 'Offer',
          price: product.price,
          priceCurrency: 'QAR',
          availability: 'https://schema.org/InStock',
          url: pageUrl,
          seller: { '@id': `${siteConfig.url}/#business` },
        },
      }
    : {
        '@type': 'ItemPage',
        name,
        description: pick(product.shortDesc, locale),
        primaryImageOfPage: images[0],
        image: images,
        url: pageUrl,
        inLanguage: locale,
        isPartOf: { '@id': `${siteConfig.url}/#website` },
        // Ties the item to its maker and to the showroom that sells it, without the
        // Product type (which Google flags as an error when there is no price).
        sourceOrganization: { '@id': `${siteConfig.url}/#business` },
        keywords: [category, brandName].filter(Boolean).join(', '),
        ...(brandName ? { mentions: { '@type': 'Brand', name: brandName } } : {}),
      }
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      item,
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { name: t.home, item: siteConfig.url + href(locale) },
          { name: t.products, item: siteConfig.url + href(locale, 'products') },
          { name, item: pageUrl },
        ].map((crumb, i) => ({ '@type': 'ListItem', position: i + 1, ...crumb })),
      },
      ...(faqs.length
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
            },
          ]
        : []),
    ],
  }

  return (
    <>
      <PageHero
        title={name}
        subtitle={pick(product.shortDesc, locale)}
        crumbs={[
          { label: t.home, href: href(locale) },
          { label: t.products, href: href(locale, 'products') },
          ...(category && product.category ? [{ label: category, href: categoryHref(locale, product.category.slug) }] : []),
          { label: name },
        ]}
      />

      <section className="bg-khatam-light py-16 sm:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <ProductGallery
                images={product.images.map((image) => ({ ...image, alt: imageAlt(image, locale) }))}
                name={name}
                labels={t}
                rtl={locale === 'ar'}
              />
            </Reveal>

            {product.video && (
              <Reveal className="mt-16 grid items-center gap-8 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-10">
                <ShowcaseVideo
                  src={product.video.url}
                  poster={product.video.poster}
                  label={pick(product.video.label, locale) || name}
                  labels={dict.common.video}
                  className="mx-auto aspect-[9/16] w-full max-w-64 outline outline-1 outline-offset-[10px] outline-gold-500/40"
                />
                <div>
                  <p className="eyebrow">{t.videoEyebrow}</p>
                  <h2 className="display mt-4 text-3xl text-maroon-900">{t.videoTitle}</h2>
                  <p className="mt-4 leading-relaxed text-ink-500">{t.videoBody}</p>
                </div>
              </Reveal>
            )}

            {pick(product.fullDesc, locale)?.length ? (
              <Reveal className="mt-16">
                <p className="eyebrow">{t.description}</p>
                <div className="mt-6 border-t border-gold-500/30 pt-8">
                  <RichText value={pick(product.fullDesc, locale)} />
                </div>
              </Reveal>
            ) : null}

            {guide && (
              <Reveal className="mt-16 grid gap-12 sm:grid-cols-2 sm:gap-10">
                <div>
                  <h2 className="eyebrow">{t.idealFor}</h2>
                  <ul className="mt-6 grid gap-4 border-t border-gold-500/30 pt-6">
                    {guide.idealFor.map((use) => (
                      <li key={use} className="flex gap-3 leading-relaxed text-ink-700">
                        <Diamond className="mt-2 shrink-0" />
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="eyebrow">{t.faq}</h2>
                  <div className="mt-6 border-t border-gold-500/30">
                    {faqs.map(({ q, a }) => (
                      <details key={q} className="group border-b border-gold-500/30">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-start [&::-webkit-details-marker]:hidden">
                          <h3 className="font-medium text-maroon-900">{q}</h3>
                          <Plus className="h-4 w-4 shrink-0 text-gold-600 transition duration-300 group-open:rotate-45" strokeWidth={1.4} aria-hidden="true" />
                        </summary>
                        <p className="pb-5 leading-relaxed text-ink-500">{a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
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
            <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
