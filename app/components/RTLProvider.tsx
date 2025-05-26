'use client'

import { useLanguage } from '../context/LanguageContext'

export default function RTLProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { language } = useLanguage()
  const isRTL = language === 'ar' || language === 'he'

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} lang={language}>
      {children}
    </div>
  )
} 