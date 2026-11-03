import type { CSSProperties } from 'react'

/** CSS mask for one traced layer of the National Day logo (public/brand). */
const mask = (file: string, size = 'contain'): CSSProperties => ({
  maskImage: `url(/brand/${file}.svg)`,
  WebkitMaskImage: `url(/brand/${file}.svg)`,
  maskSize: size,
  WebkitMaskSize: size,
  maskRepeat: 'no-repeat',
  WebkitMaskRepeat: 'no-repeat',
  maskPosition: 'center',
  WebkitMaskPosition: 'center',
})

type Props = {
  /** 'light' over the dark hero, 'dark' once the header turns solid. */
  tone: 'light' | 'dark'
  label: string
  /** 'header': compact, slogan from xl up. 'menu': larger, slogan always shown. */
  variant?: 'header' | 'menu'
}

/**
 * Qatar National Day 2026 emblem for the header: the flag waves on its pole,
 * and «أنتم ذخر الوطن» / «حمد بن خليفة» take turns stepping forward (keyframes
 * in globals.css). Monochrome like the company mark, so it reads on both tones.
 */
export function NationalDayBadge({ tone, label, variant = 'header' }: Props) {
  const color = tone === 'light' ? 'text-gold-300' : 'text-qatar'
  const menu = variant === 'menu'
  return (
    <span role="img" aria-label={label} className={`flex items-center gap-3 transition-colors duration-500 ${color}`}>
      <span className={`relative block aspect-[194/300] shrink-0 ${menu ? 'h-20' : 'h-13'}`}>
        <span className="absolute inset-0 bg-current" style={mask('national-day-emblem')} />
        <span className="nd-flag absolute inset-0 bg-current" style={mask('national-day-flag')} />
      </span>
      <span className={`relative aspect-[449/144] shrink-0 ${menu ? 'block h-12' : 'hidden h-9 xl:block'}`}>
        <span className="nd-slogan absolute inset-0 bg-current" style={mask('national-day-slogan')} />
        <span className="nd-signature absolute inset-0 bg-current" style={mask('national-day-signature', '80% auto')} />
      </span>
    </span>
  )
}
