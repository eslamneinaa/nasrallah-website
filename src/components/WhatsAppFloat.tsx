'use client'

import { motion } from 'framer-motion'
import { whatsappLink } from '@/config/site'
import { WhatsAppIcon } from './icons'

/** Renders nothing until a WhatsApp number is set in src/config/site.ts. */
export function WhatsAppFloat({ label }: { label: string }) {
  const link = whatsappLink()
  if (!link) return null
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="fixed end-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center bg-maroon-900 text-gold-300 shadow-lift ring-1 ring-gold-500/50 transition hover:bg-maroon-800 sm:end-7 sm:bottom-7"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </motion.a>
  )
}
