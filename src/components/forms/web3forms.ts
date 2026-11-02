'use client'

import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react'
import type { Dictionary } from '@/i18n/dictionaries/en'

const ENDPOINT = 'https://api.web3forms.com/submit'
/** Submissions faster than this are almost certainly bots. */
const MIN_FILL_MS = 2500

export const captchaEnabled = process.env.NEXT_PUBLIC_ENABLE_HCAPTCHA === 'true'
/** Web3Forms' shared hCaptcha site key (free plan). */
export const HCAPTCHA_SITEKEY = '50b2fe65-b00b-4b9e-ad62-3ba471098be2'

export type FormStatus = 'idle' | 'sending' | 'success' | 'error'
export type FieldErrors = Record<string, string>

type Rule = 'required' | 'email' | 'phone'
export type Schema = Record<string, Rule[]>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^[+()\d\s-]{7,20}$/

function validate(values: Record<string, string>, schema: Schema, msg: Dictionary['form']): FieldErrors {
  const errors: FieldErrors = {}
  for (const [field, rules] of Object.entries(schema)) {
    const value = (values[field] ?? '').trim()
    for (const rule of rules) {
      if (rule === 'required' && !value) errors[field] = msg.required
      else if (rule === 'email' && value && !EMAIL_RE.test(value)) errors[field] = msg.invalidEmail
      else if (rule === 'phone' && value && !PHONE_RE.test(value)) errors[field] = msg.invalidPhone
      if (errors[field]) break
    }
  }
  return errors
}

type Options = {
  accessKey: string | undefined
  schema: Schema
  messages: Dictionary['form']
  /** Builds the subject line from the submitted values */
  subject: (values: Record<string, string>) => string
  extra?: Record<string, string>
}

/**
 * Client-side Web3Forms submission with validation and layered spam
 * protection: honeypot (`botcheck`), minimum fill time, optional hCaptcha.
 */
export function useWeb3Form({ accessKey, schema, messages, subject, extra }: Options) {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [formError, setFormError] = useState('')
  const [captchaToken, setCaptchaToken] = useState('')
  const [captchaKey, setCaptchaKey] = useState(0)
  const startedAt = useRef(0)

  useEffect(() => {
    startedAt.current = Date.now()
  }, [])

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const form = event.currentTarget
      const values = Object.fromEntries(
        Array.from(new FormData(form).entries()).map(([k, v]) => [k, typeof v === 'string' ? v.trim() : '']),
      )

      const fieldErrors = validate(values, schema, messages)
      setErrors(fieldErrors)
      setFormError('')
      if (Object.keys(fieldErrors).length) {
        form.querySelector<HTMLElement>(`[name="${Object.keys(fieldErrors)[0]}"]`)?.focus()
        return
      }

      // Bots: fill the honeypot or submit instantly → pretend success, send nothing.
      if (values.botcheck || Date.now() - startedAt.current < MIN_FILL_MS) {
        setStatus('success')
        return
      }
      if (captchaEnabled && !captchaToken) {
        setFormError(messages.captcha)
        return
      }
      if (!accessKey) {
        setFormError(messages.notConfigured)
        return
      }

      setStatus('sending')
      try {
        const { botcheck: _ignored, ...fields } = values
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: accessKey,
            subject: subject(values),
            from_name: 'Nasrallah Trading Website',
            ...fields,
            ...extra,
            page: window.location.href,
            ...(captchaEnabled ? { 'h-captcha-response': captchaToken } : {}),
          }),
        })
        const json = await res.json().catch(() => ({}))
        if (!res.ok || !json.success) throw new Error(json.message || `HTTP ${res.status}`)
        form.reset()
        setStatus('success')
      } catch (error) {
        console.error('[web3forms]', error)
        setFormError(messages.error)
        setStatus('error')
        setCaptchaToken('')
        setCaptchaKey((k) => k + 1)
      }
    },
    [accessKey, captchaToken, extra, messages, schema, subject],
  )

  const reset = () => {
    setStatus('idle')
    setErrors({})
    setFormError('')
    setCaptchaToken('')
    setCaptchaKey((k) => k + 1)
    startedAt.current = Date.now()
  }

  return { status, errors, formError, onSubmit, reset, setCaptchaToken, captchaKey }
}
