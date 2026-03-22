import { memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

/**
 * Layout — persistent shell with top header + bottom nav.
 * Header and bottom nav are hidden on the /postcard route.
 */
const Layout = memo(function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const isPostcard = location.pathname === '/postcard'
  const isActive = (path: string) => location.pathname === path

  return (
    <div className="flex flex-col min-h-screen">
      {!isPostcard && (
        <header className="bg-surface/80 backdrop-blur-md flex justify-between items-center w-full px-6 py-4 fixed top-0 z-50">
          <div className="flex items-center gap-3">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              water_drop
            </span>
          </div>

          <nav className="hidden md:flex gap-8">
            <Link
              to="/"
              className={`font-label font-semibold text-sm transition-opacity hover:opacity-80 ${isActive('/') ? 'text-primary' : 'text-on-surface'}`}
            >
              Home
            </Link>
            <Link
              to="/quiz"
              className={`font-label font-semibold text-sm transition-opacity hover:opacity-80 ${isActive('/quiz') ? 'text-primary' : 'text-on-surface'}`}
            >
              Quiz
            </Link>
            <Link
              to="/success"
              className={`font-label font-semibold text-sm transition-opacity hover:opacity-80 ${isActive('/success') ? 'text-primary' : 'text-on-surface'}`}
            >
              Redeem
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary">favorite</span>
          </div>
        </header>
      )}

      <main className={isPostcard ? '' : 'flex-grow pt-16 pb-24'}>
        {children}
      </main>

      {!isPostcard && (
        <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-white/90 backdrop-blur-xl shadow-[0_-4px_30px_rgba(0,0,0,0.06)] rounded-t-[3rem]">
          <NavIcon to="/" icon="home" label="Home" active={isActive('/')} />
          <NavIcon to="/quiz" icon="quiz" label="Quiz" active={isActive('/quiz')} />
          <NavIcon
            to="/success"
            icon="redeem"
            label="Redeem"
            active={isActive('/success') || isActive('/postcard')}
          />
        </nav>
      )}
    </div>
  )
})

interface NavIconProps {
  to: string
  icon: string
  label: string
  active: boolean
}

const NavIcon = memo(function NavIcon({ to, icon, label, active }: NavIconProps) {
  return (
    <Link
      to={to}
      aria-label={label}
      className={`flex flex-col items-center justify-center rounded-full p-4 w-14 h-14 transition-all ${active ? 'bg-primary-container text-primary' : 'text-on-surface'
        }`}
    >
      <span
        className="material-symbols-outlined"
        style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}
      >
        {icon}
      </span>
    </Link>
  )
})

export default Layout
