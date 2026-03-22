import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuizContext } from '../contexts/QuizContext'

/**
 * SuccessPage — shown after completing all 6 questions.
 * Displays the final score and a gift box to open the postcard.
 */
const SuccessPage = memo(function SuccessPage() {
  const navigate = useNavigate()
  const { state, totalQuestions, resetQuiz } = useQuizContext()

  const isPerfect = state.score === totalQuestions

  const openPostcard = useCallback(() => {
    if (isPerfect) navigate('/postcard')
  }, [isPerfect, navigate])

  const goHome = useCallback(() => navigate('/'), [navigate])

  const retryQuiz = useCallback(() => {
    resetQuiz()
    navigate('/quiz')
  }, [resetQuiz, navigate])

  return (
    <section className="flex-1 flex flex-col items-center justify-center bubble-bg relative overflow-hidden min-h-[calc(100vh-4rem)] pt-8 pb-32 px-6">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-48 h-48 bg-tertiary-container/20 rounded-full blur-3xl pointer-events-none" />

      {/* Headline */}
      <div className="text-center max-w-md z-10 fade-in">
        {isPerfect && (
          <div className="inline-flex items-center gap-2 mb-4 bg-secondary-container px-4 py-1 rounded-full">
            <span
              className="material-symbols-outlined text-on-secondary-container text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              stars
            </span>
            <span className="text-on-secondary-container font-label text-[10px] font-bold uppercase tracking-widest">
              Missão Cumprida
            </span>
          </div>
        )}

        <h1 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight mb-4 px-4 font-headline">
          {isPerfect
            ? 'Parabéns, minha beldroega! Conseguiste o merecido!'
            : 'Doce, precisas de 6/6 para poderes usufruir do presente.'}
        </h1>

        {/* Score Badge */}
        <div className={`mt-6 mb-10 inline-block shadow-xl px-8 py-4 rounded-xl border-[0.5px] ${isPerfect
          ? 'bg-surface-container-lowest border-outline-variant/15'
          : 'bg-error-container/10 border-error/20'
          }`}>
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-tighter font-label">
              Pontuação Final
            </span>
            <div className="flex items-baseline gap-1">
              <span className={`text-5xl font-extrabold ${isPerfect ? 'text-primary' : 'text-error'}`}>
                {state.score}
              </span>
              <span className="text-2xl font-bold text-outline">/{totalQuestions}</span>
            </div>
            {!isPerfect && (
              <span className="text-xs text-error font-semibold mt-1">Doce, precisas de 6/6 para poderes usufruir do presente.</span>
            )}
          </div>
        </div>
      </div>

      {/* Gift Box */}
      <div className="relative group z-10 my-8 fade-in">
        <div className={`absolute inset-0 rounded-full blur-[80px] scale-125 pointer-events-none ${isPerfect ? 'bg-primary-container opacity-40' : 'bg-outline opacity-10'
          }`} />
        <div
          role="button"
          tabIndex={isPerfect ? 0 : -1}
          aria-label={isPerfect ? 'Abrir presente' : 'Presente bloqueado — doce precisas de 6/6'}
          onClick={openPostcard}
          onKeyDown={(e) => e.key === 'Enter' && openPostcard()}
          className={`relative bg-surface-container-lowest w-64 h-64 rounded-xl flex items-center justify-center shadow-2xl duration-500 ${isPerfect
            ? 'hover:scale-105 transition-transform cursor-pointer'
            : 'opacity-40 cursor-not-allowed grayscale'
            }`}
        >
          <div className="flex flex-col items-center">
            <span
              className={`material-symbols-outlined text-[120px] leading-none ${isPerfect ? 'text-tertiary' : 'text-outline'
                }`}
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {isPerfect ? 'card_giftcard' : 'lock'}
            </span>
            {isPerfect && (
              <div className="absolute -top-4 -right-2 w-12 h-12 bg-primary-container rounded-full flex items-center justify-center border-4 border-surface shadow-lg">
                <span
                  className="material-symbols-outlined text-primary text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  auto_awesome
                </span>
              </div>
            )}
          </div>
        </div>
        <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full font-label text-sm font-bold shadow-xl whitespace-nowrap ${isPerfect
          ? 'bg-tertiary text-on-tertiary'
          : 'bg-surface-container-high text-on-surface-variant'
          }`}>
          {isPerfect ? 'Recompensa Surpresa!' : 'Bloqueado — precisa 6/6'}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-12 z-10 w-full max-w-xs fade-in">
        {isPerfect ? (
          <button
            id="btn-open-gift"
            onClick={openPostcard}
            className="w-full bg-primary text-white py-5 rounded-full font-headline font-bold text-lg shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
          >
            <span className="material-symbols-outlined">redeem</span>
            Abrir Presente
          </button>
        ) : (
          <button
            id="btn-retry-quiz"
            onClick={retryQuiz}
            className="w-full bg-tertiary text-on-tertiary py-5 rounded-full font-headline font-bold text-lg shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
          >
            <span className="material-symbols-outlined">replay</span>
            Tentar de Novo
          </button>
        )}
        <button
          onClick={goHome}
          className="w-full mt-4 text-tertiary font-body font-semibold text-sm hover:opacity-70 transition-opacity"
        >
          Voltar para o Início
        </button>
      </div>
    </section>
  )
})

export default SuccessPage
