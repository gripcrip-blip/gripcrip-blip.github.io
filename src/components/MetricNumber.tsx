import { useEffect, useState } from 'react'

type MetricNumberProps = {
  value: number
  prefix?: string
  suffix?: string
  active: boolean
  className?: string
}

export function MetricNumber({
  value,
  prefix = '',
  suffix = '',
  active,
  className = '',
}: MetricNumberProps) {
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (!active) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setShown(value)
      return
    }

    const duration = 1100
    const start = performance.now()

    let frame = 0
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setShown(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, value])

  return (
    <span className={className}>
      {prefix}
      {shown}
      {suffix}
    </span>
  )
}
