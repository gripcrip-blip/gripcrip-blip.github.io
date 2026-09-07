type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl md:mb-14">
      {eyebrow ? (
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-medium tracking-tight text-mist-50 md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-mist-400">{description}</p>
      ) : null}
    </div>
  )
}
