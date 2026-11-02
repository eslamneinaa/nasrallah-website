'use client'

import { motion } from 'framer-motion'
import { whatsappLink } from '@/config/site'
import { WhatsAppIcon } from './icons'

export function WhatsAppFloat({ label }: { label: string }) {
  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed end-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_12px_30px_-8px_rgb(37_211_102/0.7)] sm:end-7 sm:bottom-7"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-30 [animation-duration:2.5s]" aria-hidden="true" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </motion.a>
  )
}
