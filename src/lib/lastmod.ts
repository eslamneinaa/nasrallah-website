/**
 * Real last-change dates for the sitemap, read from git at build time.
 *
 * A product page changes when its own block in the catalogue or in its guide
 * changes, or when the product page template does; a category page likewise
 * with its copy, guide and template; other pages with their own page file.
 * Lines not committed yet count as changed now. Without git (e.g. a build
 * from a source archive) every date falls back to the build time.
 */
import { execFileSync } from 'node:child_process'

const now = new Date()

const git = (args: string[]) => {
  try {
    return execFileSync('git', args, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] })
  } catch {
    return null
  }
}

const blameCache = new Map<string, { lines: string[]; times: Date[] } | null>()

/** Every line of a file with the time it was last changed. */
function blame(file: string) {
  if (!blameCache.has(file)) {
    const out = git(['blame', '--line-porcelain', '--', file])
    if (!out) blameCache.set(file, null)
    else {
      const lines: string[] = []
      const times: Date[] = []
      let time = now
      for (const row of out.split('\n')) {
        if (row.startsWith('committer-time ')) time = new Date(Number(row.slice(15)) * 1000)
        else if (row.startsWith('\t')) {
          lines.push(row.slice(1))
          times.push(time)
        }
      }
      blameCache.set(file, { lines, times })
    }
  }
  return blameCache.get(file)
}

const latest = (dates: (Date | undefined)[]) => {
  const valid = dates.filter((d): d is Date => !!d)
  return valid.length ? new Date(Math.max(...valid.map((d) => d.getTime()))) : undefined
}

/**
 * The newest change inside every block of `file` that starts on a line
 * matching `start`, up to the line that closes it at the same indent.
 */
export function blockDate(file: string, start: (line: string) => boolean): Date | undefined {
  const b = blame(file)
  if (!b) return undefined
  const dates: Date[] = []
  b.lines.forEach((line, i) => {
    if (!start(line)) return
    const indent = line.length - line.trimStart().length
    let end = i
    while (end + 1 < b.lines.length) {
      end++
      const l = b.lines[end]
      if (l.trim().startsWith('}') && l.length - l.trimStart().length === indent) break
    }
    dates.push(...b.times.slice(i, end + 1))
  })
  return latest(dates)
}

const fileCache = new Map<string, Date | undefined>()

/** When a file last changed: now if it has uncommitted edits, else its last commit. */
export function fileDate(file: string): Date | undefined {
  if (!fileCache.has(file)) {
    const dirty = git(['status', '--porcelain', '--', file])
    const logged = git(['log', '-1', '--format=%cI', '--', file])?.trim()
    fileCache.set(file, dirty ? now : logged ? new Date(logged) : undefined)
  }
  return fileCache.get(file)
}

/** The product block in the catalogue starts one line above its `slug:` line. */
const productBlockDate = (slug: string) => {
  const b = blame('src/lib/sample-data.ts')
  if (!b) return undefined
  const at = b.lines.findIndex((l) => l.includes(`slug: '${slug}'`))
  if (at < 0) return undefined
  let open = at
  while (open > 0 && b.lines[open].trim() !== '{') open--
  return spanDate(b, open)
}

function spanDate(b: { lines: string[]; times: Date[] }, open: number) {
  const indent = b.lines[open].length - b.lines[open].trimStart().length
  let end = open
  while (end + 1 < b.lines.length) {
    end++
    const l = b.lines[end]
    if (l.trim().startsWith('}') && l.length - l.trimStart().length === indent) break
  }
  return latest(b.times.slice(open, end + 1))
}

const keyed = (slug: string) => (line: string) => line.trimStart().startsWith(`'${slug}': {`)

export const productLastmod = (slug: string) =>
  latest([
    productBlockDate(slug),
    blockDate('src/lib/product-guides.ts', keyed(slug)),
    fileDate('src/app/(site)/[locale]/products/[slug]/page.tsx'),
  ]) ?? now

export const categoryLastmod = (slug: string) =>
  latest([
    blockDate('src/lib/category-content.ts', keyed(slug)),
    blockDate('src/lib/category-guides.ts', keyed(slug)),
    fileDate('src/app/(site)/[locale]/categories/[slug]/page.tsx'),
  ]) ?? now

/** Each static page's text block in the dictionaries. */
const dictKeys: Record<string, string> = {
  about: 'about',
  products: 'products',
  videos: 'videos',
  'request-quote': 'quote',
  contact: 'contact',
  'safe-buying-guide': 'guide',
  articles: 'articles',
  'privacy-policy': 'privacy',
}

const dictDate = (key: string) =>
  latest(['ar', 'en'].map((l) => blockDate(`src/i18n/dictionaries/${l}.ts`, (line) => line === `  ${key}: {`)))

/** A static page: its page file and its text in both dictionaries (the home page: its sections too). */
export const pageLastmod = (path: string) =>
  latest(
    path === '/'
      ? [fileDate('src/app/(site)/[locale]/page.tsx'), fileDate('src/components/home')]
      : [fileDate(`src/app/(site)/[locale]/${path}/page.tsx`), dictKeys[path] ? dictDate(dictKeys[path]) : undefined],
  ) ?? now
