import { memo } from 'react'
import type { Question } from '../../types/quiz'

interface QuestionCardProps {
  question: Question
}

/**
 * QuestionCard — displays the question text and its associated image.
 */
const QuestionCard = memo(function QuestionCard({ question }: QuestionCardProps) {
  return (
    <section className="relative">
      <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col gap-6 relative overflow-hidden">
        {/* Accent bar */}
        <div className="absolute top-0 left-0 w-2 h-full bg-primary-container" />

        <h2 className="font-headline font-bold text-2xl text-on-surface leading-tight">
          {question.text}
        </h2>

        <div className="aspect-video w-full rounded-lg overflow-hidden relative group">
          <img
            src={question.imageUrl}
            alt={question.imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
})

export default QuestionCard
