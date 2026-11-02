import { ArrowUpRight, BadgeDollarSign, CheckCircle2, FileCheck2, Globe2, ShieldCheck, Truck, Wrench } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { CtaBand } from '@/components/CtaBand'
import { ClientMarquee } from '@/components/home/ClientMarquee'
import { Hero } from '@/components/home/Hero'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { ProductCard } from '@/components/ProductCard'
import { SectionHeading } from '@/components/SectionHeading'
import { siteConfig } from '@/config/site'
import { getDictionary, href } from '@/i18n'
import { getClientLogos, getFeaturedProducts } from '@/lib/sanity/api'
import { resolveLocale, type LocaleParams } from '@/lib/seo'

const whyIcons = [ShieldCheck, Truck, BadgeDollarSign, Wrench, Globe2, FileCheck2]

export default async function HomePage({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  const [featured, clients] = await Promise.all([getFeaturedProducts(6), getClientLogos()])
  const heroImages = featured.map((p) => p.images[0]).filter(Boolean).slice(0, 2)
  const years = new Date().getFullYear() - siteConfig.foundedYear

  return (
    <>
      <Hero
        locale={locale}
        dict={dict.hero}
        images={heroImages}
        badges={{ quality: dict.product.assurances[0], delivery: dict.why.items[1].title }}
      />

      {/* Intro */}
      <section id="intro" className="scroll-mt-20 py-24 sm:py-32">
        <div className="container-page grid items-center gap-16 lg:grid-cols-2">
          <Reveal className="relative order-last lg:order-first">
            <div className="relative mx-auto aspect-square max-w-lg">
              <div className="absolute inset-0 -rotate-3 rounded-[2.5rem] bg-gold-100" aria-hidden="true" />
              <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] shadow-lift">
                {heroImages[1] && <Image src={heroImages[1].url} alt="" fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />}
              </div>
              <div className="absolute -end-4 -bottom-6 rounded-3xl bg-navy-950 p-6 text-white shadow-lift sm:-end-8">
                <p className="font-display text-5xl font-extrabold text-gold-400">{years}+</p>
                <p className="mt-1 max-w-[9rem] text-sm text-navy-200">{dict.about.story.badge}</p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading eyebrow={dict.intro.eyebrow} title={dict.intro.title} />
            <Reveal delay={0.1}>
              {dict.intro.body.map((p) => (
                <p key={p} className="mt-5 text-lg leading-relaxed text-navy-600">
                  {p}
                </p>
              ))}
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {dict.intro.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-semibold text-navy-800">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={href(locale, 'about')} className="btn-navy mt-10">
                {dict.intro.cta}
                <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-navy-50/60 py-24 sm:py-32">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow={dict.featured.eyebrow} title={dict.featured.title} subtitle={dict.featured.subtitle} />
            <Reveal>
              <Link href={href(locale, 'products')} className="btn-ghost shrink-0 bg-white">
                {dict.featured.viewAll}
                <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <StaggerItem key={product._id}>
                <ProductCard product={product} locale={locale} cta={dict.common.viewDetails} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative overflow-hidden bg-navy-950 py-24 text-white sm:py-32">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" aria-hidden="true" />
        <div className="container-page relative">
          <SectionHeading eyebrow={dict.why.eyebrow} title={dict.why.title} subtitle={dict.why.subtitle} align="center" tone="light" />
          <Stagger className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-white/10 ring-1 ring-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {dict.why.items.map((item, i) => {
              const Icon = whyIcons[i % whyIcons.length]
              return (
                <StaggerItem key={item.title} className="group bg-navy-950 p-8 transition duration-500 hover:bg-navy-900 sm:p-10">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-400 ring-1 ring-gold-500/20 transition duration-500 group-hover:bg-gold-500 group-hover:text-navy-950">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-navy-300">{item.desc}</p>
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
