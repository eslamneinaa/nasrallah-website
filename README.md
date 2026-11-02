# Nasrallah Trading Est — corporate website

Bilingual (Arabic RTL / English LTR) corporate site for **nasrallahtrading.com**.

| Layer | Tech |
| --- | --- |
| Framework | Next.js 16 (App Router, TypeScript), fully **static export** |
| Styling / motion | Tailwind CSS v4, Framer Motion |
| CMS | Sanity (project `dfj16ucm`, dataset `production`), Studio embedded at **/studio** |
| Forms | Web3Forms (contact → info@, quotes → quotes@) with honeypot, timing trap and optional hCaptcha |
| Hosting | Cloudflare Pages (`out/` directory, `_headers` + `_redirects`) |

---

## 1. Run it locally

Requirements: **Node.js 20.9+** (22 LTS recommended).

```bash
npm install
cp .env.example .env.local   # then fill in the Web3Forms keys (see §3)
npm run dev
```

Open http://localhost:3000. You are redirected to `/ar/` or `/en/` based on your browser language (Arabic is the default).

To preview the exact production output (what Cloudflare serves):

```bash
npm run build
npm run preview              # serves ./out on http://localhost:3000
```

> **Bundled showroom catalogue.** While the Sanity dataset has no published products, the site shows the showroom catalogue bundled in `src/lib/sample-data.ts` (UCHIDA safes, filing cabinets and jewellery & watch interiors, photographed in `public/products`). Publishing your first product in Sanity and rebuilding replaces it with the Sanity catalogue.

---

## 2. Sanity CMS

### Allow the website to talk to Sanity (one-time)

Go to https://www.sanity.io/manage → project **dfj16ucm** → **API → CORS origins** and add, each with **"Allow credentials"** ticked:

- `http://localhost:3000`
- `https://nasrallahtrading.com`
- `https://www.nasrallahtrading.com` (if used)
- your `*.pages.dev` preview URL (optional)

Or from the terminal:

```bash
npx sanity cors add http://localhost:3000 --credentials
```

```bash
npx sanity cors add https://nasrallahtrading.com --credentials
```

### Edit content

