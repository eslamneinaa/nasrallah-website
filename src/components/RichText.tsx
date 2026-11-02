import { PortableText, type PortableTextBlock, type PortableTextComponents } from 'next-sanity'

const components: PortableTextComponents = {
  marks: {
    link: ({ value, children }) => {
      const external = typeof value?.href === 'string' && /^https?:/.test(value.href)
      return (
        <a href={value?.href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          {children}
        </a>
      )
    },
  },
}

export function RichText({ value }: { value?: PortableTextBlock[] | null }) {
  if (!value?.length) return null
  return (
    <div className="prose-rich">
      <PortableText value={value} components={components} />
    </div>
  )
}
