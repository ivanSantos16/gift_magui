import { memo } from 'react'

interface ProgressBarProps {
  current: number
  total: number
}

/**
 * ProgressBar — shows "Pergunta X de Y" label + animated fill bar.
 */
const ProgressBar = memo(function ProgressBar({ current, total }: ProgressBarProps) {
  const fillPercent = (current / total) * 100

  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <span className="font-headline text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
            Etapa Atual
          </span>
          <span className="font-headline font-extrabold text-2xl text-primary">
            Pergunta {current} de {total}
          </span>
        </div>
        <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center border-2 border-surface shadow-sm">
          <span
            className="material-symbols-outlined text-primary text-xs"
            style={{ fontVariationSettings: "'FILL' 1", fontSize: '14px' }}
          >
            pets
          </span>
        </div>
      </div>

      <div className="h-3 w-full bg-surface-container-high rounded-full overflow-hidden flex p-1">
        <div
          className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(132,206,235,0.5)] transition-all duration-500 ease-out"
          style={{ width: `${fillPercent}%` }}
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={1}
          aria-valuemax={total}
          aria-label={`Pergunta ${current} de ${total}`}
        />
      </div>
    </section>
  )
})

export default ProgressBar
