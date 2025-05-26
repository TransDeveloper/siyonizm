'use client'

import Image from 'next/image'
import LanguageSwitcher from './components/LanguageSwitcher'
import RTLProvider from './components/RTLProvider'
import { useLanguage } from './context/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  return (
    <RTLProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              {t.nav.home}
            </div>
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-16 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
          <div className="container mx-auto px-4 sm:px-6 relative">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-8 leading-tight animate-fade-in">
              {t.hero.title}
            </h1>
            <p className="text-lg sm:text-2xl max-w-4xl leading-relaxed opacity-90 animate-fade-in-delay">
              {t.hero.subtitle}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-primary">
            <h2 className="text-xl font-semibold mb-4">Contents</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li><a href="#definition" className="text-primary hover:underline">Definition and Etymology</a></li>
              <li><a href="#history" className="text-primary hover:underline">Historical Background</a></li>
              <li><a href="#principles" className="text-primary hover:underline">Core Principles and Ideology</a></li>
              <li><a href="#democracy" className="text-primary hover:underline">Democratic Values and Human Rights</a></li>
              <li><a href="#society" className="text-primary hover:underline">Social Development and Integration</a></li>
              <li><a href="#innovation" className="text-primary hover:underline">Scientific and Technological Advancement</a></li>
              <li><a href="#contemporary" className="text-primary hover:underline">Contemporary Challenges and Developments</a></li>
            </ol>
          </div>

          {/* Definition and Etymology Section */}
          <section id="definition" className="mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-gray-800">{t.sections.whatIsZionism.title}</h2>
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  {t.sections.whatIsZionism.description1}
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  {t.sections.whatIsZionism.description2}
                </p>
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-sm text-gray-600 italic">
                    {t.sections.whatIsZionism.sources}
                  </p>
                </div>
              </div>
              <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/000_UR5C8.jpg"
                  alt="Historical Zionist Congress"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Historical Background Section */}
          <section id="history" className="mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-gray-800">{t.sections.historicalBackground.title}</h2>
            <p className="text-base sm:text-lg mb-8 text-gray-700">{t.sections.historicalBackground.description}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {Object.entries(t.sections.historicalBackground.points).map(([key, value]) => (
                <div key={key} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary capitalize">{key}</h3>
                  <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-gray-50 p-4 sm:p-6 rounded-lg border-l-4 border-primary">
              <p className="text-sm text-gray-600 italic">{t.sections.historicalBackground.sources}</p>
            </div>
          </section>

          {/* Core Principles Section */}
          <section id="principles" className="mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-gray-800">{t.sections.corePrinciples.title}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary">{t.sections.corePrinciples.selfDetermination.title}</h3>
                <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">{t.sections.corePrinciples.selfDetermination.description}</p>
                <p className="text-sm text-gray-600 italic border-t pt-3">{t.sections.corePrinciples.selfDetermination.source}</p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary">{t.sections.corePrinciples.culturalRevival.title}</h3>
                <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">{t.sections.corePrinciples.culturalRevival.description}</p>
                <p className="text-sm text-gray-600 italic border-t pt-3">{t.sections.corePrinciples.culturalRevival.source}</p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary">{t.sections.corePrinciples.nationalSecurity.title}</h3>
                <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">{t.sections.corePrinciples.nationalSecurity.description}</p>
                <p className="text-sm text-gray-600 italic border-t pt-3">{t.sections.corePrinciples.nationalSecurity.source}</p>
              </div>
            </div>
          </section>

          {/* Democratic Values Section */}
          <section id="democracy" className="mb-16 sm:mb-24 bg-white rounded-2xl shadow-xl p-6 sm:p-12 transform hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-800">{t.sections.democraticValues.title}</h2>
            <p className="text-base sm:text-lg mb-8 sm:mb-12 text-gray-700">{t.sections.democraticValues.description}</p>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {Object.entries(t.sections.democraticValues.points).map(([key, value]) => (
                <div key={key} className="bg-gray-50 p-6 sm:p-8 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary capitalize">{key}</h3>
                  <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-gray-50 p-4 sm:p-6 rounded-lg border-l-4 border-primary">
              <p className="text-sm text-gray-600 italic">{t.sections.democraticValues.sources}</p>
            </div>
          </section>

          {/* Social Development Section */}
          <section id="society" className="mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-800">{t.sections.flourishingSociety.title}</h2>
            <p className="text-base sm:text-lg mb-8 sm:mb-12 text-gray-700">{t.sections.flourishingSociety.description}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {Object.entries(t.sections.flourishingSociety.points).map(([key, value]) => (
                <div key={key} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary capitalize">{key}</h3>
                  <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-gray-50 p-4 sm:p-6 rounded-lg border-l-4 border-primary">
              <p className="text-sm text-gray-600 italic">{t.sections.flourishingSociety.sources}</p>
            </div>
          </section>

          {/* Innovation Section */}
          <section id="innovation" className="mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-800">{t.sections.innovation.title}</h2>
            <p className="text-base sm:text-lg mb-8 sm:mb-12 text-gray-700">{t.sections.innovation.description}</p>
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              {Object.entries(t.sections.innovation.points).map(([key, value]) => (
                <div key={key} className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-primary capitalize">{key}</h3>
                  <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-gray-50 p-4 sm:p-6 rounded-lg border-l-4 border-primary">
              <p className="text-sm text-gray-600 italic">{t.sections.innovation.sources}</p>
            </div>
          </section>

          {/* Contemporary Issues Section */}
          <section id="contemporary" className="mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-800">{t.sections.contemporaryIssues.title}</h2>
            <p className="text-base sm:text-lg mb-8 sm:mb-12 text-gray-700">{t.sections.contemporaryIssues.description}</p>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {Object.entries(t.sections.contemporaryIssues.points).map(([key, value]) => (
                <div key={key} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary capitalize">{key}</h3>
                  <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-gray-50 p-4 sm:p-6 rounded-lg border-l-4 border-primary">
              <p className="text-sm text-gray-600 italic">{t.sections.contemporaryIssues.sources}</p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <p className="text-base sm:text-lg opacity-80">{t.footer.copyright}</p>
          </div>
        </footer>
      </div>
    </RTLProvider>
  )
}