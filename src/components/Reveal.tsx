import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

type RevealProps = {
  children: React.ReactNode
  className?: string
  delayMs?: number
}

export function Reveal({ children, className = '', delayMs = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.12)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!inView) return
    const id = window.setTimeout(() => setVisible(true), delayMs)
    return () => window.clearTimeout(id)
  }, [inView, delayMs])

  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}
