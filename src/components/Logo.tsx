import type { CSSProperties } from 'react'
import type { Locale } from '@/lib/types'

type Props = { locale: Locale; tone?: 'light' | 'dark'; className?: string }

/** The calligraphy mark is a single-colour mask, so it takes the text colour. */
const markMask: CSSProperties = {
  maskImage: 'url(/brand/mark.svg)',
  WebkitMaskImage: 'url(/brand/mark.svg)',
  maskSize: 'contain',
  WebkitMaskSize: 'contain',
  maskRepeat: 'no-repeat',
  WebkitMaskRepeat: 'no-repeat',
  maskPosition: 'center',
  WebkitMaskPosition: 'center',
}

/** The Nasrallah calligraphy mark (without the NASRALLAH arc lettering). */
export function LogoMark({ className = 'h-12 text-brand' }: { className?: string }) {
  return <span aria-hidden="true" className={`inline-block aspect-[220/280] shrink-0 bg-current ${className}`} style={markMask} />
}

export function Logo({ locale, tone = 'dark', className = '' }: Props) {
  const isAr = locale === 'ar'
  const light = tone === 'light'
  const main = light ? 'text-pearl-50' : 'text-maroon-900'
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className={`h-12 transition-colors duration-500 ${light ? 'text-gold-300' : 'text-brand'}`} />
      {isAr ? (
        <span className="flex flex-col leading-none">
          <span className={`font-[family-name:var(--font-amiri)] text-[1.4rem] font-bold ${main}`}>مؤسسة نصر الله</span>
          <span className="mt-1 flex items-center gap-2 font-[family-name:var(--font-amiri)] text-[0.95rem] text-gold-400">
            <span className="h-px w-4 bg-gold-500/60" aria-hidden="true" />
            التجارية
            <span className="h-px w-4 bg-gold-500/60" aria-hidden="true" />
          </span>
        </span>
      ) : (
        <span className="flex flex-col leading-none">
          <span className={`font-[family-name:var(--font-bodoni)] text-[1.3rem] font-medium tracking-[0.14em] ${main}`}>NASRALLAH</span>
          <span className="mt-1.5 flex items-center gap-2 font-[family-name:var(--font-jost)] text-[0.6rem] font-medium tracking-[0.42em] text-gold-400">
            <span className="h-px w-3 bg-gold-500/60" aria-hidden="true" />
            TRADING EST
          </span>
        </span>
      )}
    </span>
  )
}
