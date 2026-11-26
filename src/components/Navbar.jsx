import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import logo from '../assets/logo-navbar.webp'

const SERVICES = [
  { label: 'Aelin Digital', to: '/digital', desc: 'Software, websites & business systems' },
  { label: 'Aelin Research', to: '/research', desc: 'Research, statistics & data intelligence' },
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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const servicesRef = useRef(null)
  const location = useLocation()
  const isServicesActive = SERVICES.some((s) => s.to === location.pathname)

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
      if (e.key !== 'Escape') return
      if (servicesOpen) setServicesOpen(false)
      else if (open) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [servicesOpen, open])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [location.pathname])

  const navLinkClass = (to) => {
    const active = location.pathname === to
    return active
      ? 'relative flex items-center gap-1 pb-1 text-[#FFC300] after:absolute after:-bottom-[1px] after:left-0 after:h-px after:w-full after:bg-[#FFC300]'
      : 'flex items-center gap-1 pb-1 transition-colors duration-200 hover:text-[#f1efe9]'
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#090a0c]/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto grid h-20 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-6"
      >
        <Link to="/" className="flex items-center gap-2.5" aria-label="Aelin Technologies — home">
          <img src={logo} alt="" className="h-6 w-auto shrink-0" />
          <span className="font-brand text-base font-semibold leading-none tracking-tight text-[#f1efe9]">
            Aelin <span className="font-normal text-[#a3a5aa]">Technologies</span>
          </span>
        </Link>

        <ul className="hidden items-center justify-center gap-8 text-sm font-medium text-[#a3a5aa] lg:flex">
          <li>
            <Link to="/" aria-current={location.pathname === '/' ? 'page' : undefined} className={navLinkClass('/')}>
              Home
            </Link>
          </li>

          <li ref={servicesRef} className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              aria-label="Toggle Divisions menu"
              className={`flex items-center gap-1 pb-1 transition-colors duration-200 hover:text-[#f1efe9] ${
                isServicesActive ? 'text-[#FFC300]' : ''
              }`}
            >
              Divisions
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-lg border border-white/10 bg-[#15181d] p-2 shadow-[0_12px_32px_rgba(0,0,0,0.4)]">
                {SERVICES.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    onClick={() => setServicesOpen(false)}
                    className="block rounded-md px-3 py-2.5 transition-colors duration-200 hover:bg-white/5"
                  >
                    <span
                      className={`block text-sm font-medium ${
                        location.pathname === s.to ? 'text-[#FFC300]' : 'text-[#f1efe9]'
                      }`}
                    >
                      {s.label}
                    </span>
                    <span className="mt-0.5 block text-xs text-[#777b83]">{s.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </li>

          {LINKS.slice(1).map((l) => (
            <li key={l.to}>
              <Link to={l.to} aria-current={location.pathname === l.to ? 'page' : undefined} className={navLinkClass(l.to)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-4">
          <Link
            to="/contact"
            className="hidden flex-shrink-0 whitespace-nowrap rounded-full bg-[#FFC300] px-5 py-2.5 text-sm font-medium text-[#090a0c] transition-colors duration-200 hover:bg-[#FFD54D] lg:inline-flex lg:items-center lg:gap-1.5"
          >
            Let's Talk
            <span aria-hidden="true">→</span>
          </Link>

          <button
            className="text-[#a3a5aa] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-x-0 bottom-0 top-20 overflow-y-auto bg-[#090a0c] transition-opacity duration-300 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 border-t border-white/10 px-6 py-6 text-lg font-medium text-[#a3a5aa]">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            aria-current={location.pathname === '/' ? 'page' : undefined}
            className={`py-3 ${location.pathname === '/' ? 'text-[#FFC300]' : ''}`}
          >
            Home
          </Link>

          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              aria-expanded={mobileServicesOpen}
              className={`flex w-full items-center justify-between py-3 text-left ${
                isServicesActive ? 'text-[#FFC300]' : ''
              }`}
            >
              Divisions
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileServicesOpen ? 'max-h-60' : 'max-h-0'
              }`}
            >
              <ul className="flex flex-col gap-1 pb-2 pl-4">
                {SERVICES.map((s) => (
                  <li key={s.to}>
                    <Link
                      to={s.to}
                      onClick={() => setOpen(false)}
                      className={`block py-2 text-base ${
                        location.pathname === s.to ? 'text-[#FFC300]' : 'text-[#a3a5aa]'
                      }`}
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {LINKS.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              aria-current={location.pathname === l.to ? 'page' : undefined}
              className={`py-3 ${location.pathname === l.to ? 'text-[#FFC300]' : ''}`}
            >
              {l.label}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#FFC300] px-6 py-3 text-sm font-medium text-[#090a0c]"
          >
            Let's Talk
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
