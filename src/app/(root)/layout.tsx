import type { ReactNode } from 'react'

/** Minimal root layout for the "/" language-redirect page only. */
export default function RootRedirectLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, background: '#061227' }}>{children}</body>
    </html>
  )
}
