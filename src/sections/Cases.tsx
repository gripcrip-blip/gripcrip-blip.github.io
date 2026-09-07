import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { useInView } from '../hooks/useInView'
import { useLanguage } from '../i18n/LanguageProvider'

const campaignCharts = [
  {
    name: 'CPL',
    max: 10,
    before: { value: 10, label: '~$10' },
    after: { value: 7, label: '~$7' },
  },
  {
    name: 'ROI',
    max: 80,
    before: { value: 60, label: '60%' },
    after: { value: 70, label: '70%' },
  },
]

function CampaignViz() {
  const { t } = useLanguage()
  const { ref, inView } = useInView<HTMLDivElement>(0.35)
  const { viz } = t.cases

  return (
    <div ref={ref} className="mt-8 rounded-xl border border-white/10 bg-ink-950/60 p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-sm text-mist-200">{viz.campaignTitle}</p>
        <p className="font-mono text-[10px] uppercase tracking-widest text-mist-500">
          {viz.beforeAfter}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 px-2 pb-2 pt-4">
        {campaignCharts.map((row) => (
          <div key={row.name}>
            <div className="flex h-40 items-end gap-3">
              {[row.before, row.after].map((bar, index) => (
                <div key={bar.label} className="flex flex-1 flex-col items-center gap-2">
                  <p className="font-mono text-xs text-mist-50">{bar.label}</p>
                  <div className="flex h-28 w-full items-end rounded-md bg-white/5">
                    <div
                      className={`w-full rounded-md ${index === 0 ? 'bg-zinc-600' : 'bg-accent'}`}
                      style={{
                        height: inView ? `${(bar.value / row.max) * 100}%` : '8%',
                        transition: `height 0.9s ease ${index * 0.1}s`,
                      }}
                    />
                  </div>
                  <span className="font-mono text-[10px] text-mist-500">
                    {index === 0 ? viz.before : viz.after}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-sm text-mist-200">{row.name}</p>
          </div>
        ))}
      </div>
      <p className="mt-2 font-mono text-[10px] leading-relaxed text-mist-500">{viz.campaignNote}</p>
    </div>
  )
}

function FunnelViz() {
  const { t } = useLanguage()
  const { ref, inView } = useInView<HTMLDivElement>(0.3)
  const { viz } = t.cases

  return (
    <div ref={ref} className="mt-8">
      <div className="space-y-2">
        {viz.funnel.map((step, i) => (
          <div key={step}>
            <div
              className="rounded-lg border border-white/10 bg-ink-800 px-4 py-2.5 text-sm text-mist-200"
              style={{ marginLeft: `${i * 8}px`, marginRight: `${i * 8}px` }}
            >
              {step}
            </div>
            {i < viz.funnel.length - 1 ? (
              <div className="mx-auto h-3 w-px bg-white/15" aria-hidden="true" />
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {viz.funnelTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-mist-400"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-5 h-12 overflow-hidden rounded-lg border border-white/10 bg-ink-950 p-2">
        <svg viewBox="0 0 320 32" className="h-full w-full" aria-hidden="true">
          <polyline
            fill="none"
            stroke="#8FCBB3"
            strokeWidth="2"
            strokeDasharray="360"
            strokeDashoffset={inView ? 0 : 360}
            style={{ transition: 'stroke-dashoffset 1.1s ease' }}
            points="0,24 40,22 80,20 120,16 160,14 200,12 240,10 280,8 320,6"
          />
        </svg>
      </div>
      <p className="mt-2 font-mono text-[10px] text-mist-500">{viz.illustrative}</p>
    </div>
  )
}

function BiViz() {
  const { t } = useLanguage()
  const flow = t.cases.viz.biFlow

  return (
    <div className="mt-8 space-y-0">
      {flow.map((step, i) => (
        <div key={step} className="text-center">
          <div className="rounded-lg border border-white/10 bg-ink-800 px-3 py-2 font-mono text-xs tracking-wide text-mist-200">
            {step}
          </div>
          {i < flow.length - 1 ? (
            <div className="mx-auto h-4 w-px bg-accent/40" aria-hidden="true" />
          ) : null}
        </div>
      ))}
    </div>
  )
}

function DataViz() {
  const { t } = useLanguage()

  return (
    <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
      {t.cases.viz.dataLayer.map((item) => (
        <div
          key={item}
          className="rounded-xl border border-white/10 bg-ink-800/80 px-3 py-4 text-sm text-mist-200"
        >
          {item}
        </div>
      ))}
    </div>
  )
}

function CaseVisual({ id }: { id: string }) {
  if (id === 'campaigns') return <CampaignViz />
  if (id === 'funnel') return <FunnelViz />
  if (id === 'bi') return <BiViz />
  return <DataViz />
}

export function Cases() {
  const { t } = useLanguage()

  return (
    <section id="work" className="border-t border-white/10 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-page">
        <SectionHeading
          eyebrow={t.cases.eyebrow}
          title={t.cases.title}
          description={t.cases.description}
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {t.cases.items.map((item, index) => (
            <Reveal
              key={item.id}
              delayMs={index * 70}
              className={item.id === 'campaigns' || item.id === 'data-layer' ? 'lg:col-span-2' : ''}
            >
              <article className="h-full rounded-2xl border border-white/10 bg-ink-900/60 p-6 transition hover:border-white/20 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                    {t.cases.caseLabel} {item.number} · {item.category}
                  </p>
                </div>
                <h3 className="mt-4 max-w-xl text-2xl font-medium tracking-tight text-mist-50 md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mist-400 md:text-base">
                  {item.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.result.map((result) => (
                    <span
                      key={result}
                      className="rounded-full bg-accent/10 px-3 py-1 font-mono text-sm text-accent"
                    >
                      {result}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-mist-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <CaseVisual id={item.id} />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
