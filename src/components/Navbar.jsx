import { useState, useEffect } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import logo from '../assets/logo-navbar.webp'

const links = ['Home', 'Services', 'Projects', 'About', 'Blog', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? 'border-b border-[#24252b] bg-[#0b0c10]/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-[#0b0c10]'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5">
        <a href="#home" className="flex items-center gap-2.5">
          <img src={logo} alt="" className="h-6 w-auto" />
          <span className="font-brand text-base font-semibold tracking-tight text-[#efece4]">
            Aelin <span className="font-normal text-[#9497a1]">Technologies</span>
          </span>
        </a>

        <ul className="hidden items-center gap-6 text-sm font-medium text-[#c7c9cd] lg:flex">
          {links.map((l, i) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className={
                  i === 0
                    ? 'relative flex items-center gap-1 pb-1 text-[#b9922f] after:absolute after:-bottom-[1px] after:left-0 after:h-px after:w-full after:bg-[#b9922f]'
                    : 'flex items-center gap-1 pb-1 transition hover:text-[#efece4]'
                }
              >
                {l}
                {l === 'Services' && <ChevronDown className="h-3.5 w-3.5" />}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="btn-outline hidden flex-shrink-0 whitespace-nowrap px-5 py-2 text-sm font-medium lg:inline-block"
        >
          Get in touch
        </a>

        <button
          className="text-[#c7c9cd] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#24252b] px-6 pb-4 lg:hidden">
          <ul className="flex flex-col gap-3 pt-3 text-sm font-medium text-[#c7c9cd]">
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
            className="btn-outline mt-4 inline-block px-5 py-2 text-sm font-medium"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  )
}
