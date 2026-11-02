'use client'

/**
 * next/image loader for static export. Sanity images are resized and
 * converted to WebP/AVIF by Sanity's image CDN; local files are served as-is.
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
  return `${src}?w=${width}`
}
