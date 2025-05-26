'use client'

import { useLanguage } from '../context/LanguageContext'

const languages = [
  { code: 'en', name: 'English' },
  { code: 'tr', name: 'Türkçe' },
  { code: 'he', name: 'עברית' },
]

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex space-x-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
            language === lang.code
              ? 'bg-primary text-white shadow-lg'
              : 'bg-white/50 hover:bg-white/80 text-gray-700 shadow-md'
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  )
}