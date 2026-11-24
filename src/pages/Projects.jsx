import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import Testimonials from '../components/Testimonials'
import { PROJECTS } from '../data/projects'

export default function Projects() {
  return (
    <div className="pt-28">
      <SEO
        title="Projects — Aelin Technologies"
        description="Selected software, e-commerce, POS and platform projects delivered by Aelin Technologies across digital and research work."
        path="/projects"
      />
      <div className="mx-auto max-w-7xl px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#a3a5aa] transition hover:text-[#c5a46d]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <Reveal className="mt-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-brand text-4xl text-[#f1efe9]">Selected work</h1>
            <p className="mt-2 max-w-xl text-base text-[#a3a5aa]">
              Projects delivered across Aelin Digital and Aelin Research — real systems, built
              and shipped for real clients.
            </p>
          </div>
          <a
            href="https://kulindu24-portfolio.vercel.app/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-white/20 pb-0.5 text-sm font-medium text-[#f1efe9] transition hover:border-[#c5a46d] hover:text-[#c5a46d]"
          >
            Full portfolio
          </a>
        </Reveal>

        <div className="mt-10 border-t border-white/10">
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              className="grid gap-3 border-b border-white/10 py-8 md:grid-cols-[48px_1fr_1.4fr]"
            >
              <span className="font-brand text-sm text-[#777b83]">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-brand text-xl text-[#f1efe9]">{p.title}</h3>
                <p className="mt-0.5 text-sm text-[#c5a46d]">{p.subtitle}</p>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-[#a3a5aa]">{p.desc}</p>
                <p className="mt-2 text-xs text-[#777b83]">{p.stack}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Testimonials />
      </div>
    </div>
  )
}
