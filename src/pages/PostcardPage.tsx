import { memo, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuizContext } from '../contexts/QuizContext'

const SPA_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA34L8TuoN26nmY8Lg8pxNm-UUY_-yrw4ekc022q5BP6YYwpifPfvKRTaEbDCukcYO1pfKGvXPRwo6B6zX8qIdNzUGC7IMMWrU4MkwFUqeHvGPm6Fzz01c-8fdnzplrEhfAdaf9YiFz7b8mRW6c9gCDfyc_UrmWNU55GyERXCnexAn9RHicrz_1G3PIZADS9BmOj08mAoOw7IZs_ILFid9eikUCMcQekMMiM1X_0Zo8lVqTTYFbMMlRVhldUojUMiawxMrVg2kFN30n'

const OTTER_AVATAR_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDhtC54nTuxQDTsxc6fUPLERNJ51YohJLKrd8gEZsKteRAYKMwmipLxMAspKN1tePY-8XwvOBSiurPgGaGAYTG3UlkAKjxC3l6sJCLOgm6Jd3vhFTQgkEAbHa-1as0Znu2aq9Kxg4c39RqJFWLq5rP7e9eAwZoxJ25hjEvPb0RqNaPULAX69NLSH0r6g7c9mI-0pKbkfXn5uxs0Wn4I3GPkwDDqviR2V9_2LvoCLQutzeDfF3685orNkN0xHID7mj0AtuMr1Qb6lw0y'

/**
 * PostcardPage — full-screen reveal of the gift with a custom header.
 * No Layout header/bottom-nav — uses its own minimal header.
 */
const PostcardPage = memo(function PostcardPage() {
  const navigate = useNavigate()
  const { state, totalQuestions } = useQuizContext()
  const goBack = useCallback(() => navigate('/success'), [navigate])

  // Guard: redirect to success if score is not perfect
  useEffect(() => {
    if (state.score !== totalQuestions) {
      navigate('/success', { replace: true })
    }
  }, [state.score, totalQuestions, navigate])

  // Download voucher
  const handleDownload = useCallback(() => {
    const a = document.createElement('a')
    a.href = `${import.meta.env.BASE_URL}voucher.png`
    a.download = 'voucher.png'
    a.click()
  }, [])

  return (
    <div className="shimmer-bg min-h-screen w-full flex flex-col items-center justify-center p-6 fade-in">
      {/* Minimal Header */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-surface/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">water_drop</span>
          <span className="font-headline font-bold text-lg tracking-tight text-primary">
            O Desafio da Lontra
          </span>
        </div>
        <button
          aria-label="Fechar"
          onClick={goBack}
          className="material-symbols-outlined text-slate-500 hover:opacity-80 transition-opacity"
        >
          close
        </button>
      </header>

      {/* Postcard Content */}
      <main className="w-full max-w-2xl mt-16 flex flex-col items-center">
        <div className="relative w-full bg-surface-container-lowest rounded-xl shadow-2xl overflow-hidden flex flex-col items-center text-center p-8 border border-outline-variant/10">
          {/* Background blobs */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
            <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-primary-container rounded-full blur-3xl" />
            <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-tertiary-container rounded-full blur-3xl opacity-50" />
          </div>

          {/* Title */}
          <div className="z-10 mt-4">
            <span className="font-label text-xs tracking-[0.2em] uppercase text-secondary font-semibold mb-2 block">
              Surpresa Especial
            </span>
            <h1 className="font-headline text-3xl md:text-4xl text-primary font-extrabold leading-tight">
              Um Momento de Paz
            </h1>
          </div>

          {/* Spa Image */}
          <div className="relative z-10 flex-1 w-full flex items-center justify-center my-6">
            <div className="w-full h-full max-h-[300px] rounded-lg overflow-hidden relative group">
              <img
                src={SPA_IMAGE_URL}
                alt="Spa e circuito de água relaxante"
                className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Otter avatar overlay */}
              <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full border-4 border-surface bg-primary-container overflow-hidden shadow-lg transform rotate-6">
                <img
                  src={OTTER_AVATAR_URL}
                  alt="Lontrinha"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Gift Message */}
          <div className="z-10 w-full glass-panel p-6 rounded-lg mb-4 border border-white/40">
            <span
              className="material-symbols-outlined text-tertiary mb-2"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              favorite
            </span>
            <p className="font-body text-lg md:text-xl text-on-surface leading-relaxed italic">
              "Ganhaste um circuito de água com massagem — porque a minha lontra merece relaxar."
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 w-full px-4 mb-24">
          <button
            id="btn-download-postcard"
            onClick={handleDownload}
            className="flex-1 bg-primary text-white py-4 px-8 rounded-full font-headline font-bold text-lg flex items-center justify-center gap-3 shadow-lg hover:brightness-95 transition-all active:scale-95"
          >
            <span className="material-symbols-outlined">download</span>
            Descarregar Postal
          </button>
          <button
            id="btn-share-postcard"
            className="flex-1 bg-surface-container-highest text-on-surface py-4 px-8 rounded-full font-headline font-bold text-lg flex items-center justify-center gap-3 hover:bg-surface-dim transition-all active:scale-95"
          >
            <span className="material-symbols-outlined">share</span>
            Partilhar
          </button>
        </div>
      </main>

      {/* Floating Validity Badge */}
      <div className="fixed bottom-6 right-6 z-50 glass-panel px-4 py-3 rounded-xl border border-tertiary-container/30 flex items-center gap-3 shadow-xl">
        <div className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
          <span className="material-symbols-outlined text-sm">auto_awesome</span>
        </div>
        <p className="font-body text-xs font-medium text-on-tertiary-container">Válido por 1 ano.</p>
      </div>
    </div>
  )
})

export default PostcardPage
