/**
 * Embedded Sanity Studio at /studio. It is a client-side app: the static
 * export emits a single /studio/index.html, and `public/_redirects` rewrites
 * every /studio/* deep link to it on Cloudflare Pages.
 */
import { NextStudio } from 'next-sanity/studio'
import config from '../../../../../sanity.config'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

export function generateStaticParams() {
  return [{ tool: [] }]
}

export default function StudioPage() {
  return <NextStudio config={config} />
}
