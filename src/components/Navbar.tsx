import { useState } from 'react'

const navLinks = [
  { href: '#screening', label: 'Periodic Table' },
  { href: '#database', label: 'Database' },
  { href: '#predict', label: 'Prediction Tool' },
  { href: '#methodology', label: 'Methodology' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-parchment/95 backdrop-blur-sm border-b border-border-cream">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-serif text-xl font-medium text-near-black tracking-tight">
          HAp Dopant Database
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="text-olive-gray text-[15px] hover:text-near-black transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#predict"
            className="bg-terracotta text-ivory text-sm font-medium px-4 py-2 rounded-lg shadow-[0px_0px_0px_1px_#c96442] hover:brightness-110 transition"
          >
            Try the Model
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-olive-gray" aria-label="Menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border-cream bg-ivory px-6 py-4 space-y-3">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block text-olive-gray hover:text-near-black">{l.label}</a>
          ))}
          <a href="#predict" onClick={() => setOpen(false)}
            className="block bg-terracotta text-ivory text-center font-medium px-4 py-2 rounded-lg">
            Try the Model
          </a>
        </div>
      )}
    </nav>
  )
}
