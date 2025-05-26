'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import enTranslations from '../../translations/en.json'
import trTranslations from '../../translations/tr.json'
import heTranslations from '../../translations/he.json'

type TranslationType = typeof enTranslations

const translations: Record<string, TranslationType> = {
  en: enTranslations,
  tr: trTranslations,
  he: heTranslations,
}

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
  t: TranslationType
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState('en')
  const t = translations[language] || translations.en

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 