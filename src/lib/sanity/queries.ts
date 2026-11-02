import { defineQuery } from 'next-sanity'

const productProjection = /* groq */ `
  _id,
  "slug": slug.current,
  "name": { "en": name_en, "ar": name_ar },
  "category": category->{
    _id,
    "slug": slug.current,
    "title": { "en": title_en, "ar": title_ar }
  },
  shortDesc,
  fullDesc,
  "images": coalesce(images[defined(asset)]{
    "url": asset->url,
    alt,
    "lqip": asset->metadata.lqip,
    "width": asset->metadata.dimensions.width,
    "height": asset->metadata.dimensions.height
  }, []),
  "specTable": coalesce(specTable[]{
    "label": { "en": label_en, "ar": label_ar },
    "value": { "en": value_en, "ar": value_ar }
  }, []),
  "pdfUrl": pdfFile.asset->url,
  isFeatured,
  order
`

export const PRODUCTS_QUERY = defineQuery(`
  *[_type == "product" && defined(slug.current)]
    | order(coalesce(order, 999) asc, _createdAt desc) { ${productProjection} }
`)

export const CATEGORIES_QUERY = defineQuery(`
  *[_type == "category" && defined(slug.current)]
    | order(coalesce(order, 999) asc, title_en asc) {
      _id,
      "slug": slug.current,
      "title": { "en": title_en, "ar": title_ar }
    }
`)

export const CLIENT_LOGOS_QUERY = defineQuery(`
  *[_type == "clientLogo" && defined(logo.asset)]
    | order(coalesce(order, 999) asc, name asc) {
      _id,
      name,
      "logoUrl": logo.asset->url,
      website
    }
`)
