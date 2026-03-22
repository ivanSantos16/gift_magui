import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QuizProvider } from './contexts/QuizContext'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'
import SuccessPage from './pages/SuccessPage'
import PostcardPage from './pages/PostcardPage'

/**
 * App — root component.
 * Wraps everything in BrowserRouter + QuizProvider, then routes to pages.
 * Layout handles the shared header and bottom navigation.
 */
export default function App() {
  return (
    <BrowserRouter>
      <QuizProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/postcard" element={<PostcardPage />} />
          </Routes>
        </Layout>
      </QuizProvider>
    </BrowserRouter>
  )
}
