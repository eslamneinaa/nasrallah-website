'use client'

import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { href } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/en'
import type { Locale } from '@/lib/types'
import { Frame, Khatam } from '../ornaments'

type Props = {
  locale: Locale
  dict: Dictionary['hero']
  image: { url: string; alt: string }
}

const ease = [0.22, 1, 0.36, 1] as const

export function Hero({ locale, dict, image }: Props) {
  const [index, setIndex] = useState(0)
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % dict.rotating.length), 3200)
    return () => clearInterval(id)
  }, [dict.rotating.length])

  // CSS entrance (see `--animate-rise`): visible on first paint, before hydration.
  const delay = (s: number) => ({ animationDelay: `${s}s` })

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-maroon-950 pt-32 pb-16 text-pearl-50 lg:pt-48 lg:pb-24">
      <div className="bg-khatam pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_70%_40%,black_5%,transparent_70%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_20%,rgb(138_21_56/0.5),transparent_55%)]" aria-hidden="true" />

      <div className="container-page grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="eyebrow animate-rise text-gold-400">
            <Khatam className="h-3.5 w-3.5" />
            {dict.eyebrow}
          </p>

          <h1 style={delay(0.1)} className="display animate-rise mt-8 text-[2.6rem] leading-[1.12] sm:text-6xl lg:text-[4.4rem]">
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
          </h1>

          <p style={delay(0.2)} className="animate-rise mt-8 max-w-xl text-lg leading-relaxed text-pearl-200/75 sm:text-xl">
            {dict.subtitle}
          </p>

          <div style={delay(0.3)} className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={href(locale, 'products')} className="btn-gold">
              {dict.ctaPrimary}
            </Link>
            <Link href={href(locale, 'request-quote')} className="btn-outline-light">
              {dict.ctaSecondary}
            </Link>
          </div>

          <dl style={delay(0.45)} className="animate-rise mt-14 grid grid-cols-3 border-t border-gold-500/25 pt-8">
            {dict.stats.map((stat, i) => (
              <div key={stat.label} className={`flex flex-col-reverse gap-2 ${i ? 'border-s border-gold-500/20 ps-5 sm:ps-8' : ''}`}>
                <dt className="text-xs text-pearl-200/70 sm:text-sm">{stat.label}</dt>
                <dd className="display text-[2rem] leading-none text-gold-300 sm:text-[2.6rem]">
                  <span dir="ltr">{stat.value}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <motion.div
          style={{ y, ...delay(0.2) }}
          className="animate-rise relative mx-auto hidden w-full max-w-md lg:col-span-5 lg:block"
          aria-hidden="true"
        >
          <Frame shape="arch" className="aspect-[4/5]">
            <Image src={image.url} alt={image.alt} fill priority sizes="(min-width: 1024px) 34vw, 0px" className="object-cover" />
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
