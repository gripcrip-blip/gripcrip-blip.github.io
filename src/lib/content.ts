import { copy, type Copy, type Locale } from '../data/copy'
import { COPY_STORAGE_KEY } from '../data/admin'

export type CopyBundle = Record<Locale, Copy>

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export function deepMerge<T>(base: T, over: unknown): T {
  if (over === undefined) return base

  if (Array.isArray(base)) {
    if (!Array.isArray(over)) return base
    return over.map((item, index) => {
      const current = base[index]
      if (isPlainObject(current) && isPlainObject(item)) {
        return deepMerge(current, item)
      }
      return item as (typeof base)[number]
    }) as T
  }

  if (isPlainObject(base) && isPlainObject(over)) {
    const next: Record<string, unknown> = { ...base }
    for (const key of Object.keys(over)) {
      next[key] = deepMerge((base as Record<string, unknown>)[key], over[key])
    }
    return next as T
  }

  return over as T
}

export function loadBundle(): CopyBundle {
  try {
    const raw = window.localStorage.getItem(COPY_STORAGE_KEY)
    if (!raw) return { en: copy.en, ru: copy.ru }
    const parsed = JSON.parse(raw) as Partial<CopyBundle>
    return {
      en: deepMerge(copy.en, parsed.en),
      ru: deepMerge(copy.ru, parsed.ru),
    }
  } catch {
    return { en: copy.en, ru: copy.ru }
  }
}

export function saveBundle(bundle: CopyBundle) {
  window.localStorage.setItem(COPY_STORAGE_KEY, JSON.stringify(bundle))
}

export function clearBundle() {
  window.localStorage.removeItem(COPY_STORAGE_KEY)
}
