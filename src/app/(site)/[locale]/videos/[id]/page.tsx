import { ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/CtaBand'
import { Reveal } from '@/components/motion/Reveal'
import { PageHero } from '@/components/PageHero'
import { ShowcaseVideo } from '@/components/ShowcaseVideo'
import { siteConfig } from '@/config/site'
import { getDictionary, href } from '@/i18n'
import { pageMetadata, resolveLocale } from '@/lib/seo'
import { durationSeconds, showcaseVideos } from '@/lib/videos'

type Props = { params: Promise<{ locale: string; id: string }> }

export const dynamicParams = false

export async function generateStaticParams() {
  return showcaseVideos.map((v) => ({ id: v.id }))
}

const findVideo = (id: string) => showcaseVideos.find((v) => v.id === id)

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const video = findVideo((await params).id)
  if (!video) return {}
  return pageMetadata({ locale, path: `videos/${video.id}`, title: video.title[locale], description: video.description[locale] })
}

/**
 * One video as the main content of its own page, so search engines can index it.
 * Only the title and short description already written for the video are shown.
 */
export default async function VideoPage({ params }: Props) {
  const locale = await resolveLocale(params)
  const video = findVideo((await params).id)
  if (!video) notFound()
  const dict = getDictionary(locale)
  const t = dict.videos
  const pageUrl = siteConfig.url + href(locale, `videos/${video.id}`)
  const others = showcaseVideos.filter((v) => v.id !== video.id)
  const landscape = video.orientation === 'landscape'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'VideoObject',
        name: video.title[locale],
        description: video.description[locale],
        thumbnailUrl: siteConfig.url + video.poster,
        contentUrl: siteConfig.url + video.url,
        uploadDate: video.uploadDate,
        duration: video.duration,
        inLanguage: locale,
        url: pageUrl,
        publisher: { '@id': `${siteConfig.url}/#business` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { name: dict.nav.home, item: siteConfig.url + href(locale) },
          { name: t.title, item: siteConfig.url + href(locale, 'videos') },
          { name: video.title[locale], item: pageUrl },
        ].map((crumb, i) => ({ '@type': 'ListItem', position: i + 1, ...crumb })),
      },
    ],
  }

  return (
    <>
      <PageHero
        title={video.title[locale]}
        crumbs={[
          { label: dict.nav.home, href: href(locale) },
          { label: t.title, href: href(locale, 'videos') },
          { label: video.title[locale] },
        ]}
      />
      <section className="bg-khatam-light py-16 sm:py-24">
        <div className="container-page">
          <Reveal className={`mx-auto grid gap-10 ${landscape ? 'max-w-5xl' : 'max-w-sm'}`}>
            <div className="px-3">
              <ShowcaseVideo
                src={video.url}
                poster={video.poster}
                label={video.label[locale]}
                labels={dict.common.video}
                className={`mx-auto w-full outline outline-1 outline-offset-[10px] outline-gold-500/40 ${landscape ? 'aspect-video' : 'aspect-[9/16]'}`}
              />
            </div>
            <div className="text-center">
              <p className="text-lg leading-relaxed text-ink-500">{video.description[locale]}</p>
              <div className="mt-8 flex flex-col items-center gap-4">
                <Link href={href(locale, video.link.path)} className="btn-maroon">
                  {video.link.label[locale]}
                  <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" strokeWidth={1.5} aria-hidden="true" />
                </Link>
                <Link
                  href={href(locale, 'videos')}
                  className="text-maroon-800 underline decoration-gold-500/60 underline-offset-4 hover:decoration-maroon-800"
                >
                  {t.all}
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="mx-auto mt-24 max-w-5xl border-t border-gold-500/30 pt-14">
            <h2 className="display text-center text-3xl text-maroon-900">{t.more}</h2>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
              {others.map((v) => (
                <li key={v.id}>
                  <Link href={href(locale, `videos/${v.id}`)} className="group block">
                    {/* eslint-disable-next-line @next/next/no-img-element -- posters are small static files, not resized */}
                    <img
                      src={v.poster}
                      alt={v.title[locale]}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[3/4] w-full object-cover outline outline-1 outline-offset-4 outline-gold-500/30 transition group-hover:outline-gold-500"
                    />
                    <span className="mt-4 block text-sm leading-snug text-maroon-900 group-hover:underline">{v.title[locale]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CtaBand locale={locale} dict={dict.ctaBand} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
