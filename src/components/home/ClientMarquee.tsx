import Image from 'next/image'
import type { ClientLogo } from '@/lib/types'

/** Infinite, pause-on-hover logo strip. Logos without an image render as wordmarks. */
export function ClientMarquee({ clients }: { clients: ClientLogo[] }) {
  if (!clients.length) return null
  // Duplicate the list so the -50% translate loops seamlessly.
  const loop = [...clients, ...clients]

  return (
    <div dir="ltr" className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <ul className="marquee-track flex w-max animate-marquee items-center gap-6 group-hover:[animation-play-state:paused]">
        {loop.map((client, i) => (
          <li
            key={`${client._id}-${i}`}
            aria-hidden={i >= clients.length ? true : undefined}
            className="flex h-24 w-52 shrink-0 items-center justify-center rounded-2xl bg-white px-6 ring-1 ring-navy-100 transition hover:ring-gold-300"
          >
            {client.logoUrl ? (
              <Image
                src={client.logoUrl}
                alt={client.name}
                width={160}
                height={64}
                className="max-h-12 w-auto object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            ) : (
              <span className="text-center text-base font-extrabold tracking-tight text-navy-300 transition hover:text-navy-700">
                {client.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
