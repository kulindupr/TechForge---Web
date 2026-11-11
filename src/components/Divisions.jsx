import { Link } from 'react-router-dom'
import { Code2, GraduationCap, ArrowRight, Check } from 'lucide-react'

const divisions = [
  {
    icon: Code2,
    iconBg: 'from-cyan-400 to-blue-500',
    title: 'Software & Digital Solutions',
    tag: 'Build. Automate. Grow.',
    tagColor: 'text-cyan-300',
    desc: 'Custom software, websites and business systems to take your business forward.',
    points: [
      'Web & Mobile App Development',
      'Business Management Systems',
      'E-Commerce Platforms',
      'IoT & Cloud Solutions',
    ],
    cta: 'Explore Solutions',
    href: '/solutions',
    border: 'border-cyan-400/20',
    ctaClass: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-[#06101f] glow-cyan',
  },
  {
    icon: GraduationCap,
    iconBg: 'from-purple-500 to-fuchsia-500',
    title: 'Academic & Research Support',
    tag: 'Research. Analyze. Achieve.',
    tagColor: 'text-fuchsia-300',
    desc: 'Professional support for your academic and research goals.',
    points: [
      'Research Guidance & Data Analysis',
      'IBM SPSS & Statistical Support',
      'Research Reports & Documentation',
      'Academic CV & More',
    ],
    cta: 'Explore Support',
    href: '/research-support',
    border: 'border-fuchsia-400/20',
    ctaClass: 'bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white glow-purple',
  },
]

export default function Divisions() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-14 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
          — Our Business Divisions —
        </span>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Comprehensive Solutions for Every Need
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {divisions.map((d) => (
          <div
            key={d.title}
            className={`rounded-2xl border ${d.border} bg-white/[0.03] p-7`}
          >
            <div className="flex items-start justify-between">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${d.iconBg} text-[#06101f]`}
              >
                <d.icon className="h-6 w-6" />
              </span>
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">{d.title}</h3>
            <p className={`mt-1 text-sm font-semibold ${d.tagColor}`}>{d.tag}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{d.desc}</p>

            <ul className="mt-5 space-y-2.5">
              {d.points.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-slate-200">
                  <Check className="h-4 w-4 flex-shrink-0 text-cyan-400" />
                  {p}
                </li>
              ))}
            </ul>

            {d.href.startsWith('/') ? (
              <Link
                to={d.href}
                className={`glass-btn mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold ${d.ctaClass}`}
              >
                {d.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <a
                href={d.href}
                className={`glass-btn mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold ${d.ctaClass}`}
              >
                {d.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
