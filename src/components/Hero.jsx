import { useEffect, useRef } from 'react'

const CAPABILITIES = ['Research & Analysis', 'Software & Systems', 'AI & Emerging Tech']

function PrecisionMark() {
  const wrapRef = useRef(null)
  const markRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const wrap = wrapRef.current
    const mark = markRef.current
    if (!wrap || !mark) return

    function onMove(e) {
      const rect = wrap.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      mark.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`
    }
    function onLeave() {
      mark.style.transform = 'rotateY(0deg) rotateX(0deg)'
    }
    wrap.addEventListener('mousemove', onMove)
    wrap.addEventListener('mouseleave', onLeave)
    return () => {
      wrap.removeEventListener('mousemove', onMove)
      wrap.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div ref={wrapRef} className="relative" style={{ perspective: '900px' }}>
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(185,146,47,0.16), transparent 70%)' }}
      />
      <div
        ref={markRef}
        className="relative transition-transform duration-200 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
          <rect x="0.5" y="0.5" width="399" height="399" fill="none" stroke="rgba(255,255,255,0.1)" />
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={`v${i}`} x1={(i + 1) * 50} y1="0" x2={(i + 1) * 50} y2="400" stroke="#15181d" strokeWidth="1" />
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={(i + 1) * 50} x2="400" y2={(i + 1) * 50} stroke="#15181d" strokeWidth="1" />
          ))}
          <circle cx="200" cy="200" r="90" fill="none" stroke="#c5a46d" strokeWidth="1" />
          <circle cx="200" cy="200" r="130" fill="none" stroke="#c5a46d" strokeWidth="0.5" opacity="0.35" />
          <circle cx="200" cy="200" r="2.5" fill="#c5a46d" />
          <line x1="200" y1="60" x2="200" y2="105" stroke="#c5a46d" strokeWidth="1" />
          <line x1="200" y1="295" x2="200" y2="340" stroke="#c5a46d" strokeWidth="1" />
          <line x1="60" y1="200" x2="105" y2="200" stroke="#c5a46d" strokeWidth="1" />
          <line x1="295" y1="200" x2="340" y2="200" stroke="#c5a46d" strokeWidth="1" />
          <path d="M160 215 L185 240 L245 170" fill="none" stroke="#f1efe9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="24" y="30" fill="#a3a5aa" fontSize="11" fontFamily="monospace" letterSpacing="1">N 06.9271</text>
          <text x="24" y="382" fill="#a3a5aa" fontSize="11" fontFamily="monospace" letterSpacing="1">E 79.8612</text>
        </svg>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-[#15181d] pb-16 pt-36 md:pt-44">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
        style={{
          background:
            'radial-gradient(ellipse 900px 500px at 20% 0%, rgba(185,146,47,0.10), transparent 60%)',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="max-w-xl">
          <h1 className="font-brand text-6xl leading-[1.02] text-[#f1efe9] md:text-7xl">
            Precision in progress
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#a3a5aa]">
            A Sri Lankan technology, research and innovation practice — built on careful
            thinking, precise execution and work that holds up.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-8">
            <a href="#services" className="btn-gold inline-block px-7 py-3.5 text-sm font-medium">
              Explore our work
            </a>
            <a
              href="#about"
              className="border-b border-white/20 pb-0.5 text-sm font-medium text-[#f1efe9] transition hover:border-[#c5a46d] hover:text-[#c5a46d]"
            >
              About Aelin
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-2 border-t border-[#15181d] pt-6 text-sm text-[#777b83]">
            {CAPABILITIES.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>

        <div className="mx-auto aspect-square w-full max-w-md">
          <PrecisionMark />
        </div>
      </div>
    </section>
  )
}
