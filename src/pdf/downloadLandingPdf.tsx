import { pdf } from '@react-pdf/renderer'
import type { Copy, Locale } from '../data/copy'
import { LandingPdf } from './LandingPdf'

export async function downloadLandingPdf(t: Copy, locale: Locale) {
  const blob = await pdf(<LandingPdf t={t} locale={locale} />).toBlob()
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'Anton-Loparev-Portfolio.pdf'
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}
