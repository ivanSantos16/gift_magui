import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuizContext } from '../contexts/QuizContext'
import ProgressBar from '../components/quiz/ProgressBar'
import QuestionCard from '../components/quiz/QuestionCard'
import AnswerOptionButton from '../components/quiz/AnswerOptionButton'
import OtterTip from '../components/quiz/OtterTip'
import type { AnswerState } from '../types/quiz'

/**
 * QuizPage — drives the user through all 6 questions.
 * Reads and updates state from QuizContext.
 */
const QuizPage = memo(function QuizPage() {
  const navigate = useNavigate()
  const { state, totalQuestions, currentQuestion, isLastQuestion, selectAnswer, nextQuestion } =
    useQuizContext()

  const handleSelectAnswer = useCallback(
    (answerId: string, isCorrect: boolean) => {
      selectAnswer(answerId, isCorrect)
    },
    [selectAnswer]
  )

  const handleNext = useCallback(() => {
    if (isLastQuestion) {
      navigate('/success')
    } else {
      nextQuestion()
    }
  }, [isLastQuestion, navigate, nextQuestion])

  // Guard: if somehow there's no question, show nothing
  if (!currentQuestion) {
    return null
  }

  const { selectedAnswerId, isAnswered } = state
  const correctAnswered = isAnswered && currentQuestion.options.find(o => o.id === selectedAnswerId)?.isCorrect === true

  /**
   * Determine the visual state for each answer option.
   */
  const getOptionState = useCallback(
    (optionId: string, isCorrect: boolean): AnswerState => {
      if (!isAnswered) return 'idle'
      if (optionId === selectedAnswerId) return isCorrect ? 'correct' : 'wrong'
      return 'disabled'
    },
    [isAnswered, selectedAnswerId]
  )

  return (
    <div key={currentQuestion.id} className="max-w-2xl mx-auto w-full px-6 flex flex-col gap-8 fade-in pt-8">
      {/* Progress */}
      <ProgressBar
        current={state.currentQuestionIndex + 1}
        total={totalQuestions}
      />

      {/* Question */}
      <QuestionCard question={currentQuestion} />

      {/* Answer Options */}
      <section className="grid grid-cols-1 gap-4" aria-label="Opções de resposta">
        {currentQuestion.options.map((option) => (
          <AnswerOptionButton
            key={option.id}
            option={option}
            state={getOptionState(option.id, option.isCorrect)}
            onSelect={handleSelectAnswer}
          />
        ))}
      </section>

      {/* Otter Tip — shown only after correct answer */}
      {correctAnswered && <OtterTip hint={currentQuestion.hint} />}

      {/* Next Button */}
      <div className="mt-6 mb-12">
        <button
          id="btn-next-question"
          disabled={!correctAnswered}
          onClick={handleNext}
          className={`w-full font-headline font-bold py-5 rounded-full shadow-lg transition-all flex items-center justify-center gap-2 ${
            correctAnswered
              ? 'bg-primary text-white hover:brightness-95'
              : 'bg-surface-container-high text-on-surface-variant cursor-not-allowed opacity-50'
          }`}
        >
          {isLastQuestion ? 'VER RESULTADO' : 'PRÓXIMA PERGUNTA'}
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  )
})

export default QuizPage
