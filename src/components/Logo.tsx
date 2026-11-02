import type { Locale } from '@/lib/types'

type Props = { locale: Locale; tone?: 'light' | 'dark'; className?: string }

/** Brass khatam star framing the monogram. */
export function LogoMark({ className = 'h-12 w-12', letter = 'ن' }: { className?: string; letter?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g fill="none" stroke="#c2a06a" strokeWidth="1.1">
        <rect x="10" y="10" width="28" height="28" />
        <rect x="10" y="10" width="28" height="28" transform="rotate(45 24 24)" />
        <circle cx="24" cy="24" r="11.5" strokeOpacity=".55" />
      </g>
      <text
        x="24"
        y={letter === 'ن' ? 27.5 : 29}
        textAnchor="middle"
        fill="#d2b582"
        fontSize={letter === 'ن' ? 17 : 15}
        style={{ fontFamily: letter === 'ن' ? 'var(--font-amiri), serif' : 'var(--font-bodoni), serif' }}
      >
        {letter}
      </text>
    </svg>
  )
}

export function Logo({ locale, tone = 'dark', className = '' }: Props) {
  const isAr = locale === 'ar'
  const main = tone === 'light' ? 'text-pearl-50' : 'text-maroon-900'
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark letter={isAr ? 'ن' : 'N'} />
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
