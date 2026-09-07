import { Linkedin, Mail, Send } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { contacts } from '../data/site'
import { useLanguage } from '../i18n/LanguageProvider'

export function Contact() {
  const { t } = useLanguage()

  const items = [
    {
      label: 'Telegram',
      href: contacts.telegram,
      detail: contacts.telegramLabel,
      icon: Send,
    },
    {
      label: 'LinkedIn',
      href: contacts.linkedin,
      detail: contacts.linkedinLabel,
      icon: Linkedin,
    },
    {
      label: 'Email',
      href: `mailto:${contacts.email}`,
      detail: contacts.email,
      icon: Mail,
    },
  ]

  return (
    <section id="contact" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-page">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-medium tracking-tight text-mist-50 md:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-mist-500">
            {t.contact.line}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.label} delayMs={index * 70}>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex h-full items-start justify-between rounded-2xl border border-white/10 bg-ink-900/60 p-6 transition hover:border-accent/40 hover:bg-accent/5"
                >
                  <div>
                    <p className="text-sm text-mist-400">{item.label}</p>
                    <p className="mt-2 text-lg text-mist-50">{item.detail}</p>
                  </div>
                  <Icon size={18} className="mt-1 text-accent" aria-hidden="true" />
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
