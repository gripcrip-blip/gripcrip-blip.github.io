import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { useLanguage } from '../i18n/LanguageProvider'

export function Experiments() {
  const { t } = useLanguage()

  return (
    <section id="exploring" className="px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-page">
        <SectionHeading
          eyebrow={t.experiments.eyebrow}
          title={t.experiments.title}
          description={t.experiments.description}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {t.experiments.items.map((item, index) => (
            <Reveal key={item.id} delayMs={index * 60}>
              <article className="h-full rounded-2xl border border-dashed border-white/15 bg-ink-900/30 p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-mist-500">
                    {item.status}
                  </p>
                  <p className="font-mono text-[10px] text-mist-500">{item.slug}</p>
                </div>
                <h3 className="mt-4 text-xl font-medium text-mist-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist-400">{item.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
