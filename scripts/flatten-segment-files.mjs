/**
 * Windows-only post-build fix for `output: 'export'`.
 *
 * Next.js writes its per-segment prefetch files (e.g.
 * `__next.!KHNpdGUp.$d$locale.__PAGE__.txt`) using the OS path separator, so
 * on Windows they end up as nested folders and the client's prefetch
 * requests 404 during local preview. Cloudflare Pages builds on Linux, where
 * this never happens — the script is a no-op there.
 */
import { readdir, rename, rm, stat } from 'node:fs/promises'
import path from 'node:path'

if (process.platform !== 'win32') process.exit(0)

const root = path.resolve(process.argv[2] || 'out')
let moved = 0

async function filesUnder(dir, prefix = '') {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const rel = prefix ? `${prefix}.${entry.name}` : entry.name
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await filesUnder(full, rel)))
    else out.push({ full, rel })
  }
  return out
}

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    const full = path.join(dir, entry.name)
    if (entry.name.startsWith('__next.')) {
      for (const file of await filesUnder(full)) {
        await rename(file.full, path.join(dir, `${entry.name}.${file.rel}`))
        moved++
      }
      await rm(full, { recursive: true, force: true })
    } else {
      await walk(full)
    }
  }
}

if ((await stat(root).catch(() => null))?.isDirectory()) {
  await walk(root)
  console.log(`[postbuild] flattened ${moved} segment prefetch files`)
}
