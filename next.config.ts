import type { NextConfig } from 'next'

/**
 * Static export: the whole site is pre-rendered to `out/` at build time and
 * served from Cloudflare Pages' edge. Content changes in Sanity trigger a
 * rebuild through a Cloudflare Pages deploy hook (see README).
 *
 * Security headers and redirects live in `public/_headers` and
 * `public/_redirects` because `headers()`/`redirects()` are not available
 * with `output: 'export'`.
 */
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    loader: 'custom',
    loaderFile: './src/lib/image-loader.ts',
  },
  experimental: {
    globalNotFound: true,
  },
}

export default nextConfig
