import type { SchemaTypeDefinition } from 'sanity'
import { category } from './category'
import { clientLogo } from './clientLogo'
import { localeBlock, localeString, localeText } from './locale'
import { product } from './product'

export const schemaTypes: SchemaTypeDefinition[] = [
  // documents
  product,
  category,
  clientLogo,
  // objects
  localeString,
  localeText,
  localeBlock,
]
