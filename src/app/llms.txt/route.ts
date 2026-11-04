import { siteConfig } from '@/config/site'
import { fill, getDictionary, href, pick } from '@/i18n'
import { getArticles } from '@/lib/articles'
import { getCatalog } from '@/lib/sanity/api'

export const dynamic = 'force-static'

/**
 * /llms.txt — a plain-Markdown summary of the business for AI assistants
 * (https://llmstxt.org). Built from the same settings and catalogue as the
 * site, so it never drifts from what the pages say.
 */
export async function GET() {
  const { products, categories } = await getCatalog()
  const articles = getArticles()
  const en = getDictionary('en')
  const url = (path?: string) => siteConfig.url + href('en', path)
  const phones = siteConfig.phones.map((p) => `${siteConfig.dialCode} ${p.display}`).join(', ')
  const faq = en.faq.items.map(({ q, a }) => ({
    q,
    a: fill(a, { address: siteConfig.address.en, hours: siteConfig.hours.compact.en, phone: phones }),
  }))

  const body = `# ${siteConfig.name.en} (${siteConfig.name.ar})

> ${en.meta.description}

${siteConfig.name.en} was founded in ${siteConfig.foundedYear} and sells ${siteConfig.brands.join(' and ')} safes from its showroom in Doha, Qatar, to ministries, private institutions, banks, companies and individuals (more than 1,000 clients). It also sells steel office cupboards, steel lockers and filing cabinets. Arabic search terms for what it sells: خزائن، خزنة، خزينة، تجوري، خزنة حديدية، تجوري حديد، خزانة حديدية، خزائن نقود، خزائن مجوهرات، خزائن مقاومة للحريق، لوكرات حديدية. Delivery is free, and a locked-safe opening service is available once the Ministry of Interior's requirements are met. The site is bilingual: Arabic at ${siteConfig.url}/ar/ and English at ${siteConfig.url}/en/.

## Contact

- Showroom: ${siteConfig.address.en} (map: ${siteConfig.map.link})
- Opening hours: ${siteConfig.hours.compact.en}; ${siteConfig.hours.closed.en}
- Phone: ${phones}
- WhatsApp: ${siteConfig.dialCode} ${siteConfig.whatsappDisplay}
- Email: ${siteConfig.email}
- Instagram: ${siteConfig.instagram.url}
- Google Business Profile: ${siteConfig.googleProfile}

## Pages

- [About us](${url('about')}): history since ${siteConfig.foundedYear}, values and showroom
- [Products](${url('products')}): the full catalogue
- [Safe buying guide for Qatar](${url('safe-buying-guide')}): choosing cash, jewellery and document safes, what sets the price, and where to buy
- [Articles](${url('articles')}): practical advice on choosing, placing and caring for safes
- [Request a quote](${url('request-quote')})
- [Contact](${url('contact')})

## Product categories

${categories.map((c) => `- [${pick(c.title, 'en')}](${url('products')}?category=${c.slug}) (${pick(c.title, 'ar')})`).join('\n')}

## Products

${products.map((p) => `- [${pick(p.name, 'en')}](${url(`products/${p.slug}`)}): ${pick(p.shortDesc, 'en') ?? ''}`).join('\n')}

## Articles

${articles.map((a) => `- [${a.title.en}](${url(`articles/${a.slug}`)}) (${a.date}): ${a.description.en}`).join('\n')}

## Frequently asked questions

${faq.map(({ q, a }) => `### ${q}\n\n${a}`).join('\n\n')}
`

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
