import { memo } from 'react'

interface OtterTipProps {
  hint: string
}

/**
 * GorilaTip — hint panel revealed after a correct answer.
 * Fades in with animation.
 */
const OtterTip = memo(function OtterTip({ hint }: OtterTipProps) {
  return (
    <div className="bg-tertiary-container/80 backdrop-blur-xl p-6 rounded-xl relative flex items-start gap-4 shadow-sm fade-in">
      {/* Gorilla emoji avatar */}
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center border-4 border-tertiary-fixed-dim text-2xl select-none">
        🦍
      </div>

      <div className="flex flex-col gap-1">
        <span className="font-headline text-[10px] font-extrabold uppercase tracking-tighter text-tertiary">
          Dica do Gorila
        </span>
        <p className="text-sm font-medium text-on-tertiary-container leading-relaxed">{hint}</p>
      </div>
    </div>
  )
})

export default OtterTip
