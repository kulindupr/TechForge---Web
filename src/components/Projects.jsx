import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  ShoppingCart,
  CreditCard,
  HeartPulse,
  Newspaper,
  Layers,
} from 'lucide-react'

const projects = [
  {
    icon: ShoppingCart,
    gradient: 'from-cyan-500 to-blue-600',
    title: 'Leonara',
    subtitle: 'E-Commerce Platform',
    desc: 'Customized e-commerce platform with role-based access, product management, order handling and sales reporting.',
    tag: 'Full Stack',
    tagColor: 'bg-cyan-400/15 text-cyan-300 border-cyan-400/20',
    stack: ['ASP.NET Core', 'SQL Server', 'JavaScript'],
  },
  {
    icon: CreditCard,
    gradient: 'from-fuchsia-500 to-purple-600',
    title: 'Milan',
    subtitle: 'POS System for Food City',
    desc: 'Point-of-sale system for retail operations with billing, inventory management and real-time reporting.',
    tag: 'Full Stack',
    tagColor: 'bg-fuchsia-400/15 text-fuchsia-300 border-fuchsia-400/20',
    stack: ['React.js', 'Node.js', 'MongoDB'],
  },
  {
    icon: HeartPulse,
    gradient: 'from-orange-500 to-amber-600',
    title: 'EMR System',
    subtitle: 'Electronic Medical Records',
    desc: 'Digitizes patient data and automates clinical workflows to improve healthcare delivery efficiency.',
    tag: 'Enterprise',
    tagColor: 'bg-orange-400/15 text-orange-300 border-orange-400/20',
    stack: ['.NET Core', 'ASP.NET MVC', 'SQL Server'],
  },
  {
    icon: Newspaper,
    gradient: 'from-blue-500 to-indigo-600',
    title: 'NWN.lk',
    subtitle: 'News Content Management System',
    desc: "Full news publishing CMS built for NWN (nwn.lk), a Sri Lankan news platform, with rich-text authoring, scheduled publishing and role-based access.",
    tag: 'Full Stack',
    tagColor: 'bg-blue-400/15 text-blue-300 border-blue-400/20',
    stack: ['React', 'ASP.NET Core', 'Tailwind CSS'],
  },
  {
    icon: Layers,
    gradient: 'from-teal-500 to-cyan-600',
    title: 'NEXOS',
    subtitle: 'Multi-Tenant Enterprise Platform',
    desc: 'Enterprise SaaS kernel with multi-tenancy, RBAC and a unified data layer for future business modules.',
    tag: 'Enterprise',
    tagColor: 'bg-teal-400/15 text-teal-300 border-teal-400/20',
    stack: ['Node.js', 'Prisma', 'PostgreSQL'],
  },
]

const PAGE_SIZE = 3

export default function Projects() {
  const [page, setPage] = useState(0)
  const pageCount = Math.ceil(projects.length / PAGE_SIZE)
  const visible = projects.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  const prev = () => setPage((p) => (p - 1 + pageCount) % pageCount)
  const next = () => setPage((p) => (p + 1) % pageCount)

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Our Recent Projects</h2>
          <p className="mt-2 text-slate-400">Turning ideas into impactful solutions.</p>
        </div>
        <a
          href="https://kulindu24-portfolio.vercel.app/projects"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"
        >
          View All Projects
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous projects"
          className="hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300 sm:flex"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        <div className="grid flex-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
          <div
            key={p.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
          >
            <div className="flex items-center justify-between p-6 pb-0">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg ${p.gradient}`}
              >
                <p.icon className="h-6 w-6" />
              </span>
              <ArrowUpRight className="h-5 w-5 text-slate-600 transition group-hover:text-cyan-300" />
            </div>

            <div className="flex-1 p-6 pt-4">
              <span
                className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-semibold ${p.tagColor}`}
              >
                {p.tag}
              </span>
              <h3 className="mt-3 text-lg font-bold text-white">{p.title}</h3>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {p.subtitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.desc}</p>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-white/5 px-6 py-4">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-slate-400"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next projects"
          className="hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300 sm:flex"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {pageCount > 1 && (
        <div className="mt-8 flex items-center justify-center gap-4 sm:hidden">
          <button
            onClick={prev}
            aria-label="Previous projects"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-slate-300"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            aria-label="Next projects"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-slate-300"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}

      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: pageCount }).map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 rounded-full transition-all ${
              idx === page ? 'w-6 bg-cyan-400' : 'w-1.5 bg-white/20'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
