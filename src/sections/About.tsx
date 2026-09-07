import { Reveal } from '../components/Reveal'
import { about } from '../data/site'

export function About() {
  return (
    <section id="about" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-page gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">About</p>
        </Reveal>
        <Reveal delayMs={80}>
          <h2 className="text-3xl font-medium tracking-tight text-mist-50 md:text-4xl">
            {about.title}
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-mist-400 md:text-lg">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
