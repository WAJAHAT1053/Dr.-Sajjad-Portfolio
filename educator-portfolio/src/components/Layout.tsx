import { useState } from 'react'
import type { PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'

export default function Layout({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              aria-label="Toggle navigation menu"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50"
              onClick={() => setOpen(v => !v)}
            >
              <span className="block h-0.5 w-4 bg-slate-700"></span>
              <span className="block h-0.5 w-4 bg-slate-700 mt-1"></span>
              <span className="block h-0.5 w-4 bg-slate-700 mt-1"></span>
            </button>
            <div className="font-semibold tracking-tight text-blue-800">
              Dr. Mohammed Sajjad Hussain
            </div>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <NavLink to="/" className={({ isActive }) => `text-slate-700 transition-colors hover:text-blue-700 ${isActive ? 'text-blue-700' : ''}`}>Home</NavLink>
            <NavLink to="/#about" className={() => `text-slate-700 transition-colors hover:text-blue-700`}>About</NavLink>
            <NavLink to="/#experience" className={() => `text-slate-700 transition-colors hover:text-blue-700`}>Experience</NavLink>
            <NavLink to="/#education" className={() => `text-slate-700 transition-colors hover:text-blue-700`}>Education</NavLink>
            <NavLink to="/#skills" className={() => `text-slate-700 transition-colors hover:text-blue-700`}>Skills</NavLink>
            <NavLink to="/#publications" className={() => `text-slate-700 transition-colors hover:text-blue-700`}>Publications</NavLink>
            <NavLink to="/#contact" className={() => `text-slate-700 transition-colors hover:text-blue-700`}>Contact</NavLink>
          </div>
        </nav>
        {open && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3 text-sm font-medium">
              <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) => `text-slate-700 transition-colors hover:text-blue-700 ${isActive ? 'text-blue-700' : ''}`}>Home</NavLink>
              <NavLink to="/#about" onClick={() => setOpen(false)} className={() => `text-slate-700 transition-colors hover:text-blue-700`}>About</NavLink>
              <NavLink to="/#experience" onClick={() => setOpen(false)} className={() => `text-slate-700 transition-colors hover:text-blue-700`}>Experience</NavLink>
              <NavLink to="/#education" onClick={() => setOpen(false)} className={() => `text-slate-700 transition-colors hover:text-blue-700`}>Education</NavLink>
              <NavLink to="/#skills" onClick={() => setOpen(false)} className={() => `text-slate-700 transition-colors hover:text-blue-700`}>Skills</NavLink>
              <NavLink to="/#publications" onClick={() => setOpen(false)} className={() => `text-slate-700 transition-colors hover:text-blue-700`}>Publications</NavLink>
              <NavLink to="/#contact" onClick={() => setOpen(false)} className={() => `text-slate-700 transition-colors hover:text-blue-700`}>Contact</NavLink>
            </div>
          </div>
        )}
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">
        {children}
      </main>
      <footer className="border-t border-slate-200 bg-white py-8 text-center">
        <p className="text-sm text-slate-600">Committed to Educational Excellence</p>
        <p className="mt-1 text-xs text-slate-500">© 2025 Dr. Mohammed Sajjad Hussain</p>
      </footer>
    </div>
  )
}


