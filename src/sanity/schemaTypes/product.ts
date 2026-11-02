import { PackageIcon } from '@sanity/icons/Package'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: PackageIcon,
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'media', title: 'Media & files' },
    { name: 'specs', title: 'Specifications' },
    { name: 'settings', title: 'Settings' },
  ],
  fields: [
    defineField({
      name: 'name_en',
      title: 'Name (English)',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name_ar',
      title: 'Name (Arabic)',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      group: 'content',
      description: 'Used in the product URL, e.g. /en/products/steel-pipes',
      options: { source: 'name_en', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'reference',
      group: 'content',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortDesc',
      title: 'Short description',
      description: 'One or two sentences shown on product cards.',
      type: 'localeText',
      group: 'content',
    }),
    defineField({
      name: 'fullDesc',
      title: 'Full description',
      type: 'localeBlock',
      group: 'content',
    }),
    defineField({
      name: 'images',
      type: 'array',
      group: 'media',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
              description: 'Describe the image for screen readers and SEO.',
            }),
          ],
        }),
      ],
      options: { layout: 'grid' },
      validation: (rule) => rule.min(1).error('Add at least one product image.'),
    }),
    defineField({
      name: 'pdfFile',
      title: 'Datasheet / brochure (PDF)',
      type: 'file',
      group: 'media',
      options: { accept: 'application/pdf' },
    }),
    defineField({
      name: 'specTable',
      title: 'Specification table',
      type: 'array',
      group: 'specs',
      of: [
        defineArrayMember({
          name: 'specRow',
          title: 'Row',
          type: 'object',
          fields: [
            defineField({ name: 'label_en', title: 'Label (English)', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'label_ar', title: 'Label (Arabic)', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'value_en', title: 'Value (English)', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'value_ar', title: 'Value (Arabic)', type: 'string', validation: (rule) => rule.required() }),
          ],
          preview: {
            select: { title: 'label_en', subtitle: 'value_en' },
          },
        }),
      ],
    }),
    defineField({
      name: 'isFeatured',
      title: 'Feature on home page',
      type: 'boolean',
      group: 'settings',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      description: 'Lower numbers appear first.',
      type: 'number',
      group: 'settings',
      initialValue: 0,
    }),
  ],
  orderings: [
    { title: 'Display order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    { title: 'Name (EN)', name: 'nameAsc', by: [{ field: 'name_en', direction: 'asc' }] },
  ],
  preview: {
    select: {
      title: 'name_en',
      subtitle: 'name_ar',
      media: 'images.0',
      featured: 'isFeatured',
    },
    prepare: ({ title, subtitle, media, featured }) => ({
      title: featured ? `★ ${title}` : title,
      subtitle,
      media,
    }),
  },
})
