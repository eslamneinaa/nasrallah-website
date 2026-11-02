import type { ReactNode } from 'react'

/** Eight-point khatam star, drawn as two overlapping squares. */
export function Khatam({ className = 'h-4 w-4', strokeWidth = 1.2 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} aria-hidden="true">
      <rect x="5" y="5" width="14" height="14" />
      <rect x="5" y="5" width="14" height="14" transform="rotate(45 12 12)" />
    </svg>
  )
}

/**
 * The `bg-khatam` lattice as inline SVG, for above-the-fold heroes: a CSS
 * background image there becomes the page's LCP element, an inline SVG
 * pattern does not. One per page (fixed pattern id).
 */
export function KhatamLattice({ className = '' }: { className?: string }) {
  return (
    <svg className={`pointer-events-none absolute inset-0 -z-10 h-full w-full ${className}`} aria-hidden="true">
      <defs>
        <pattern id="khatam-lattice" width="72" height="72" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="#C2A06A" strokeOpacity=".16" strokeWidth=".8">
            <rect x="22" y="22" width="28" height="28" />
            <rect x="22" y="22" width="28" height="28" transform="rotate(45 36 36)" />
            <circle cx="36" cy="36" r="5" />
            <path d="M0 0L22 22M72 0L50 22M0 72L22 50M72 72L50 50" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#khatam-lattice)" />
    </svg>
  )
}

/** Hairline — star — hairline. */
export function OrnamentRule({ className = '', width = 'w-16' }: { className?: string; width?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 text-gold-500 ${className}`} aria-hidden="true">
      <span className={`h-px ${width} bg-gradient-to-r from-transparent to-current`} />
      <Khatam className="h-3.5 w-3.5" />
      <span className={`h-px ${width} bg-gradient-to-l from-transparent to-current`} />
    </span>
  )
}

/** Small brass diamond, used as a list bullet and separator. */
export function Diamond({ className = '' }: { className?: string }) {
  return <span className={`inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-500 ${className}`} aria-hidden="true" />
}

/**
 * Double hairline frame with an offset outer rule, used around images.
 * `shape="arch"` gives the frame a rounded Gulf-arch top.
 */
export function Frame({ children, shape = 'rect', className = '' }: { children: ReactNode; shape?: 'rect' | 'arch'; className?: string }) {
  const round = shape === 'arch' ? 'arch' : ''
  return (
    <div className={`relative ${className}`}>
      <div className={`pointer-events-none absolute -inset-3 border border-gold-500/45 ${round}`} aria-hidden="true" />
      <div className={`relative h-full w-full overflow-hidden ${round}`}>{children}</div>
    </div>
  )
}
