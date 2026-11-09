'use client'

import { useSearchParams } from 'next/navigation'
import type { Dictionary } from '@/i18n/dictionaries/en'
import type { Locale } from '@/lib/types'
import { Captcha, Field, FormAlert, Honeypot, SubmitButton, SuccessState } from './FormParts'
import { useWeb3Form, type Schema } from './web3forms'

type Props = { locale: Locale; dict: Dictionary['form']; initialProduct?: string }

const schema: Schema = {
  name: ['required'],
  phone: ['required', 'phone'],
  // Phone is enough to reply on WhatsApp or by call, so email and quantity are optional.
  email: ['email'],
  product: ['required'],
}

export function QuoteForm({ locale, dict, initialProduct = '' }: Props) {
  const { status, errors, formError, onSubmit, reset, setCaptchaToken, captchaKey } = useWeb3Form({
    accessKey: process.env.NEXT_PUBLIC_WEB3FORMS_QUOTE_KEY,
    schema,
    messages: dict,
    subject: (v) => `Quote request: ${v.product} — ${v.company || v.name}`,
    extra: { form: 'Quote request', language: locale },
  })

  if (status === 'success') {
    return (
      <SuccessState
        title={dict.successTitle}
        text={dict.successQuote}
        action={
          <button type="button" onClick={reset} className="btn-outline">
            {dict.sendAnother}
          </button>
        }
      />
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative grid gap-5 sm:grid-cols-2">
      <Honeypot />
      <Field name="name" label={dict.name} error={errors.name} autoComplete="name" required />
      <Field name="company" label={dict.company} optionalLabel={dict.optional} autoComplete="organization" />
      <Field name="phone" label={dict.phone} error={errors.phone} type="tel" autoComplete="tel" dir="ltr" required />
      <Field name="email" label={dict.email} error={errors.email} type="email" autoComplete="email" dir="ltr" optionalLabel={dict.optional} />
      <Field
        name="product"
        label={dict.product}
        error={errors.product}
        placeholder={dict.productPlaceholder}
        defaultValue={initialProduct}
        className="sm:col-span-2"
        required
      />
      <Field
        name="quantity"
        label={dict.quantity}
        error={errors.quantity}
        placeholder={dict.quantityPlaceholder}
        optionalLabel={dict.optional}
        className="sm:col-span-2"
      />
      <Field
        multiline
        name="notes"
        label={dict.notes}
        optionalLabel={dict.optional}
        placeholder={dict.notesPlaceholder}
        className="sm:col-span-2"
      />
      <div className="space-y-4 sm:col-span-2">
        <Captcha locale={locale} onToken={setCaptchaToken} resetKey={captchaKey} />
        <FormAlert message={formError} />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-500">{dict.privacyNote}</p>
          <SubmitButton sending={status === 'sending'} label={dict.submitQuote} sendingLabel={dict.sending} />
        </div>
      </div>
    </form>
  )
}

/** Reads `?product=` so product pages can pre-fill the form. */
export function QuoteFormWithParams(props: Omit<Props, 'initialProduct'>) {
  const product = useSearchParams().get('product') ?? ''
  return <QuoteForm key={product} {...props} initialProduct={product.slice(0, 200)} />
}
