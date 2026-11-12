import { Gem, Handshake, Hourglass, ShieldCheck } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { CtaBand } from '@/components/CtaBand'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { Frame, Khatam } from '@/components/ornaments'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { YearsValue } from '@/components/YearsValue'
import { siteConfig } from '@/config/site'
import { getDictionary, href } from '@/i18n'
import { pageMetadata, resolveLocale, type LocaleParams } from '@/lib/seo'

/** Quality, trust, heritage, service — in the order of `about.values.items`. */
const valueIcons = [Gem, ShieldCheck, Hourglass, Handshake]

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale).about
  return pageMetadata({ locale, path: 'about', title: dict.metaTitle, description: dict.metaDescription })
}

export default async function AboutPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  const t = dict.about

  return (
    <>
      <PageHero title={t.title} subtitle={t.subtitle} crumbs={[{ label: dict.nav.home, href: href(locale) }, { label: dict.nav.about }]} />

      {/* Story */}
      <section className="bg-khatam-light py-24 sm:py-32">
        <div className="container-page grid items-center gap-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow={t.story.eyebrow} title={t.story.title} />
            <Reveal delay={0.1} className="mt-8 max-w-2xl space-y-6">
              {t.story.paragraphs.map((p) => (
                <p key={p} className="text-lg leading-loose text-ink-500">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
          <Reveal delay={0.15} className="px-3 lg:col-span-5">
            <Frame className="mx-auto aspect-[3/2] max-w-xl bg-maroon-900">
              <Image src="/showroom/nasrallah-storefront-day.webp" alt={t.story.imageAlt} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
            </Frame>
            <div className="relative mx-auto -mt-6 max-w-sm border border-gold-500/50 bg-maroon-950 p-7 text-pearl-100 shadow-lift">
              <p className="eyebrow text-gold-400">
                <Khatam className="h-3.5 w-3.5" />
                {t.story.showroom}
              </p>
              <p className="mt-4 leading-relaxed">{siteConfig.address[locale]}</p>
              <p className="mt-3 text-sm text-pearl-200/65">{siteConfig.hours.compact[locale]}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* In numbers */}
      <section className="relative isolate overflow-hidden bg-maroon-950 py-16 text-pearl-50 sm:py-20">
        <div className="bg-khatam pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
        <Stagger className="container-page grid gap-10 text-center sm:grid-cols-3 sm:gap-0">
          {dict.hero.stats.map((stat, i) => (
            <StaggerItem key={stat.label} className={i ? 'sm:border-s sm:border-gold-500/25' : ''}>
              <p className="display text-5xl leading-none text-gold-300 sm:text-6xl">
                <span dir="ltr">
                  <YearsValue value={stat.value} />
                </span>
              </p>
              <p className="mt-4 text-pearl-200/75">{stat.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Vision & mission */}
      <section className="bg-pearl-100 py-24 sm:py-32">
        <div className="container-page">
          <Stagger className="relative grid gap-16 md:grid-cols-2 md:gap-0">
            <span className="absolute inset-y-0 start-1/2 hidden w-px bg-gold-500/35 md:block" aria-hidden="true" />
            <span className="absolute top-1/2 start-1/2 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-pearl-100 text-gold-500 md:flex rtl:translate-x-1/2" aria-hidden="true">
              <Khatam className="h-6 w-6" strokeWidth={1} />
            </span>
            {[t.vision, t.mission].map(({ title, text }) => (
              <StaggerItem key={title} className="text-center md:px-14">
                <p className="eyebrow">{title}</p>
                <p className="display mt-6 text-2xl leading-[1.6] text-maroon-900 sm:text-[1.75rem]">{text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading eyebrow={t.values.eyebrow} title={t.values.title} align="center" />
          <Stagger className="mt-16 grid gap-px border border-gold-500/30 bg-gold-500/30 sm:grid-cols-2 lg:grid-cols-4">
            {t.values.items.map((value, i) => {
              const Icon = valueIcons[i % valueIcons.length]
              return (
                <StaggerItem key={value.title} className="bg-pearl-50 px-6 py-12 text-center">
                  <span className="relative mx-auto flex h-14 w-14 items-center justify-center text-maroon-700">
                    <span className="absolute inset-1.5 rotate-45 border border-gold-500/60" aria-hidden="true" />
                    <Icon className="relative h-5 w-5" strokeWidth={1.3} aria-hidden="true" />
                  </span>
                  <h3 className="display mt-6 text-[1.4rem] text-maroon-900">{value.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-500">{value.desc}</p>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </section>

      <CtaBand locale={locale} dict={dict.ctaBand} />
    </>
  )
}
