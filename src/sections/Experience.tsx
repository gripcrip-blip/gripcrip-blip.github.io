import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { useLanguage } from '../i18n/LanguageProvider'

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-page">
        <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} />

        <ol className="relative border-l border-white/10 pl-6 md:pl-8">
          {t.experience.items.map((item, index) => (
            <li key={item.id} className="relative mb-12 last:mb-0">
              <span
                className={`absolute -left-[1.7rem] top-1.5 h-2.5 w-2.5 rounded-full md:-left-[2.2rem] ${
                  item.kind === 'status' ? 'bg-accent shadow-glow' : 'bg-accent'
                }`}
                aria-hidden="true"
              />
              <Reveal delayMs={index * 50}>
                <div className="grid gap-4 md:grid-cols-[10rem_1fr] md:gap-10">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-mist-500">
                    {item.period}
                  </p>
                  <div>
                    <h3 className="text-xl font-medium text-mist-50">{item.company}</h3>
                    <p className="mt-1 text-sm text-mist-400">{item.role}</p>
                    <ul className="mt-4 space-y-1.5 text-sm text-mist-400">
                      {item.focus.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
