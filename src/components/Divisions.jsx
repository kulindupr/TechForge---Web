import { Link } from 'react-router-dom'
import { Code2, BarChart3, Lightbulb } from 'lucide-react'
import Reveal from './Reveal'
import digitalBg from '../assets/division-digital.webp'
import researchBg from '../assets/division-research.webp'
import innovationBg from '../assets/division-innovation.webp'

const divisions = [
  {
    title: 'Aelin Digital',
    desc: 'Websites, custom software and business systems — the digital transformation work that keeps a business running and growing.',
    cta: 'Explore Digital',
    href: '/digital',
    Icon: Code2,
    bg: digitalBg,
  },
  {
    title: 'Aelin Research',
    desc: 'Academic and research support — statistical analysis and data preparation, built for students and researchers who need it done right.',
    cta: 'Explore Research',
    href: '/research',
    Icon: BarChart3,
    bg: researchBg,
  },
  {
    title: 'Aelin Innovation',
    desc: 'AI-enabled features, SaaS products and applied research — the proprietary technology work that is still taking shape.',
    cta: 'Explore Innovation',
    href: '/innovation',
    Icon: Lightbulb,
    bg: innovationBg,
  },
]

export default function Divisions() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.1fr)] lg:gap-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FFC300]">
              Our Divisions
            </span>
            <span className="h-px flex-1 max-w-10 bg-[#FFC300]" aria-hidden="true" />
          </div>
          <h2 className="font-brand mt-4 text-3xl leading-tight text-[#f1efe9] md:text-4xl">
            Three Pillars.
            <br />
            One Vision.
          </h2>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-[#a3a5aa]">
            Aelin operates through three core divisions, bringing together expertise in
            technology, research and innovation.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-block border-b border-white/20 pb-0.5 text-sm font-medium text-[#f1efe9] transition hover:border-[#FFC300] hover:text-[#FFC300]"
          >
            Learn More →
          </Link>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-3">
          {divisions.map((d, i) => (
            <Reveal key={d.title} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-[#15181d]">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-95 transition-[opacity,filter] duration-300 group-hover:opacity-100"
                  style={{ backgroundImage: `url(${d.bg})`, filter: 'brightness(1.5) saturate(1.1)' }}
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, rgba(21,24,29,0.35) 0%, rgba(21,24,29,0.85) 65%, #15181d 100%)' }}
                />
                <div className="relative flex h-full flex-col justify-between p-6">
                  <div>
                    <d.Icon className="h-6 w-6 text-[#FFC300]" strokeWidth={1.75} aria-hidden="true" />
                    <h3 className="font-brand mt-5 text-lg text-[#f1efe9]">{d.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#a3a5aa]">{d.desc}</p>
                  </div>
                  <Link
                    to={d.href}
                    className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[#FFC300] transition group-hover:gap-2.5"
                  >
                    {d.cta} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
