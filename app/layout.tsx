'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { LanguageProvider } from './context/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Zionism - Understanding the Jewish National Movement',
//   description: 'Learn about Zionism, its history, principles, and importance in modern Jewish identity and the State of Israel.',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className}>
        <LanguageProvider>
          <main className="min-h-screen bg-gray-50">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  )
} 