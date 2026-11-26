import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import heroBg from '../assets/hero-bg.webp'

function ScrollMouseIcon(props) {
  return (
    <svg viewBox="0 0 24 36" fill="none" {...props}>
      <rect x="1" y="1" width="22" height="34" rx="11" stroke="#FFC300" strokeWidth="1.2" />
      <circle cx="12" cy="11" r="2" fill="#FFC300" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(9,10,12,0.96) 0%, rgba(9,10,12,0.82) 42%, rgba(9,10,12,0.35) 75%, rgba(9,10,12,0.15) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{ background: 'linear-gradient(0deg, #090a0c, transparent)' }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 pt-20 md:grid-cols-[48%_52%] md:items-center md:gap-10">
        <div className="max-w-xl">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#FFC300]" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FFC300]">
                Aelin Technologies
              </span>
            </div>

            <h1 className="font-brand mt-6 text-[clamp(2.75rem,5vw+1rem,5.5rem)] leading-[1.05] text-[#f1efe9]">
              Digital Craft
              <br />
              Meets Intelligent
              <br />
              <span className="text-[#FFC300]">Innovation.</span>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#a3a5aa]">
              We design, build and scale intelligent digital solutions that help businesses
              grow, adapt and lead.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[#FFC300] px-7 py-3.5 text-sm font-medium text-[#090a0c] transition hover:bg-[#FFD54D]"
              >
                Explore Our Work
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>

              <Link
                to="/about"
                className="group inline-flex items-center gap-2.5 text-sm font-medium text-[#f1efe9] transition hover:text-[#FFC300]"
              >
                Discover AELIN
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-white/25 transition group-hover:border-[#FFC300] group-hover:rotate-45"
                >
                  ↗
                </span>
              </Link>
            </div>
          </Reveal>
        </div>

        <div aria-hidden="true" className="hidden md:block" />
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10 hidden justify-center md:flex">
        <div className="flex flex-col items-center gap-2 text-[#a3a5aa]">
          <ScrollMouseIcon className="h-6 w-4" />
          <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Scroll Down</span>
        </div>
      </div>
    </section>
  )
}
