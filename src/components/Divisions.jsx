import { Link } from 'react-router-dom'
import Reveal from './Reveal'

const divisions = [
  {
    title: 'Aelin Research',
    tag: 'Research, statistics & data intelligence',
    desc: 'Academic and research support — statistical analysis, data preparation and analytical communication, built for students and researchers who need it done right.',
    cta: 'Explore Research',
    href: '/research-support',
  },
  {
    title: 'Aelin Digital',
    tag: 'Software, websites & business systems',
    desc: 'Websites, custom software, business systems and integrations — the digital transformation work that keeps a business running and growing.',
    cta: 'Explore Digital',
    href: '/solutions',
  },
  {
    title: 'Aelin Innovation',
    tag: 'AI, SaaS & emerging technology',
    desc: 'AI-enabled features, SaaS products and applied research — the proprietary technology work that is still taking shape.',
    cta: 'Get in touch',
    href: '#contact',
  },
]

export default function Divisions() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20">
      <Reveal className="max-w-2xl">
        <h2 className="font-brand text-3xl text-[#efece4] md:text-4xl">
          Three divisions, one standard
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[#9497a1]">
          Aelin Research, Aelin Digital and Aelin Innovation work to the same standard of
          precision, whatever the discipline.
        </p>
      </Reveal>

      <div className="mt-12 border-t border-[#24252b]">
        {divisions.map((d) => (
          <div
            key={d.title}
            className="grid gap-4 border-b border-[#24252b] py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]"
          >
            <div>
              <h3 className="font-brand text-2xl text-[#efece4]">{d.title}</h3>
              <p className="mt-1 text-sm text-[#b9922f]">{d.tag}</p>
            </div>
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
              <p className="max-w-xl text-base leading-relaxed text-[#9497a1]">{d.desc}</p>
              {d.href.startsWith('/') ? (
                <Link
                  to={d.href}
                  className="flex-shrink-0 border-b border-[#3a3b42] pb-0.5 text-sm font-medium text-[#efece4] transition hover:border-[#b9922f] hover:text-[#b9922f]"
                >
                  {d.cta}
                </Link>
              ) : (
                <a
                  href={d.href}
                  className="flex-shrink-0 border-b border-[#3a3b42] pb-0.5 text-sm font-medium text-[#efece4] transition hover:border-[#b9922f] hover:text-[#b9922f]"
                >
                  {d.cta}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
