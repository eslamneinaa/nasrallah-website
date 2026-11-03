import { ArrowUpRight, Gem, Handshake, Hourglass, Plus, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { CtaBand } from '@/components/CtaBand'
import { ClientMarquee } from '@/components/home/ClientMarquee'
import { Hero } from '@/components/home/Hero'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { Diamond, Frame, Khatam } from '@/components/ornaments'
import { ProductCard } from '@/components/ProductCard'
import { SectionHeading } from '@/components/SectionHeading'
import { ShowcaseVideo } from '@/components/ShowcaseVideo'
import { siteConfig } from '@/config/site'
import { fill, getDictionary, href } from '@/i18n'
import { getClientLogos, getFeaturedProducts } from '@/lib/sanity/api'
import { resolveLocale, type LocaleParams } from '@/lib/seo'

/** Heritage, trust, quality, service — in the order of `dict.why.items`. */
const whyIcons = [Hourglass, ShieldCheck, Gem, Handshake]

const interiorImages = [
  { src: '/products/interior-necklace.webp', className: 'aspect-[1341/1173]' },
  { src: '/products/interior-rings.webp', className: 'aspect-[1348/1167]' },
]

export default async function HomePage({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  const [featured, clients] = await Promise.all([getFeaturedProducts(6), getClientLogos()])

  const faq = dict.faq.items.map(({ q, a }) => ({
    q,
    a: fill(a, {
      address: siteConfig.address[locale],
      hours: siteConfig.hours.compact[locale],
      phone: `${siteConfig.dialCode} ${siteConfig.phones[0].display}`,
    }),
  }))
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  }

  return (
    <>
      <Hero locale={locale} dict={dict.hero} image={{ url: '/products/interior-oak-drawers.webp', alt: dict.hero.imageAlt }} />

      {/* Intro */}
      <section id="intro" className="bg-khatam-light scroll-mt-20 py-24 sm:py-32">
        <div className="container-page grid items-center gap-20 lg:grid-cols-12">
          <Reveal className="order-last px-3 lg:order-first lg:col-span-6">
            <Frame className="mx-auto aspect-[3/2] max-w-2xl bg-maroon-900">
              <Image src="/showroom/storefront-night.webp" alt={dict.intro.imageAlt} fill sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover" />
            </Frame>
          </Reveal>

          <div className="lg:col-span-6">
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

      {/* Jewellery & watch interiors */}
      <section className="relative isolate overflow-hidden bg-maroon-950 py-24 text-pearl-50 sm:py-32">
        <div className="bg-khatam pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_20%_50%,black,transparent_65%)]" aria-hidden="true" />
        <div className="container-page grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={dict.interiors.eyebrow} title={dict.interiors.title} tone="light" />
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-loose text-pearl-200/75">{dict.interiors.body}</p>
              <Link href={`${href(locale, 'products')}?category=jewellery-watch-interiors`} className="btn-gold mt-10">
                {dict.interiors.cta}
              </Link>
            </Reveal>
          </div>
          <Stagger className="grid grid-cols-2 gap-4 sm:gap-5 lg:col-span-7">
            <StaggerItem className="row-span-2 border border-gold-500/40">
              <ShowcaseVideo
                src="/videos/jewellery-safe-oak.mp4"
                poster="/videos/jewellery-safe-oak.webp"
                label={dict.interiors.video}
                labels={dict.common.video}
                className="h-full min-h-full"
              />
            </StaggerItem>
            {interiorImages.map((item, i) => (
              <StaggerItem key={item.src} className={`relative overflow-hidden border border-gold-500/40 bg-white ${item.className}`}>
                <Image src={item.src} alt={dict.interiors.images[i]} fill sizes="(min-width: 1024px) 28vw, 50vw" className="object-cover" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Brands */}
      <section className="py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading eyebrow={dict.brands.eyebrow} title={dict.brands.title} align="center" />
          <Stagger className="mx-auto mt-16 grid max-w-6xl gap-px border border-gold-500/30 bg-gold-500/30 md:grid-cols-3">
            {dict.brands.items.map((item) => (
              <StaggerItem key={item.name} className="bg-pearl-50 px-6 py-14 text-center lg:px-10">
                <p dir="ltr" className="font-[family-name:var(--font-bodoni)] text-3xl tracking-[0.22em] text-maroon-900 lg:text-4xl">
                  {item.name}
                </p>
                <Khatam className="mx-auto mt-6 h-4 w-4 text-gold-500" />
                <p className="mx-auto mt-6 max-w-sm leading-relaxed text-ink-500">{item.desc}</p>
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
          <Stagger className="mt-16 grid gap-px border border-gold-500/25 bg-gold-500/25 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Who we serve */}
      <section className="py-24 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow={dict.sectors.eyebrow} title={dict.sectors.title} align="center" />
          <Reveal className="mt-14 border-y border-gold-500/25 py-8">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-10">
              {dict.sectors.items.map((sector, i) => (
                <li key={sector} className="flex items-center gap-6 sm:gap-10">
                  {i > 0 && <Khatam className="h-3 w-3 text-gold-500/70" />}
                  <span className="display text-xl text-maroon-900 sm:text-2xl">{sector}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        {clients.length > 0 && (
          <>
            <div className="container-page mt-20">
              <SectionHeading eyebrow={dict.clients.eyebrow} title={dict.clients.title} align="center" />
            </div>
            <Reveal className="mt-14">
              <ClientMarquee clients={clients} />
            </Reveal>
          </>
        )}
      </section>

      {/* FAQ — plain <details>, so every answer is in the HTML for search engines and AI assistants */}
      <section className="bg-pearl-100 py-24 sm:py-32">
        <div className="container-page max-w-4xl">
          <SectionHeading eyebrow={dict.faq.eyebrow} title={dict.faq.title} align="center" />
          <Reveal className="mt-14 border-t border-gold-500/30">
            {faq.map(({ q, a }) => (
              <details key={q} className="group border-b border-gold-500/30">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-start [&::-webkit-details-marker]:hidden">
                  <h3 className="display text-xl text-maroon-900 sm:text-[1.4rem]">{q}</h3>
                  <Plus className="h-5 w-5 shrink-0 text-gold-600 transition duration-300 group-open:rotate-45" strokeWidth={1.4} aria-hidden="true" />
                </summary>
                <p className="max-w-3xl pb-7 leading-loose text-ink-500">{a}</p>
              </details>
            ))}
            <Link href={href(locale, 'safe-buying-guide')} className="mt-10 inline-flex items-center gap-2 text-maroon-800 underline decoration-gold-400 underline-offset-4 transition hover:text-maroon-600">
              {dict.guide.faqLink}
              <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </section>

      <CtaBand locale={locale} dict={dict.ctaBand} />
    </>
  )
}
