'use client'

import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, BadgeCheck, ChevronDown, Truck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { href } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/en'
import type { Locale, ProductImage } from '@/lib/types'

type Props = {
  locale: Locale
  dict: Dictionary['hero']
  badges: { quality: string; delivery: string }
  images: ProductImage[]
}

const ease = [0.22, 1, 0.36, 1] as const

export function Hero({ locale, dict, badges, images }: Props) {
  const [index, setIndex] = useState(0)
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % dict.rotating.length), 2800)
    return () => clearInterval(id)
  }, [dict.rotating.length])

  const [main, second] = images

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-950 pt-28 pb-16 text-white">
      {/* backdrop */}
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" aria-hidden="true" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 end-[-10%] -z-10 h-[36rem] w-[36rem] rounded-full bg-gold-500/20 blur-[120px]"
        animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[-20%] start-[-10%] -z-10 h-[30rem] w-[30rem] rounded-full bg-navy-500/30 blur-[120px]" />

      <div className="container-page grid items-center gap-14 lg:grid-cols-12">
        <motion.div style={{ y, opacity: fade }} className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-gold-300 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400 shadow-[0_0_12px] shadow-gold-400" />
            {dict.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="mt-7 font-display text-[2.6rem] leading-[1.1] font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="block">{dict.titleLead}</span>
            {/* Every phrase is stacked invisibly in one grid cell so the box always fits the longest one. */}
            <span className="relative grid overflow-hidden pb-2" aria-live="polite">
              {dict.rotating.map((phrase) => (
                <span key={phrase} className="invisible col-start-1 row-start-1" aria-hidden="true">
                  {phrase}
                </span>
              ))}
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={index}
                  initial={{ y: '60%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  exit={{ y: '-60%', opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="col-start-1 row-start-1 bg-gradient-to-r from-gold-200 via-gold-400 to-gold-500 bg-clip-text text-transparent rtl:bg-gradient-to-l"
                >
                  {dict.rotating[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-navy-200 sm:text-xl"
          >
            {dict.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link href={href(locale, 'products')} className="btn-gold px-8 py-4 text-base">
              {dict.ctaPrimary}
              <ArrowUpRight className="h-5 w-5 rtl:-scale-x-100" aria-hidden="true" />
            </Link>
            <Link href={href(locale, 'request-quote')} className="btn-ghost-light px-8 py-4 text-base">
              {dict.ctaSecondary}
            </Link>
          </motion.div>

          <motion.dl
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } } }}
            className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4"
          >
            {dict.stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-extrabold text-white sm:text-4xl">{stat.value}</dd>
                <dd className="mt-1 text-sm text-navy-300">{stat.label}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>

        {/* visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="relative hidden lg:col-span-5 lg:block"
          aria-hidden="true"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="absolute inset-0 rotate-3 rounded-[2.5rem] border border-gold-500/30" />
            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-white/10">
              {main && <Image src={main.url} alt="" fill priority sizes="(min-width: 1024px) 40vw, 0px" className="object-cover" />}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
            </div>
            {second && (
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -start-14 bottom-16 h-40 w-40 overflow-hidden rounded-3xl shadow-2xl ring-4 ring-navy-950"
              >
                <Image src={second.url} alt="" fill sizes="160px" className="object-cover" />
              </motion.div>
            )}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              className="absolute -end-8 top-14 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 text-navy-900 shadow-xl backdrop-blur"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                <BadgeCheck className="h-5 w-5" />
              </span>
              <span className="text-sm font-bold">{badges.quality}</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              className="absolute -end-4 bottom-6 flex items-center gap-3 rounded-2xl bg-navy-900/90 px-4 py-3 text-white shadow-xl ring-1 ring-white/10 backdrop-blur"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500 text-navy-950">
                <Truck className="h-5 w-5" />
              </span>
              <span className="text-sm font-bold">{badges.delivery}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#intro"
        aria-label={dict.scroll}
        className="absolute bottom-6 start-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs font-semibold text-navy-300 sm:flex rtl:translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {dict.scroll}
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </motion.a>
    </section>
  )
}
