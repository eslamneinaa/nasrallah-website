'use client'

import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { siteConfig, telHref } from '@/config/site'
import { href } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/en'
import type { Locale, ProductImage } from '@/lib/types'
import { Frame, Khatam } from '../ornaments'

type Props = {
  locale: Locale
  dict: Dictionary['hero']
  images: ProductImage[]
}

const ease = [0.22, 1, 0.36, 1] as const

export function Hero({ locale, dict, images }: Props) {
  const [index, setIndex] = useState(0)
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % dict.rotating.length), 3200)
    return () => clearInterval(id)
  }, [dict.rotating.length])

  const [main] = images
  const enter = (delay: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease, delay },
  })

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-maroon-950 pt-32 pb-16 text-pearl-50 lg:pt-48 lg:pb-24">
      <div className="bg-khatam pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_70%_40%,black_5%,transparent_70%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_20%,rgb(138_21_56/0.5),transparent_55%)]" aria-hidden="true" />

      <div className="container-page grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <motion.p {...enter(0)} className="eyebrow text-gold-400">
            <Khatam className="h-3.5 w-3.5" />
            {dict.eyebrow}
          </motion.p>

          <motion.h1 {...enter(0.1)} className="display mt-8 text-[2.6rem] leading-[1.12] sm:text-6xl lg:text-[4.4rem]">
            <span className="block">{dict.titleLead}</span>
            {/* Every phrase is stacked invisibly in one grid cell so the box always fits the longest one. */}
            <span className="relative mt-1 grid" aria-live="polite">
              {dict.rotating.map((phrase) => (
                <span key={phrase} className="invisible col-start-1 row-start-1 ltr:italic" aria-hidden="true">
                  {phrase}
                </span>
              ))}
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: '0.35em' }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: '-0.35em' }}
                  transition={{ duration: 0.6, ease }}
                  className="col-start-1 row-start-1 text-gold-300 ltr:italic"
                >
                  {dict.rotating[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p {...enter(0.2)} className="mt-8 max-w-xl text-lg leading-relaxed text-pearl-200/75 sm:text-xl">
            {dict.subtitle}
          </motion.p>

          <motion.div {...enter(0.3)} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={href(locale, 'products')} className="btn-gold">
              {dict.ctaPrimary}
            </Link>
            <Link href={href(locale, 'request-quote')} className="btn-outline-light">
              {dict.ctaSecondary}
            </Link>
          </motion.div>

          <motion.dl {...enter(0.45)} className="mt-14 grid gap-6 border-t border-gold-500/25 pt-8 sm:grid-cols-3 sm:gap-8">
            <div>
              <dt className="text-xs text-gold-400">{dict.facts.showroom}</dt>
              <dd className="mt-2 leading-snug text-pearl-100">{siteConfig.addressShort[locale]}</dd>
            </div>
            <div>
              <dt className="text-xs text-gold-400">{dict.facts.hours}</dt>
              <dd className="mt-2 leading-snug text-pearl-100">
                {siteConfig.hours.days[locale]}
                <span className="block text-sm text-pearl-200/65">
                  {siteConfig.hours.shifts.map((s) => s.time[locale]).join(' · ')}
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-xs text-gold-400">{dict.facts.call}</dt>
              <dd className="mt-2 flex flex-col leading-snug text-pearl-100">
                {siteConfig.phones.map((p) => (
                  <a key={p.tel} href={telHref(p.tel)} className="transition hover:text-gold-300">
                    <span dir="ltr">{p.display}</span>
                  </a>
                ))}
              </dd>
            </div>
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.2 }}
          style={{ y }}
          className="relative mx-auto hidden w-full max-w-md lg:col-span-5 lg:block"
          aria-hidden="true"
        >
          <Frame shape="arch" className="aspect-[4/5]">
            {main && <Image src={main.url} alt="" fill priority sizes="(min-width: 1024px) 34vw, 0px" className="object-cover" />}
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/70 via-transparent to-transparent" />
          </Frame>
          <div className="absolute inset-x-10 -bottom-6 flex items-center justify-center gap-3 border border-gold-500/50 bg-maroon-950 px-5 py-3 text-sm text-gold-200">
            <Khatam className="h-3.5 w-3.5 text-gold-400" />
            {dict.plate}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
