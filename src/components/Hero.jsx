import { ArrowRight } from 'lucide-react'

const SOLUTIONS = [
  'E-Commerce',
  'Static Websites',
  'WordPress',
  'Portfolios',
  'ERP Systems',
  'POS Systems',
  'Mobile Apps',
  'Web Applications',
  'Custom Software',
  'CMS Platforms',
  'Business Automation',
  'Cloud Solutions',
]

export default function Hero() {
  return (
    <section id="home" className="relative h-[calc(100vh-69px)] overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover brightness-125 contrast-105"
        src="/video/hero.mp4"
        poster="/video/hero-poster.jpg"
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#060c1a] via-[#060c1a]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060c1a]/80 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 pb-16 pt-8">
        <div className="max-w-xl">
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-cyan-300">
            Innovative Technology. Real-World Impact.
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            Your Ideas.
            <br />
            Our Support.
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Better Results!
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-300">
            Tech Forge is a technology and professional services company delivering
            software solutions, research support and digital transformation services.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#services"
              className="glass-btn glow-cyan inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-semibold text-[#06101f] transition hover:brightness-110"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </a>
            {/* Watch Our Story: no video content yet, button disabled for now */}
            {/* <button className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-cyan-300">
              <span className="glass-btn glow-white flex h-9 w-9 items-center justify-center rounded-full border border-white/20">
                <Play className="h-3.5 w-3.5 fill-current" />
              </span>
              Watch Our Story
            </button> */}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-[#060c1a]/60 py-4 backdrop-blur-sm">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-10 whitespace-nowrap pr-10">
            {[...SOLUTIONS, ...SOLUTIONS].map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-200">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
