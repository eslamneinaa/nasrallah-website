import { Eye, Handshake, Gem, Rocket, ShieldCheck, Timer } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { CtaBand } from '@/components/CtaBand'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { siteConfig } from '@/config/site'
import { getDictionary, href } from '@/i18n'
import { getFeaturedProducts } from '@/lib/sanity/api'
import { pageMetadata, resolveLocale, type LocaleParams } from '@/lib/seo'

const valueIcons = [ShieldCheck, Gem, Timer, Handshake]

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale).about
  return pageMetadata({ locale, path: 'about', title: dict.metaTitle, description: dict.metaDescription })
}

export default async function AboutPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  const t = dict.about
  const images = (await getFeaturedProducts(3)).map((p) => p.images[0]).filter(Boolean)
  const years = new Date().getFullYear() - siteConfig.foundedYear

  return (
    <>
      <PageHero
        title={t.title}
        subtitle={t.subtitle}
        crumbs={[{ label: dict.nav.home, href: href(locale) }, { label: dict.nav.about }]}
      />

      {/* Story */}
      <section className="py-24 sm:py-32">
        <div className="container-page grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow={t.story.eyebrow} title={t.story.title} />
            <Reveal delay={0.1} className="mt-8 space-y-5">
              {t.story.paragraphs.map((p) => (
                <p key={p} className="text-lg leading-relaxed text-navy-600">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
          <Reveal delay={0.15} className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              {images[0] && (
                <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-[2rem] shadow-lift">
                  <Image src={images[0].url} alt="" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                </div>
              )}
              <div className="flex flex-col justify-center rounded-[2rem] bg-navy-950 p-8 text-white">
                <p className="font-display text-5xl font-extrabold text-gold-400">{years}+</p>
                <p className="mt-2 text-sm text-navy-200">{t.story.badge}</p>
              </div>
              {images[1] && (
                <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-card">
                  <Image src={images[1].url} alt="" fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover" />
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & mission */}
      <section className="bg-navy-50/60 py-24 sm:py-32">
        <Stagger className="container-page grid gap-6 md:grid-cols-2">
          {[
            { ...t.vision, Icon: Eye },
            { ...t.mission, Icon: Rocket },
          ].map(({ title, text, Icon }, i) => (
            <StaggerItem
              key={title}
              className={`relative overflow-hidden rounded-[2rem] p-10 sm:p-12 ${
                i === 0 ? 'bg-navy-950 text-white' : 'bg-white shadow-card ring-1 ring-navy-100'
              }`}
            >
              <div className="pointer-events-none absolute -end-10 -top-10 h-40 w-40 rounded-full bg-gold-500/15 blur-2xl" aria-hidden="true" />
              <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${i === 0 ? 'bg-gold-500 text-navy-950' : 'bg-gold-100 text-gold-700'}`}>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className={`mt-8 font-display text-3xl font-extrabold ${i === 0 ? 'text-white' : 'text-navy-950'}`}>{title}</h2>
              <p className={`mt-4 text-lg leading-relaxed ${i === 0 ? 'text-navy-200' : 'text-navy-600'}`}>{text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading eyebrow={t.values.eyebrow} title={t.values.title} align="center" />
          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.values.items.map((value, i) => {
              const Icon = valueIcons[i % valueIcons.length]
              return (
                <StaggerItem
                  key={value.title}
                  className="group rounded-[2rem] border border-navy-100 p-8 transition duration-500 hover:-translate-y-1 hover:border-gold-300 hover:shadow-lift"
                >
                  <span className="font-display text-sm font-bold text-gold-600">0{i + 1}</span>
                  <Icon className="mt-6 h-8 w-8 text-navy-900 transition group-hover:text-gold-600" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold text-navy-950">{value.title}</h3>
                  <p className="mt-3 leading-relaxed text-navy-600">{value.desc}</p>
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
