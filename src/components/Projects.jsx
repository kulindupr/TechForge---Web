import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { PROJECTS } from '../data/projects'

export default function Projects() {
  const visible = PROJECTS.slice(0, 3)

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-brand text-3xl text-[#f1efe9] md:text-4xl">Selected work</h2>
          <p className="mt-2 text-base text-[#a3a5aa]">A handful of recent projects across the divisions.</p>
        </div>
        <Link
          to="/projects"
          className="border-b border-white/20 pb-0.5 text-sm font-medium text-[#f1efe9] transition hover:border-[#c5a46d] hover:text-[#c5a46d]"
        >
          View all projects
        </Link>
      </Reveal>

      <div className="mt-10 border-t border-white/10">
        {visible.map((p, i) => (
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
    </section>
  )
}
