import { ArrowUpRight, BadgeDollarSign, FileCheck2, Globe2, ShieldCheck, Truck, Wrench } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { CtaBand } from '@/components/CtaBand'
import { ClientMarquee } from '@/components/home/ClientMarquee'
import { Hero } from '@/components/home/Hero'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { Diamond, Frame } from '@/components/ornaments'
import { ProductCard } from '@/components/ProductCard'
import { SectionHeading } from '@/components/SectionHeading'
import { getDictionary, href } from '@/i18n'
import { getClientLogos, getFeaturedProducts } from '@/lib/sanity/api'
import { resolveLocale, type LocaleParams } from '@/lib/seo'

const whyIcons = [ShieldCheck, Truck, BadgeDollarSign, Wrench, Globe2, FileCheck2]

export default async function HomePage({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  const [featured, clients] = await Promise.all([getFeaturedProducts(6), getClientLogos()])
  const heroImages = featured.map((p) => p.images[0]).filter(Boolean).slice(0, 2)

  return (
    <>
      <Hero locale={locale} dict={dict.hero} images={heroImages} />

      {/* Intro */}
      <section id="intro" className="bg-khatam-light scroll-mt-20 py-24 sm:py-32">
        <div className="container-page grid items-center gap-20 lg:grid-cols-12">
          <Reveal className="order-last px-3 lg:order-first lg:col-span-5">
            <Frame shape="arch" className="mx-auto aspect-[4/5] max-w-md bg-maroon-900">
              {heroImages[1] && <Image src={heroImages[1].url} alt="" fill sizes="(min-width: 1024px) 34vw, 90vw" className="object-cover" />}
            </Frame>
          </Reveal>

          <div className="lg:col-span-7">
            <SectionHeading eyebrow={dict.intro.eyebrow} title={dict.intro.title} />
            <Reveal delay={0.1}>
              {dict.intro.body.map((p) => (
                <p key={p} className="mt-6 max-w-2xl text-lg leading-loose text-ink-500">
                  {p}
                </p>
              ))}
              <ul className="mt-10 grid max-w-2xl gap-x-8 border-t border-pearl-300 sm:grid-cols-2">
                {dict.intro.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-4 border-b border-pearl-300 py-4 text-ink-900">
                    <Diamond />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={href(locale, 'about')} className="btn-outline mt-10">
                {dict.intro.cta}
                <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-pearl-100 py-24 sm:py-32">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading eyebrow={dict.featured.eyebrow} title={dict.featured.title} subtitle={dict.featured.subtitle} />
            <Reveal>
              <Link href={href(locale, 'products')} className="btn-outline shrink-0">
                {dict.featured.viewAll}
                <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <StaggerItem key={product._id}>
                <ProductCard product={product} locale={locale} cta={dict.common.viewDetails} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative isolate overflow-hidden bg-maroon-900 py-24 text-pearl-50 sm:py-32">
        <div className="bg-khatam pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" aria-hidden="true" />
        <div className="container-page">
          <SectionHeading eyebrow={dict.why.eyebrow} title={dict.why.title} subtitle={dict.why.subtitle} align="center" tone="light" />
          <Stagger className="mt-16 grid gap-px border border-gold-500/25 bg-gold-500/25 sm:grid-cols-2 lg:grid-cols-3">
            {dict.why.items.map((item, i) => {
              const Icon = whyIcons[i % whyIcons.length]
              return (
                <StaggerItem key={item.title} className="group bg-maroon-900 p-8 transition duration-500 hover:bg-maroon-800 sm:p-10">
                  <span className="relative flex h-14 w-14 items-center justify-center text-gold-300">
                    <span className="absolute inset-1.5 rotate-45 border border-gold-500/50 transition duration-500 group-hover:border-gold-300" aria-hidden="true" />
                    <Icon className="relative h-5 w-5" strokeWidth={1.3} aria-hidden="true" />
                  </span>
                  <h3 className="display mt-6 text-[1.4rem]">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-pearl-200/70">{item.desc}</p>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </section>

      {/* Clients */}
      {clients.length > 0 && (
        <section className="py-24 sm:py-28">
          <div className="container-page">
            <SectionHeading eyebrow={dict.clients.eyebrow} title={dict.clients.title} align="center" />
          </div>
          <Reveal className="mt-14">
            <ClientMarquee clients={clients} />
          </Reveal>
        </section>
      )}

      <CtaBand locale={locale} dict={dict.ctaBand} />
    </>
  )
}
