import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'tr' },
    { lang: 'he' },
    // { lang: 'ar' },
  ]
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang} dir={params.lang === 'ar' || params.lang === 'he' ? 'rtl' : 'ltr'}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 