import { Download } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageProvider'

type DownloadCvButtonProps = {
  className: string
  iconSize?: number
}

export function DownloadCvButton({ className, iconSize = 16 }: DownloadCvButtonProps) {
  const { t, locale } = useLanguage()
  const [busy, setBusy] = useState(false)

  return (
    <button
      type="button"
      disabled={busy}
      className={className}
      onClick={async () => {
        setBusy(true)
        try {
          const { downloadLandingPdf } = await import('../pdf/downloadLandingPdf')
          await downloadLandingPdf(t, locale)
        } finally {
          setBusy(false)
        }
      }}
    >
      <Download size={iconSize} aria-hidden="true" />
      {busy ? (locale === 'ru' ? 'Готовлю PDF…' : 'Preparing PDF…') : t.nav.download}
    </button>
  )
}
