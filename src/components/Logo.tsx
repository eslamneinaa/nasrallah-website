import type { Locale } from '@/lib/types'

type Props = { locale: Locale; tone?: 'light' | 'dark'; className?: string }

export function LogoMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="nt-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e2c477" />
          <stop offset="1" stopColor="#a9823a" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="40" height="40" rx="11" fill="#0b1c38" />
      <rect x="4.75" y="4.75" width="38.5" height="38.5" rx="10.25" fill="none" stroke="url(#nt-gold)" strokeOpacity=".55" strokeWidth="1.5" />
      <path d="M15 34V14h3.2l11.6 14.6V14H33v20h-3.2L18.2 19.4V34z" fill="url(#nt-gold)" />
    </svg>
  )
}

export function Logo({ locale, tone = 'dark', className = '' }: Props) {
  const isAr = locale === 'ar'
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className={`text-lg font-extrabold tracking-tight ${tone === 'light' ? 'text-white' : 'text-navy-900'}`}>
          {isAr ? 'نصر الله' : 'NASRALLAH'}
        </span>
        <span className={`mt-1 text-[0.68rem] font-semibold ${isAr ? '' : 'tracking-[0.32em]'} text-gold-500`}>
          {isAr ? 'للتجارة' : 'TRADING'}
        </span>
      </span>
    </span>
  )
}
