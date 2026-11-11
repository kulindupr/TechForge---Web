import { useState } from 'react'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import logo from '../assets/logo.png'

const links = ['Home', 'Services', 'Projects', 'About', 'Blog', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060c1a]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Tech Forge" className="h-12 w-auto" />
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="flex items-center gap-1 transition hover:text-cyan-400"
              >
                {l}
                {l === 'Services' && <ChevronDown className="h-3.5 w-3.5" />}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="glass-btn glow-cyan hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-[#06101f] transition hover:brightness-110 md:inline-flex"
        >
          Get a Quote
          <ArrowRight className="h-4 w-4" />
        </a>

        <button
          className="text-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 px-6 pb-4 md:hidden">
          <ul className="flex flex-col gap-3 pt-3 text-sm font-medium text-slate-200">
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="glass-btn glow-cyan mt-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-[#06101f]"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  )
}
