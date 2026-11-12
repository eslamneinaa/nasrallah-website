/**
 * Product search that understands how people in Qatar ask for safes:
 * «تجوري» finds the same safes as «خزنة», «دولاب حديد» finds steel cupboards,
 * and place or shopping words («قطر», «الدوحة», «للبيع», "Doha") never hide results.
 */

/** Lower-cases and strips Arabic diacritics / letter variants so search is forgiving. */
export const normalize = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[ً-ٰٟـ]/g, '')
    .replace(/[إأآا]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/[̀-ͯ]/g, '')

/**
 * A query word that starts with one of `words` is read as the whole group,
 * and matches any product whose text contains one of `stems`. All values are
 * already normalised (ة → ه, ى → ي, ئ → ي, أ → ا).
 */
type Group = { words: string[]; stems: string[] }

const groups: Group[] = [
  {
    // تجوري، خزنة، خزانة، خزينة، خزائن، قاصة
    words: ['تجوري', 'تجاوير', 'خزن', 'خزين', 'خزاين', 'خزان', 'قاص', 'safe', 'vault', 'strongbox', 'tijori', 'tejori'],
    stems: ['خزن', 'خزين', 'خزاين', 'خزان', 'قاص', 'تجوري', 'safe', 'vault'],
  },
  {
    // مجوهرات، ذهب، ألماس
    words: ['مجوهر', 'جواهر', 'جوهر', 'حلي', 'ذهب', 'الماس', 'jewel', 'gold', 'diamond'],
    stems: ['مجوهر', 'jewel', 'عقود', 'necklace'],
  },
  {
    // حديد، حديدي، حديدية، فولاذ
    words: ['حديد', 'فولاذ', 'معدن', 'steel', 'iron', 'metal'],
    stems: ['حديد', 'فولاذ', 'steel', 'iron'],
  },
  {
    // دولاب حديد / دولاب حديدي
    words: ['دولاب', 'دواليب', 'cupboard', 'wardrobe', 'almirah', 'closet'],
    stems: ['دولاب', 'cupboard', 'الخزاين الحديديه'],
  },
  {
    // لوكر حديد / لوكر حديدي
    words: ['لوكر', 'locker'],
    stems: ['لوكر', 'locker'],
  },
  { words: ['ساع', 'watch', 'rolex'], stems: ['ساع', 'watch'] },
  { words: ['حريق', 'نار', 'fire'], stems: ['حريق', 'fire'] },
  { words: ['ملف', 'مستند', 'وثاي', 'ورق', 'file', 'filing', 'document', 'paper'], stems: ['ملف', 'مستند', 'file', 'filing', 'document'] },
  { words: ['بصم', 'fingerprint', 'biometric'], stems: ['بصم', 'fingerprint'] },
  { words: ['فندق', 'فنادق', 'hotel'], stems: ['فند', 'hotel'] },
  { words: ['نقود', 'نقد', 'فلوس', 'كاش', 'cash', 'money'], stems: ['نقود', 'نقد', 'cash'] },
  { words: ['منزل', 'بيت', 'بيوت', 'home', 'house'], stems: ['منزل', 'home'] },
]

/** Words that describe where or how to buy, not what: every product is sold in Qatar. */
const ignored = new Set(
  [
    'قطر', 'بقطر', 'لقطر', 'دوحه', 'الدوحه', 'بالدوحه', 'للدوحه', 'خليج', 'الخليج', 'بالخليج', 'الخليجي',
    'في', 'من', 'الي', 'علي', 'عن', 'و', 'ب', 'ل', 'للبيع', 'بيع', 'شراء', 'اشتري', 'سعر', 'اسعار', 'ارخص', 'افضل', 'قريب', 'مني',
    'qatar', 'doha', 'gulf', 'gcc', 'in', 'the', 'for', 'at', 'of', 'a', 'an', 'and', 'sale', 'buy', 'price', 'prices', 'cheap', 'best', 'near', 'me',
  ].map(normalize),
)

/** «الخزنة», «بالحديد», «للساعات» → also try the word without its prefix. */
const forms = (word: string) => {
  const bare = word.replace(/^(وال|بال|لل|ال|و|ب|ل)/, '')
  return bare.length >= 3 && bare !== word ? [word, bare] : [word]
}

/** One query word, ready to test against a product's normalised text. */
type Term = (text: string) => boolean

const toTerm = (word: string): Term => {
  const variants = forms(word)
  const group = groups.find((g) => variants.some((v) => g.words.some((w) => v.startsWith(w))))
  const needles = group ? [...group.stems, ...variants] : variants
  return (text) => needles.some((n) => text.includes(n))
}

export const parseQuery = (query: string): Term[] =>
  normalize(query)
    .split(/[\s,،\-–]+/)
    .filter((w) => w && !ignored.has(w))
    .map(toTerm)

export type Indexed<T> = { item: T; text: string; name: string }

/**
 * Items that match every word, those naming it first. When nothing matches
 * every word, `near` holds items that match some of them, best first.
 */
export function search<T>(index: Indexed<T>[], terms: Term[]) {
  if (!terms.length) return { exact: index.map((e) => e.item), near: [] as T[] }

  const scored = index.map((entry) => ({
    entry,
    hits: terms.filter((t) => t(entry.text)).length,
    inName: terms.filter((t) => t(entry.name)).length,
  }))
  const byScore = (a: (typeof scored)[number], b: (typeof scored)[number]) => b.hits - a.hits || b.inName - a.inName

  const exact = scored.filter((s) => s.hits === terms.length).sort(byScore)
  const near = exact.length ? [] : scored.filter((s) => s.hits > 0).sort(byScore)
  return { exact: exact.map((s) => s.entry.item), near: near.map((s) => s.entry.item) }
}