Open **/studio** (e.g. https://nasrallahtrading.com/studio) and log in with your Sanity account. You can also publish a standalone Studio at `nasrallah-trading.sanity.studio` with `npm run sanity:deploy`.

| Document | Fields |
| --- | --- |
| **Product** | `name_en`, `name_ar`, `slug`, `category` → Category, `shortDesc` {en, ar}, `fullDesc` {en, ar} rich text, `images[]` (with alt + hotspot), `specTable[]` (label/value in both languages), `pdfFile` (datasheet), `isFeatured`, `order` |
| **Category** | `title_en`, `title_ar`, `slug`, `order` |
| **Client logo** | `name`, `logo`, `website`, `order` |

- Products marked **Feature on home page** appear in the home "Featured products" grid (up to 6).
- Lower **order** numbers appear first.
- Categories only appear in filters when at least one product uses them.

Schemas live in `src/sanity/schemaTypes/`; Studio config is `sanity.config.ts`.

If you ever make the dataset **private**, create a read token (Viewer) and set `SANITY_API_READ_TOKEN` in the build environment. It is only used at build time and never shipped to browsers.

---

## 3. Web3Forms (contact + quote forms)

1. Go to https://web3forms.com and create an access key for **info@nasrallahtrading.com** → this is `NEXT_PUBLIC_WEB3FORMS_CONTACT_KEY`.
2. Create a second key for **quotes@nasrallahtrading.com** → `NEXT_PUBLIC_WEB3FORMS_QUOTE_KEY`.
3. Put both in `.env.local` (local) and in Cloudflare Pages environment variables (production).

Spam protection, all built in:

- **Honeypot** field (`botcheck`) — Web3Forms' native bot trap.
- **Timing trap** — submissions made less than 2.5 s after the page loads are silently dropped.
- **hCaptcha** (optional) — set `NEXT_PUBLIC_ENABLE_HCAPTCHA=true` to add Web3Forms' free hCaptcha to both forms.

The quote page pre-fills the product from the URL: `/en/request-quote/?product=Steel%20Pipes`. Every "Request a quote" button on a product page links there automatically.

---

## 4. Deploy to Cloudflare Pages

### Option A — Git integration (recommended)

1. Push this folder to a GitHub/GitLab repository.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → choose the repo.
3. Build settings:

   | Setting | Value |
   | --- | --- |
   | Framework preset | `Next.js (Static HTML Export)` |
   | Build command | `npm run build` |
   | Build output directory | `out` |

4. **Environment variables** (Production *and* Preview):

   | Name | Value |
   | --- | --- |
   | `NODE_VERSION` | `22` |
   | `NEXT_PUBLIC_SANITY_PROJECT_ID` | `dfj16ucm` |
   | `NEXT_PUBLIC_SANITY_DATASET` | `production` |
   | `NEXT_PUBLIC_SITE_URL` | `https://nasrallahtrading.com` |
   | `NEXT_PUBLIC_WEB3FORMS_CONTACT_KEY` | *(your key)* |
   | `NEXT_PUBLIC_WEB3FORMS_QUOTE_KEY` | *(your key)* |
   | `NEXT_PUBLIC_ENABLE_HCAPTCHA` | `false` or `true` |

5. Deploy, then **Custom domains → Set up a custom domain** → `nasrallahtrading.com` (and optionally `www`).

### Option B — direct upload from your machine

```bash
npm run build
npx wrangler pages deploy out --project-name nasrallah-trading
```

### Rebuild automatically when content changes

Because the site is static, publish in Sanity → trigger a rebuild:

1. Cloudflare Pages project → **Settings → Builds → Deploy hooks** → create a hook (branch `main`) and copy its URL.
2. https://www.sanity.io/manage → project → **API → Webhooks → Create webhook**:
   - URL: the deploy hook URL
   - Dataset: `production`, Trigger on: Create, Update, Delete
   - Filter: `_type in ["product", "category", "clientLogo"]`
   - HTTP method: `POST`

Each publish now redeploys the site in about a minute.

---

## 5. Security & performance

- `public/_headers` sets HSTS, CSP, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` and COOP on every page, and long-term caching for hashed assets. The CSP allows only what the site uses: Sanity CDN images, Web3Forms, Google Maps embed, hCaptcha and Cloudflare Web Analytics. `/studio` has no CSP (Sanity needs websockets and its own assets) and is `noindex`.
- `public/_redirects` rewrites `/studio/*` deep links to the Studio app.
- Every page is pre-rendered HTML served from Cloudflare's edge, with no server or database calls at request time.
- Images: product photos are resized and served as WebP/AVIF by Sanity's image CDN through a custom `next/image` loader (`src/lib/image-loader.ts`).
- Fonts (Amiri + IBM Plex Sans Arabic for Arabic, Bodoni Moda + Jost for English) are self-hosted at build time via `next/font`.
- Animations respect the visitor's "reduce motion" setting.
- SEO: per-page titles/descriptions, canonical + `hreflang` alternates, Open Graph, JSON-LD (Organization, Product), `sitemap.xml`, `robots.txt`.

---

## 6. Project structure

```
sanity.config.ts            Sanity Studio config (embedded at /studio)
public/_headers             Cloudflare security headers
public/_redirects           Cloudflare rewrites (Studio)
src/
  app/
    (root)/page.tsx         "/" → /ar/ or /en/ language redirect
    (site)/[locale]/        All public pages (layout sets lang/dir/fonts)
      page.tsx              Home
      about/                About Us
      products/             Products list + [slug] details
      request-quote/        Quote form (?product= pre-fill)
      contact/              Showroom directory, contact form, map
      privacy-policy/
    (studio)/studio/        Embedded Sanity Studio
    global-not-found.tsx    Bilingual custom 404 (out/404.html)
    sitemap.ts, robots.ts
  components/               UI (Header, Footer, forms, product explorer, gallery…)
  config/site.ts            Phones, fax, address, map, hours, WhatsApp ← edit me
  i18n/dictionaries/        en.ts / ar.ts — all interface copy
  lib/sanity/               Client, GROQ queries, data access with bundled-catalogue fallback
  sanity/schemaTypes/       Product, Category, Client logo schemas
scripts/flatten-segment-files.mjs   Windows-only post-build fix for local preview
```

---

## 7. Before go-live checklist

- [ ] Add a WhatsApp number in `src/config/site.ts` (WhatsApp buttons stay hidden while it is empty)
- [ ] Review the company story, stats and values copy in `src/i18n/dictionaries/{en,ar}.ts`
- [ ] Add CORS origins in Sanity (§2) and publish real categories, products and client logos
- [ ] Create both Web3Forms keys and add them to Cloudflare env vars (§3)
- [ ] Connect the custom domain and create the Sanity → Cloudflare deploy webhook (§4)
- [ ] Have the privacy policy reviewed for your jurisdiction
