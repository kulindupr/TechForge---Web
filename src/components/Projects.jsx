import { useState } from 'react'
import Reveal from './Reveal'

const projects = [
  {
    title: 'Leonara',
    subtitle: 'E-commerce platform',
    desc: 'Customized e-commerce platform with role-based access, product management, order handling and sales reporting.',
    stack: 'ASP.NET Core, SQL Server, JavaScript',
  },
  {
    title: 'Milan',
    subtitle: 'POS system for Food City',
    desc: 'Point-of-sale system for retail operations with billing, inventory management and real-time reporting.',
    stack: 'React.js, Node.js, MongoDB',
  },
  {
    title: 'EMR System',
    subtitle: 'Electronic medical records',
    desc: 'Digitizes patient data and automates clinical workflows to improve healthcare delivery efficiency.',
    stack: '.NET Core, ASP.NET MVC, SQL Server',
  },
  {
    title: 'NWN.lk',
    subtitle: 'News content management system',
    desc: 'Full news publishing CMS built for NWN, a Sri Lankan news platform, with rich-text authoring, scheduled publishing and role-based access.',
    stack: 'React, ASP.NET Core, Tailwind CSS',
  },
  {
    title: 'NEXOS',
    subtitle: 'Multi-tenant enterprise platform',
    desc: 'Enterprise SaaS kernel with multi-tenancy, RBAC and a unified data layer for future business modules.',
    stack: 'Node.js, Prisma, PostgreSQL',
  },
]

export default function Projects() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-brand text-3xl text-[#efece4] md:text-4xl">Selected work</h2>
          <p className="mt-2 text-base text-[#9497a1]">A handful of recent projects across the divisions.</p>
        </div>
        <a
          href="https://kulindu24-portfolio.vercel.app/projects"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-[#3a3b42] pb-0.5 text-sm font-medium text-[#efece4] transition hover:border-[#b9922f] hover:text-[#b9922f]"
        >
          Full portfolio
        </a>
      </Reveal>

      <div className="mt-10 border-t border-[#24252b]">
        {visible.map((p, i) => (
          <div
            key={p.title}
            className="grid gap-3 border-b border-[#24252b] py-8 md:grid-cols-[48px_1fr_1.4fr]"
          >
            <span className="font-brand text-sm text-[#6b6e76]">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3 className="font-brand text-xl text-[#efece4]">{p.title}</h3>
              <p className="mt-0.5 text-sm text-[#b9922f]">{p.subtitle}</p>
            </div>
            <div>
              <p className="text-sm leading-relaxed text-[#9497a1]">{p.desc}</p>
              <p className="mt-2 text-xs text-[#6b6e76]">{p.stack}</p>
            </div>
          </div>
        ))}
      </div>

      {!expanded && projects.length > 3 && (
        <button
          onClick={() => setExpanded(true)}
          className="mt-6 border-b border-[#3a3b42] pb-0.5 text-sm font-medium text-[#efece4] transition hover:border-[#b9922f] hover:text-[#b9922f]"
        >
          Show more projects
        </button>
      )}
    </section>
  )
}
