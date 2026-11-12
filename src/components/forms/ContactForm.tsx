'use client'

import type { Dictionary } from '@/i18n/dictionaries/en'
import type { Locale } from '@/lib/types'
import { Captcha, Field, FormAlert, Honeypot, PrivacyNote, SubmitButton, SuccessState } from './FormParts'
import { useWeb3Form, type Schema } from './web3forms'

type Props = { locale: Locale; dict: Dictionary['form'] }

const schema: Schema = {
  name: ['required'],
  email: ['required', 'email'],
  phone: ['phone'],
  message: ['required'],
}

export function ContactForm({ locale, dict }: Props) {
  const { status, errors, formError, onSubmit, reset, setCaptchaToken, captchaKey } = useWeb3Form({
    accessKey: process.env.NEXT_PUBLIC_WEB3FORMS_CONTACT_KEY,
    schema,
    messages: dict,
    subject: (v) => `Website enquiry${v.subject ? `: ${v.subject}` : ''} — ${v.name}`,
    extra: { form: 'Contact', language: locale },
  })

  if (status === 'success') {
    return (
      <SuccessState
        title={dict.successTitle}
        text={dict.successContact}
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
      <Field name="email" label={dict.email} error={errors.email} type="email" autoComplete="email" dir="ltr" required />
      <Field
        name="phone"
        label={dict.phone}
        optionalLabel={dict.optional}
        error={errors.phone}
        type="tel"
        autoComplete="tel"
        dir="ltr"
      />
      <Field name="subject" label={dict.subject} optionalLabel={dict.optional} />
      <Field multiline name="message" label={dict.message} error={errors.message} className="sm:col-span-2" required />
      <div className="space-y-4 sm:col-span-2">
        <Captcha locale={locale} onToken={setCaptchaToken} resetKey={captchaKey} />
        <FormAlert message={formError} />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <PrivacyNote locale={locale} note={dict.privacyNote} link={dict.privacyLink} />
          <SubmitButton sending={status === 'sending'} label={dict.submitContact} sendingLabel={dict.sending} />
        </div>
      </div>
    </form>
  )
}
