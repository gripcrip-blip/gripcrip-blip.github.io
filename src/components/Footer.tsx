import { contacts } from '../data/site'
import { useLanguage } from '../i18n/LanguageProvider'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-page flex-col gap-4 px-5 py-8 text-sm text-mist-400 md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          {t.profile.name} · {t.profile.role}
        </p>
        <p className="font-mono text-xs tracking-wide">
          {t.profile.location} · {t.profile.remote}
        </p>
        <a href={`mailto:${contacts.email}`} className="hover:text-mist-50">
          {contacts.email}
        </a>
      </div>
    </footer>
  )
}
