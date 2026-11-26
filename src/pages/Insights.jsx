import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { ArrowLeft } from 'lucide-react'
import heroBg from '../assets/hero-bg.webp'

export default function Insights() {
  return (
    <div className="pt-28">
      <SEO
        title="Insights — Aelin Technologies"
        description="Notes on technology, research and software engineering from Aelin Technologies. Coming soon."
        path="/insights"
      />

      <div className="mx-auto max-w-7xl px-6 pb-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#a3a5aa] transition hover:text-[#FFC300]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <Reveal>
          <div
            className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-cover bg-right"
            style={{ backgroundImage: `url(${heroBg})` }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, #090a0c 0%, rgba(9,10,12,0.92) 45%, rgba(9,10,12,0.4) 80%, rgba(9,10,12,0.15) 100%)',
              }}
              aria-hidden="true"
            />
            <div className="relative px-6 py-14 sm:px-10 sm:py-20">
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FFC300]">
                Insights
              </span>
              <h1 className="font-brand mt-4 max-w-xl text-3xl leading-tight text-[#f1efe9] md:text-5xl">
                Coming soon
              </h1>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[#a3a5aa]">
                We're working on a set of notes about the technology, research and
                engineering problems we see across the three divisions. Nothing is published
                here yet — we'd rather leave this page empty than fill it with placeholder
                articles.
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-1.5 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-[#f1efe9] transition hover:border-[#FFC300] hover:text-[#FFC300]"
              >
                Get in touch in the meantime <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
