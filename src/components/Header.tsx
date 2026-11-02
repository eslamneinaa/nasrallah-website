'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { siteConfig } from '@/config/site'
import { href } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/en'
import type { Locale } from '@/lib/types'
import { LanguageToggle } from './LanguageToggle'
import { Logo } from './Logo'

type Props = { locale: Locale; nav: Dictionary['nav'] }

export function Header({ locale, nav }: Props) {
  const pathname = usePathname() || ''
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'bg-white/90 shadow-[0_1px_0_rgb(6_18_39/0.06),0_10px_30px_-20px_rgb(6_18_39/0.4)] backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:rounded-lg focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-navy-950"
      >
        {nav.skip}
      </a>
      <div className={`container-page flex items-center justify-between transition-all duration-500 ${solid ? 'h-18' : 'h-22'}`}>
        <Link href={href(locale)} aria-label={siteConfig.name[locale]} className="shrink-0">
          <Logo locale={locale} tone={solid ? 'dark' : 'light'} />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => {
              const active = isActive(link)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={`relative rounded-full px-4 py-2 text-[0.95rem] font-semibold transition-colors ${
                      solid ? 'text-navy-800 hover:text-navy-950' : 'text-white/85 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gold-500"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle
            locale={locale}
            label={nav.switchLabel}
            ariaLabel={nav.switchAria}
            className={solid ? 'border-navy-100 text-navy-800 hover:border-navy-300' : 'border-white/25 text-white hover:border-white/60'}
          />
          <Link href={href(locale, 'request-quote')} className="btn-gold hidden px-5 py-2.5 md:inline-flex">
            {nav.quote}
            <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? nav.close : nav.menu}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition lg:hidden ${
              solid ? 'text-navy-900 hover:bg-navy-50' : 'text-white hover:bg-white/10'
            }`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100dvh - 4.5rem)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-y-auto border-t border-navy-50 bg-white lg:hidden"
          >
            <nav aria-label="Mobile" className="container-page flex h-full flex-col py-6">
              <ul className="space-y-1">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: locale === 'ar' ? 16 : -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      aria-current={isActive(link) ? 'page' : undefined}
                      className={`flex items-center justify-between rounded-2xl px-4 py-4 text-xl font-bold ${
                        isActive(link) ? 'bg-navy-50 text-navy-950' : 'text-navy-800'
                      }`}
                    >
                      {link.label}
                      {isActive(link) && <span className="h-2 w-2 rounded-full bg-gold-500" />}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto space-y-3 pt-8">
                <Link href={href(locale, 'request-quote')} className="btn-gold w-full py-4 text-base">
                  {nav.quote}
                </Link>
                <a href={`tel:${siteConfig.phone.tel}`} className="btn-ghost w-full py-4 text-base">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span dir="ltr">{siteConfig.phone.display}</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
