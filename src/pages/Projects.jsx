import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import heroBg from '../assets/hero-bg.webp'
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
                Our Projects
              </span>
              <h1 className="font-brand mt-4 max-w-xl text-3xl leading-tight text-[#f1efe9] md:text-5xl">
                Selected work
              </h1>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[#a3a5aa]">
                Projects delivered across Aelin Digital and Aelin Research — real systems,
                built and shipped for real clients.
              </p>
              <a
                href="https://kulindu24-portfolio.vercel.app/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-1.5 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-[#f1efe9] transition hover:border-[#FFC300] hover:text-[#FFC300]"
              >
                Full portfolio <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-20 pb-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 50}>
                <div className="h-full rounded-xl border border-white/10 bg-[#15181d] p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-white/10 bg-[#090a0c] font-brand text-sm text-[#FFC300]">
                      {p.title.charAt(0)}
                    </span>
                    <div>
                      <h3 className="font-brand text-lg text-[#f1efe9]">{p.title}</h3>
                      <p className="text-xs text-[#FFC300]">{p.subtitle}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[#a3a5aa]">{p.desc}</p>
                  <p className="mt-4 text-xs text-[#777b83]">{p.stack}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Testimonials showIntro={false} />
      <CTA />
    </div>
  )
}
