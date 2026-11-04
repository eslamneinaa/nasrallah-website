import { ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { WhatsAppIcon } from '@/components/icons'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { Diamond } from '@/components/ornaments'
import { PageHero } from '@/components/PageHero'
import { ProductCard } from '@/components/ProductCard'
import { SectionHeading } from '@/components/SectionHeading'
import { siteConfig, whatsappLink } from '@/config/site'
import { fill, getDictionary, href, inBothLanguages, pick } from '@/i18n'
import { formatArticleDate, getArticle, getArticles, type ArticleLink } from '@/lib/articles'
import { getCatalog } from '@/lib/sanity/api'
import { pageMetadata, resolveLocale } from '@/lib/seo'
import type { Locale } from '@/lib/types'

type Props = { params: Promise<{ locale: string; slug: string }> }

export const dynamicParams = false

export async function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return {
    ...pageMetadata({ locale, path: `articles/${slug}`, title: article.title[locale], description: article.description[locale] }),
    keywords: article.keywords[locale],
  }
}

export default async function ArticlePage({ params }: Props) {
  const locale = await resolveLocale(params)
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const dict = getDictionary(locale)
  const t = dict.articles
  const title = article.title[locale]
  const { products, categories } = await getCatalog()
  const related = article.products.flatMap((s) => products.find((p) => p.slug === s) ?? [])
  const links = article.links.flatMap((link) => resolveLink(link, locale) ?? [])
  const whatsapp = whatsappLink(inBothLanguages(locale, (d, lang) => fill(d.articles.whatsappText, { article: article.title[lang] })))

  function resolveLink(link: ArticleLink, l: Locale) {
    if ('page' in link) {
      const label = { products: dict.nav.products, 'safe-buying-guide': dict.nav.guide, contact: dict.nav.contact, 'request-quote': dict.nav.quote }[link.page]
      return { href: href(l, link.page), label }
    }
    if ('category' in link) {
      const category = categories.find((c) => c.slug === link.category)
      return category && { href: `${href(l, 'products')}?category=${category.slug}`, label: pick(category.title, l) ?? '' }
    }
    const other = getArticle(link.article)
    return other && { href: href(l, `articles/${other.slug}`), label: other.title[l] }
  }

  const pageUrl = siteConfig.url + href(locale, `articles/${slug}`)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: title,
        description: article.description[locale],
        keywords: article.keywords[locale],
        inLanguage: locale,
        datePublished: article.date,
        dateModified: article.date,
        url: pageUrl,
        mainEntityOfPage: pageUrl,
        image: `${siteConfig.url}/og.jpg`,
        author: { '@id': `${siteConfig.url}/#business` },
        publisher: { '@id': `${siteConfig.url}/#business` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { name: dict.nav.home, item: siteConfig.url + href(locale) },
          { name: t.title, item: siteConfig.url + href(locale, 'articles') },
          { name: title, item: pageUrl },
        ].map((crumb, i) => ({ '@type': 'ListItem', position: i + 1, ...crumb })),
      },
    ],
  }

  return (
    <>
      <PageHero
        title={title}
        subtitle={article.description[locale]}
        crumbs={[{ label: dict.nav.home, href: href(locale) }, { label: t.title, href: href(locale, 'articles') }, { label: title }]}
      />
      <section className="bg-khatam-light py-16 sm:py-24">
        <Reveal className="container-page max-w-3xl">
          <p className="eyebrow">
            {t.published} <time dateTime={article.date}>{formatArticleDate(article.date, locale)}</time>
          </p>
          <article className="mt-6 border-t border-gold-500/25 pt-4">
            {article.body[locale].map((block, i) =>
              'h' in block ? (
                <h2 key={i} className="display mt-10 text-2xl text-maroon-900">
                  {block.h}
                </h2>
              ) : 'ul' in block ? (
                <ul key={i} className="mt-5 grid gap-3">
                  {block.ul.map((item) => (
                    <li key={item} className="flex gap-3 leading-loose text-ink-500">
                      <Diamond className="mt-3 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p key={i} className="mt-5 leading-loose text-ink-500">
                  {block.p}
                </p>
              ),
            )}
          </article>

          <div className="mt-14 border border-gold-500/40 bg-pearl-50 p-8 text-center shadow-card sm:p-10">
            <h2 className="display text-2xl text-maroon-900 sm:text-3xl">{t.ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-ink-500">{t.ctaBody}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              {whatsapp && (
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-maroon">
                  <WhatsAppIcon className="h-4 w-4" />
                  {t.whatsapp}
                </a>
              )}
              <Link href={href(locale, 'request-quote')} className="btn-outline">
                {t.ctaQuote}
              </Link>
            </div>
          </div>

          {links.length > 0 && (
            <nav aria-label={t.relatedLinks} className="mt-14">
              <h2 className="eyebrow">{t.relatedLinks}</h2>
              <ul className="mt-5 divide-y divide-gold-500/20 border-y border-gold-500/20">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="group flex items-center justify-between gap-4 py-4 text-maroon-900 transition hover:text-maroon-700">
                      {link.label}
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-gold-600 rtl:-scale-x-100" strokeWidth={1.5} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href={href(locale, 'articles')} className="flex items-center justify-between gap-4 py-4 text-maroon-900 transition hover:text-maroon-700">
                    {t.allArticles}
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-gold-600 rtl:-scale-x-100" strokeWidth={1.5} aria-hidden="true" />
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </Reveal>
      </section>

      {related.length > 0 && (
        <section className="bg-pearl-100 py-20 sm:py-28">
          <div className="container-page">
            <SectionHeading title={t.relatedProducts} />
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
