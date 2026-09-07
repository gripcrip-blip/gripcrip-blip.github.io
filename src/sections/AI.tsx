import { useState } from 'react'
import { Reveal } from '../components/Reveal'
import { aiFlow } from '../data/site'

export function AI() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="ai" className="border-y border-white/10 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-page gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">AI / build</p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-mist-50 md:text-4xl">
            I don&apos;t just use AI. I build with it.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-mist-400">
            Claude for analysis and coding. Cursor for development and prototyping. I also ship small
            programs, Telegram bots, landings and automation tools around the analytics workflow.
          </p>
        </Reveal>

        <Reveal delayMs={90}>
          <div className="rounded-2xl border border-white/10 bg-ink-900/70 p-6">
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.24em] text-mist-500">
              From data to product
            </p>
            <ol>
              {aiFlow.map((step, index) => (
                <li key={step}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(step)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(step)}
                    onBlur={() => setActive(null)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-mono text-sm tracking-wide transition ${
                      active === step ? 'bg-accent/10 text-accent' : 'text-mist-200 hover:bg-white/5'
                    }`}
                  >
                    <span>{step}</span>
                    <span className="text-[10px] text-mist-500">0{index + 1}</span>
                  </button>
                  {index < aiFlow.length - 1 ? (
                    <p className="px-4 font-mono text-xs text-mist-500" aria-hidden="true">
                      ↓
                    </p>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
