import { Download, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile } from '../data/site'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors ${
        scrolled || open ? 'border-b border-white/10 bg-ink-950/85 backdrop-blur-md' : ''
      }`}
    >
      <div className="mx-auto flex max-w-page items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="font-mono text-sm tracking-[0.22em] text-mist-50">
          AL
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-mist-400 transition-colors hover:text-mist-50"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.cvPath}
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-mist-50 transition hover:border-accent/50 hover:bg-accent/10"
          >
            <Download size={14} aria-hidden="true" />
            Download CV
          </a>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-mist-50 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 bg-ink-950 px-5 py-6 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg text-mist-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 pt-2 text-accent"
              onClick={() => setOpen(false)}
            >
              <Download size={16} aria-hidden="true" />
              Download CV
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
