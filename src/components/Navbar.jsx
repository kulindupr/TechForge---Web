import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import logo from '../assets/logo-navbar.webp'

const SERVICES = [
  { label: 'Aelin Research', to: '/research', desc: 'Research, statistics & data intelligence' },
  { label: 'Aelin Digital', to: '/digital', desc: 'Software, websites & business systems' },
  { label: 'Aelin Innovation', to: '/innovation', desc: 'AI, SaaS & emerging technology' },
]

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const servicesRef = useRef(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function onClick(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) setServicesOpen(false)
    }
    function onKey(e) {
      if (e.key === 'Escape') setServicesOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#090a0c]/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-[#090a0c]'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="" className="h-6 w-auto" />
          <span className="font-brand text-base font-semibold tracking-tight text-[#f1efe9]">
            Aelin <span className="font-normal text-[#a3a5aa]">Technologies</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-medium text-[#a3a5aa] lg:flex">
          <li>
            <Link
              to="/"
              className={
                isHome
                  ? 'relative flex items-center gap-1 pb-1 text-[#c5a46d] after:absolute after:-bottom-[1px] after:left-0 after:h-px after:w-full after:bg-[#c5a46d]'
                  : 'flex items-center gap-1 pb-1 transition hover:text-[#f1efe9]'
              }
            >
              Home
            </Link>
          </li>

          <li ref={servicesRef} className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className="flex items-center gap-1 pb-1 transition hover:text-[#f1efe9]"
            >
              Services
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-lg border border-white/10 bg-[#15181d] p-2 shadow-[0_12px_32px_rgba(0,0,0,0.4)]">
                {SERVICES.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="block rounded-md px-3 py-2.5 transition hover:bg-white/5"
                  >
                    <span className="block text-sm font-medium text-[#f1efe9]">{s.label}</span>
                    <span className="mt-0.5 block text-xs text-[#777b83]">{s.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </li>

          {LINKS.slice(1).map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="flex items-center gap-1 pb-1 transition hover:text-[#f1efe9]">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="btn-outline hidden flex-shrink-0 whitespace-nowrap px-5 py-2 text-sm font-medium lg:inline-block"
        >
          Get in touch
        </Link>

        <button
          className="text-[#a3a5aa] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[57px] overflow-y-auto border-t border-white/10 bg-[#090a0c] px-6 pb-4 lg:hidden">
          <ul className="flex flex-col gap-3 pt-3 text-sm font-medium text-[#a3a5aa]">
            {LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#777b83]">Services</p>
              <ul className="mt-2 flex flex-col gap-2 pl-3">
                {SERVICES.map((s) => (
                  <li key={s.to}>
                    <Link to={s.to} onClick={() => setOpen(false)} className="transition hover:text-[#f1efe9]">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn-outline mt-4 inline-block px-5 py-2 text-sm font-medium"
          >
            Get in touch
          </Link>
        </div>
      )}
    </header>
  )
}
