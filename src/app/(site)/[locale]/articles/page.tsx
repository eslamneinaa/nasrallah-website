import { ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Stagger, StaggerItem } from '@/components/motion/Reveal'
import { PageHero } from '@/components/PageHero'
import { siteConfig } from '@/config/site'
import { getDictionary, href } from '@/i18n'
import { formatArticleDate, getArticles } from '@/lib/articles'
import { pageMetadata, resolveLocale, type LocaleParams } from '@/lib/seo'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = getDictionary(locale).articles
  return pageMetadata({ locale, path: 'articles', title: t.metaTitle, description: t.metaDescription })
}

/** Article index: the published articles, newest first. */
export default async function ArticlesPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  const t = dict.articles
  const articles = getArticles()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: t.metaTitle,
    description: t.metaDescription,
    inLanguage: locale,
    url: siteConfig.url + href(locale, 'articles'),
    publisher: { '@id': `${siteConfig.url}/#business` },
    blogPost: articles.map((a) => ({
      '@type': 'BlogPosting',
      headline: a.title[locale],
      datePublished: a.date,
      url: siteConfig.url + href(locale, `articles/${a.slug}`),
    })),
  }

  return (
    <>
      <PageHero title={t.title} subtitle={t.subtitle} crumbs={[{ label: dict.nav.home, href: href(locale) }, { label: t.title }]} />
      <section className="bg-khatam-light py-16 sm:py-24">
        <Stagger className="container-page grid max-w-5xl gap-6 md:grid-cols-2">
          {articles.map((a) => (
            <StaggerItem key={a.slug}>
              <Link
                href={href(locale, `articles/${a.slug}`)}
                className="group flex h-full flex-col border border-gold-500/30 bg-pearl-50 p-7 shadow-card transition hover:border-gold-500/70 sm:p-9"
              >
                <time dateTime={a.date} className="eyebrow">
                  {formatArticleDate(a.date, locale)}
                </time>
                <h2 className="display mt-4 text-2xl leading-snug text-maroon-900">{a.title[locale]}</h2>
                <p className="mt-4 flex-1 leading-relaxed text-ink-500">{a.description[locale]}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-maroon-700 transition group-hover:text-maroon-900">
                  {t.readMore}
                  <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" strokeWidth={1.5} aria-hidden="true" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
