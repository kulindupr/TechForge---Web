import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { PROJECTS } from '../data/projects'
import showcaseBg from '../assets/projects-showcase.webp'

export default function Projects() {
  const visible = PROJECTS.slice(0, 4)

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-y bg-no-repeat"
      style={{
        borderColor: '#795e3a',
        backgroundImage: `url(${showcaseBg})`,
        backgroundSize: '50%',
        backgroundPosition: 'left center',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(9,10,12,0) 0%, rgba(9,10,12,0.5) 18%, rgba(9,10,12,0.9) 32%, #090a0c 42%)',
        }}
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-0 mx-auto hidden max-w-7xl px-6 lg:block" aria-hidden="true">
        {/* Vertical divider inside the empty column, touching the section's top/bottom lines, faded at the center */}
        <div
          className="absolute inset-y-0 left-[30%] w-px"
          style={{ background: 'linear-gradient(to bottom, #795e3a 0%, transparent 35%, transparent 65%, #795e3a 100%)' }}
        />
        {/* Vertical divider between the text column and the project list column */}
        <div className="absolute inset-y-0 left-[66%] w-px" style={{ backgroundColor: '#795e3a' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-6">
        <div className="relative grid gap-10 lg:grid-cols-3 lg:items-center lg:gap-10">
          {/* Empty column — lets the section background image show through clearly */}
          <div aria-hidden="true" className="hidden lg:block" />

          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FFC300]">
              Our Projects
            </span>
            <h2 className="font-brand mt-4 text-3xl leading-tight text-[#f1efe9] md:text-4xl">
              Ideas into
              <br />
              Impact.
            </h2>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-[#a3a5aa]">
              From business websites to enterprise platforms, our recent work across the
              divisions speaks for itself.
            </p>
            <Link
              to="/projects"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#FFC300] transition hover:gap-2.5"
            >
              View All Projects <span aria-hidden="true">→</span>
            </Link>
          </Reveal>

          <Reveal delay={150} className="flex h-full flex-col justify-center">
            <div className="divide-y divide-white/10">
              {visible.map((p) => (
                <div key={p.title} className="flex items-center gap-4 py-4 first:pt-0">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-white/10 bg-[#15181d] font-brand text-sm text-[#FFC300]">
                    {p.title.charAt(0)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-[#f1efe9]">{p.title}</p>
                    <p className="truncate text-xs text-[#a3a5aa]">{p.subtitle}</p>
                  </div>
                  <span aria-hidden="true" className="flex-shrink-0 text-[#777b83]">
                    →
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
