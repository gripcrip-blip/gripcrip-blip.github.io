import { useMemo, useState } from 'react'
import { ADMIN_PASSWORD, ADMIN_SESSION_KEY } from '../data/admin'
import { copy, type Copy, type Locale } from '../data/copy'
import { useLanguage } from '../i18n/LanguageProvider'
import type { CopyBundle } from '../lib/content'

const SKIP_KEYS = new Set(['id', 'kind', 'slug', 'number', 'href'])

const sectionTitles: Record<string, string> = {
  skip: 'Skip link',
  nav: 'Навигация',
  profile: 'Профиль',
  hero: 'Hero',
  metrics: 'Метрики',
  about: 'О себе',
  cases: 'Кейсы',
  experiments: 'Эксперименты',
  ai: 'AI',
  experience: 'Опыт',
  toolbox: 'Стек',
  contact: 'Контакты',
}

function cloneBundle(bundle: CopyBundle): CopyBundle {
  return JSON.parse(JSON.stringify(bundle)) as CopyBundle
}

function setPath(source: unknown, path: Array<string | number>, value: unknown): unknown {
  if (path.length === 0) return value
  const [head, ...rest] = path
  if (Array.isArray(source)) {
    const next = [...source]
    const index = Number(head)
    next[index] = setPath(next[index], rest, value)
    return next
  }
  if (typeof source === 'object' && source !== null) {
    return {
      ...(source as Record<string, unknown>),
      [String(head)]: setPath((source as Record<string, unknown>)[String(head)], rest, value),
    }
  }
  return value
}

function FieldEditor({
  path,
  value,
  onChange,
}: {
  path: Array<string | number>
  value: unknown
  onChange: (path: Array<string | number>, value: string) => void
}) {
  const label = String(path[path.length - 1] ?? '')

  if (typeof value === 'string') {
    const long = value.length > 90 || value.includes('\n')
    const fieldClass =
      'w-full rounded-lg border border-white/10 bg-ink-950 px-3 py-2 text-sm text-mist-50 outline-none focus:border-accent/50'
    return (
      <label className="block space-y-1.5">
        <span className="font-mono text-[10px] uppercase tracking-wider text-mist-500">{label}</span>
        {long ? (
          <textarea
            rows={4}
            className={`${fieldClass} min-h-[6rem] resize-y`}
            value={value}
            onChange={(e) => onChange(path, e.target.value)}
          />
        ) : (
          <input
            className={fieldClass}
            value={value}
            onChange={(e) => onChange(path, e.target.value)}
          />
        )}
      </label>
    )
  }

  if (Array.isArray(value)) {
    return (
      <div className="space-y-3 rounded-xl border border-white/10 p-3">
        <p className="font-mono text-[10px] uppercase tracking-wider text-mist-500">{label}</p>
        {value.map((item, index) => (
          <FieldEditor
            key={`${path.join('.')}.${index}`}
            path={[...path, index]}
            value={item}
            onChange={onChange}
          />
        ))}
      </div>
    )
  }

  if (typeof value === 'object' && value !== null) {
    const entries = Object.entries(value as Record<string, unknown>).filter(
      ([key]) => !SKIP_KEYS.has(key),
    )
    return (
      <div className="space-y-3">
        {path.length > 1 ? (
          <p className="font-mono text-[10px] uppercase tracking-wider text-mist-500">{label}</p>
        ) : null}
        {entries.map(([key, nested]) => (
          <FieldEditor
            key={`${path.join('.')}.${key}`}
            path={[...path, key]}
            value={nested}
            onChange={onChange}
          />
        ))}
      </div>
    )
  }

  return null
}

function Login({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  return (
    <div className="flex min-h-screen items-center justify-center px-5">
      <form
        className="w-full max-w-sm rounded-2xl border border-white/10 bg-ink-900 p-6"
        onSubmit={(e) => {
          e.preventDefault()
          if (password === ADMIN_PASSWORD) {
            window.sessionStorage.setItem(ADMIN_SESSION_KEY, '1')
            onUnlock()
            return
          }
          setError(true)
        }}
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">Private</p>
        <h1 className="mt-3 text-2xl text-mist-50">Admin</h1>
        <p className="mt-2 text-sm text-mist-400">Страница не связана с публичным сайтом.</p>
        <input
          type="password"
          autoComplete="current-password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            setError(false)
          }}
          className="mt-6 w-full rounded-lg border border-white/10 bg-ink-950 px-3 py-2 text-sm text-mist-50 outline-none focus:border-accent/50"
        />
        {error ? <p className="mt-2 text-sm text-red-400">Неверный пароль</p> : null}
        <button
          type="submit"
          className="mt-4 w-full rounded-full bg-mist-50 px-4 py-2 text-sm font-medium text-ink-950"
        >
          Войти
        </button>
      </form>
    </div>
  )
}

export function Admin() {
  const { bundle, saveBundleState, resetBundle } = useLanguage()
  const [unlocked, setUnlocked] = useState(
    () => window.sessionStorage.getItem(ADMIN_SESSION_KEY) === '1',
  )
  const [locale, setLocale] = useState<Locale>('ru')
  const [draft, setDraft] = useState<CopyBundle>(() => cloneBundle(bundle))
  const [saved, setSaved] = useState(false)

  const draftCopy = draft[locale]
  const sections = useMemo(() => Object.entries(draftCopy) as Array<[keyof Copy, Copy[keyof Copy]]>, [draftCopy])

  if (!unlocked) {
    return <Login onUnlock={() => setUnlocked(true)} />
  }

  const updateField = (path: Array<string | number>, value: string) => {
    setDraft((current) => {
      const nextLocale = setPath(current[locale], path, value) as Copy
      return { ...current, [locale]: nextLocale }
    })
    setSaved(false)
  }

  return (
    <div className="min-h-screen bg-ink-950 px-5 py-8 text-mist-50 md:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">Private</p>
            <h1 className="mt-2 text-3xl">Тексты сайта</h1>
          </div>
          <div className="flex gap-2">
            {(['ru', 'en'] as Locale[]).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLocale(item)}
                className={`rounded-full border px-3 py-1.5 font-mono text-[11px] tracking-widest ${
                  locale === item
                    ? 'border-accent/40 bg-accent/10 text-accent'
                    : 'border-white/10 text-mist-400'
                }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-mist-400">
          Сохранение применяет тексты в этом браузере сразу. Чтобы изменения увидели все
          посетители, напиши мне или замени файлы в репозитории.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-full bg-mist-50 px-4 py-2 text-sm font-medium text-ink-950"
            onClick={() => {
              saveBundleState(cloneBundle(draft))
              setSaved(true)
            }}
          >
            Сохранить
          </button>
          <button
            type="button"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-mist-50"
            onClick={() => {
              resetBundle()
              setDraft(cloneBundle({ en: copy.en, ru: copy.ru }))
              setSaved(false)
            }}
          >
            Сбросить
          </button>
          {saved ? <span className="self-center text-sm text-accent">Сохранено</span> : null}
        </div>

        <div className="mt-10 space-y-10">
          {sections.map(([key, value]) => (
            <section key={String(key)} className="rounded-2xl border border-white/10 bg-ink-900/60 p-5">
              <h2 className="mb-5 text-lg text-mist-50">{sectionTitles[String(key)] ?? String(key)}</h2>
              <FieldEditor path={[String(key)]} value={value} onChange={updateField} />
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
