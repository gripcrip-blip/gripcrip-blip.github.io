import { useLanguage, type Locale } from '../i18n/LanguageProvider'

const options: Locale[] = ['ru', 'en']

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage()

  return (
    <div
      className="flex items-center rounded-full border border-white/15 p-0.5"
      role="group"
      aria-label="Language"
    >
      {options.map((item) => {
        const on = locale === item
        return (
          <button
            key={item}
            type="button"
            aria-pressed={on}
            onClick={() => setLocale(item)}
            className={`rounded-full px-2.5 py-1 font-mono text-[11px] tracking-[0.16em] transition ${
              on ? 'bg-accent/15 text-accent' : 'text-mist-500 hover:text-mist-50'
            }`}
          >
            {item.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}
