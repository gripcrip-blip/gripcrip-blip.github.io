import { contacts, profile } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-page flex-col gap-4 px-5 py-8 text-sm text-mist-400 md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          {profile.name} · {profile.role}
        </p>
        <p className="font-mono text-xs tracking-wide">
          {profile.location} · Remote
        </p>
        <a href={`mailto:${contacts.email}`} className="hover:text-mist-50">
          {contacts.email}
        </a>
      </div>
    </footer>
  )
}
