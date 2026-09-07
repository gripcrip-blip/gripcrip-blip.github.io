import { useMemo, useState } from 'react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { skills, type SkillGroup } from '../data/site'
import { useLanguage } from '../i18n/LanguageProvider'

export function Toolbox() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<'all' | SkillGroup>('all')

  const visible = useMemo(
    () => (filter === 'all' ? skills : skills.filter((skill) => skill.groups.includes(filter))),
    [filter],
  )

  return (
    <section id="stack" className="border-t border-white/10 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-page">
        <SectionHeading
          eyebrow={t.toolbox.eyebrow}
          title={t.toolbox.title}
          description={t.toolbox.description}
        />

        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label={t.toolbox.filtersAria}>
          {t.toolbox.filters.map((item) => {
            const on = filter === item.id
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setFilter(item.id as 'all' | SkillGroup)}
                className={`rounded-full border px-4 py-2 font-mono text-[11px] tracking-[0.18em] transition ${
                  on
                    ? 'border-accent/40 bg-accent/10 text-accent'
                    : 'border-white/10 text-mist-400 hover:border-white/25 hover:text-mist-50'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </div>

        <Reveal>
          <ul className="flex flex-wrap gap-2">
            {visible.map((skill) => (
              <li
                key={skill.name}
                className="rounded-lg border border-white/10 bg-ink-900 px-3 py-2 text-sm text-mist-200 transition hover:border-accent/30 hover:text-mist-50"
              >
                {skill.name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
