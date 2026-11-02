'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react'
import dynamic from 'next/dynamic'
import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react'
import type { Locale } from '@/lib/types'
import { captchaEnabled, HCAPTCHA_SITEKEY } from './web3forms'

const HCaptcha = dynamic(() => import('@hcaptcha/react-hcaptcha'), { ssr: false })

type FieldProps = {
  name: string
  label: string
  error?: string
  optionalLabel?: string
  className?: string
} & (
  | ({ multiline?: false } & InputHTMLAttributes<HTMLInputElement>)
  | ({ multiline: true } & TextareaHTMLAttributes<HTMLTextAreaElement>)
)

export function Field({ name, label, error, optionalLabel, className = '', multiline, ...rest }: FieldProps) {
  const id = `f-${name}`
  const describedBy = error ? `${id}-error` : undefined
  const common = {
    id,
    name,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy,
    className: 'field-input',
  }
  return (
    <div className={className}>
      <label htmlFor={id} className="field-label">
        {label}
        {optionalLabel && <span className="ms-1 text-ink-400">({optionalLabel})</span>}
      </label>
      {multiline ? (
        <textarea rows={5} {...common} {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)} />
      ) : (
        <input {...common} {...(rest as InputHTMLAttributes<HTMLInputElement>)} />
      )}
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-1.5 text-sm text-red-800"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

/** Invisible to humans; bots that fill it are silently dropped. */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -start-[9999px] h-px w-px overflow-hidden">
      <label>
        Leave this field empty
        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  )
}

export function Captcha({ locale, onToken, resetKey }: { locale: Locale; onToken: (token: string) => void; resetKey: number }) {
  if (!captchaEnabled) return null
  return (
    <div className="min-h-[78px]">
      <HCaptcha
        key={resetKey}
        sitekey={HCAPTCHA_SITEKEY}
        reCaptchaCompat={false}
        languageOverride={locale}
        onVerify={onToken}
        onExpire={() => onToken('')}
      />
    </div>
  )
}

export function FormAlert({ message }: { message: string }) {
  if (!message) return null
  return (
    <div role="alert" className="flex items-start gap-3 border border-red-800/25 bg-red-50/60 p-4 text-sm text-red-900">
      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
      <p>{message}</p>
    </div>
  )
}

export function SubmitButton({ sending, label, sendingLabel }: { sending: boolean; label: string; sendingLabel: string }) {
  return (
    <button type="submit" disabled={sending} className="btn-maroon w-full shrink-0 py-4 whitespace-nowrap sm:w-auto sm:px-10">
      {sending ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4 rtl:-scale-x-100" strokeWidth={1.5} aria-hidden="true" />}
      {sending ? sendingLabel : label}
    </button>
  )
}

export function SuccessState({ title, text, action }: { title: string; text: string; action: ReactNode }) {
  return (
    <motion.div
      role="status"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center px-4 py-12 text-center"
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}
        className="flex h-20 w-20 items-center justify-center border border-gold-500/60 text-gold-600"
      >
        <CheckCircle2 className="h-9 w-9" strokeWidth={1.2} aria-hidden="true" />
      </motion.span>
      <h3 className="display mt-6 text-3xl text-maroon-900">{title}</h3>
      <p className="mt-3 max-w-md leading-relaxed text-ink-500">{text}</p>
      <div className="mt-8">{action}</div>
    </motion.div>
  )
}
