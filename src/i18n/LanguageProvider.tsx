import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { copy, type Copy, type Locale } from '../data/copy'
import { clearBundle, loadBundle, saveBundle, type CopyBundle } from '../lib/content'

export type { Locale }

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Copy
  bundle: CopyBundle
  saveBundleState: (next: CopyBundle) => void
  resetBundle: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)
const STORAGE_KEY = 'locale'

function readLocale(): Locale {
  const saved = window.localStorage.getItem(STORAGE_KEY)
  return saved === 'ru' || saved === 'en' ? saved : 'en'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readLocale)
  const [bundle, setBundle] = useState<CopyBundle>(loadBundle)

  useEffect(() => {
    document.documentElement.lang = locale
    window.localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale: setLocaleState,
      t: bundle[locale],
      bundle,
      saveBundleState: (next: CopyBundle) => {
        setBundle(next)
        saveBundle(next)
      },
      resetBundle: () => {
        clearBundle()
        setBundle({ en: copy.en, ru: copy.ru })
      },
    }),
    [locale, bundle],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return ctx
}
