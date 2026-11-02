import { PackageIcon } from '@sanity/icons/Package'
import { TagIcon } from '@sanity/icons/Tag'
import { UsersIcon } from '@sanity/icons/Users'
import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Nasrallah Trading Est')
    .items([
      S.documentTypeListItem('product').title('Products').icon(PackageIcon),
      S.documentTypeListItem('category').title('Categories').icon(TagIcon),
      S.divider(),
      S.documentTypeListItem('clientLogo').title('Client logos').icon(UsersIcon),
    ])
