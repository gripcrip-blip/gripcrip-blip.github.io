import { About } from './sections/About'
import { AI } from './sections/AI'
import { Cases } from './sections/Cases'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Experiments } from './sections/Experiments'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { Metrics } from './sections/Metrics'
import { Toolbox } from './sections/Toolbox'
import { useLanguage } from './i18n/LanguageProvider'

export default function App() {
  const { t } = useLanguage()

  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-mist-50 focus:px-3 focus:py-2 focus:text-ink-950"
      >
        {t.skip}
      </a>
      <Header />
      <main>
        <Hero />
        <Metrics />
        <About />
        <Cases />
        <Experiments />
        <AI />
        <Experience />
        <Toolbox />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
