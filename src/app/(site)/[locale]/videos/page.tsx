import { ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { CtaBand } from '@/components/CtaBand'
import { Reveal } from '@/components/motion/Reveal'
import { PageHero } from '@/components/PageHero'
import { ShowcaseVideo } from '@/components/ShowcaseVideo'
import { siteConfig } from '@/config/site'
import { getDictionary, href } from '@/i18n'
import { pageMetadata, resolveLocale, type LocaleParams } from '@/lib/seo'
import { showcaseVideos, type ShowcaseVideoItem } from '@/lib/videos'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = getDictionary(locale).videos
  return pageMetadata({ locale, path: 'videos', title: t.metaTitle, description: t.metaDescription })
}

/** "استعرض تشكيلتنا": every showroom video on one page. */
export default async function VideosPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  const t = dict.videos
  const landscape = showcaseVideos.filter((v) => v.orientation === 'landscape')
  const portrait = showcaseVideos.filter((v) => v.orientation === 'portrait')
  const pageUrl = siteConfig.url + href(locale, 'videos')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: t.title,
        description: t.metaDescription,
        url: pageUrl,
        inLanguage: locale,
        isPartOf: { '@id': `${siteConfig.url}/#website` },
      },
      ...showcaseVideos.map((v) => ({
        '@type': 'VideoObject',
        name: v.title[locale],
        description: v.description[locale],
        thumbnailUrl: siteConfig.url + v.poster,
        contentUrl: siteConfig.url + v.url,
        uploadDate: v.uploadDate,
        duration: v.duration,
        publisher: { '@id': `${siteConfig.url}/#business` },
      })),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { name: dict.nav.home, item: siteConfig.url + href(locale) },
          { name: t.title, item: pageUrl },
        ].map((crumb, i) => ({ '@type': 'ListItem', position: i + 1, ...crumb })),
      },
    ],
  }

  const caption = (v: ShowcaseVideoItem) => (
    <div>
      <h2 className="display text-2xl leading-snug text-maroon-900">{v.title[locale]}</h2>
      <p className="mt-3 leading-relaxed text-ink-500">{v.description[locale]}</p>
      <Link
        href={href(locale, v.link.path)}
        className="mt-4 inline-flex items-center gap-2 text-maroon-800 underline decoration-gold-500/60 underline-offset-4 hover:decoration-maroon-800"
      >
        {v.link.label[locale]}
        <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" strokeWidth={1.5} aria-hidden="true" />
      </Link>
    </div>
  )

  return (
    <>
      <PageHero title={t.title} subtitle={t.subtitle} crumbs={[{ label: dict.nav.home, href: href(locale) }, { label: t.title }]} />
      <section className="bg-khatam-light py-16 sm:py-24">
        <div className="container-page space-y-20">
          {landscape.map((v) => (
            <Reveal key={v.id} className="mx-auto grid max-w-5xl gap-8">
              <div className="px-3">
                <ShowcaseVideo
                  src={v.url}
                  poster={v.poster}
                  label={v.label[locale]}
                  labels={dict.common.video}
                  className="aspect-video w-full outline outline-1 outline-offset-[10px] outline-gold-500/40"
                />
              </div>
              {caption(v)}
            </Reveal>
          ))}

          <div className="mx-auto grid max-w-5xl gap-14 sm:grid-cols-2 lg:grid-cols-3">
            {portrait.map((v) => (
              <Reveal key={v.id} className="grid content-start gap-8">
                <div className="px-3">
                  <ShowcaseVideo
                    src={v.url}
                    poster={v.poster}
                    label={v.label[locale]}
                    labels={dict.common.video}
                    className="mx-auto aspect-[9/16] w-full max-w-72 outline outline-1 outline-offset-[10px] outline-gold-500/40"
                  />
                </div>
                {caption(v)}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand locale={locale} dict={dict.ctaBand} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
