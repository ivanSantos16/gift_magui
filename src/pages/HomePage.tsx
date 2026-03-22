import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuizContext } from '../contexts/QuizContext'

const OTTER_HERO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCuIMU-WNs-U_BmVrUawMjZmuyf_0sok2KkYv-wvjDwtE71fBvNqHOxRbYOBNf2X5OEVXarWAbU3Zt_YdoOh4KUzRE6iZTxdVcIbpLYpHieeICACFhDPyCopUkxmrLHv7rMGArkQd78_6wYfR-i6Cn1nBsEBYHLYv1BHfn7il-zdRK0k7beqFdF8mAk1qIn8VBSIl6W0I1VCqDkstpmTI7qZB98xko1fMMjI6c6D1UJAHbxeY_Ds4E0Bvb3FhiFs3v5_fSj7NHuIjSP'

/**
 * HomePage — landing screen with otter hero and CTA to start the quiz.
 * Resets the quiz state when visited so it can be replayed.
 */
const HomePage = memo(function HomePage() {
  const navigate = useNavigate()
  const { resetQuiz } = useQuizContext()

  const handleStart = useCallback(() => {
    resetQuiz()
    navigate('/quiz')
  }, [resetQuiz, navigate])

  return (
    <section className="w-full flex flex-col items-center text-center space-y-8 fade-in water-gradient min-h-[calc(100vh-4rem)] pt-12 px-6">
      {/* Hero Otter Image */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 mb-4">
        <div className="absolute inset-0 bg-primary-container rounded-full opacity-30 blur-3xl scale-110" />
        <img
          src={OTTER_HERO_URL}
          alt="Lontrinha fofa a brincar"
          className="w-full h-auto relative z-10 drop-shadow-2xl"
        />
      </div>

      {/* Headline */}
      <div className="space-y-4">
        <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-primary tracking-tight leading-tight">
          O Desafio da Lontra
        </h1>
        <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Olá, meu Doce! Tens de responder corretamente às perguntas seguintes para receberes o teu presente hihi
        </p>
      </div>

      {/* CTA */}
      <button
        id="btn-start-quiz"
        onClick={handleStart}
        className="group relative px-10 py-5 bg-primary text-white rounded-full font-headline font-bold text-lg shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
      >
        <span>Começar Desafio</span>
        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
          arrow_forward
        </span>
      </button>
    </section>
  )
})

export default HomePage
