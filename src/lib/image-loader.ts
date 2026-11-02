'use client'

/** Widths written by `scripts/resize-images.mjs` — keep the two lists in sync. */
const LOCAL_WIDTHS = [384, 640, 828, 1200]

/**
 * next/image loader for static export. Sanity images are resized and
 * converted to WebP/AVIF by Sanity's image CDN; bundled photos use the
 * resized copies made at build time; other local files are served as-is.
 */
export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {
  if (src.startsWith('https://cdn.sanity.io/')) {
    const url = new URL(src)
    url.searchParams.set('w', String(width))
    url.searchParams.set('q', String(quality || 80))
    url.searchParams.set('fit', 'max')
    url.searchParams.set('auto', 'format')
    return url.toString()
  }
  if (/^\/(products|showroom)\/[^/]+\.webp$/.test(src)) {
    const fit = LOCAL_WIDTHS.find((w) => w >= width)
    return fit ? src.replace(/\.webp$/, `.w${fit}.webp`) : src
  }
  return `${src}?w=${width}`
}
