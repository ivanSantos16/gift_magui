// ── Quiz Question & Answer Types ──────────────────────────

export interface AnswerOption {
  id: string
  label: string
  isCorrect: boolean
}

export interface Question {
  id: number
  text: string
  imageUrl: string
  imageAlt: string
  options: AnswerOption[]
  /** Shown inside the OtterTip after selecting the correct answer */
  hint: string
}

// ── Quiz State & Action Types ─────────────────────────────

export type AnswerState = 'idle' | 'correct' | 'wrong' | 'disabled'

export interface QuizState {
  currentQuestionIndex: number
  score: number
  selectedAnswerId: string | null
  isAnswered: boolean
}

export type QuizAction =
  | { type: 'SELECT_ANSWER'; answerId: string; isCorrect: boolean }
  | { type: 'NEXT_QUESTION' }
  | { type: 'RESET_QUIZ' }
