import { ArrowDown, Download } from 'lucide-react'
import { useState } from 'react'
import { heroFlow, marquee, profile } from '../data/site'

function DataGrid() {
  const cells = Array.from({ length: 48 }, (_, i) => i)
  return (
    <div
      className="grid grid-cols-8 gap-1.5 opacity-70"
      aria-hidden="true"
    >
      {cells.map((i) => (
        <span
          key={i}
          className="data-cell h-1.5 w-1.5 rounded-full bg-accent"
          style={{ animationDelay: `${(i % 12) * 0.22}s`, opacity: i % 5 === 0 ? 0.9 : 0.25 }}
        />
      ))}
    </div>
  )
}

export function Hero() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section
      id="top"
      className="relative overflow-hidden hero-surface px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36"
    >
      <div className="mx-auto grid max-w-page items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
            {profile.name}
          </p>
          <h1 className="mt-5 max-w-3xl text-[2.35rem] font-medium leading-[1.08] tracking-tight text-mist-50 sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            {profile.headline}
          </h1>
          <p className="mt-5 text-lg text-mist-200 md:text-xl">{profile.role}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-mist-400 md:text-lg">
            {profile.summary}
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-mist-500">
            {profile.tags.join(' · ')}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-mist-50 px-5 py-3 text-sm font-medium text-ink-950 transition hover:bg-white"
            >
              View cases
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-mist-50 transition hover:border-accent/50 hover:bg-accent/10"
            >
              <Download size={16} aria-hidden="true" />
              Download CV
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-ink-900/70 p-5 shadow-glow md:p-6">
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.24em] text-mist-500">
            How the work moves
          </p>
          <ol className="space-y-0">
            {heroFlow.map((step, index) => {
              const isOn = active === step
              return (
                <li key={step}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(step)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(step)}
                    onBlur={() => setActive(null)}
                    className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition ${
                      isOn
                        ? 'border-accent/40 bg-accent/10 text-mist-50'
                        : 'border-white/10 bg-transparent text-mist-200 hover:border-white/20'
                    }`}
                  >
                    <span className="text-sm font-medium">{step}</span>
                    <span className="font-mono text-[10px] text-mist-500">
                      0{index + 1}
                    </span>
                  </button>
                  {index < heroFlow.length - 1 ? (
                    <div className="mx-auto h-4 w-px bg-white/10" aria-hidden="true" />
                  ) : null}
                </li>
              )
            })}
          </ol>
          <div className="mt-6 flex items-center justify-between gap-4">
            <DataGrid />
            <p className="max-w-[9.5rem] font-mono text-[10px] uppercase leading-relaxed tracking-wider text-mist-500">
              Marketing data into decisions
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-page overflow-hidden border-y border-white/10 py-3">
        <div className="marquee-track font-mono text-[11px] uppercase tracking-[0.35em] text-mist-500">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={`${item}-${i}`} className="px-6">
              {item}
              <span className="ml-6 text-accent/50">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
