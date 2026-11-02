import { Reveal } from './motion/Reveal'
import { Khatam } from './ornaments'

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'start' | 'center'
  tone?: 'dark' | 'light'
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'start', tone = 'dark' }: Props) {
  const center = align === 'center'
  const light = tone === 'light'
  return (
    <Reveal className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p className={`eyebrow ${light ? 'text-gold-400' : ''} ${center ? 'justify-center' : ''}`}>
          <Khatam className="h-3.5 w-3.5" />
          {eyebrow}
        </p>
      )}
      <h2
        className={`display mt-5 text-[2rem] leading-[1.2] sm:text-[2.6rem] lg:text-[3rem] ${light ? 'text-pearl-50' : 'text-maroon-900'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-lg leading-relaxed ${center ? 'mx-auto max-w-2xl' : 'max-w-2xl'} ${light ? 'text-pearl-200/75' : 'text-ink-500'}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
