/**
 * Post-build: writes the 1200×630 JPG share card each product page points to
 * (og:image = /og/products/<photo>.jpg), with the product photo centred on
 * white. JPG because WhatsApp and some apps don't preview WebP.
 */
import { mkdir, readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = path.resolve(process.argv[2] || 'out')
const names = new Set()

for (const locale of ['ar', 'en']) {
  const dir = path.join(root, locale, 'products')
  for (const slug of await readdir(dir)) {
    const file = path.join(dir, slug, 'index.html')
    const html = await readFile(file, 'utf8').catch(() => '')
    for (const [, name] of html.matchAll(/og:image" content="[^"]*\/og\/products\/([\w-]+)\.jpg"/g)) names.add(name)
  }
}

const outDir = path.join(root, 'og', 'products')
await mkdir(outDir, { recursive: true })
for (const name of names) {
  const photo = await sharp(path.join(root, 'products', `${name}.webp`))
    .resize({ width: 1100, height: 570, fit: 'inside' })
    .toBuffer()
  await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#ffffff' } })
    .composite([{ input: photo, gravity: 'centre' }])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(outDir, `${name}.jpg`))
}

console.log(`og-images: wrote ${names.size} share cards`)
