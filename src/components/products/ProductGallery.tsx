'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState, type KeyboardEvent } from 'react'
import { fill } from '@/i18n/config'
import type { ProductImage } from '@/lib/types'

type Props = {
  images: ProductImage[]
  name: string
  labels: { prev: string; next: string; imageOf: string }
  rtl: boolean
}

export function ProductGallery({ images, name, labels, rtl }: Props) {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const count = images.length
  if (!count) return null

  const go = (delta: number) => {
    setDirection(delta)
    setActive((i) => (i + delta + count) % count)
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') go(rtl ? -1 : 1)
    if (e.key === 'ArrowLeft') go(rtl ? 1 : -1)
  }

  const current = images[active]
  const offset = (rtl ? -1 : 1) * 40

  return (
    <div className="flex flex-col gap-4" onKeyDown={onKeyDown}>
      <div
        className="relative aspect-square overflow-hidden bg-white outline outline-1 outline-offset-[10px] outline-gold-500/40"
        role="region"
        aria-roledescription="carousel"
        aria-label={name}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={active}
            custom={direction}
            initial={{ opacity: 0, x: direction * offset }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * offset }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={current.url}
              alt={current.alt || name}
              fill
              priority={active === 0}
              sizes="(min-width: 1024px) 50vw, 100vw"
              placeholder={current.lqip ? 'blur' : 'empty'}
              blurDataURL={current.lqip || undefined}
              className="object-contain p-6"
            />
          </motion.div>
        </AnimatePresence>

        {count > 1 && (
          <>
            <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label={labels.prev}
                className="flex h-11 w-11 items-center justify-center border border-gold-400/60 bg-maroon-950/70 text-gold-200 backdrop-blur transition hover:bg-maroon-950"
              >
                <ChevronLeft className="h-5 w-5 rtl:-scale-x-100" strokeWidth={1.4} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label={labels.next}
                className="flex h-11 w-11 items-center justify-center border border-gold-400/60 bg-maroon-950/70 text-gold-200 backdrop-blur transition hover:bg-maroon-950"
              >
                <ChevronRight className="h-5 w-5 rtl:-scale-x-100" strokeWidth={1.4} />
              </button>
            </div>
            <p className="absolute end-4 bottom-4 bg-maroon-950/75 px-3 py-1 text-xs text-gold-200 tabular-nums backdrop-blur" aria-live="polite">
              {fill(labels.imageOf, { n: active + 1, total: count })}
            </p>
          </>
        )}
      </div>

      {count > 1 && (
        <ul className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-5">
          {images.map((image, i) => (
            <li key={image.url + i}>
              <button
                type="button"
                onClick={() => {
                  setDirection(i > active ? 1 : -1)
                  setActive(i)
                }}
                aria-label={fill(labels.imageOf, { n: i + 1, total: count })}
                aria-current={i === active}
                className={`relative block aspect-square w-full overflow-hidden border bg-white transition ${
                  i === active ? 'border-gold-500' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <Image src={image.url} alt="" fill sizes="120px" className="object-contain p-1" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
