/**
 * Post-build: writes smaller copies of the bundled photos so `next/image`
 * can serve phones a right-sized file instead of the 1600px original.
 *
 * For every `out/{products,showroom}/<name>.webp` it writes
 * `<name>.w<width>.webp` for each width below. `src/lib/image-loader.ts`
 * points srcset entries at these files, so the two width lists must match.
 * (Sanity images don't need this: Sanity's CDN resizes them on request.)
 */
import { readdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const WIDTHS = [384, 640, 828, 1200]
const root = path.resolve(process.argv[2] || 'out')
let written = 0

for (const folder of ['products', 'showroom']) {
  const dir = path.join(root, folder)
  for (const file of await readdir(dir)) {
    if (!file.endsWith('.webp') || /\.w\d+\.webp$/.test(file)) continue
    const source = path.join(dir, file)
    for (const width of WIDTHS) {
      await sharp(source)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 78 })
        .toFile(path.join(dir, file.replace(/\.webp$/, `.w${width}.webp`)))
      written++
    }
  }
}

console.log(`resize-images: wrote ${written} resized copies`)
