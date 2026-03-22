import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  type ReactNode,
} from 'react'
import type { QuizState, QuizAction } from '../types/quiz'
import { QUIZ_QUESTIONS } from '../data/quizData'

// ── Initial State ──────────────────────────────────────────
const INITIAL_STATE: QuizState = {
  currentQuestionIndex: 0,
  score: 0,
  selectedAnswerId: null,
  isAnswered: false,
}

// ── Reducer ────────────────────────────────────────────────
function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'SELECT_ANSWER':
      if (state.isAnswered) return state // prevent re-selection
      return {
        ...state,
        selectedAnswerId: action.answerId,
        isAnswered: true,
        score: action.isCorrect ? state.score + 1 : state.score,
      }

    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        selectedAnswerId: null,
        isAnswered: false,
      }

    case 'RESET_QUIZ':
      return INITIAL_STATE

    default:
      return state
  }
}

// ── Context ────────────────────────────────────────────────
interface QuizContextValue {
  state: QuizState
  totalQuestions: number
  currentQuestion: (typeof QUIZ_QUESTIONS)[number] | undefined
  isLastQuestion: boolean
  selectAnswer: (answerId: string, isCorrect: boolean) => void
  nextQuestion: () => void
  resetQuiz: () => void
}

const QuizContext = createContext<QuizContextValue | null>(null)

// ── Provider ───────────────────────────────────────────────
export function QuizProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(quizReducer, INITIAL_STATE)

  const totalQuestions = QUIZ_QUESTIONS.length
  const currentQuestion = QUIZ_QUESTIONS[state.currentQuestionIndex]
  const isLastQuestion = state.currentQuestionIndex === totalQuestions - 1

  const selectAnswer = useCallback((answerId: string, isCorrect: boolean) => {
    dispatch({ type: 'SELECT_ANSWER', answerId, isCorrect })
  }, [])

  const nextQuestion = useCallback(() => {
    dispatch({ type: 'NEXT_QUESTION' })
  }, [])

  const resetQuiz = useCallback(() => {
    dispatch({ type: 'RESET_QUIZ' })
  }, [])

  return (
    <QuizContext.Provider
      value={{
        state,
        totalQuestions,
        currentQuestion,
        isLastQuestion,
        selectAnswer,
        nextQuestion,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}

// ── Custom Hook ────────────────────────────────────────────
export function useQuizContext(): QuizContextValue {
  const ctx = useContext(QuizContext)
  if (!ctx) {
    throw new Error('useQuizContext must be used inside <QuizProvider>')
  }
  return ctx
}
