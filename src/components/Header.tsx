'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Clock, Mail, Menu, Phone, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { siteConfig, telHref } from '@/config/site'
import { href } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/en'
import type { Locale } from '@/lib/types'
import { LanguageToggle } from './LanguageToggle'
import { Logo } from './Logo'
import { NationalDayBadge } from './NationalDayBadge'
import { Khatam } from './ornaments'

type Props = { locale: Locale; nav: Dictionary['nav'] }

export function Header({ locale, nav }: Props) {
  const pathname = usePathname() || ''
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on navigation and lock body scroll while it is open.
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const links = [
    { href: href(locale), label: nav.home, exact: true },
    { href: href(locale, 'about'), label: nav.about },
    { href: href(locale, 'products'), label: nav.products },
    { href: href(locale, 'contact'), label: nav.contact },
  ]
  const isActive = (link: (typeof links)[number]) =>
    link.exact ? pathname === link.href || pathname === link.href.slice(0, -1) : pathname.startsWith(link.href.slice(0, -1))

  const solid = scrolled || open
  const [phone] = siteConfig.phones

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-10 focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-maroon-950"
      >
        {nav.skip}
      </a>

      {/* Showroom bar — collapses once the page scrolls */}
      <div
        className={`hidden overflow-hidden border-b border-gold-500/15 bg-maroon-950 text-[0.8rem] text-pearl-200/80 transition-[max-height,opacity] duration-500 lg:block ${
          solid ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="container-page flex h-10 items-center justify-between gap-6">
          <p className="flex items-center gap-2">
            <Khatam className="h-3 w-3 text-gold-500" />
            {siteConfig.addressShort[locale]}
          </p>
          <ul className="flex items-center gap-6">
            <li className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-gold-500" strokeWidth={1.5} aria-hidden="true" />
              {siteConfig.hours.compact[locale]}
            </li>
            <li>
              <a href={telHref(phone.tel)} className="flex items-center gap-2 transition hover:text-gold-300">
                <Phone className="h-3.5 w-3.5 text-gold-500" strokeWidth={1.5} aria-hidden="true" />
                <span dir="ltr">{phone.display}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 transition hover:text-gold-300">
                <Mail className="h-3.5 w-3.5 text-gold-500" strokeWidth={1.5} aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`transition-colors duration-500 ${
          solid ? 'border-b border-gold-500/25 bg-pearl-50/95 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className={`container-page flex items-center justify-between transition-[height] duration-500 ${solid ? 'h-18' : 'h-22'}`}>
          <div className="flex min-w-0 items-center gap-4 xl:gap-5">
            <Link href={href(locale)} aria-label={siteConfig.name[locale]} className="shrink-0">
              <Logo locale={locale} tone={solid ? 'dark' : 'light'} />
            </Link>
            {siteConfig.showNationalDay && (
              <>
                <span className={`hidden h-10 w-px sm:block ${solid ? 'bg-gold-500/40' : 'bg-gold-400/35'}`} aria-hidden="true" />
                <span className="hidden sm:block">
                  <NationalDayBadge tone={solid ? 'dark' : 'light'} label={nav.nationalDay} />
                </span>
              </>
            )}
          </div>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-2">
              {links.map((link) => {
                const active = isActive(link)
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? 'page' : undefined}
                      className={`relative flex flex-col items-center px-4 py-2 text-[0.95rem] transition-colors ltr:text-[0.75rem] ltr:tracking-[0.2em] ltr:uppercase ${
                        solid ? 'text-ink-700 hover:text-maroon-800' : 'text-pearl-100/85 hover:text-pearl-50'
                      } ${active ? (solid ? 'text-maroon-800' : 'text-pearl-50') : ''}`}
                    >
                      {link.label}
                      {active && (
                        <motion.span
                          layoutId="nav-mark"
                          className="absolute -bottom-1 h-1.5 w-1.5 rotate-45 bg-gold-500"
                          transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                        />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageToggle
              locale={locale}
              label={nav.switchLabel}
              hint={nav.switchAria}
              className={solid ? 'border-maroon-800/20 text-maroon-900 hover:border-maroon-800/60' : 'border-pearl-50/25 text-pearl-50 hover:border-gold-300'}
            />
            <Link
              href={href(locale, 'request-quote')}
              className={`hidden px-5 py-3 md:inline-flex ${solid ? 'btn-maroon' : 'btn-gold'}`}
            >
              {nav.quote}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? nav.close : nav.menu}
              className={`inline-flex h-11 w-11 items-center justify-center transition lg:hidden ${
                solid ? 'text-maroon-900 hover:bg-maroon-800/5' : 'text-pearl-50 hover:bg-white/10'
              }`}
            >
              {open ? <X className="h-6 w-6" strokeWidth={1.4} /> : <Menu className="h-6 w-6" strokeWidth={1.4} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100dvh - 4.5rem)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-khatam-light overflow-y-auto bg-pearl-50 lg:hidden"
          >
            <nav aria-label="Mobile" className="container-page flex h-full flex-col py-8">
              <ul className="divide-y divide-gold-500/20 border-y border-gold-500/20">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      aria-current={isActive(link) ? 'page' : undefined}
                      className={`display flex items-center justify-between py-5 text-2xl ${isActive(link) ? 'text-maroon-800' : 'text-ink-900'}`}
                    >
                      {link.label}
                      {isActive(link) && <Khatam className="h-4 w-4 text-gold-500" />}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto space-y-3 pt-10">
                <Link href={href(locale, 'request-quote')} className="btn-maroon w-full py-4">
                  {nav.quote}
                </Link>
                <div className="grid grid-cols-2 gap-3">
                  {siteConfig.phones.map((p) => (
                    <a key={p.tel} href={telHref(p.tel)} className="btn-outline px-3 py-3.5">
                      <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                      <span dir="ltr">{p.display}</span>
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
