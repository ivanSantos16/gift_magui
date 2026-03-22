import { memo, useCallback } from 'react'
import type { AnswerOption, AnswerState } from '../../types/quiz'

interface AnswerOptionButtonProps {
  option: AnswerOption
  state: AnswerState
  onSelect: (id: string, isCorrect: boolean) => void
}

/**
 * AnswerOptionButton — renders a single answer choice with visual feedback.
 * States: idle | correct | wrong | disabled
 */
const AnswerOptionButton = memo(function AnswerOptionButton({
  option,
  state,
  onSelect,
}: AnswerOptionButtonProps) {
  const handleClick = useCallback(() => {
    if (state === 'idle') {
      onSelect(option.id, option.isCorrect)
    }
  }, [state, option.id, option.isCorrect, onSelect])

  const isDisabled = state === 'disabled' || state === 'correct' || state === 'wrong'

  const containerClass = (() => {
    switch (state) {
      case 'correct':
        return 'bg-secondary-container border-secondary scale-105 shadow-md'
      case 'wrong':
        return 'bg-error-container/10 border-error/30 opacity-70'
      case 'disabled':
        return 'bg-surface-container-low border-transparent opacity-50 cursor-not-allowed'
      default:
        return 'bg-surface-container-low border-transparent hover:border-primary cursor-pointer'
    }
  })()

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className={`group flex items-center justify-between p-6 rounded-lg text-left border-l-4 transition-all duration-300 w-full ${containerClass}`}
      aria-pressed={state === 'correct'}
    >
      <div className="flex flex-col">
        <span
          className={`font-body font-semibold ${
            state === 'correct'
              ? 'text-on-secondary-container font-bold'
              : 'text-on-surface-variant'
          }`}
        >
          {option.label}
        </span>

        {state === 'correct' && (
          <span className="text-[10px] font-bold uppercase tracking-widest text-secondary mt-1">
            Resposta Correta!
          </span>
        )}
      </div>

      {state === 'correct' && (
        <div className="bg-secondary rounded-full p-1 flex items-center justify-center flex-shrink-0">
          <span
            className="material-symbols-outlined text-on-secondary"
            style={{ fontVariationSettings: "'FILL' 1", fontSize: '16px' }}
          >
            check
          </span>
        </div>
      )}

      {state === 'wrong' && (
        <span className="material-symbols-outlined text-error flex-shrink-0">close</span>
      )}

      {state === 'idle' && (
        <span className="material-symbols-outlined text-outline-variant opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
          chevron_right
        </span>
      )}
    </button>
  )
})

export default AnswerOptionButton
