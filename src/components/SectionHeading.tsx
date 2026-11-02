import { Reveal } from './motion/Reveal'

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'start' | 'center'
  tone?: 'dark' | 'light'
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'start', tone = 'dark' }: Props) {
  const center = align === 'center'
  return (
    <Reveal className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p className={`eyebrow ${center ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-4 font-display text-3xl leading-tight font-extrabold text-balance sm:text-4xl lg:text-[2.75rem] ${
          tone === 'light' ? 'text-white' : 'text-navy-950'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${tone === 'light' ? 'text-navy-200' : 'text-navy-600'}`}>{subtitle}</p>
      )}
    </Reveal>
  )
}
