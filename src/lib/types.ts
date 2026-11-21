import type { PortableTextBlock } from 'next-sanity'

export type Locale = 'ar' | 'en'

export type Localized<T = string> = Partial<Record<Locale, T>>

export type ProductImage = {
  url: string
  alt?: string | null
  /** Arabic alt text; the Arabic pages fall back to `alt` without it. */
  altAr?: string | null
  lqip?: string | null
  width?: number | null
  height?: number | null
}

/** The image's alt text in the page's language. */
export const imageAlt = (image: ProductImage, locale: Locale) => (locale === 'ar' && image.altAr) || image.alt

export type Category = {
  _id: string
  slug: string
  title: Localized
}

export type SpecRow = {
  label: Localized
  value: Localized
}

export type ProductVideo = {
  url: string
  poster: string
  label: Localized
}

export type Product = {
  _id: string
  slug: string
  name: Localized
  /** Page title for Google when it should differ from the name (phrased as people search). */
  seoTitle?: Localized | null
  category?: Category | null
  shortDesc?: Localized | null
  fullDesc?: Localized<PortableTextBlock[]> | null
  images: ProductImage[]
  /** Optional vertical showroom clip (bundled catalogue only) */
  video?: ProductVideo | null
  specTable: SpecRow[]
  pdfUrl?: string | null
  /** Price in Qatari riyals. Only priced products are marked up as Product for Google. */
  price?: number | null
  isFeatured?: boolean | null
  order?: number | null
}

export type ClientLogo = {
  _id: string
  name: string
  logoUrl?: string | null
  website?: string | null
}

export type Catalog = {
  products: Product[]
  categories: Category[]
  /** true when the CMS has no products yet and the bundled showroom catalog is shown */
  isSample: boolean
}
