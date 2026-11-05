/**
 * Tells Bing (and the other IndexNow engines) which pages changed, so new
 * articles reach Bing, ChatGPT search and Copilot without waiting for a crawl.
 *
 *   node scripts/indexnow.mjs            articles published today (Qatar time)
 *   node scripts/indexnow.mjs --all      every URL in out/sitemap.xml
 *   node scripts/indexnow.mjs <url>...   just these URLs
 *
 * The key is the public/<key>.txt file served at the site root.
 */
import { readdirSync, readFileSync } from 'node:fs'

const SITE = 'https://nasrallahtrading.com'
const key = readdirSync('public')
  .find((f) => /^[0-9a-f]{32}\.txt$/.test(f))
  ?.replace('.txt', '')
if (!key) throw new Error('No IndexNow key file in public/')

const args = process.argv.slice(2)
let urls
if (args[0] === '--all') {
  urls = [...readFileSync('out/sitemap.xml', 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
} else if (args.length) {
  urls = args
} else {
  const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Qatar' })
  const source = readFileSync('src/lib/articles-data.ts', 'utf8')
  const due = [...source.matchAll(/slug: '([^']+)',\s*date: '([^']+)'/g)].filter((m) => m[2] === today).map((m) => m[1])
  urls = due.length
    ? ['ar', 'en'].flatMap((l) => [`${SITE}/${l}/articles/`, ...due.map((slug) => `${SITE}/${l}/articles/${slug}/`)])
    : []
}

if (!urls.length) {
  console.log('IndexNow: nothing to submit today')
} else {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: new URL(SITE).host, key, keyLocation: `${SITE}/${key}.txt`, urlList: urls }),
  })
  console.log(`IndexNow: ${urls.length} URL(s) submitted, HTTP ${res.status}`)
  // 200/202 = accepted; anything else should not fail a deploy that already went live.
  if (res.status >= 400) console.log(await res.text())
}
