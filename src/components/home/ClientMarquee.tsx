import Image from 'next/image'
import type { ClientLogo } from '@/lib/types'
import { Khatam } from '../ornaments'

/** Infinite, pause-on-hover logo strip. Logos without an image render as wordmarks. */
export function ClientMarquee({ clients }: { clients: ClientLogo[] }) {
  if (!clients.length) return null
  // Duplicate the list so the -50% translate loops seamlessly.
  const loop = [...clients, ...clients]

  return (
    <div
      dir="ltr"
      className="group relative overflow-hidden border-y border-gold-500/25 py-8 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
    >
      <ul className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
        {loop.map((client, i) => (
          <li key={`${client._id}-${i}`} aria-hidden={i >= clients.length ? true : undefined} className="flex shrink-0 items-center">
            <span className="flex h-14 w-56 items-center justify-center px-6">
              {client.logoUrl ? (
                <Image
                  src={client.logoUrl}
                  alt={client.name}
                  width={160}
                  height={56}
                  className="max-h-11 w-auto object-contain opacity-55 grayscale sepia-[.35] transition duration-500 hover:opacity-100 hover:grayscale-0 hover:sepia-0"
                />
              ) : (
                <span className="text-center font-[family-name:var(--font-bodoni)] text-lg tracking-[0.12em] text-ink-400 uppercase transition hover:text-maroon-800">
                  {client.name}
                </span>
              )}
            </span>
            <Khatam className="h-3 w-3 text-gold-500/60" />
          </li>
        ))}
      </ul>
    </div>
  )
}
