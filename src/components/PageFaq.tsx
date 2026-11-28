import { Plus } from 'lucide-react'

export type FaqItem = { q: string; a: string }

/** FAQPage structured data for a list of questions. */
export const faqJsonLd = (items: FaqItem[]) => ({
  '@type': 'FAQPage',
  mainEntity: items.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
})

/**
 * Questions and answers as plain <details>, so every answer is in the HTML.
 * The page adds faqJsonLd(items) to its own JSON-LD graph.
 */
export function PageFaq({ title, items, className = '' }: { title: string; items: FaqItem[]; className?: string }) {
  if (items.length === 0) return null
  return (
    <section className={className}>
      <h2 className="eyebrow">{title}</h2>
      <div className="mt-4 border-t border-gold-500/30">
        {items.map(({ q, a }) => (
          <details key={q} className="group border-b border-gold-500/30">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-start [&::-webkit-details-marker]:hidden">
              <h3 className="display text-lg text-maroon-900 sm:text-xl">{q}</h3>
              <Plus className="h-5 w-5 shrink-0 text-gold-600 transition duration-300 group-open:rotate-45" strokeWidth={1.4} aria-hidden="true" />
            </summary>
            <p className="pb-6 leading-loose text-ink-500">{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
