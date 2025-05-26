import Image from 'next/image'
import LanguageSwitcher from '../components/LanguageSwitcher'
import enTranslations from '../../translations/en.json'
import trTranslations from '../../translations/tr.json'
import heTranslations from '../../translations/he.json'

const translations = {
  en: enTranslations,
  tr: trTranslations,
  he: heTranslations,
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'tr' },
    { lang: 'he' },
    // { lang: 'ar' },
  ]
}

export default function Home({ params }: { params: { lang: string } }) {
  const { lang } = params
  const t = translations[lang as keyof typeof translations] || translations.en

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-primary">Zionism</div>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">{t.hero.title}</h1>
          <p className="text-xl max-w-3xl">{t.hero.subtitle}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* What is Zionism Section */}
        <section className="mb-16">
          <h2>{t.sections.whatIsZionism.title}</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p>{t.sections.whatIsZionism.description1}</p>
              <p>{t.sections.whatIsZionism.description2}</p>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://static-cdn.toi-media.com/www/uploads/2017/12/000_UR5C8.jpg"
                alt="Historical Zionist Congress"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Democratic Values Section */}
        <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <h2>{t.sections.democraticValues.title}</h2>
          <p className="mb-6">{t.sections.democraticValues.description}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Freedom of Religion</h3>
              <p>{t.sections.democraticValues.points.freedom}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Equal Rights</h3>
              <p>{t.sections.democraticValues.points.equality}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Universal Access</h3>
              <p>{t.sections.democraticValues.points.education}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Political Representation</h3>
              <p>{t.sections.democraticValues.points.representation}</p>
            </div>
          </div>
        </section>

        {/* Flourishing Society Section */}
        <section className="mb-16">
          <h2>{t.sections.flourishingSociety.title}</h2>
          <p className="mb-6">{t.sections.flourishingSociety.description}</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Minority Rights</h3>
              <p>{t.sections.flourishingSociety.points.minorities}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Women's Rights</h3>
              <p>{t.sections.flourishingSociety.points.women}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">LGBTQ+ Rights</h3>
              <p>{t.sections.flourishingSociety.points.lgbtq}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Education & Healthcare</h3>
              <p>{t.sections.flourishingSociety.points.education}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Economic Opportunity</h3>
              <p>{t.sections.flourishingSociety.points.economy}</p>
            </div>
          </div>
        </section>

        {/* Innovation Section */}
        <section className="mb-16">
          <h2>{t.sections.innovation.title}</h2>
          <p className="mb-6">{t.sections.innovation.description}</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Technology & Medicine</h3>
              <p>{t.sections.innovation.points.technology}</p>
              <p className="mt-2">{t.sections.innovation.points.medicine}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Environment & Education</h3>
              <p>{t.sections.innovation.points.environment}</p>
              <p className="mt-2">{t.sections.innovation.points.education}</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  )
} 