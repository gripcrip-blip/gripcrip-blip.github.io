import { MetricNumber } from '../components/MetricNumber'
import { metrics } from '../data/site'
import { useInView } from '../hooks/useInView'

export function Metrics() {
  const { ref, inView } = useInView<HTMLElement>(0.25)

  return (
    <section ref={ref} aria-label="Key results" className="border-y border-white/10">
      <div className="mx-auto grid max-w-page grid-cols-2 gap-px bg-white/10 md:grid-cols-3 lg:grid-cols-6">
        {metrics.map((metric, index) => (
          <article key={metric.id} className="bg-ink-950 px-5 py-8 md:px-6 md:py-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist-500">
              {String(index + 1).padStart(2, '0')}
            </p>
            <p className="mt-4 font-mono text-3xl tracking-tight text-mist-50 md:text-[2.05rem] lg:text-4xl">
              <MetricNumber
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
                active={inView}
              />
            </p>
            <p className="mt-3 max-w-[9.5rem] text-sm leading-snug text-mist-400">{metric.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
